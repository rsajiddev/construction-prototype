"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { Building2, Home, PaintBucket, PackageCheck, Hammer, ClipboardCheck, ArrowRight } from "lucide-react";

const icons = [Building2, Home, PaintBucket, PackageCheck, Hammer, ClipboardCheck];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-950 blueprint-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber mb-3 block">End-to-End Capabilities</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">Comprehensive Building & Supply Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={service.id} className="bg-charcoal-900 border border-charcoal-800 p-8 flex flex-col justify-between group hover:border-amber transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-charcoal-800 text-amber flex items-center justify-center border border-charcoal-700 group-hover:bg-amber group-hover:text-charcoal-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-concrete-400 bg-charcoal-950 px-2.5 py-1">{service.tag}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-amber transition-colors">{service.title}</h3>
                  <p className="text-sm text-concrete-300 leading-relaxed mb-6">{service.description}</p>
                </div>
                <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between text-xs font-heading font-semibold text-concrete-400 group-hover:text-amber">
                  <span>Learn Specifications</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}