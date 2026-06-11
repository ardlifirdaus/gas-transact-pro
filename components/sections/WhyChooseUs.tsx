"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Dibangun untuk operasional nyata",
    description:
      "Sistem ini dibuat dari kebutuhan nyata distributor LPG di lapangan — bukan demo lab yang terputus dari realita.",
  },
  {
    title: "Staf baru langsung bisa pakai",
    description:
      "UI yang intuitif membuat onboarding cepat. Input transaksi bisa dikuasai dalam satu sesi kerja pertama.",
  },
  {
    title: "Data terpusat di cloud",
    description:
      "Semua data tersimpan aman di cloud. Bisa diakses dari laptop, tablet, atau HP — dari mana saja, kapan saja.",
  },
  {
    title: "Laporan siap pakai setiap hari",
    description:
      "Laporan margin, riwayat transaksi, dan performa gudang tersedia otomatis — tidak perlu rekap spreadsheet lagi.",
  },
  {
    title: "Kompatibel dengan Google Sheets",
    description:
      "Tim Anda tidak perlu berhenti pakai Google Sheets. GasTransact Pro bisa import dan sync data dari spreadsheet Anda.",
  },
  {
    title: "Gratis untuk dicoba",
    description:
      "Tidak ada biaya awal, tidak ada kartu kredit diperlukan. Coba langsung dengan data demo sistem kami.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".why-header", {
          scrollTrigger: { trigger: ".why-section", start: "top 82%", once: true },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
        });

        gsap.from(".why-item", {
          scrollTrigger: { trigger: ".why-section", start: "top 80%", once: true },
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          immediateRender: false,
        });
      }, containerRef);

      ScrollTrigger.refresh();
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="keunggulan"
      ref={containerRef}
      className="why-section py-24 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="why-header text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Kenapa GasTransact Pro
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Solusi yang tepat untuk bisnis gas Anda
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            Kami memahami tantangan operasional harian distributor dan agen LPG
            — mulai dari stok, transaksi, hingga pelaporan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="why-item flex gap-4 p-6 bg-dark border border-brand-border rounded-xl hover:border-primary/25 transition-colors duration-300"
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold text-white text-sm mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
