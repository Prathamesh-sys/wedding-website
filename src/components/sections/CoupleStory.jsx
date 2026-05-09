"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import { Heart } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export default function CoupleStory() {
  const isSingleItem = weddingData.story.length === 1;

  return (
    <Section id="story" className="bg-stone-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600/5 blur-[100px] -z-10" />

      <div className="max-w-5xl w-full px-4">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl text-gold-400 mb-4">Our Love Story</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: The Story Card */}
          <div className={`flex justify-center ${isSingleItem ? 'lg:justify-end' : ''}`}>
            {weddingData.story.map((item, index) => (
              <GlassCard key={index} delay={0.2} className="w-full max-w-md relative">
                <div className="absolute -top-6 -left-6 text-gold-600/20">
                  <Heart size={80} fill="currentColor" />
                </div>
                <span className="text-gold-400 font-serif text-2xl font-bold block mb-2">{item.year}</span>
                <h3 className="text-xl font-sans font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Right Side: Decorative Quote Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            <div className="h-px w-20 bg-gold-600" />
            <p className="font-serif text-3xl md:text-4xl text-gold-gradient italic leading-snug">
              &ldquo;Two souls, one beautiful journey forever.&rdquo;
            </p>
            <p className="text-stone-400 max-w-sm">
              Joined by fate, held together by love, and walking into our future side by side.
            </p>
            <div className="flex gap-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="text-gold-500"
              >
                <Heart size={32} fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles specific to this section */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full blur-[2px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{ 
              y: ["-10%", "10%"],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </Section>
  );
}
