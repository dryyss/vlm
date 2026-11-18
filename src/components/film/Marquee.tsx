"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/useFilmScroll";

export default function Marquee({
  items,
  speed = 28,
  reverse = false,
}: {
  items: string[];
  speed?: number;
  reverse?: boolean;
}) {
  const x = useMotionValue(0);
  const track = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useAnimationFrame((_, delta) => {
    if (reduced || !track.current) return;
    const width = track.current.scrollWidth / 2 || 1;
    let current = x.get();
    if (reverse && current === 0) current = -width;
    const next = reverse ? current + (speed * delta) / 1000 : current - (speed * delta) / 1000;
    if (!reverse && next <= -width) x.set(next + width);
    else if (reverse && next >= 0) x.set(next - width);
    else x.set(next);
  });

  const content = [...items, ...items];

  return (
    <div className="overflow-hidden bg-stage-2/70 py-6" aria-hidden>
      <motion.div ref={track} className="marquee-track gap-10 px-4" style={{ x }}>
        {content.map((item, i) => (
          <span key={`${item}-${i}`} className="display flex items-center gap-4 text-[clamp(2rem,6vw,4.8rem)] text-cream/90">
            <span className="text-[0.35em] text-red">●</span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
