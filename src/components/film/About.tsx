"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";

export default function About() {
  const card = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = card.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="about" className="relative bg-stage px-[5%] py-[clamp(4.5rem,9vw,7rem)]">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          ref={card}
          onMouseMove={onMove}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="relative aspect-[4/5] border border-line-strong bg-stage-2"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(18,12,10,.75))]" />
          <div className="absolute inset-4 border border-cream/25 p-4">
            <div className="flex items-start justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/70">All access</p>
              <span className="h-2 w-2 rounded-full bg-red" style={{ animation: "pulseRec 1.3s ease-in-out infinite" }} />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="display text-3xl normal-case tracking-tight text-white">vlm.</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cream/60">
                Valentin Moldovan · Live videographer
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">06 — À propos</p>
          <h2 className="display mb-7 max-w-[12ch] text-[clamp(2rem,4vw,3.4rem)] text-cream">
            VLM, vidéographe live
          </h2>
          <p className="mb-5 max-w-[54ch] text-[1.02rem] leading-[1.75] text-cream/72">
            Ce qui a commencé comme une passion personnelle est devenu une démarche : rendre la musique live accessible à celles et ceux qui n&apos;ont pas les moyens ou la possibilité géographique d&apos;être dans la salle.
          </p>
          <blockquote className="my-8 border-l-2 border-red pl-5">
            <p className="display max-w-[22ch] text-[1.55rem] normal-case tracking-[-0.03em] text-cream">
              « Capter l&apos;instant, pas la performance. »
            </p>
          </blockquote>
          <p className="mb-4 max-w-[54ch] text-[1.02rem] leading-[1.75] text-cream/72">
            Les <strong className="font-semibold text-cream">Live Sessions</strong>, brutes, pour garder l&apos;énergie telle quelle. Les <strong className="font-semibold text-cream">Édits Live</strong>, plus travaillés, pour transformer ces moments en images qu&apos;on a envie de revoir.
          </p>
          <p className="max-w-[54ch] text-[1.02rem] leading-[1.75] text-cream/72">
            Cette double approche sert aussi d&apos;autres projets : cadrage, étalonnage, montage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
