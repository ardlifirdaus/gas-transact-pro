"use client";

import { useEffect, useRef } from "react";

interface Metric {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    value: 100,
    suffix: "%",
    label: "Akurasi Transaksi",
    description: "Setiap input tercatat dan terverifikasi otomatis",
  },
  {
    prefix: "< ",
    value: 3,
    suffix: " Detik",
    label: "Waktu Input Data",
    description: "Antarmuka yang dirancang untuk kecepatan kerja lapangan",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Monitoring Real-time",
    description: "Data stok dan transaksi diperbarui secara langsung",
  },
  {
    value: 99,
    suffix: "%",
    label: "Uptime Sistem",
    description: "Infrastruktur cloud yang stabil dan andal",
  },
];

export default function MetricsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".metric-item", {
          scrollTrigger: {
            trigger: ".metrics-row",
            start: "top 85%",
          },
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        });

        const valueEls = document.querySelectorAll<HTMLElement>(".metric-value-js");
        valueEls.forEach((el, i) => {
          const m = metrics[i];
          const obj = { val: 0 };
          gsap.to(obj, {
            val: m.value,
            duration: 2.2,
            ease: "power2.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: ".metrics-row",
              start: "top 85%",
            },
            onUpdate() {
              el.textContent = `${m.prefix ?? ""}${Math.round(obj.val)}${m.suffix}`;
            },
          });
        });
      }, containerRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 bg-secondary border-y border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="metrics-row grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {metrics.map((metric, i) => (
            <div key={i} className="metric-item text-center px-4">
              <p className="metric-value-js font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
                {metric.prefix ?? ""}0{metric.suffix}
              </p>
              <p className="text-white font-semibold text-sm mb-1">
                {metric.label}
              </p>
              <p className="text-muted text-xs leading-relaxed hidden md:block">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
