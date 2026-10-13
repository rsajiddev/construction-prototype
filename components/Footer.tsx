"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { HardHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white border-t border-charcoal-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-amber flex items-center justify-center text-charcoal-950">
            <HardHat className="w-6 h-6" />
          </div>
          <span className="font-heading font-black text-xl uppercase tracking-wider">{siteConfig.companyName}</span>
        </div>
        <p className="text-xs text-concrete-400">© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}