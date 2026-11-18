"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { VIDEOS, type VideoType } from "@/data/videos";
import { formatDate } from "@/hooks/useFilmScroll";

export default function Concerts() {
  const [tab, setTab] = useState<VideoType>("live");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VIDEOS.filter((v) => {
      if (v.type !== tab) return false;
      if (!q) return true;
      return v.artist.toLowerCase().includes(q) || v.lieu.toLowerCase().includes(q);
    }).slice(0, 12);
  }, [query, tab]);

  const current = filtered.find((v) => v.id === active) ?? null;

  return (
    <section id="clip" className="relative bg-stage px-[5%] py-[clamp(4.5rem,9vw,7rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(28,17,14,.65),transparent)]" />
      <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">03 — Concerts</p>
          <h2 className="display text-[clamp(2.4rem,6vw,5rem)] text-cream">Library</h2>
        </motion.div>
        <motion.p
          className="max-w-[34ch] text-[0.95rem] leading-[1.7] text-cream/60"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Chaque concert filmé, brut ou monté. Feuilletez comme une collection de rushes.
        </motion.p>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Artiste ou lieu"
          className="w-[min(280px,75vw)] border border-line-strong bg-stage-2 px-4 py-3 font-mono text-[11px] tracking-[0.06em] text-cream outline-none transition focus:border-red"
        />
        <div className="flex border border-line-strong">
          {(
            [
              ["live", "Live Sessions"],
              ["edit", "Édits Live"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] transition ${
                tab === key ? "bg-cream text-stage" : "text-cream/55 hover:text-cream"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="font-mono text-[10px] tracking-[0.12em] text-sand">
          {String(filtered.length).padStart(2, "0")} titres
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {filtered.map((v, i) => (
          <motion.button
            key={v.id}
            type="button"
            onClick={() => setActive(v.id)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: (i % 4) * 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group/tile relative aspect-[9/16] overflow-hidden border border-line text-left"
            onMouseEnter={(e) => {
              const vid = e.currentTarget.querySelector("video");
              void vid?.play().catch(() => undefined);
            }}
            onMouseLeave={(e) => {
              const vid = e.currentTarget.querySelector("video");
              if (!vid) return;
              vid.pause();
              vid.currentTime = 0;
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover/tile:scale-105"
              style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
            />
            <video
              src="/videos/hero.mp4"
              muted
              loop
              playsInline
              preload="none"
              className="tile-video pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,12,10,.9),transparent_52%)]" />
            <span className="absolute left-2.5 top-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cream/80">
              {v.type === "live" ? "Live" : "Édit"}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <p className="display text-[0.98rem] normal-case tracking-[-0.02em] text-white">{v.artist}</p>
              <p className="mt-1 font-mono text-[9.5px] tracking-[0.04em] text-cream/55">
                {v.lieu} · {formatDate(v.date)}
              </p>
            </div>
            <span className="absolute inset-[10px] border border-red/0 transition group-hover/tile:border-red/80" />
          </motion.button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 font-mono text-[12px] tracking-[0.08em] text-sand">Aucun rush pour ces filtres.</p>
      )}

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/88 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative w-full max-w-lg overflow-hidden border border-line bg-stage"
              initial={{ clipPath: "inset(50% 0 50% 0)" }}
              animate={{ clipPath: "inset(0% 0 0% 0)" }}
              exit={{ clipPath: "inset(50% 0 50% 0)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/videos/hero.mp4"
                poster="/images/hero-poster.jpg"
                controls
                autoPlay
                playsInline
                className="aspect-[9/16] w-full bg-black object-cover"
              />
              <div className="flex items-start justify-between gap-4 border-t border-line p-5">
                <div>
                  <p className="display text-xl normal-case tracking-tight text-cream">{current.artist}</p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-sand">
                    {current.lieu} · {formatDate(current.date)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="font-mono text-[10px] uppercase tracking-[0.14em] text-cream/60 hover:text-cream"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
