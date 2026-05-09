"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Music4 } from "lucide-react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export default function AudioPlayer({ playSignal }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-audio", {
        height: "0",
        width: "0",
        videoId: weddingData.youtubeId,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: weddingData.youtubeId,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(40);
            setIsReady(true);
          },
          onStateChange: (event) => {
            // Re-sync state if needed
            if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
            if (event.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
          }
        },
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (playSignal && isReady && playerRef.current) {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  }, [playSignal, isReady]);

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div id="youtube-audio" className="hidden"></div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="glass-panel w-14 h-14 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-300 transition-colors shadow-2xl"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <Music size={24} />
          </motion.div>
        ) : (
          <Music4 size={24} />
        )}
      </motion.button>
    </div>
  );
}
