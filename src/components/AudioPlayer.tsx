import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { loveStoryConfig } from '../config/loveStoryConfig';

interface AudioPlayerProps {
  autoStartRequested?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoStartRequested }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);

  // Fallback procedural Web Audio synth for ambient romantic chords if audio file fails or is blocked
  const startSynthAmbient = () => {
    try {
      if (!synthCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        synthCtxRef.current = new AudioCtx();
      }

      const ctx = synthCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Romantic chord notes (F#m7, C#m7, Dmaj7, A)
      const chords = [
        [185.00, 220.00, 277.18, 370.00], // F#m7
        [138.59, 164.81, 246.94, 329.63], // C#m7
        [146.83, 185.00, 220.00, 293.66], // Dmaj7
        [220.00, 277.18, 329.63, 440.00]  // A
      ];

      let chordIndex = 0;

      const playChordIndex = () => {
        const chord = chords[chordIndex % chords.length];
        chordIndex++;

        chord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Soft swell envelope
          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 2);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 6);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 6.5);
        });
      };

      playChordIndex();
      synthIntervalRef.current = window.setInterval(playChordIndex, 6000);
    } catch {
      console.log('Synth audio unavailable');
    }
  };

  const stopSynthAmbient = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (synthCtxRef.current && synthCtxRef.current.state === 'running') {
      synthCtxRef.current.suspend();
    }
  };

  useEffect(() => {
    audioRef.current = new Audio(loveStoryConfig.audio.ambientMusicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthAmbient();
    };
  }, []);

  useEffect(() => {
    if (autoStartRequested && !isPlaying) {
      togglePlay(true);
    }
  }, [autoStartRequested]);

  const togglePlay = async (forcePlay?: boolean) => {
    const shouldPlay = forcePlay !== undefined ? forcePlay : !isPlaying;

    if (shouldPlay) {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setIsMuted(false);
        } catch {
          // If HTML5 audio fail, use synth audio
          startSynthAmbient();
          setIsPlaying(true);
          setIsMuted(false);
        }
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthAmbient();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!isPlaying) {
      togglePlay(true);
      return;
    }

    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed top-5 right-5 z-[999] flex items-center gap-3">
      {/* Equalizer animation when playing */}
      {isPlaying && !isMuted && (
        <div className="hidden sm:flex items-center gap-[3px] px-3 py-1.5 rounded-full glass-pill text-xs text-rose-soft/80 border border-rose-glow/20">
          <Music className="w-3 h-3 text-rose-glow animate-pulse" />
          <span className="text-[11px] tracking-wider uppercase font-medium">Ambient Music</span>
          <div className="flex items-end gap-[2px] h-3 ml-1">
            <span className="w-[2px] bg-rose-glow h-full animate-[bounce_1s_infinite_100ms]" />
            <span className="w-[2px] bg-rose-glow h-3/4 animate-[bounce_1s_infinite_300ms]" />
            <span className="w-[2px] bg-rose-glow h-1/2 animate-[bounce_1s_infinite_200ms]" />
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleMute}
        aria-label={isPlaying && !isMuted ? "Mute ambient music" : "Unmute ambient music"}
        className="group relative p-3 rounded-full glass-panel border border-rose-glow/30 text-rose-soft hover:text-white hover:border-rose-glow/60 transition-all duration-300 shadow-[0_0_20px_rgba(255,117,151,0.2)] hover:shadow-[0_0_30px_rgba(255,117,151,0.5)] active:scale-95 cursor-pointer"
      >
        {isPlaying && !isMuted ? (
          <Volume2 className="w-5 h-5 text-rose-glow group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <VolumeX className="w-5 h-5 text-rose-soft/60 group-hover:scale-110 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
};
