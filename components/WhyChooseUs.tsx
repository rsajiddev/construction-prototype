"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-concrete-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber mb-2 block">Why Vanguard Built</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-charcoal-900 tracking-tight">Unrivalled Quality. Certainty of Outcome.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.map((pillar, index) => (
            <div key={index} className="bg-white border border-concrete-300 p-8 shadow-sm">
              <CheckCircle className="w-8 h-8 text-amber mb-5" />
              <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-2">{pillar.title}</h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}