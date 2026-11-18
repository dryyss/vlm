"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/film/Reveal";

export default function Featured() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.06]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.45], [48, 0]);
  const contentOp = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative z-[2] -mt-16 bg-stage pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-28 bg-[linear-gradient(180deg,var(--stage),transparent)]" />

      <div className="relative h-[min(86vh,860px)] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y, scale }}>
          <div
            className="absolute inset-[-12%] bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
          />
          <video
            src="/videos/hero.mp4"
            poster="/images/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,17,14,.94)_0%,rgba(28,17,14,.55)_48%,rgba(28,17,14,.18)_100%)]" />
        <div className="grain-layer" />

        <motion.div className="absolute bottom-[9%] left-[5%] max-w-xl" style={{ y: contentY, opacity: contentOp }}>
          <p className="eyebrow mb-4 text-red">02 — Projet à la une</p>
          <h2 className="display text-[clamp(2rem,5vw,4rem)] text-white">
            Tyler, The Creator
            <br />
            Rock en Seine
          </h2>
          <dl className="mt-7 max-w-md">
            <div className="meta-row">
              <dt>Type</dt>
              <dd>Live Session + Édit Live</dd>
            </div>
            <div className="meta-row">
              <dt>Lieu</dt>
              <dd>Rock en Seine · Paris</dd>
            </div>
            <div className="meta-row">
              <dt>Année</dt>
              <dd>2026</dd>
            </div>
          </dl>
          <p className="mt-6 max-w-[46ch] text-[0.98rem] leading-[1.7] text-cream/72">
            Captation intégrale, deux formats livrés : une Live Session brute pour le soir même, un Édit Live monté pour la suite.
          </p>
        </motion.div>
      </div>

      <div className="mx-[5%] mt-6 grid gap-3 md:grid-cols-3">
        {[
          ["01", "Captation", "Prise de vue mobile, au plus près du plateau, sans gêner public ni équipe."],
          ["02", "Étalonnage", "Rendu cohérent d'un titre à l'autre, fidèle à la lumière de la salle."],
          ["03", "Montage", "Deux rythmes : le brut qui laisse respirer, l'édit qui donne envie de revoir."],
        ].map(([n, title, text], i) => (
          <Reveal key={n} delay={i * 0.08} className="border border-line/80 bg-stage-2/80 px-8 py-10 backdrop-blur-sm">
            <p className="mb-5 font-mono text-[10px] tracking-[0.18em] text-sand">{n}</p>
            <h3 className="display mb-3 text-[1.35rem] text-cream">{title}</h3>
            <p className="text-[0.92rem] leading-[1.65] text-cream/60">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
