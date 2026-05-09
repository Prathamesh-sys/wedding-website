"use client";

import { useState, useEffect } from "react";
import Section from "../ui/Section";
import { weddingData } from "@/data/weddingData";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.weddingDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimerBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="glass-panel w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl mb-2">
        <span className="text-3xl md:text-4xl font-serif text-gold-400">{value}</span>
      </div>
      <span className="text-xs md:text-sm uppercase tracking-widest text-stone-400">{label}</span>
    </div>
  );

  return (
    <Section className="bg-stone-950 min-h-fit py-32">
      <div className="max-w-4xl w-full text-center">
        <h2 className="font-cursive text-4xl text-gold-500 mb-12">Counting Down To Our Big Day</h2>
        <div className="flex justify-center gap-4 md:gap-8">
          <TimerBox value={timeLeft.days} label="Days" />
          <TimerBox value={timeLeft.hours} label="Hours" />
          <TimerBox value={timeLeft.minutes} label="Minutes" />
          <TimerBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </Section>
  );
}
