"use client";

import { useState, useEffect, useRef } from "react";
import { weddingData } from "@/data/weddingData";

export default function AudioPlayer({ playSignal }) {
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }

    const initPlayer = () => {
      if (playerRef.current) return;
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
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      // Don't destroy if we want it to keep playing, 
      // but usually we should cleanup if the component unmounts.
      // However, this component stays mounted in page.js.
    };
  }, []);

  useEffect(() => {
    if (playSignal && isReady && playerRef.current && playerRef.current.playVideo) {
      playerRef.current.playVideo();
    }
  }, [playSignal, isReady]);

  return (
    <div className="hidden" aria-hidden="true">
      <div id="youtube-audio"></div>
    </div>
  );
}
