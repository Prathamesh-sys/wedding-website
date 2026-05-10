"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export default function Hero({ onOpen, isOpened }) {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setMounted(true);
    const newParticles = [...Array(20)].map(() => ({
      x: Math.random() * 100,
      y: 100 + Math.random() * 20,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 10 + 10,
      drift: Math.random() * 40 - 20
    }));
    setParticles(newParticles);
  }, []);

  const handleOpenInvitation = () => {
    onOpen?.();
    setTimeout(() => {
      const storySection = document.getElementById('story');
      if (storySection) {
        storySection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center overflow-hidden pt-safe pb-safe">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-950 z-10" />
        <img
          src={weddingData.gallery[0]}
          alt="Couple"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="z-20 text-center flex flex-col items-center justify-center flex-grow px-4 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gold-300 font-sans tracking-[0.2em] uppercase text-sm md:text-base mb-4 md:mb-6"
        >
          {weddingData.heroSubtitle}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-cursive text-6xl md:text-9xl text-gold-gradient mb-4 md:mb-8 leading-tight"
        >
          {weddingData.brideName} <br className="md:hidden" /> & <br className="md:hidden" /> {weddingData.groomName}
        </motion.h1>
      </div>

      <div className="z-20 w-full px-4 pb-8 md:pb-12 mt-auto">

        <AnimatePresence>
          {!isOpened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="font-serif text-xl md:text-3xl text-white/90 text-center">
                {weddingData.weddingDate}
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              
              <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 1.5 }}
                 className="text-stone-300 italic mb-6 font-serif text-center w-full max-w-sm px-4"
              >
                {weddingData.openingMessage}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenInvitation}
                className="px-8 py-3 rounded-full border border-gold-400/50 bg-black/30 backdrop-blur-md text-gold-300 hover:bg-gold-400 hover:text-black transition-all font-sans tracking-widest text-sm uppercase"
              >
                Open Invitation
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
             <p className="font-serif text-xl md:text-3xl text-white/90">
              {weddingData.weddingDate}
            </p>
          </motion.div>
        )}
      </div>

      {mounted && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-300 rounded-full blur-[1px]"
              initial={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                opacity: p.opacity
              }}
              animate={{
                top: "-10%",
                left: `${p.x + p.drift}%`
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
