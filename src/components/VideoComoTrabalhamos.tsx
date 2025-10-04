import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const VideoComoTrabalhamos = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            video.play();
            setIsPlaying(true);
          } else if (!entry.isIntersecting && isPlaying) {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [hasPlayed, isPlaying]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
      
      if (!hasPlayed) {
        setHasPlayed(true);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'howwework_play' });
      }
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-domous group">
      <video
        ref={videoRef}
        className="w-full h-auto"
        muted
        loop
        playsInline
        poster="/video-poster.jpg"
        preload="none"
      >
        <source src="/como-trabalhamos.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Play/Pause Overlay */}
      <button
        onClick={handlePlayPause}
        className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
      >
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
          {isPlaying ? (
            <Pause className="w-8 h-8 text-primary" />
          ) : (
            <Play className="w-8 h-8 text-primary ml-1" />
          )}
        </div>
      </button>

      {/* Label */}
      <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 rounded-lg backdrop-blur-sm">
        <p className="text-white text-sm font-semibold">Como trabalhamos (90s)</p>
      </div>
    </div>
  );
};

export default VideoComoTrabalhamos;
