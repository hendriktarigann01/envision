"use client";

import { useEffect, useRef } from "react";

export default function HeroVideoBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let targetTime = 0.5;
    let currentTime = 0.5;
    let opacity = 1;
    let frameId: number;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const h = window.innerHeight;

      if (scrollY <= 0) {
        targetTime = 0.5;
      } else if (scrollY < h) {
        targetTime = 0.5 + (scrollY / h) * 2;
      } else if (scrollY < 2 * h) {
        targetTime = 2.5 + ((scrollY - h) / h) * 2;
      } else if (scrollY < 3 * h) {
        targetTime = 4.5 + ((scrollY - 2 * h) / h) * 3;
      } else if (scrollY < 4 * h) {
        targetTime = 7.5 + ((scrollY - 3 * h) / h) * 2;
      } else {
        targetTime = 9.5;
      }

      if (scrollY > 4 * h) {
        opacity = Math.max(0, 1 - (scrollY - 4 * h) / (0.6 * h));
      } else {
        opacity = 1;
      }
    };

    const updateVideo = () => {
      const diff = targetTime - currentTime;
      if (Math.abs(diff) > 0.005) {
        currentTime += diff * 0.08;
        
        // Only set currentTime if the video decoder is not busy seeking
        if (!video.seeking) {
          video.currentTime = Math.max(0, currentTime);
        }
      }
      if (container) {
        container.style.opacity = opacity.toFixed(3);
        container.style.visibility = opacity > 0.01 ? "visible" : "hidden";
      }
      frameId = requestAnimationFrame(updateVideo);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();
    frameId = requestAnimationFrame(updateVideo);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/images/hero/hero-parallax.webm"
        preload="auto"
        muted
        playsInline
        className="object-cover w-full h-full object-center"
      />
      <div className="absolute inset-0 bg-[#000000]/30" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,10,0)_60%,#02030A_100%)]" />
    </div>
  );
}
