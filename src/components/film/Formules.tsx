"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FORMULES } from "@/data/videos";

export default function Formules() {
  const [index, setIndex] = useState(1);
  const current = FORMULES[index];

  return (
    <section id="formules" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-28 bg-[linear-gradient(180deg,var(--stage),transparent)]" />
      <div className="absolute inset-0">
        <video
          src="/videos/hero.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full scale-105 object-cover opacity-35 blur-[2px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(28,17,14,.35),rgba(18,12,10,.88))]" />
        <div className="grain-layer" />
      </div>

      <div className="relative z-[1] mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-[5%] py-24">
        <p className="eyebrow mb-6 text-center text-cream/55">05 — Trois points de départ</p>

        <div className="relative mb-10 h-[clamp(2.8rem,7vw,5rem)] text-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={current.name}
              className="display absolute inset-x-0 text-[clamp(2.4rem,6.5vw,5rem)] text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {current.name}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {FORMULES.map((f, i) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`group relative aspect-[4/5] overflow-hidden border text-left transition duration-500 ${
                i === index ? "border-red" : "border-line-strong opacity-75 hover:opacity-100"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
              />
              <div className="absolute inset-0 bg-stage/50" />
              {f.badge && (
                <span className="absolute left-3 top-3 bg-red px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white">
                  Le plus demandé
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cream/55">{f.label}</p>
                <p className="display mt-1 text-2xl normal-case tracking-tight text-white">{f.name}</p>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={current.id}
            className="mx-auto mt-8 w-full max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {current.points.map((point, i) => (
              <li
                key={point}
                className="grid grid-cols-[2rem_1fr] gap-4 border-t border-line py-3 font-mono text-[11px] tracking-[0.06em] text-cream/75"
              >
                <span className="text-sand">{String(i + 1).padStart(2, "0")}</span>
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <div className="mt-10 flex justify-center">
          <a href="#contact" className="btn btn-primary">
            Demander un devis →
          </a>
        </div>
      </div>
    </section>
  );
}
