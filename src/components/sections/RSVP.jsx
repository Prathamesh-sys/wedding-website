"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import { Send } from "lucide-react";

export default function RSVP() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your RSVP has been received.");
    // In a real app, you would send this to a backend or service
  };

  return (
    <Section id="rsvp" className="bg-stone-950">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl text-gold-400 mb-4">RSVP</h2>
          <p className="text-stone-300 font-serif tracking-widest uppercase text-sm">Please let us know if you can make it</p>
        </div>

        <GlassCard>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-stone-400 text-xs uppercase tracking-widest ml-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-white"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-stone-400 text-xs uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-white"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-stone-400 text-xs uppercase tracking-widest ml-1">Number of Guests</label>
                <select
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-white appearance-none"
                  value={formState.guests}
                  onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n} className="bg-stone-900 text-white">{n}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-stone-400 text-xs uppercase tracking-widest ml-1">Will you attend?</label>
                <div className="flex gap-4 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      className="hidden"
                      checked={formState.attending === "yes"}
                      onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formState.attending === "yes" ? 'border-gold-500 bg-gold-500' : 'border-white/20'}`}>
                      {formState.attending === "yes" && <div className="w-2 h-2 bg-black rounded-full" />}
                    </div>
                    <span className="text-stone-300">Yes, I&apos;ll be there</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      className="hidden"
                      checked={formState.attending === "no"}
                      onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formState.attending === "no" ? 'border-red-500 bg-red-500' : 'border-white/20'}`}>
                      {formState.attending === "no" && <div className="w-2 h-2 bg-black rounded-full" />}
                    </div>
                    <span className="text-stone-300">Sorry, I can&apos;t</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-stone-400 text-xs uppercase tracking-widest ml-1">Message for the Couple</label>
              <textarea
                rows="4"
                placeholder="Warm wishes..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-white resize-none"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold py-4 rounded-xl shadow-lg shadow-gold-600/20 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Confirm RSVP
            </motion.button>
          </form>
        </GlassCard>
      </div>
    </Section>
  );
}
