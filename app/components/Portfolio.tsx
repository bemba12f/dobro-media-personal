"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  thumb: string;
  preview: string;
  full: string;
  span: 1 | 2;
  objectPosition?: string;
};


const projects: Project[] = [
  {
    title: "GigB",
    thumb: "/videos/th1.png",
    preview: "/videos/podglad1.mp4",
    full: "/videos/film1.1.mp4",
    span: 2,
  },
  {
    title: "",
    thumb: "/videos/th2.png",
    preview: "/videos/podglad2.1.mp4",
    full: "/videos/film2.mp4",
    span: 1,
    
  },
  {
    title: "",
    thumb: "/videos/th4.1.png",
    preview: "/videos/podglad4.mp4",
    full: "/videos/film4.mp4",
    span: 1,
    objectPosition: "center 75%",
  },
  {
    title: "",
    thumb: "/videos/th3.png",
    preview: "/videos/podglad3.mp4",
    full: "/videos/film3.mp4",
    span: 2,
  },
  {
    title: "",
    thumb: "/videos/th5.png",
    preview: "/videos/podglad5.mp4",
    full: "/videos/film5.mp4",
    span: 1,
  },
  {
    title: "",
    thumb: "/videos/th6.png",
    preview: "/videos/podglad6.mp4",
    full: "/videos/film6.mp4",
    span: 1,
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
         {/* TITLE */}
    <h2 className="mb-20 text-xl md:text-3xl font-medium tracking-wide text-black">
      Featured Projects
    </h2>

        {/* GRID WRAPPER – bez kaskady, tylko miękkie globalne wejście */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: { duration: 0 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[180px]"
        >

          {projects.map((p, i) => {
            const spanClass = p.span === 2 ? "row-span-2" : "row-span-1";
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={i}
                className={`relative rounded-2xl overflow-hidden border border-black/5 cursor-pointer ${spanClass}`}

                /* ULTRA ORGANICZNE, ŁAGODNE WEJŚCIE dla każdego kafelka */
                initial={{
                  opacity: 0,
                  y: 180,
                  scale: 0.96,
                  filter: "blur(1px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 2.6,
                  ease: [0.22, 1, 0.36, 1], // mega miękki ease (cinematic)
                }}

                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActive(p.full)}
              >

                {/* MINIATURA - widoczna gdy nie hover */}
             <img
  src={p.thumb}
  alt={p.title}
  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400
    ${isHovered ? "opacity-0" : "opacity-100"}
    ${i === 2 ? "object-[center_10%]" : "object-center"}
  `}
/>

                {/* PODGLĄD VIDEO - widoczny tylko na hover */}
                <video
  src={p.preview}
  muted
  loop
  playsInline
  preload="metadata"
  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
    ${isHovered ? "opacity-100" : "opacity-0"}`}
  ref={(el) => {
    if (!el) return;
    if (isHovered) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }}
/>

                {/* TYTUŁ – biały, znika dopiero gdy preview się odpala */}
                <div
                  className={`absolute bottom-4 left-4 text-white text-xl font-semibold transition-opacity duration-300
                    ${isHovered ? "opacity-0" : "opacity-100"}`}
                >
                  {p.title}
                </div>

              </motion.div>
            );
          })}

        </motion.div>
      </div>

      {/* FULLSCREEN VIDEO VIEWER */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[3px] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.video
              src={active}
              autoPlay
              controls
              className="w-full max-w-5xl max-h-[85vh] rounded-xl"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
