"use client";

import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import { Calendar, MapPin, Clock } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export default function EventSchedule() {
  return (
    <Section id="events" className="bg-stone-900/50">
      <div className="max-w-6xl w-full px-4">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl text-gold-400 mb-4">Wedding Events</h2>
          <p className="text-stone-300 font-serif tracking-widest uppercase text-sm">Join us for the celebrations</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {weddingData.events.map((event, index) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(40%-1rem)] max-w-md">
              <GlassCard delay={index * 0.1} className="h-full">
                <h3 className="text-2xl font-serif text-gold-300 mb-4 border-b border-gold-600/30 pb-2">{event.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-stone-200">
                    <Calendar size={18} className="text-gold-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-200">
                    <Clock size={18} className="text-gold-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-stone-200">
                    <MapPin size={18} className="text-gold-500 shrink-0 mt-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="mt-6 text-stone-400 text-sm italic leading-relaxed">
                  {event.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
