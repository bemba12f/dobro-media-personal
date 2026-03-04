"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function PlayBubble() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [rotation, setRotation] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest < 250);
  });

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="bubble"
            onClick={() => setOpen(true)}
            className="
            fixed 
            left-1/2 -translate-x-1/2 
            top-[63vh] 
            md:left-auto md:translate-x-0 
            md:right-[20vw] md:top-[60vh] 
            z-40 cursor-pointer
            "
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.68 }}
            transition={{ duration: 0.8, ease: [0.52, 1, 0.36, 1] }}
          >
            <motion.div
              onHoverStart={() => setRotation((r) => r + 120)}
              className="relative w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full bg-black flex items-center justify-center"
            >
              <motion.div
                className="absolute inset-[-18px] border border-black/80"
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                style={{
                  borderRadius: "52% 48% 56% 44% / 58% 52% 48% 42%",
                }}
              />

              <motion.div
                className="absolute inset-[-10px] border border-black/60"
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                style={{
                  borderRadius: "48% 52% 50% 50% / 46% 54% 52% 48%",
                }}
              />

              <div className="relative z-10 w-full h-full rounded-full bg-black flex items-center justify-center">
                <motion.svg
                  width="108"
                  height="108"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="ml-1"
                  animate={{ rotate: rotation }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <path d="M8 5v14l11-7z" />
                </motion.svg>
              </div>
            </motion.div>

            <motion.p
              className="mt-8 text-center text-sm text-black/90 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Watch my 70s showreel
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white via-white to-neutral-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />

            <motion.button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 z-50 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-xl"
            >
              ✕
            </motion.button>

            <motion.video
              src="/videos/70s.mp4"
              autoPlay
              controls
              className="relative z-40 w-full max-w-5xl max-h-[85vh] rounded-xl shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}