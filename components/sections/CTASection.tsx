"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";

const DEMO_URL =
  "https://gas-cylinder-transactions-624576306621.asia-southeast1.run.app";

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".cta-box", {
          scrollTrigger: { trigger: ".cta-section", start: "top 82%" },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(".cta-inner > *", {
          scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
          y: 20,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.25,
        });
      }, containerRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={containerRef} className="cta-section py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="cta-box relative bg-secondary border border-brand-border rounded-2xl p-10 md:p-14 overflow-hidden text-center">
          {/* Decorative glows */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary/6 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-primary/6 rounded-full blur-3xl pointer-events-none" />

          <div className="cta-inner relative flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Gratis — Tidak Perlu Daftar
            </span>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight max-w-2xl">
              Siap kelola bisnis LPG dengan lebih efisien?
            </h2>

            <p className="text-muted text-lg max-w-xl leading-relaxed">
              Coba demo sistem sekarang — tidak perlu registrasi, tidak perlu
              instal apapun. Lihat sendiri bagaimana GasTransact Pro bekerja
              untuk bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-lg hover:shadow-primary/25 text-base"
              >
                Coba Demo Sistem Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:ardli.firdaus@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-brand-border hover:border-primary/40 text-muted hover:text-white rounded-full font-semibold transition-all text-base"
              >
                <Mail className="w-4 h-4" />
                Hubungi Kami
              </a>
            </div>

            <p className="text-muted/60 text-sm">
              Ada pertanyaan?{" "}
              <a
                href="mailto:ardli.firdaus@gmail.com"
                className="text-primary hover:underline"
              >
                ardli.firdaus@gmail.com
              </a>{" "}
              — kami siap membantu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
