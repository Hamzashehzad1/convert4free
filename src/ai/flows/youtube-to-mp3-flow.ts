'use server';
/**
 * @fileOverview A flow for converting YouTube videos to MP3 format using ytdl-core and ffmpeg.
 *
 * - convertYoutubeToMp3 - A function that handles the video to audio conversion.
 * - ConvertYoutubeToMp3Input - The input type for the convertYoutubeToMp3 function.
 * - ConvertYoutubeToMp3Output - The return type for the convertYoutubeToMp3 function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import { PassThrough } from 'stream';

ffmpeg.setFfmpegPath(ffmpegStatic as string);

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
      const videoInfo = await ytdl.getInfo(input.youtubeUrl);
      const audioFormat = ytdl.chooseFormat(videoInfo.formats, { quality: 'highestaudio' });

      if (!audioFormat) {
        throw new Error('No suitable audio format found.');
      }
      
      const audioStream = ytdl(input.youtubeUrl, { format: audioFormat });
      const chunks: any[] = [];
      const passThrough = new PassThrough();
      
      const conversionPromise = new Promise<string>((resolve, reject) => {
          const converter = ffmpeg(audioStream)
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
        title: videoInfo.videoDetails.title,
        thumbnail: videoInfo.videoDetails.thumbnails[0].url,
        duration: new Date(parseInt(videoInfo.videoDetails.lengthSeconds) * 1000).toISOString().substr(11, 8),
        audioDataUri: audioDataUri,
      };

    } catch (error: any) {
      console.error('Error in convertYoutubeToMp3Flow:', error);
      throw new Error(`Failed to process video: ${error.message}`);
    }
  }
);
