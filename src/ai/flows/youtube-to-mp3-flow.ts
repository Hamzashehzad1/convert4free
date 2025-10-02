'use server';
/**
 * @fileOverview A flow for converting YouTube videos to MP3 format.
 *
 * - convertYoutubeToMp3 - A function that handles the video to audio conversion.
 * - ConvertYoutubeToMp3Input - The input type for the convertYoutubeToMp3 function.
 * - ConvertYoutubeToMp3Output - The return type for the convertYoutubeToMp3 function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import ytdl from 'ytdl-core-discord';
import ffmpeg from 'fluent-ffmpeg';
import { PassThrough } from 'stream';

const ConvertYoutubeToMp3InputSchema = z.object({
  youtubeUrl: z.string().url().describe('The URL of the YouTube video.'),
  quality: z.enum(['128', '320']).default('320').describe('The desired audio quality in kbps.'),
});
export type ConvertYoutubeToMp3Input = z.infer<typeof ConvertYoutubeToMp3InputSchema>;

const ConvertYoutubeToMp3OutputSchema = z.object({
  title: z.string().describe('The title of the video.'),
  author: z.string().describe('The author of the video.'),
  thumbnailUrl: z.string().url().optional().describe('The URL of the video thumbnail.'),
  summary: z.string().optional().describe('A summary of the video content.'),
  audioDataUri: z.string().describe('The converted audio file as a Base64 encoded data URI.'),
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
      const { title, author, thumbnails } = videoInfo.videoDetails;

      const audioStream = await ytdl(input.youtubeUrl, { 
        quality: 'highestaudio',
        filter: 'audioonly'
      });

      const passthrough = new PassThrough();
      
      const chunks: Buffer[] = [];
      passthrough.on('data', (chunk) => {
        chunks.push(chunk);
      });

      const conversionPromise = new Promise<string>((resolve, reject) => {
        passthrough.on('end', () => {
          const audioBuffer = Buffer.concat(chunks);
          const audioDataUri = `data:audio/mp3;base64,${audioBuffer.toString('base64')}`;
          resolve(audioDataUri);
        });

        ffmpeg(audioStream)
            .audioBitrate(parseInt(input.quality, 10))
            .format('mp3')
            .on('error', (err) => reject(new Error(`FFMPEG error: ${err.message}`)))
            .pipe(passthrough, { end: true });
      });

      const audioDataUri = await conversionPromise;

      const summaryResponse = await ai.generate({
        prompt: `Create a very short, one-sentence summary for a video titled "${title}".`,
      });
      const summary = summaryResponse.text;

      return {
        title,
        author: author.name,
        thumbnailUrl: thumbnails?.[thumbnails.length - 1]?.url,
        summary,
        audioDataUri,
      };
    } catch (error: any) {
      console.error('Error in convertYoutubeToMp3Flow:', error);
      throw new Error(`Failed to convert video: ${error.message}`);
    }
  }
);
