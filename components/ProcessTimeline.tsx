"use client";
import React from "react";

const steps = [
  { step: "01", title: "Tender & Feasibility", desc: "Rigorous site surveying, bill of quantities (BOQ) scrutiny, and value engineering." },
  { step: "02", title: "Design & Planning", desc: "Architectural drawings, CDM 2015 regulations, calculations, and approvals." },
  { step: "03", title: "Procurement", desc: "Direct trade allocation of certified materials from our wholesale inventory." },
  { step: "04", title: "Construction Phase", desc: "Groundworks and structural framework overseen by full-time chartered managers." },
  { step: "05", title: "Quality Assurance", desc: "Comprehensive snagging, acoustic testing, and Building Control certification." },
  { step: "06", title: "Handover & Aftercare", desc: "Formal O&M manuals delivery, plus 10-year structural warranty support." },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-charcoal-950 text-white blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber mb-2 block">Methodology</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight">Our Structured Delivery Programme</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="bg-charcoal-900 border border-charcoal-800 p-8 hover:border-amber transition-colors">
              <div className="font-heading font-black text-4xl text-amber mb-4">{item.step}</div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-xs text-concrete-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}