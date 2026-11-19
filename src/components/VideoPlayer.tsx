"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  onEnded?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  title,
  autoPlay = false,
  loop = false,
  muted = false,
  className = "",
  onEnded,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setHasError(false);
    };
    const handleWaiting = () => setIsBuffering(true);
    const handlePlaying = () => {
      setIsBuffering(false);
      setIsPlaying(true);
    };
    const handlePause = () => setIsPlaying(false);
    const handleEnd = () => {
      setIsPlaying(false);
      if (onEnded) onEnded();
    };
    const handleError = () => {
      console.warn("Video playback fallback triggered for:", src);
      setHasError(true);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnd);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnd);
      video.removeEventListener("error", handleError);
    };
  }, [src, onEnded]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {
        // Autoplay policy fallback
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => setHasError(true));
      });
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const time = parseFloat(e.target.value);
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen().catch((err) => console.error(err));
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const showControlsTemporarily = () => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setControlsVisible(false);
    }, 3000);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={showControlsTemporarily}
      onMouseEnter={() => setControlsVisible(true)}
      className={`relative group bg-black overflow-hidden select-none flex items-center justify-center ${className}`}
    >
      {!hasError ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          loop={loop}
          muted={muted}
          onClick={togglePlay}
          className="w-full h-full object-cover cursor-pointer"
        />
      ) : (
        /* Cinematic Visual Placeholder when video source is unreachable */
        <div 
          onClick={togglePlay}
          className="w-full h-full relative cursor-pointer flex flex-col items-center justify-center bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#000000] p-6 text-center"
        >
          {poster && (
            <img 
              src={poster} 
              alt={title || "Cinematic video placeholder"} 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
          )}
          <div className="relative z-10 max-w-md flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-[#333333] bg-[#0A0A0A]/90 flex items-center justify-center text-white mb-4 shadow-2xl backdrop-blur-sm">
              <Play className="w-6 h-6 ml-1 fill-white" />
            </div>
            <p className="text-xs uppercase tracking-widest text-[#86868B] mb-1">
              Cinematic Preview
            </p>
            <h4 className="text-sm font-medium text-[#F5F5F7] tracking-tight">
              {title || "Selected Editorial Cut"}
            </h4>
          </div>
        </div>
      )}

      {/* Center big play button overlay when paused */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-black/80 hover:border-white/40 backdrop-blur-md z-20"
        >
          <Play className="w-7 h-7 md:w-8 md:h-8 ml-1 fill-white text-white" />
        </button>
      )}

      {/* Buffering indicator */}
      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 pointer-events-none">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Bottom video controls bar */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-6 transition-opacity duration-300 z-20 flex flex-col gap-2 ${
          controlsVisible || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Progress seek bar */}
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            aria-label="Timeline scrubber"
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white hover:h-1.5 transition-all"
          />
        </div>

        <div className="flex items-center justify-between text-xs text-[#86868B]">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="text-white hover:text-white/80 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-white" />
              ) : (
                <Play className="w-4 h-4 fill-white" />
              )}
            </button>

            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
              className="text-[#86868B] hover:text-white transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <span className="font-mono text-[11px] text-[#86868B]">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {title && (
              <span className="hidden sm:inline-block text-[11px] text-[#86868B] truncate max-w-[200px]">
                {title}
              </span>
            )}
            <button
              onClick={handleFullscreen}
              aria-label="Toggle Fullscreen"
              className="text-[#86868B] hover:text-white transition-colors"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
