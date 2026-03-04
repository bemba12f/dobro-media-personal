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
    <section className="h-[70vh] md:h-[80vh] bg-white flex items-start md:block">
      <div className="max-w-7xl mx-auto px-6 pt-42 md:pt-70 text-black w-full">
        <h1 className={`${openSans.className} text-justify md:text-left`}>
          
          {/* LINE 1 */}
          <motion.span
            {...lineAnimation}
            transition={{ duration: 1, ease: "easeOut" }}
            className="
              block
              text-3xl sm:text-4xl md:text-6xl
              font-bold
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
              leading-tight
            "
          >
            I specialize in motion picture
          </motion.span>

          {/* LINE 3 */}
          <motion.span
            {...lineAnimation}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
            className="
              block mt-4
              text-3xl sm:text-4xl md:text-6xl
              font-normal
              tracking-wide
              leading-tight
            "
          >
            <span className="italic">welcome to my world</span>
          </motion.span>

        </h1>
      </div>
    </section>
  );
}