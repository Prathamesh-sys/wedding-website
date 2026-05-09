"use client";

import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import { MapPin, Navigation } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export default function Venue() {
  return (
    <Section id="venue" className="bg-stone-900/50">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl text-gold-400 mb-4">Location</h2>
          <p className="text-stone-300 font-serif tracking-widest uppercase text-sm">Where our forever begins</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <GlassCard className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-gold-400" size={32} />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">{weddingData.venue.name}</h3>
              <p className="text-stone-300 text-lg leading-relaxed mb-8">
                {weddingData.venue.address}
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Gojrai+Palace+Yeola+Nashik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-600 text-black font-semibold rounded-full hover:bg-gold-500 transition-colors"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </GlassCard>

          <div className="glass-panel rounded-2xl overflow-hidden h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              src={weddingData.venue.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert brightness-[0.8] contrast-[1.2]"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}
