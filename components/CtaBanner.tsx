"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, HardHat } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-amber relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center space-x-2 text-charcoal-950 text-xs font-heading font-black uppercase mb-2">
            <HardHat className="w-5 h-5" />
            <span>Ready to Break Ground?</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-charcoal-950 tracking-tight">Start Your Construction Project Today</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-charcoal-950 text-white font-heading font-bold text-xs uppercase px-8 py-5 flex items-center justify-center space-x-2 shadow-2xl hover:bg-charcoal-900">
            <span>Request Detailed Tender</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}