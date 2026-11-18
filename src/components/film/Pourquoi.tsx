"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BEATS = [
  { text: "Un concert n'existe qu'une fois.", accent: false },
  { text: "Je filme pour en garder une trace.", accent: false },
  { text: "Je monte pour la partager.", accent: true },
];

export default function Pourquoi() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [0.7, 0.85, 0.55, 0.25]);
  const eyebrowOp = useTransform(scrollYProgress, [0, 0.06], [0.35, 1]);

  const b0 = useTransform(scrollYProgress, [0, 0.18], [0.35, 1]);
  const b1 = useTransform(scrollYProgress, [0.22, 0.42], [0.18, 1]);
  const b2 = useTransform(scrollYProgress, [0.46, 0.68], [0.14, 1]);
  const y0 = useTransform(scrollYProgress, [0, 0.18], [28, 0]);
  const y1 = useTransform(scrollYProgress, [0.22, 0.42], [36, 0]);
  const y2 = useTransform(scrollYProgress, [0.46, 0.68], [36, 0]);
  const opacities = [b0, b1, b2];
  const ys = [y0, y1, y2];

  const rail0 = useTransform(scrollYProgress, [0.05, 0.28], [0, 1]);
  const rail1 = useTransform(scrollYProgress, [0.28, 0.52], [0, 1]);
  const rail2 = useTransform(scrollYProgress, [0.52, 0.78], [0, 1]);
  const rails = [rail0, rail1, rail2];

  return (
    <section ref={ref} className="relative z-[1] -mt-[30vh] h-[300vh] bg-stage">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden px-[5%]">
        <div className="pointer-events-none absolute inset-0 bg-stage" />
        <motion.div className="pointer-events-none absolute inset-0" style={{ opacity: bgOpacity }}>
          <motion.div className="absolute inset-[-14%]" style={{ y: bgY }}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/hero-poster.jpg)",
                filter: "blur(6px) saturate(1)",
              }}
            />
            <video
              src="/videos/hero.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-55"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,17,14,.2),rgba(28,17,14,.62)_45%,rgba(28,17,14,.88))]" />
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,var(--stage),transparent)]" />
        <div className="grain-layer opacity-30" />

        <div className="relative z-[1] w-full max-w-5xl">
          <motion.p className="eyebrow mb-10" style={{ opacity: eyebrowOp }}>
            01 — Pourquoi
          </motion.p>

          <div className="flex flex-col gap-7">
            {BEATS.map((beat, i) => (
              <motion.p
                key={beat.text}
                className={`display max-w-[18ch] text-[clamp(1.7rem,4.4vw,3.6rem)] ${
                  beat.accent ? "text-red" : "text-cream"
                }`}
                style={{
                  paddingLeft: `${i * 7}%`,
                  opacity: opacities[i],
                  y: ys[i],
                }}
              >
                {beat.text}
              </motion.p>
            ))}
          </div>

          <div className="mt-16 grid max-w-md grid-cols-3 gap-2">
            {rails.map((rail, i) => (
              <div key={i} className="h-[2px] overflow-hidden bg-line-strong">
                <motion.div className="h-full origin-left bg-red" style={{ scaleX: rail }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
