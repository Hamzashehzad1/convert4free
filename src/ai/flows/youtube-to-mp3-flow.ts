'use server';
/**
 * @fileOverview A flow for converting YouTube videos to MP3 format using play-dl and ffmpeg.
 *
 * - convertYoutubeToMp3 - A function that handles the video to audio conversion.
 * - ConvertYoutubeToMp3Input - The input type for the convertYoutubeToMp3 function.
 * - ConvertYoutubeToMp3Output - The return type for the convertYoutubeToMp3 function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { stream as playdlStream, video_basic_info } from 'play-dl';
import ffmpeg from 'fluent-ffmpeg';
import { PassThrough } from 'stream';

const ConvertYoutubeToMp3InputSchema = z.object({
  youtubeUrl: z.string().url().describe('The URL of the YouTube video.'),
  quality: z.enum(['320', '128']).default('320').describe('The desired audio quality in kbps.'),
});
export type ConvertYoutubeToMp3Input = z.infer<typeof ConvertYoutubeToMp3InputSchema>;

const ConvertYoutubeToMp3OutputSchema = z.object({
  title: z.string().describe('The title of the video.'),
  thumbnail: z.string().url().describe('The URL of the video thumbnail.'),
  duration: z.string().describe('The duration of the video.'),
  audioDataUri: z.string().describe('The Base64 encoded MP3 file as a data URI.'),
});
export type ConvertYoutubeToMp3Output = z.infer<typeof ConvertYoutubeToMp3OutputSchema>;

export async function convertYoutubeToMp3(input: ConvertYoutubeToMp3Input): Promise<ConvertYoutubeToMp3Output> {
  return convertYoutubeToMp3Flow(input);
}

const convertYoutubeToMp3Flow = ai.defineFlow(
  {
    name: 'convertYoutubeToMp3Flow',
    inputSchema: ConvertYoutubeToMp3InputSchema,
    outputSchema: ConvertYoutubeToMp3OutputSchema,
  },
  async (input) => {
    try {
      const videoInfo = await video_basic_info(input.youtubeUrl);
      const stream = await playdlStream(input.youtubeUrl, {
        quality: 2, // 0-lowest, 1-low, 2-high
      });

      const chunks: any[] = [];
      const passThrough = new PassThrough();

      const conversionPromise = new Promise<string>((resolve, reject) => {
        const converter = ffmpeg(stream.stream)
          .audioBitrate(parseInt(input.quality))
          .toFormat('mp3')
          .on('error', (err) => reject(new Error(`FFmpeg error: ${err.message}`)))
          .on('end', () => {
            const buffer = Buffer.concat(chunks);
            const dataUri = `data:audio/mp3;base64,${buffer.toString('base64')}`;
            resolve(dataUri);
          });

        converter.pipe(passThrough);

        passThrough.on('data', (chunk) => {
          chunks.push(chunk);
        });
      });

      const audioDataUri = await conversionPromise;
      
      return {
        title: videoInfo.video_details.title || 'Untitled',
        thumbnail: videoInfo.video_details.thumbnails[0].url,
        duration: videoInfo.video_details.durationRaw,
        audioDataUri: audioDataUri,
      };

    } catch (error: any) {
      console.error('Error in convertYoutubeToMp3Flow:', error);
      throw new Error(`Failed to process video: ${error.message}`);
    }
  }
);
