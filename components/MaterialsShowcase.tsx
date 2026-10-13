"use client";
import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Layers, Check, Download } from "lucide-react";

export default function MaterialsShowcase() {
  const [sent, setSent] = useState(false);
  return (
    <section id="materials" className="py-24 bg-charcoal-900 blueprint-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber mb-2 block">Direct Trade Supply</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">Certified Building Materials Supply</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.materialsCategories.map((cat, idx) => (
            <div key={idx} className="bg-charcoal-950 border border-charcoal-800 p-6 flex flex-col justify-between hover:border-amber transition-colors">
              <div>
                <div className="flex items-center space-x-2 text-amber text-xs font-heading font-bold uppercase mb-2">
                  <Layers className="w-4 h-4" />
                  <span>{cat.grade}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">{cat.title}</h3>
                <p className="text-xs text-concrete-300 leading-relaxed">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-charcoal-800 border-2 border-amber/40 p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-2xl text-white mb-1">Request Wholesale Merchant Price List</h3>
            <p className="text-xs text-concrete-300">Live stock rates for B500B steel, CEM I cement, facing masonry, and drainage.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex gap-3 w-full lg:w-auto">
            <input type="email" required placeholder="Enter corporate email" className="bg-charcoal-900 border border-charcoal-700 text-white px-4 py-3 text-xs w-full sm:w-72" />
            <button type="submit" className="bg-amber hover:bg-amber-hover text-charcoal-950 font-heading font-bold text-xs uppercase px-6 py-3 whitespace-nowrap">
              {sent ? "Sent!" : "Request Rates"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}