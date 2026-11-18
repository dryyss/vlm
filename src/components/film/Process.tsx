"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/data/videos";

export default function Process() {
  return (
    <section id="prestations" className="relative bg-stage px-[5%] py-[clamp(4.5rem,9vw,7rem)]">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">04 — Comment ça se passe</p>
          <h2 className="display max-w-[10ch] text-[clamp(2.2rem,5.5vw,4.4rem)] text-cream">
            Quatre plans
          </h2>
        </motion.div>
        <motion.p
          className="max-w-[34ch] text-[0.95rem] leading-[1.7] text-cream/60"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Un déroulé clair, du premier échange à la livraison des fichiers.
        </motion.p>
      </div>

      <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
        {PROCESS.map((step, i) => (
          <motion.article
            key={step.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-line px-0 py-8 md:border-l md:border-t-0 md:px-6 md:py-2 first:md:border-l-0"
          >
            <div className="mb-5 flex items-baseline gap-3">
              <span className="display text-[clamp(1.8rem,3vw,2.8rem)] text-red">{step.n}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sand">{step.label}</span>
            </div>
            <h3 className="display mb-4 text-[clamp(1.8rem,3.2vw,2.8rem)] text-cream">{step.title}</h3>
            <p className="max-w-[34ch] text-[0.95rem] leading-[1.7] text-cream/65">{step.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 grid gap-3 border border-line p-6 md:grid-cols-3 md:p-8">
        {[
          ["Cadrage", "Une prise de vue pensée pour votre activité, votre lieu, votre équipe."],
          ["Étalonnage", "Un rendu cohérent, aligné avec votre image."],
          ["Montage", "Institutionnel ou dynamique — le rythme suit l'objectif."],
        ].map(([title, text]) => (
          <div key={title}>
            <h4 className="display mb-2 text-lg text-cream">{title}</h4>
            <p className="text-[0.9rem] leading-[1.65] text-cream/55">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
