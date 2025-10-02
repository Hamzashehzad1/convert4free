"use client";

import { useState, type FormEvent, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Download, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Status = 'idle' | 'converting' | 'success' | 'error';

export function Converter() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [isHighQuality, setIsHighQuality] = useState(true);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const isButtonDisabled = status === 'converting' || url.trim() === '';

  const validateUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      return (
        (parsedUrl.hostname === 'www.youtube.com' && parsedUrl.pathname === '/watch' && parsedUrl.searchParams.has('v')) ||
        parsedUrl.hostname === 'youtu.be'
      );
    } catch (e) {
      return false;
    }
  };
  
  const reset = () => {
    setStatus('idle');
    setError(null);
    setProgress(0);
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
  }

  useEffect(() => {
    return () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    reset();

    if (!validateUrl(url)) {
      setStatus('error');
      setError('Invalid Link. Please check the URL and try again. It must be a youtube.com/watch or youtu.be link.');
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube video URL.",
        variant: "destructive",
      });
      return;
    }
    
    setStatus('converting');
    
    const startTime = Date.now();
    const duration = 60 * 1000; // 60 seconds

    intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const newProgress = Math.min(100, (elapsedTime / duration) * 100);
        setProgress(newProgress);

        if (newProgress >= 100) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            setStatus('error');
            setError('This is a demo. The video cannot be downloaded.');
        }
    }, 100);
  };

  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-12 text-center sm:py-20">
      <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
        The Fastest Free <span className="text-primary">YouTube to MP3</span> Converter Online
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        Instantly download music from youtube to mp3. Our <b className="text-foreground">free converter youtube mp3</b> is fast, secure, and supports HD audio. No registration required.
      </p>

      <Card className="mx-auto mt-8 w-full max-w-2xl border-primary/20 bg-card/80 shadow-lg shadow-primary/10 transition-shadow hover:shadow-primary/20">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="youtube-url" className="sr-only">YouTube URL</Label>
              <Input
                id="youtube-url"
                type="text"
                placeholder="Paste your YouTube video link here... (Supports all resolutions)"
                value={url}
                onChange={(e) => {
                    setUrl(e.target.value);
                    if (status !== 'idle' && status !== 'converting') {
                        reset();
                    }
                }}
                required
                className="h-14 text-base"
                aria-label="YouTube video URL"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-2">
                <Switch 
                    id="quality-switch" 
                    checked={isHighQuality} 
                    onCheckedChange={setIsHighQuality}
                    aria-label="Toggle high quality"
                    disabled={true}
                />
                <Label htmlFor="quality-switch" className="flex items-center gap-2 text-muted-foreground">
                    High Quality <span className="rounded-md bg-accent px-1.5 py-0.5 text-xs font-semibold text-accent-foreground">HD</span>
                </Label>
              </div>
              <Button 
                type="submit" 
                className="h-14 w-full flex-1 bg-gradient-to-r from-accent to-green-400 text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 active:scale-100 sm:w-auto"
                disabled={isButtonDisabled}
              >
                {status === 'converting' ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
                {status === 'converting' ? 'Converting...' : 'Convert to MP3 Now (Free)'}
              </Button>
            </div>
          </form>

          {status !== 'idle' && (
            <div className="mt-6 w-full space-y-4 text-left">
                {status === 'converting' && (
                  <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-primary/50 bg-primary/10 p-4">
                    <div className="flex w-full flex-col items-center gap-2 text-center">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="font-bold text-primary">Conversion in progress...</p>
                        <p className="text-sm text-muted-foreground">Please wait while we prepare your file. This may take up to a minute.</p>
                    </div>
                    <Progress value={progress} className="w-full" />
                    <Button className="h-12 w-full bg-accent text-base font-bold text-accent-foreground sm:w-auto sm:px-10" disabled>
                        <Download className="mr-2 h-5 w-5" />
                        Download MP3
                    </Button>
                  </div>
                )}
                {status === 'error' && error && (
                    <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        <p>{error}</p>
                    </div>
                )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
