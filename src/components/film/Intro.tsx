"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { formatTimecode } from "@/hooks/useFilmScroll";

type IntroProps = {
  open: boolean;
  onEnter: () => void;
};

export default function Intro({ open, onEnter }: IntroProps) {
  const [ready, setReady] = useState(false);
  const [closing, setClosing] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!open) return;
    const id = window.setInterval(() => setSeconds((s) => s + 0.04), 40);
    return () => window.clearInterval(id);
  }, [open]);

  const enter = () => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(onEnter, 900);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={`fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-stage ${
            closing ? "iris-closed" : "iris-open"
          }`}
          style={{ transition: "clip-path 0.95s cubic-bezier(0.22, 1, 0.36, 1)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-poster.jpg"
              alt=""
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-[2px] saturate-[1.15]"
            />
            <video
              src="/videos/hero.mp4"
              poster="/images/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setReady(true)}
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-[1.5px] saturate-[1.18] transition-opacity duration-700"
              style={{ opacity: ready ? 1 : 0 }}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_48%,rgba(18,12,10,.15),rgba(18,12,10,.72)_78%)]" />
          <div className="film-vignette absolute inset-0" />
          <div className="grain-layer" />

          <div className="absolute left-[5%] top-8 z-[2] flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/55">
            <span className="h-1.5 w-1.5 rounded-full bg-red" style={{ animation: "pulseRec 1.2s ease-in-out infinite" }} />
            REC
            <span className="text-cream/35">{formatTimecode(seconds)}</span>
          </div>

          <div className="absolute right-[5%] top-8 z-[2] font-mono text-[10px] uppercase tracking-[0.18em] text-cream/40">
            48° 51&apos; N · 2° 21&apos; E · Paris
          </div>

          {!ready && (
            <div className="absolute bottom-16 left-0 right-0 z-[2] flex justify-center font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40">
              Buffering rushes…
            </div>
          )}

          {ready && (
            <div className="relative z-[2] flex flex-col items-center gap-6 px-6 text-center">
              <div className="display flex text-[clamp(3.4rem,12vw,9rem)] text-white">
                {"vlm.".split("").map((letter, i) => (
                  <motion.span
                    key={`${letter}-${i}`}
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7 }}
                className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/70"
              >
                Vidéographe live — concerts & événementiel
              </motion.p>
              <motion.button
                type="button"
                onClick={enter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15, duration: 0.6 }}
                className="btn btn-ghost mt-2 border-white/35"
              >
                Enter the cut
              </motion.button>
              <motion.button
                type="button"
                onClick={enter}
                aria-label="Entrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/55"
              >
                <span className="block text-base text-white/50" style={{ animation: "bounceHint 1.8s ease-in-out infinite" }}>
                  ↓
                </span>
              </motion.button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
