'use server';
/**
 * @fileOverview A flow for converting YouTube videos to MP3 format using play-dl.
 *
 * - convertYoutubeToMp3 - A function that handles the video to audio conversion.
 * - ConvertYoutubeToMp3Input - The input type for the convertYoutubeToMp3 function.
 * - ConvertYoutubeToMp3Output - The return type for the convertYoutubeToMp3 function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import play from 'play-dl';
import ffmpeg from 'fluent-ffmpeg';
import { PassThrough } from 'stream';

const ConvertYoutubeToMp3InputSchema = z.object({
  youtubeUrl: z.string().url().describe('The URL of the YouTube video.'),
});
export type ConvertYoutubeToMp3Input = z.infer<typeof ConvertYoutubeToMp3InputSchema>;

const ConvertYoutubeToMp3OutputSchema = z.object({
  title: z.string().describe('The title of the video.'),
  thumbnail: z.string().url().describe('The URL of the video thumbnail.'),
  duration: z.number().describe('The duration of the video in seconds.'),
  dataUri: z.string().describe('The direct data URI to download the MP3 file.'),
  size: z.string().describe('The size of the MP3 file.'),
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
      const videoInfo = await play.video_info(input.youtubeUrl);
      const title = videoInfo.video_details.title || 'audio';
      const thumbnail = videoInfo.video_details.thumbnails[0]?.url;
      const duration = videoInfo.video_details.durationInSec;

      const stream = await play.stream(input.youtubeUrl, {
        quality: 1, // 0: low, 1: medium, 2: high
      });

      const passThrough = new PassThrough();
      const chunks: Buffer[] = [];
      
      const conversionPromise = new Promise<Buffer>((resolve, reject) => {
        ffmpeg(stream.stream)
          .audioBitrate(128)
          .toFormat('mp3')
          .on('error', (err) => {
            console.error('ffmpeg error:', err);
            reject(new Error(`ffmpeg error: ${err.message}`));
          })
          .stream(passThrough);

        passThrough.on('data', (chunk) => {
          chunks.push(chunk as Buffer);
        });

        passThrough.on('end', () => {
          resolve(Buffer.concat(chunks));
        });

        passThrough.on('error', (err) => {
            console.error('Stream error:', err);
            reject(new Error(`Stream error: ${err.message}`));
        });
      });

      const audioBuffer = await conversionPromise;

      const dataUri = `data:audio/mp3;base64,${audioBuffer.toString('base64')}`;
      const fileSize = (audioBuffer.length / (1024 * 1024)).toFixed(2) + ' MB';

      return {
        title: title,
        thumbnail: thumbnail || 'https://placehold.co/120x90',
        duration: duration,
        dataUri: dataUri,
        size: fileSize,
      };

    } catch (error: any) {
      console.error('Error in convertYoutubeToMp3Flow:', error);
      throw new Error(`Failed to process video: ${error.message}`);
    }
  }
);
