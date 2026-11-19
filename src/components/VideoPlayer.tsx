"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, AlertCircle } from "lucide-react";

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

export function parseVideoSource(url: string) {
  if (!url) return { type: "unknown" as const, url: "" };

  const cleanUrl = url.trim();

  // YouTube detection
  const ytMatch = cleanUrl.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  if (ytMatch && ytMatch[1]) {
    return {
      type: "youtube" as const,
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1`,
      videoId: ytMatch[1],
    };
  }

  // Vimeo detection
  const vimeoMatch = cleanUrl.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: "vimeo" as const,
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0`,
      videoId: vimeoMatch[1],
    };
  }

  // Google Drive file detection
  const driveMatch = cleanUrl.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/);
  if (driveMatch && driveMatch[1]) {
    return {
      type: "drive" as const,
      embedUrl: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
      fileId: driveMatch[1],
    };
  }

  return { type: "direct" as const, url: cleanUrl };
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
  const parsed = parseVideoSource(src);

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

  // If this is an iframe embed (YouTube, Vimeo, Google Drive), render the embed directly
  if (parsed.type === "youtube" || parsed.type === "vimeo" || parsed.type === "drive") {
    return (
      <div className={`relative w-full h-full bg-black flex items-center justify-center ${className}`}>
        <iframe
          src={parsed.embedUrl}
          title={title || "Video Player"}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  // Otherwise, handle as HTML5 direct video (mp4, webm)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setHasError(false);

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
    const handleError = (e: any) => {
      console.warn("Direct HTML5 video error:", e);
      setHasError(true);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnd);
    video.addEventListener("error", handleError);

    // If autoPlay is requested, handle browser audio policies safely
    if (autoPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser prevented unmuted autoplay: mute and retry
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {
            setIsPlaying(false);
          });
        });
      }
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnd);
      video.removeEventListener("error", handleError);
    };
  }, [src, autoPlay, onEnded]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            video.muted = true;
            setIsMuted(true);
            video.play().then(() => setIsPlaying(true));
          });
      }
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
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        loop={loop}
        muted={isMuted}
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Fallback notification banner if source cannot be reached */}
      {hasError && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/85 p-6 text-center">
          <AlertCircle className="w-8 h-8 text-[#86868B] mb-2" />
          <p className="text-sm font-medium text-white mb-1">
            Video Source Inaccessible
          </p>
          <p className="text-xs text-[#86868B] max-w-sm mb-4">
            The video URL returned a network restriction (CORS / 403). Replace it in{" "}
            <code className="text-white bg-[#222] px-1 py-0.5 rounded">
              portfolioData.ts
            </code>{" "}
            with a YouTube, Vimeo, or direct MP4 link.
          </p>
          {poster && (
            <img
              src={poster}
              alt="Preview"
              className="w-48 h-28 object-cover rounded-lg opacity-40 border border-white/10"
            />
          )}
        </div>
      )}

      {/* Center play button overlay when paused */}
      {!isPlaying && !hasError && (
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
              className="text-[#86868B] hover:text-white transition-colors flex items-center gap-1.5"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-red-400" />
                  <span className="text-[10px] text-red-400 hidden sm:inline">Muted</span>
                </>
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
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
