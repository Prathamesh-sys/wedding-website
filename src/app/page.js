"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/sections/Hero";
import CoupleStory from "@/components/sections/CoupleStory";
import EventSchedule from "@/components/sections/EventSchedule";
import Countdown from "@/components/sections/Countdown";
import FamilyDetails from "@/components/sections/FamilyDetails";
import PhotoGallery from "@/components/sections/PhotoGallery";
import Venue from "@/components/sections/Venue";
import RSVP from "@/components/sections/RSVP";
import Footer from "@/components/sections/Footer";
import AudioPlayer from "@/components/ui/AudioPlayer";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playMusic, setPlayMusic] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (!isOpened) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [isOpened, mounted]);

  const handleOpen = () => {
    setPlayMusic(true);
    setIsOpened(true);
  };

  if (!mounted) return <div className="bg-stone-950 min-h-screen" />;

  return (
    <main className="relative bg-stone-950">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <div key="content">
            <Hero onOpen={handleOpen} isOpened={isOpened} />
            
            <AnimatePresence>
              {isOpened && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <CoupleStory />
                  <Countdown />
                  <EventSchedule />
                  <FamilyDetails />
                  <PhotoGallery />
                  <Venue />
                  <RSVP />
                  <Footer />
                </motion.div>
              )}
            </AnimatePresence>
            
            <AudioPlayer playSignal={playMusic} />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
