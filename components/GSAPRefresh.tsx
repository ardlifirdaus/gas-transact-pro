"use client";

import { useEffect } from "react";

export default function GSAPRefresh() {
  useEffect(() => {
    const refresh = async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      ScrollTrigger.refresh();
    };

    if (document.readyState === "complete") {
      refresh();
    } else {
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    }
  }, []);

  return null;
}
