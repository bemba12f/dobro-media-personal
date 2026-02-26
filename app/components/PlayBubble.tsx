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

    document.body.style.overflow = "hidden"; // prevent scroll
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
            className="fixed right-94 top-[65vh] z-40 cursor-pointer -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.68 }}
            transition={{ duration: 4.2, ease: [0.52, 1, 0.36, 1] }}
          >
            <motion.div
              onHoverStart={() => setRotation((r) => r + 120)}
              className="relative w-44 h-44 rounded-full bg-black flex items-center justify-center"
            >
              <motion.div
                className="absolute inset-[-18px] border border-black/80"
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                style={{
                  borderRadius:
                    "52% 48% 56% 44% / 58% 52% 48% 42%",
                }}
              />

              <motion.div
                className="absolute inset-[-10px] border border-black/60"
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                style={{
                  borderRadius:
                    "48% 52% 50% 50% / 46% 54% 52% 48%",
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
              className="mt-11 text-center text-sm text-black/90 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Watch my 70s showreel
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Soft gradient overlay for elegance */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white via-white to-neutral-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />

            {/* CLOSE BUTTON */}
            <motion.button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 z-50 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-xl hover:scale-105 transition"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              aria-label="Close video"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>

            {/* VIDEO */}
            <motion.video
              src="/videos/70s.mp4"
              autoPlay
              controls
              className="relative z-40 w-full max-w-5xl max-h-[85vh] rounded-xl shadow-2xl"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}