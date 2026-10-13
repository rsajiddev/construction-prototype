"use client";
import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-24 bg-concrete-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber mb-2 block">Get In Touch</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-charcoal-900 tracking-tight">Initiate Your Project Enquiries</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 bg-charcoal-900 text-white p-8 space-y-6 shadow-xl">
            <h3 className="font-heading font-bold text-xl pb-4 border-b border-charcoal-800">Office Details</h3>
            <div className="flex items-start space-x-3 text-xs">
              <MapPin className="w-5 h-5 text-amber shrink-0" />
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex items-start space-x-3 text-xs">
              <Phone className="w-5 h-5 text-amber shrink-0" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-start space-x-3 text-xs">
              <Mail className="w-5 h-5 text-amber shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
          </div>
          <div className="lg:col-span-7 bg-white p-8 border border-concrete-300 shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-amber mx-auto mb-4" />
                <h3 className="font-heading font-bold text-2xl text-charcoal-900 mb-2">Tender Request Received</h3>
                <p className="text-xs text-charcoal-700">We will respond within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <input type="text" required placeholder="Full Name *" className="w-full bg-concrete-100 border border-concrete-300 px-4 py-3 text-xs" />
                <input type="email" required placeholder="Corporate Email *" className="w-full bg-concrete-100 border border-concrete-300 px-4 py-3 text-xs" />
                <textarea rows={4} required placeholder="Project Brief & Location *" className="w-full bg-concrete-100 border border-concrete-300 px-4 py-3 text-xs" />
                <button type="submit" className="w-full bg-amber text-charcoal-950 font-heading font-bold text-xs uppercase py-4 flex items-center justify-center space-x-2">
                  <span>Submit Tender Brief</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}