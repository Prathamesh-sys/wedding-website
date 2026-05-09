"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export default function Footer() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = [...Array(5)].map(() => ({
      x: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 20 + 20
    }));
    setHearts(newHearts);
  }, []);
  return (
    <footer className="bg-stone-950 py-24 px-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="font-cursive text-6xl text-gold-gradient mb-4">See You There!</h2>
          <div className="flex items-center justify-center gap-4 text-gold-500 mb-8">
            <div className="h-px w-12 bg-gold-600/30" />
            <Heart size={24} fill="currentColor" />
            <div className="h-px w-12 bg-gold-600/30" />
          </div>
        </motion.div>

        <p className="font-serif text-2xl text-stone-200 italic mb-12">
          &ldquo;Love is not just looking at each other, it&apos;s looking in the same direction.&rdquo;
        </p>

        <div className="text-stone-400 font-sans tracking-[0.3em] uppercase text-xs mb-4">
          With Love
        </div>
        <div className="font-cursive text-4xl text-gold-400 mb-16">
          {weddingData.brideName} & {weddingData.groomName}
        </div>

        <div className="pt-12 border-t border-white/5 text-stone-500 text-[10px] tracking-widest uppercase">
          Designed for a Lifetime of Happiness
        </div>
      </div>

      {/* Decorative floating hearts */}
      {hearts.map((h, i) => (
        <motion.div
          key={i}
          className="absolute text-gold-600/10 pointer-events-none"
          initial={{ 
            left: `${h.x}%`, 
            top: "100%", 
            scale: h.scale 
          }}
          animate={{ 
            top: "-20%",
            rotate: 360
          }}
          transition={{ 
            duration: h.duration, 
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Heart size={120} fill="currentColor" />
        </motion.div>
      ))}
    </footer>
  );
}
