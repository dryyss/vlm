"use client";

import { motion } from "framer-motion";
import { SCENES } from "@/data/scenes";

const STEP = 44; // px between items on the wheel
const ANGLE = 24; // degrees of rotation per step away from the center

export default function SideWheel({ active }: { active: number }) {
  return (
    <>
      <a
        href="#accueil"
        className="display fixed left-[5%] top-5 z-50 text-[1.55rem] normal-case tracking-[-0.03em] text-white mix-blend-difference"
      >
        vlm.
      </a>

      <nav
        aria-label="Sections"
        className="fixed right-3 top-1/2 z-50 h-[264px] w-[150px] -translate-y-1/2 [perspective:600px] md:right-6"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-px w-6 -translate-y-1/2 bg-red"
        />

        <ul className="absolute inset-0 [transform-style:preserve-3d] [mask-image:linear-gradient(180deg,transparent_0%,#000_28%,#000_72%,transparent_100%)]">
          {SCENES.map((item, i) => {
            const d = i - active;
            const isActive = d === 0;
            const hidden = Math.abs(d) > 2;
            return (
              <motion.li
                key={item.id}
                className="absolute right-8 top-1/2 -mt-[22px] flex h-[44px] items-center"
                initial={false}
                animate={{
                  y: d * STEP,
                  rotateX: -d * ANGLE,
                  opacity: hidden ? 0 : 1 - Math.abs(d) * 0.32,
                  scale: isActive ? 1 : 0.88,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                style={{ transformOrigin: "right center", pointerEvents: hidden ? "none" : "auto" }}
              >
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-baseline gap-2 whitespace-nowrap font-mono uppercase tracking-[0.16em] transition-colors ${
                    isActive ? "text-[11px] text-cream" : "text-[10px] text-cream/50 hover:text-cream"
                  }`}
                >
                  <span className={isActive ? "text-red" : "text-cream/35"}>{item.n}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
