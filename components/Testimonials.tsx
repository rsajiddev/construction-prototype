"use client";
import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c === 0 ? siteConfig.testimonials.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === siteConfig.testimonials.length - 1 ? 0 : c + 1));
  const item = siteConfig.testimonials[current];

  return (
    <section className="py-24 bg-charcoal-900 blueprint-grid relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-charcoal-950 border border-charcoal-800 p-8 sm:p-12 relative shadow-2xl">
          <Quote className="w-12 h-12 text-amber/20 absolute top-8 right-8" />
          <div className="flex space-x-1 mb-6">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber text-amber" />
            ))}
          </div>
          <p className="text-lg text-concrete-200 mb-8 italic">"{item.quote}"</p>
          <div className="flex items-center justify-between border-t border-charcoal-800 pt-6">
            <div>
              <h4 className="font-heading font-bold text-base text-white">{item.author}</h4>
              <p className="text-xs text-amber">{item.role}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={prev} className="w-10 h-10 bg-charcoal-800 text-white flex items-center justify-center hover:bg-amber hover:text-charcoal-950"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={next} className="w-10 h-10 bg-charcoal-800 text-white flex items-center justify-center hover:bg-amber hover:text-charcoal-950"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}