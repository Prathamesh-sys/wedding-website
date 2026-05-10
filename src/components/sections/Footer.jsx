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

        <div className="pt-12 border-t border-white/5 text-stone-500 text-[10px] tracking-widest uppercase mb-8">
          Designed for a Lifetime of Happiness
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col items-center group"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent mb-6" />
          <p className="font-sans text-[11px] tracking-[0.4em] text-stone-400 uppercase mb-2">
            Crafted with <span className="text-red-500/60 group-hover:text-red-500 transition-colors duration-500">❤️</span> by
          </p>
          <h3 className="font-serif text-lg text-gold-200/80 tracking-wide hover:text-gold-300 transition-all duration-700 cursor-default relative">
            Prathamesh Gaikwad
            <div className="absolute -inset-x-4 -inset-y-2 bg-gold-400/0 group-hover:bg-gold-400/5 blur-xl transition-all duration-1000 rounded-full" />
          </h3>
        </motion.div>
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
