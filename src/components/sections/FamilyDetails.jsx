"use client";

import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import { weddingData } from "@/data/weddingData";

export default function FamilyDetails() {
  return (
    <Section id="family" className="bg-stone-900/30">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl text-gold-400 mb-4">The Family</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bride's Family */}
          <GlassCard className="text-center">
            <h3 className="font-cursive text-3xl text-gold-300 mb-6 underline decoration-gold-600/30 underline-offset-8">
              {weddingData.brideName}&apos;s Family
            </h3>
            <ul className="space-y-4">
              {weddingData.family.bride.map((name, i) => (
                <li key={i} className="text-stone-200 text-lg font-serif italic">
                  {name}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Groom's Family */}
          <GlassCard className="text-center">
            <h3 className="font-cursive text-3xl text-gold-300 mb-6 underline decoration-gold-600/30 underline-offset-8">
              {weddingData.groomName}&apos;s Family
            </h3>
            <ul className="space-y-4">
              {weddingData.family.groom.map((name, i) => (
                <li key={i} className="text-stone-200 text-lg font-serif italic">
                  {name}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
