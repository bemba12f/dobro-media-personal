"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ServicesBackground() {
  const [mounted, setMounted] = useState(false);

  // zabezpieczenie przed hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // bardzo wolne, „pływające” wygładzenie
  const smoothX = useSpring(mouseX, {
    stiffness: 30,
    damping: 30,
    mass: 1.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 30,
    damping: 30,
    mass: 1.6,
  });

  const x = useTransform(smoothX, (v) => `${v}px`);
  const y = useTransform(smoothY, (v) => `${v}px`);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      style={{
        background: `
          radial-gradient(
            700px 700px at ${x} ${y},
            rgba(70, 120, 110, 0.55),
            rgba(0, 0, 0, 0.9) 65%
          )
        `,
        filter: "contrast(140%) saturate(120%)",
      }}
    >
      {/* ZIARNO / FILM GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.22] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\"/></filter><rect width=\"160\" height=\"160\" filter=\"url(%23n)\"/></svg>')",
        }}
      />
    </motion.div>
  );
}
