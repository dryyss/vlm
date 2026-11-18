"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Nom: ${data.get("nom")}\nEmail: ${data.get("email")}\nType: ${data.get("type")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:vlmprod@gmail.com?subject=${encodeURIComponent("Demande VLMPROD")}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-stage px-[5%] py-[clamp(4.5rem,9vw,7rem)]">
      <div className="grid gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">07 — Contact</p>
          <h2 className="display mb-6 text-[clamp(2.2rem,5vw,4rem)] text-cream">
            Parlons de
            <br />
            votre projet
          </h2>
          <p className="max-w-[38ch] text-[1rem] leading-[1.7] text-cream/65">
            Booking, devis, ou simple question — un message suffit.
          </p>

          <dl className="mt-10 max-w-md">
            <div className="meta-row">
              <dt>Email</dt>
              <dd>
                <a href="mailto:vlmprod@gmail.com" className="transition hover:text-red">
                  vlmprod@gmail.com
                </a>
              </dd>
            </div>
            <div className="meta-row">
              <dt>Base</dt>
              <dd>Paris · Déplacements possibles</dd>
            </div>
            <div className="meta-row">
              <dt>Délai</dt>
              <dd>Réponse sous 48 h</dd>
            </div>
            <div className="meta-row">
              <dt>Coords</dt>
              <dd className="font-mono text-[0.85rem]">48° 51&apos; N · 2° 21&apos; E</dd>
            </div>
          </dl>

          <a
            href="https://www.instagram.com/vln_4095"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-line mt-8 inline-flex"
          >
            Écrire en DM sur Instagram →
          </a>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 border border-line bg-stage-2/60 p-6 md:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-sand">Nom</span>
            <input
              name="nom"
              required
              placeholder="Votre nom"
              className="w-full border border-line bg-stage px-4 py-3.5 text-[0.95rem] outline-none transition focus:border-red"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-sand">Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="vous@exemple.com"
              className="w-full border border-line bg-stage px-4 py-3.5 text-[0.95rem] outline-none transition focus:border-red"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-sand">Type</span>
            <select
              name="type"
              className="w-full appearance-none border border-line bg-stage px-4 py-3.5 text-[0.95rem] outline-none transition focus:border-red"
            >
              <option>Booking concert</option>
              <option>Devis prestation</option>
              <option>Autre</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-sand">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Décrivez le projet, la date, le lieu…"
              className="w-full resize-y border border-line bg-stage px-4 py-3.5 text-[0.95rem] leading-relaxed outline-none transition focus:border-red"
            />
          </label>
          <button type="submit" className="btn btn-primary mt-1 py-4">
            Envoyer →
          </button>
        </motion.form>
      </div>
    </section>
  );
}
