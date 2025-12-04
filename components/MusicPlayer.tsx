import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause, Volume2, VolumeX } from 'lucide-react';
import { BACKGROUND_MUSIC_URL } from '../constants';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.error("Audio playback failed:", e);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40">
      <audio ref={audioRef} src={BACKGROUND_MUSIC_URL} loop />
      
      <button
        onClick={togglePlay}
        className={`group flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm border border-white/10 ${
          isPlaying 
            ? 'bg-gold-500/90 text-white ring-2 ring-gold-300/50' 
            : 'bg-black/40 text-stone-300 hover:bg-black/60 hover:text-white'
        }`}
        aria-label={isPlaying ? "음악 일시정지" : "배경음악 재생"}
        title={isPlaying ? "음악 끄기" : "음악 켜기"}
      >
        {isPlaying ? (
          <div className="flex gap-0.5 items-end h-4">
             <span className="w-1 bg-white animate-[pulse_1s_ease-in-out_infinite] h-2"></span>
             <span className="w-1 bg-white animate-[pulse_1.2s_ease-in-out_infinite_0.1s] h-4"></span>
             <span className="w-1 bg-white animate-[pulse_0.8s_ease-in-out_infinite_0.2s] h-3"></span>
          </div>
        ) : (
          <Music className="w-5 h-5 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};