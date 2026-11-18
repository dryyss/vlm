"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SCENES } from "@/data/scenes";
import { usePrefersReducedMotion } from "@/hooks/useFilmScroll";

const CUT = 0.85; // seconds for the full close → open

/**
 * Scene change: ambient stage light that shifts color per section,
 * plus a quick "cut" (black bars close, scene title, bars open) when the section changes.
 */
export default function SceneCut({ active, enabled }: { active: number; enabled: boolean }) {
  const reduced = usePrefersReducedMotion();
  const [cut, setCut] = useState<{ key: number; scene: number } | null>(null);
  const [count, setCount] = useState(0);
  const [prevActive, setPrevActive] = useState(active);

  // Trigger a cut when the scene changes (state adjusted during render, no effect needed).
  if (active !== prevActive) {
    setPrevActive(active);
    if (enabled && !reduced) {
      setCount(count + 1);
      setCut({ key: count + 1, scene: active });
    }
  }

  const scene = SCENES[active];

  return (
    <>
      {/* Décor: ambient light that changes with each scene */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 mix-blend-screen"
        initial={false}
        animate={{
          background: `radial-gradient(60% 50% at 85% 15%, ${scene.light} 0%, rgba(0,0,0,0) 70%)`,
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Cut: letterbox bars sweep shut and reopen on the new scene */}
      <AnimatePresence>
        {cut && (
          <motion.div
            key={cut.key}
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[80]"
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-x-0 top-0 bg-ink"
              initial={{ height: "0%" }}
              animate={{ height: ["0%", "50%", "50%", "0%"] }}
              transition={{ duration: CUT, times: [0, 0.38, 0.55, 1], ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 bg-ink"
              initial={{ height: "0%" }}
              animate={{ height: ["0%", "50%", "50%", "0%"] }}
              transition={{ duration: CUT, times: [0, 0.38, 0.55, 1], ease: [0.76, 0, 0.24, 1] }}
              onAnimationComplete={() => setCut((c) => (c?.key === cut.key ? null : c))}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cream"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: CUT, times: [0, 0.3, 0.4, 0.55, 0.65] }}
            >
              <span className="text-red">Scène {SCENES[cut.scene].n}</span>
              <span className="h-px w-8 bg-cream/40" />
              <span>{SCENES[cut.scene].label}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
