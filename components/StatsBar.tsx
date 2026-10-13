"use client";
import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

function CounterItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(10, Math.floor(1800 / value));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center text-center p-6 border-b sm:border-b-0 sm:border-r last:border-r-0 border-charcoal-800">
      <div className="font-heading font-black text-4xl sm:text-5xl text-amber mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <p className="text-xs uppercase font-heading tracking-widest text-concrete-300 font-semibold max-w-[180px]">
        {label}
      </p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section id="stats" className="bg-charcoal-900 border-y border-charcoal-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.statistics.map((stat, idx) => (
            <CounterItem key={idx} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}