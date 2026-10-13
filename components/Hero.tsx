"use client";
import React from "react";
import Hero3DScene from "./Hero3DScene";
import { siteConfig } from "@/config/site";
import { ArrowDown, ArrowUpRight, ShieldCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-charcoal-950 overflow-hidden pt-24 pb-16 blueprint-grid">
      <Hero3DScene />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center space-x-2 bg-charcoal-800/90 border border-charcoal-700/80 px-3.5 py-1.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-amber" />
            <span className="text-[11px] font-heading uppercase tracking-widest text-concrete-200">Chartered Building Company | CIOB & RIBA</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-6">
            Building Foundations. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-gold">Shaping Futures.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-base sm:text-lg text-concrete-300 font-normal leading-relaxed mb-10 max-w-2xl">
            {siteConfig.subTagline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
            <a href="#projects" className="inline-flex items-center justify-center space-x-3 bg-amber hover:bg-amber-hover text-charcoal-950 font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 shadow-xl">
              <Building2 className="w-4 h-4" />
              <span>View Major Projects</span>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center space-x-2 border-2 border-concrete-300/30 hover:border-amber text-white hover:text-amber font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 backdrop-blur-sm">
              <span>Request a Tender</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a href="#stats" className="p-2 text-concrete-400 hover:text-amber animate-bounce">
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}