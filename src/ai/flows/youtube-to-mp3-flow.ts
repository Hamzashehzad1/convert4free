'use server';
/**
 * @fileOverview A flow to convert a YouTube video to an MP3 audio file.
 *
 * - convertYoutubeToMp3 - A function that handles the YouTube to MP3 conversion.
 * - ConvertYoutubeToMp3Input - The input type for the convertYoutubeToMp3 function.
 * - ConvertYoutubeToMp3Output - The return type for the convertYoutubeToMp3 function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import { PassThrough } from 'stream';

const ConvertYoutubeToMp3InputSchema = z.object({
  youtubeUrl: z.string().url().describe('The URL of the YouTube video to convert.'),
  highQuality: z.boolean().default(true).describe('Whether to download in high quality (320kbps) or standard (128kbps).'),
});
export type ConvertYoutubeToMp3Input = z.infer<typeof ConvertYoutubeToMp3InputSchema>;

const ConvertYoutubeToMp3OutputSchema = z.object({
  audioDataUri: z.string().describe("The resulting MP3 audio file as a data URI. Expected format: 'data:audio/mpeg;base64,<encoded_data>'."),
  videoDetails: z.object({
    title: z.string(),
    author: z.string(),
    thumbnailUrl: z.string().optional(),
  }),
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
      const audioFormat = ytdl.chooseFormat(videoInfo.formats, { 
        quality: 'highestaudio',
        filter: 'audioonly' 
      });

      if (!audioFormat) {
        throw new Error("No suitable audio format found for the given YouTube video.");
      }
      
      const audioStream = ytdl(input.youtubeUrl, { format: audioFormat });
      const passthrough = new PassThrough();
      
      const chunks: Buffer[] = [];
      passthrough.on('data', chunk => chunks.push(chunk));

      const conversionPromise = new Promise<Buffer>((resolve, reject) => {
        passthrough.on('end', () => resolve(Buffer.concat(chunks)));
        passthrough.on('error', reject);

        const ffmpegCommand = ffmpeg(audioStream)
          .audioBitrate(input.highQuality ? 320 : 128)
          .toFormat('mp3')
          .on('error', (err) => {
            reject(new Error(`FFMPEG error: ${err.message}`));
          });

        ffmpegCommand.pipe(passthrough, { end: true });
      });

      const audioBuffer = await conversionPromise;

      const thumbnails = videoInfo.videoDetails.thumbnails;
      const thumbnailUrl = thumbnails && thumbnails.length > 0 ? thumbnails[thumbnails.length - 1].url : undefined;

      return {
        audioDataUri: `data:audio/mpeg;base64,${audioBuffer.toString('base64')}`,
        videoDetails: {
          title: videoInfo.videoDetails.title,
          author: videoInfo.videoDetails.author.name,
          thumbnailUrl,
        }
      };
    } catch (error: any) {
      console.error("Error in conversion flow:", error);
      throw new Error(`Failed to convert video: ${error.message}`);
    }
  }
);
