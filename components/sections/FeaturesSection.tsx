"use client";

import { useEffect, useRef } from "react";
import {
  Warehouse,
  TrendingUp,
  Package,
  FileSpreadsheet,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

const features: Feature[] = [
  {
    icon: Warehouse,
    title: "Multi Gudang",
    description:
      "Kelola beberapa gudang sekaligus dari satu akun admin. Pantau stok dan transaksi per gudang secara terpisah dan akurat.",
    badge: "Unggulan",
  },
  {
    icon: TrendingUp,
    title: "Laporan Margin Real-time",
    description:
      "Kalkulasi otomatis gross margin per transaksi. Laporan bulanan tersedia langsung — tanpa rekap manual, tanpa salah hitung.",
  },
  {
    icon: Package,
    title: "Pelacakan Stok Tabung",
    description:
      "Monitor kondisi tabung — isi, kosong, bocor — secara akurat. Stok diperbarui otomatis setiap kali ada transaksi.",
  },
  {
    icon: FileSpreadsheet,
    title: "Sinkronisasi Google Sheets",
    description:
      "Import dan ekspor data langsung dari Google Sheets. Tim yang sudah terbiasa spreadsheet bisa langsung adaptasi.",
    badge: "Integrasi",
  },
  {
    icon: Zap,
    title: "Alur Operasional Cepat",
    description:
      "Input transaksi dalam hitungan detik. Antarmuka dirancang untuk staf lapangan yang butuh kecepatan kerja nyata.",
  },
  {
    icon: ShieldCheck,
    title: "Manajemen User & Role",
    description:
      "Atur akses per pengguna dengan role Admin dan Operator. Setiap aktivitas tercatat untuk kebutuhan audit.",
  },
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".features-header", {
          scrollTrigger: { trigger: ".feature-grid", start: "top 82%", once: true },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
        });

        gsap.from(".feature-card", {
          scrollTrigger: { trigger: ".feature-grid", start: "top 80%", once: true },
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.15,
          immediateRender: false,
        });
      }, containerRef);

      ScrollTrigger.refresh();
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="fitur" ref={containerRef} className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="features-header text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Fitur Utama
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Semua yang dibutuhkan operasional LPG Anda
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            Dirancang khusus untuk distributor dan agen LPG — bukan aplikasi
            generik yang dipaksakan untuk bisnis gas.
          </p>
        </div>

        <div className="feature-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="feature-card group relative bg-secondary border border-brand-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {feature.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                    {feature.badge}
                  </span>
                )}
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-white text-base mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
