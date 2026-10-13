"use client";
import React, { useState, useRef } from "react";

export default function InteriorSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section id="interiors" className="py-24 bg-concrete-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber mb-2 block">Concept to Completion</span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-charcoal-900 mb-6">Bespoke Interior Architecture & Fit-Out</h2>
            <p className="text-charcoal-700 text-sm leading-relaxed mb-6">From shell-and-core frameworks to turnkey luxury environments, our team integrates architectural joinery, acoustic zoning, and smart automation.</p>
            <p className="text-xs text-charcoal-600 italic">Drag the slider horizontally to view the transformation from raw shell to luxury fit-out.</p>
          </div>
          <div className="lg:col-span-7">
            <div ref={containerRef} onMouseMove={(e) => handleMove(e.clientX)} onTouchMove={(e) => handleMove(e.touches[0].clientX)} className="relative w-full h-[420px] overflow-hidden cursor-ew-resize border-4 border-charcoal-900 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" alt="Completed" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-charcoal-900 text-white text-[10px] font-bold uppercase px-3 py-1">Completed Fit-Out</div>
              <div className="absolute inset-0 overflow-hidden" style={{ width: sliderPosition + "%" }}>
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" alt="Shell" className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: containerRef.current?.clientWidth || 700 }} />
                <div className="absolute top-4 left-4 bg-amber text-charcoal-950 text-[10px] font-bold uppercase px-3 py-1">Raw Shell & Core</div>
              </div>
              <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: sliderPosition + "%" }}>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-amber text-charcoal-950 flex items-center justify-center font-bold text-xs shadow-xl">↔</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}