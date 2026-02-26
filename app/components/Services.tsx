"use client";
import ServicesBackground from "./ServicesBackground";
import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";


/* =========================
   DANE
   ========================= */
const services = [
  {
    title: "software & tools",
    desc: "Adobe After Effects, Premiere Pro, Blender, Photoshop, Nuke, Figma, Illustrator, JavaScript, Unreal Engine",
  },
  {
    title: "core skills",
    desc: "timing, pacing, tempo control, storytelling, cutting, visual rhythm, composition, shot continuity",
  },
  {
    title: "visual language",
    desc: "cinematic thinking, motion design principles, visual systems, composition, color theory",
  },
  {
    title: "production approach",
    desc: "From concept to final render — working within pipelines, constraints, and feedback loops to deliver finished, intentional images.",
  },
];

export default function Services() {
  /* =========================
     FIX NA HYDRATION
     ========================= */
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================
     KURSOR → POZYCJA GRADIENTU
     ========================= */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ORGANICZNE OPÓŹNIENIE (efekt „ryby pod lodem”)
  const smoothX = useSpring(mouseX, {
    stiffness: 35,
    damping: 28,
    mass: 1.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 35,
    damping: 28,
    mass: 1.4,
  });

  return (
    <section
  id="uslugi"
  className="relative py-32 bg-white overflow-hidden"
>
  <ServicesBackground />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
    <div className="grid md:grid-cols-2 gap-10">
      {services.map((service, i) => (
        <div
          key={i}
          className="
            rounded-3xl
            border border-black/15
            bg-white/90
            p-10
          "
        >
          <h3 className="text-2xl font-semibold text-black mb-4">
            {service.title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
);
}