"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TrendingUp, Package, BarChart2, ArrowRight } from "lucide-react";

const DEMO_URL =
  "https://gas-cylinder-transactions-624576306621.asia-southeast1.run.app";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.7 })
          .from(".hero-title", { y: 40, opacity: 0, duration: 0.9 }, "-=0.4")
          .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
          .from(".hero-cta", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
          .from(".hero-note", { opacity: 0, duration: 0.6 }, "-=0.3")
          .from(
            ".hero-image",
            { x: 60, opacity: 0, duration: 1.1 },
            "-=1.2"
          )
          .from(
            ".hero-card",
            { y: 20, opacity: 0, duration: 0.6, stagger: 0.12 },
            "-=0.5"
          );
      }, containerRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-[#091a2e]" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                Sistem Operasional LPG
              </span>
            </div>

            <h1 className="hero-title font-heading font-bold text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-[1.15] mb-6">
              Kelola Bisnis Gas LPG{" "}
              <span className="text-primary">Lebih Cepat</span> &{" "}
              <span className="relative">
                Lebih Akurat
                <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary/30 rounded" />
              </span>
            </h1>

            <p className="hero-subtitle text-muted text-lg leading-relaxed mb-8 max-w-[480px]">
              GasTransact Pro membantu UMKM distributor dan agen LPG mengelola
              transaksi, stok tabung, dan laporan margin — dari satu dashboard
              terpadu secara real-time.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-3">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-lg hover:shadow-primary/25 text-base"
              >
                Coba Demo Sekarang
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-brand-border hover:border-primary/40 text-muted hover:text-white rounded-full font-semibold transition-all text-base"
              >
                Lihat Fitur
              </a>
            </div>

            <p className="hero-note mt-5 text-muted/70 text-sm flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span className="text-primary">✓</span> Gratis digunakan
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-primary">✓</span> Tanpa instalasi
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-primary">✓</span> Data demo tersedia
              </span>
            </p>
          </div>

          {/* Right: dashboard preview */}
          <div className="hero-image relative">
            {/* Browser frame */}
            <div className="relative bg-secondary border border-brand-border rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              {/* Browser toolbar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark/80 border-b border-brand-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-2 px-3 py-1 bg-dark/60 rounded-md text-xs text-muted/50 font-mono truncate">
                  gas-transact-pro.app/dashboard
                </div>
                <div className="flex items-center gap-1.5 text-xs text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Live
                </div>
              </div>
              <Image
                src="/dashboard.png"
                alt="GasTransact Pro Dashboard"
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating cards */}
            <div className="hero-card absolute -left-5 top-1/3 bg-secondary border border-brand-border rounded-xl p-3.5 shadow-xl hidden lg:flex items-center gap-3">
              <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted leading-none mb-1">Margin Kotor</p>
                <p className="text-white font-bold text-sm">Rp 47.929.000</p>
              </div>
            </div>

            <div className="hero-card absolute -right-5 bottom-1/4 bg-secondary border border-brand-border rounded-xl p-3.5 shadow-xl hidden lg:flex items-center gap-3">
              <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted leading-none mb-1">Volume Penjualan</p>
                <p className="text-white font-bold text-sm">20.152 Tabung</p>
              </div>
            </div>

            <div className="hero-card absolute right-6 -top-4 bg-primary rounded-xl px-3 py-2 shadow-xl hidden lg:flex items-center gap-2">
              <BarChart2 className="w-3.5 h-3.5 text-white" />
              <span className="text-white text-xs font-semibold">Google Sheets Sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
