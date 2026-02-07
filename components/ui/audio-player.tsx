"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, RotateCcw, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export function AudioPlayer({ src, title = "Audio" }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      // Only update state if not currently dragging the slider
      if (!isDragging && audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => setIsPlaying(false);

    // Load metadata immediately
    audio.load();
    
    // Try to get duration if already loaded
    if (audio.duration && !isNaN(audio.duration)) {
      setDuration(audio.duration);
    }

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("canplay", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("canplay", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isDragging]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 15, duration);
  };

  const skipBackward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0);
  };

  const handleSeekStart = () => {
    setIsDragging(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  const handleSeekEnd = (e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
    setIsDragging(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full border-2 border-border/60 rounded-xl p-5 bg-card/50 backdrop-blur-sm my-6 group">
      <audio ref={audioRef} src={src} preload="metadata" />
      
      <div className="flex flex-col gap-4">
        {/* Top Row: Title and Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium text-foreground tracking-tight">
              {title}
            </span>
          </div>
          <span className="text-xs font-mono text-muted-foreground tabular-nums opacity-80">
             {formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : "--:--"}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-6 group/slider flex items-center">
           <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={currentTime}
            onMouseDown={handleSeekStart}
            onTouchStart={handleSeekStart}
            onChange={handleSeek}
            onMouseUp={handleSeekEnd}
            onTouchEnd={handleSeekEnd}
            className="absolute z-20 w-full h-full opacity-0 cursor-pointer"
          />
          
          {/* Visual Track Background */}
          <div className="absolute top-1/2 left-0 w-full h-1.5 -translate-y-1/2 bg-muted/50 rounded-full overflow-hidden">
             {/* Progress Fill */}
             <div 
               className="h-full bg-primary transition-all duration-100 ease-out"
               style={{ width: `${progressPercentage}%` }}
             />
          </div>

          {/* Thumb Indicator (visible on hover or play) */}
          <div 
             className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 bg-background border-2 border-primary rounded-full shadow-md transition-all duration-150 ease-out pointer-events-none group-hover/slider:scale-125"
             style={{ left: `${progressPercentage}%`, marginLeft: `-${(progressPercentage / 100) * 14}px` }} 
          />
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               {/* Skip Back */}
               <button
                  onClick={skipBackward}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Rewind 15 seconds"
               >
                 <RotateCcw className="h-4 w-4" />
               </button>

               {/* Play/Pause */}
               <button
                onClick={togglePlay}
                className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all shadow-md active:scale-95"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" fill="currentColor" />
                ) : (
                  <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                )}
              </button>

               {/* Skip Forward */}
               <button
                  onClick={skipForward}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Skip forward 15 seconds"
               >
                 <RotateCw className="h-4 w-4" />
               </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2 group/volume">
               <button
                onClick={toggleMute}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
              
              <div className="w-0 overflow-hidden group-hover/volume:w-20 transition-all duration-300 ease-out flex items-center">
                 <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1.5 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${(isMuted ? 0 : volume) * 100}%, hsl(var(--muted)) ${(isMuted ? 0 : volume) * 100}%, hsl(var(--muted)) 100%)`
                  }}
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
