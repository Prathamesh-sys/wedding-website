"use client";

import { motion } from "framer-motion";

export default function Section({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen py-20 px-4 md:px-8 flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </motion.section>
  );
}
