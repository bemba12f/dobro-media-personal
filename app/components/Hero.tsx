// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lineAnimation = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
};

export default function Hero() {
  return (
    <section className="h-[80vh] bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-70 text-black">
        <h1 className={`${openSans.className} text-left`}>
          {/* LINE 1 */}
          <motion.span
            {...lineAnimation}
            transition={{ duration: 1, ease: "easeOut" }}
            className="
              block
              text-2xl sm:text-3xl md:text-7xl
              font-semibold
              leading-tight
            "
          >
            hi, I'm Wojtek
          </motion.span>

          {/* LINE 2 */}
          <motion.span
            {...lineAnimation}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
            className="
              block mt-4
              text-3xl sm:text-4xl md:text-6xl
              font-normal
              leading-[1.1]
            "
          >
            {" "}
            <span className="font-normal">
              I specialize in motion picture
            </span>
          </motion.span>

          {/* LINE 3 */}
          <motion.span
            {...lineAnimation}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
            className="
              block mt-3
              text-3xl sm:text-4xl md:text-6xl
              font-normal
              tracking-wide
              leading-relaxed
            "
          ><span className="italic font-normal">
              welcome to my world
            </span>
            
          </motion.span>
        </h1>
      </div>
    </section>
  );
}
