"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-stone-950 flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-gold-500 mb-8"
      >
        <Heart size={64} fill="currentColor" />
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-px bg-gold-600/30 relative"
      >
        <motion.div 
          className="absolute inset-0 bg-gold-400"
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 font-serif text-gold-300 tracking-[0.3em] uppercase text-[10px]"
      >
        Inviting you to a Royal Celebration
      </motion.p>
    </motion.div>
  );
}
