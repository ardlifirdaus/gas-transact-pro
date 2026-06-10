"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Package, TrendingUp, BarChart2, RefreshCw } from "lucide-react";

const stats = [
  { icon: Package, label: "Total Stok Tabung", value: "300 Unit" },
  { icon: TrendingUp, label: "Total Margin Kotor", value: "Rp 53,9 Jt" },
  { icon: BarChart2, label: "Volume Penjualan", value: "20.257 Tabung" },
  { icon: RefreshCw, label: "Google Sheets Sync", value: "Aktif" },
];

export default function DashboardShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".ds-header", {
          scrollTrigger: { trigger: ".ds-section", start: "top 82%" },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".ds-stat", {
          scrollTrigger: { trigger: ".ds-section", start: "top 80%" },
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.1,
        });

        gsap.from(".ds-frame", {
          scrollTrigger: { trigger: ".ds-section", start: "top 75%" },
          y: 50,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.25,
        });
      }, containerRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="dashboard"
      ref={containerRef}
      className="ds-section py-24 bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="ds-header text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Dashboard Terpadu
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Semua data bisnis dalam satu tampilan
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            Overview kinerja, laporan margin, dan status stok tersaji dalam
            dashboard yang bersih, cepat, dan mudah dibaca staf siapapun.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="ds-stat bg-secondary border border-brand-border rounded-xl p-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs text-muted mb-1">{stat.label}</p>
                <p className="text-white font-bold text-sm">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Dashboard frame */}
        <div className="ds-frame relative">
          {/* Glow background */}
          <div className="absolute -inset-4 bg-primary/4 blur-3xl rounded-3xl pointer-events-none" />

          <div className="relative bg-secondary border border-brand-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-dark border-b border-brand-border">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-3 px-3 py-1 bg-brand-border/40 rounded-md text-xs text-muted/40 font-mono">
                gas-transact-pro.app · Overview Kinerja · Gudang Dummy 2
              </div>
              <div className="flex items-center gap-1.5 text-xs text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Real-time
              </div>
            </div>

            <Image
              src="/dashboard2.png"
              alt="GasTransact Pro — Overview Kinerja Dashboard"
              width={1280}
              height={720}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
