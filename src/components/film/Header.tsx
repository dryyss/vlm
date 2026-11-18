"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#clip", label: "Concerts", n: "01" },
  { href: "#prestations", label: "Prestations", n: "02" },
  { href: "#formules", label: "Formules", n: "03" },
  { href: "#about", label: "À propos", n: "04" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center justify-between gap-6 border-b px-[5%] py-4 transition-[background,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-line bg-stage/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#accueil" className="display text-[1.55rem] normal-case tracking-[-0.03em] text-white">
          vlm.
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-cream/55 transition hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary py-2.5 px-4 text-[10px]">
            Me contacter
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
        >
          <span className="h-[1.5px] w-5 bg-cream" />
          <span className="h-[1.5px] w-5 bg-cream" />
          <span className="h-[1.5px] w-5 bg-cream" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Fermer"
              className="fixed inset-0 z-[90] bg-ink/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[95] flex h-dvh w-[min(86vw,360px)] flex-col bg-stage-2 px-8 pb-10 pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display flex items-center justify-between border-b border-line py-5 text-[1.4rem] text-cream"
                >
                  {item.label}
                  <span className="font-mono text-[12px] font-normal normal-case tracking-normal text-cream/35">
                    {item.n}
                  </span>
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-8 py-3.5">
                Me contacter
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
