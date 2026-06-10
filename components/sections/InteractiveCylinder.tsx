"use client";

import { useEffect, useRef } from "react";

const stockItems = [
  { label: "Tabung Isi", value: "129 Unit", color: "bg-primary", pct: 43 },
  { label: "Tabung Kosong", value: "171 Unit", color: "bg-amber-400", pct: 57 },
  { label: "Tabung Bocor", value: "0 Unit", color: "bg-red-500", pct: 0 },
];

export default function InteractiveCylinder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cylinderWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let floatTween: { kill: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        floatTween = gsap.to(".cylinder-svg-wrap", {
          y: -14,
          duration: 2.8,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        }) as unknown as { kill: () => void };

        gsap.from(".cylinder-section-left", {
          scrollTrigger: { trigger: ".cylinder-section", start: "top 80%" },
          x: -40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(".cylinder-section-right", {
          scrollTrigger: { trigger: ".cylinder-section", start: "top 80%" },
          x: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.15,
        });

        gsap.from(".stock-row", {
          scrollTrigger: { trigger: ".cylinder-section", start: "top 75%" },
          y: 20,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.35,
        });
      }, containerRef);
    };

    init();

    const el = cylinderWrapRef.current;

    const onEnter = async () => {
      const { gsap } = await import("gsap");
      gsap.to(".cylinder-svg-wrap", {
        rotation: 6,
        scale: 1.06,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    };
    const onLeave = async () => {
      const { gsap } = await import("gsap");
      gsap.to(".cylinder-svg-wrap", {
        rotation: 0,
        scale: 1,
        y: -14,
        duration: 0.7,
        ease: "elastic.out(1, 0.6)",
        overwrite: true,
      });
    };

    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);

    return () => {
      ctx?.revert();
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="cylinder-section py-24 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Cylinder visual */}
          <div className="cylinder-section-left flex flex-col items-center gap-6">
            <div
              ref={cylinderWrapRef}
              className="cylinder-svg-wrap cursor-pointer select-none"
              style={{ filter: "drop-shadow(0 0 32px rgba(16,185,129,0.25))" }}
            >
              <svg
                viewBox="0 0 140 230"
                className="w-56 h-72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="20%" stopColor="#0F172A" />
                    <stop offset="80%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#1E293B" />
                  </linearGradient>
                  <linearGradient id="topGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="50%" stopColor="#243347" />
                    <stop offset="100%" stopColor="#1E293B" />
                  </linearGradient>
                  <linearGradient id="greenBand" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
                    <stop offset="45%" stopColor="#10B981" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
                  </linearGradient>
                  <radialGradient id="glowCenter" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Glow behind cylinder */}
                <ellipse cx="70" cy="130" rx="52" ry="52" fill="url(#glowCenter)" />

                {/* Valve stem */}
                <rect x="62" y="8" width="16" height="8" rx="3" fill="#059669" />
                <rect x="58" y="14" width="24" height="10" rx="3" fill="#10B981" />
                <rect x="64" y="3" width="12" height="7" rx="2" fill="#047857" />

                {/* Top collar */}
                <ellipse cx="70" cy="26" rx="46" ry="11" fill="url(#topGrad)" stroke="#1E293B" strokeWidth="1" />
                <ellipse cx="70" cy="26" rx="36" ry="7" fill="#10B981" opacity="0.12" />

                {/* Cylinder body */}
                <rect x="24" y="26" width="92" height="152" fill="url(#bodyGrad)" />

                {/* Green label band */}
                <rect x="24" y="68" width="92" height="58" fill="url(#greenBand)" rx="1" />

                {/* Label */}
                <text x="70" y="90" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">LPG</text>
                <text x="70" y="105" textAnchor="middle" fill="white" fontSize="7.5" fontFamily="sans-serif">GasTransact Pro</text>
                <text x="70" y="118" textAnchor="middle" fill="#34D399" fontSize="8" fontFamily="sans-serif" fontWeight="600">● ELPIJI 3 KG</text>

                {/* Shine highlight left */}
                <rect x="26" y="30" width="5" height="144" fill="white" opacity="0.04" rx="2" />
                {/* Shine highlight right */}
                <rect x="108" y="30" width="5" height="144" fill="white" opacity="0.03" rx="2" />

                {/* Bottom ridge */}
                <rect x="24" y="178" width="92" height="6" fill="#1E293B" />
                <ellipse cx="70" cy="184" rx="46" ry="9" fill="#1E293B" />
                <rect x="24" y="184" width="92" height="14" fill="#1E293B" />

                {/* Base foot */}
                <ellipse cx="70" cy="198" rx="46" ry="9" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
                <rect x="32" y="197" width="76" height="12" rx="5" fill="#1E293B" />
                <ellipse cx="70" cy="209" rx="40" ry="8" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
              </svg>
            </div>

            {/* Total badge */}
            <div className="flex items-center gap-3 bg-dark border border-brand-border rounded-xl px-5 py-3">
              <span className="text-muted text-sm">Total Stok Konstruksi:</span>
              <span className="text-white font-bold">300 Unit</span>
            </div>
          </div>

          {/* Right: text + stock breakdown */}
          <div className="cylinder-section-right space-y-8">
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Tracking Stok Real-time
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3 leading-tight">
                Tahu kondisi tabung Anda, kapan saja
              </h2>
              <p className="text-muted mt-4 leading-relaxed">
                Setiap tabung tercatat statusnya secara otomatis. Tidak ada lagi
                hitungan fisik manual yang rawan salah — stok tersinkronisasi
                setiap kali transaksi terjadi.
              </p>
            </div>

            {/* Stock breakdown */}
            <div className="space-y-3">
              {stockItems.map((item) => (
                <div
                  key={item.label}
                  className="stock-row bg-dark border border-brand-border rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-white text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-muted text-sm font-semibold">
                      {item.value}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted text-sm border-l-2 border-primary pl-4">
              Data diambil dari dashboard demo aktif. Stok diperbarui real-time
              setiap transaksi masuk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
