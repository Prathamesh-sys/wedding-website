"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import { X } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export default function PhotoGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Section id="gallery" className="bg-stone-950">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl text-gold-400 mb-4">Moments of Love</h2>
          <p className="text-stone-300 font-serif tracking-widest uppercase text-sm">A glimpse into our world</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {weddingData.gallery.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer overflow-hidden rounded-xl aspect-[3/4] md:aspect-square relative group"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImg}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
