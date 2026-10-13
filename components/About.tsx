"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { Award, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-concrete-100 blueprint-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 shadow-2xl overflow-hidden border-4 border-white">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80" alt="Construction Site" className="w-full h-[460px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 z-20 bg-charcoal-900 text-white p-6 shadow-2xl max-w-xs border-l-4 border-amber">
              <div className="flex items-center space-x-3 mb-2">
                <Award className="w-6 h-6 text-amber" />
                <span className="font-heading font-bold text-sm">CIOB Chartered</span>
              </div>
              <p className="text-xs text-concrete-300 leading-relaxed">Operating under rigorous British standards, structural warranty safeguards, and strict CDM regulations.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber mb-3 block">About Vanguard Built</span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-charcoal-900 tracking-tight leading-tight mb-6">
              Precision Engineering, Disciplined Project Delivery, and Wholesale Reach.
            </h2>
            <p className="text-charcoal-700 text-base leading-relaxed mb-6">
              Founded on the pillars of British structural integrity, Vanguard Built has grown into a multi-disciplinary organisation uniting chartered contracting, residential property development, and wholesale building material supply.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-concrete-300">
              {siteConfig.accreditations.map((acc, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 border border-concrete-200">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-charcoal-900">{acc.name}</h4>
                    <p className="text-[11px] text-charcoal-600 mt-0.5">{acc.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}