"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 0.95], [1, 0.55, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.18]);
  const wash = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative z-[2] flex min-h-[120svh] items-end overflow-hidden bg-transparent px-[5%] pb-36 pt-36"
    >
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <video
          src="/videos/hero.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-75"
        />
      </motion.div>
      <div className="film-vignette absolute inset-0" />
      <div className="grain-layer opacity-40" />

      {/* Always-on soft exit — no hard seam */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[48%] bg-[linear-gradient(180deg,transparent_0%,rgba(28,17,14,.35)_35%,rgba(28,17,14,.82)_68%,var(--stage)_100%)]" />
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[70%] bg-[linear-gradient(180deg,transparent,var(--stage))]"
        style={{ opacity: wash }}
      />

      <motion.div className="relative z-[3] w-full max-w-5xl" style={{ opacity }}>
        <motion.div
          className="mb-7 flex items-center gap-3.5"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-px w-10 bg-red" />
          <p className="eyebrow text-cream/75">Vidéographe live · concerts & événementiel</p>
        </motion.div>

        <motion.h1
          className="display text-[clamp(3.2rem,10vw,8.8rem)] text-white drop-shadow-[0_10px_40px_rgba(0,0,0,.45)]"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Capter
          <br />
          <span className="text-red">l&apos;instant</span>
        </motion.h1>

        <motion.div
          className="mt-10 grid max-w-3xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="max-w-[42ch] text-[1.05rem] leading-[1.75] text-cream/80">
            Je filme des concerts pour en garder une trace — et pour la partager avec celles et ceux qui ne peuvent pas être dans la salle.
          </p>
          <div className="flex flex-col gap-4 md:items-start">
            <div className="flex flex-wrap gap-3">
              <a href="#clip" className="btn btn-primary">
                Voir les vidéos
              </a>
              <a href="#formules" className="btn btn-ghost">
                Formules & devis
              </a>
            </div>
            <p className="font-mono text-[10px] tracking-[0.14em] text-cream/45">
              Réponse sous 48 h · Devis gratuit
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
