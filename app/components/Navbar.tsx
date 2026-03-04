"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setShowTopBtn(currentY > 300);

      if (currentY > lastY && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="#" className="flex items-center">
            {showLogo && (
              <img
                src="/logo150px2.gif"
                alt="Wojtek PF Szymanski"
                className="h-[52px] w-auto"
              />
            )}
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-[9.5rem]">
            {[
              { name: "about", href: "#about" },
              { name: "portfolio", href: "#portfolio" },
              { name: "contact", href: "#contact" },
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 4, y: -2 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
              >
                <Link
                  href={item.href}
                  className="text-black font-light tracking-[0.35em] text-xs hover:opacity-60 transition-opacity duration-200"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
            className="fixed top-20 left-0 w-full bg-white z-40 flex flex-col items-center gap-8 py-10 md:hidden"
          >
            {[
              { name: "about", href: "#about" },
              { name: "portfolio", href: "#portfolio" },
              { name: "contact", href: "#contact" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-black text-lg tracking-[0.3em]"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACK TO TOP */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{
          opacity: showTopBtn ? 1 : 0,
          scale: showTopBtn ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50 bg-black text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center"
      >
        ↑
      </motion.button>
    </>
  );
}