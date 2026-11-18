"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { VIDEOS } from "@/data/videos";
import { useActiveSection, useScrollProgress } from "@/hooks/useFilmScroll";
import { SCENES } from "@/data/scenes";
import SceneCut from "@/components/film/SceneCut";
import SmoothScroll from "@/components/SmoothScroll";
import Intro from "@/components/film/Intro";
import SideWheel from "@/components/film/SideWheel";
import Hero from "@/components/film/Hero";
import Pourquoi from "@/components/film/Pourquoi";
import Featured from "@/components/film/Featured";
import Concerts from "@/components/film/Concerts";
import Process from "@/components/film/Process";
import Formules from "@/components/film/Formules";
import About from "@/components/film/About";
import Contact from "@/components/film/Contact";
import Footer from "@/components/film/Footer";
import Marquee from "@/components/film/Marquee";

export default function Portfolio() {
  const [intro, setIntro] = useState(true);
  const progress = useScrollProgress();
  const sceneIds = useMemo(() => SCENES.map((s) => s.id), []);
  const active = useActiveSection(sceneIds);

  const artists = useMemo(
    () => Array.from(new Set(VIDEOS.filter((v) => v.type === "live").map((v) => v.artist))).slice(0, 18),
    [],
  );

  useEffect(() => {
    document.body.style.overflow = intro ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [intro]);

  return (
    <SmoothScroll>
      <motion.div
        className="film-progress"
        style={{ scaleX: progress, opacity: intro ? 0 : 1 }}
        aria-hidden
      />

      <Intro open={intro} onEnter={() => setIntro(false)} />

      <div
        className={`transition-[filter,opacity] duration-700 ${
          intro ? "pointer-events-none opacity-40 blur-[2px]" : "opacity-100"
        }`}
      >
        <div className="overflow-hidden whitespace-nowrap border-b border-line bg-stage-3 py-2.5 font-mono text-[10px] tracking-[0.16em] text-cream/70">
          <div className="inline-flex animate-[tick_36s_linear_infinite]">
            <span className="pr-10">
              CAPTATION LIVE — MONTAGE — ÉTALONNAGE — ACCRÉDITATIONS — RENDRE LES CONCERTS ACCESSIBLES —
            </span>
            <span className="pr-10">
              CAPTATION LIVE — MONTAGE — ÉTALONNAGE — ACCRÉDITATIONS — RENDRE LES CONCERTS ACCESSIBLES —
            </span>
          </div>
        </div>

        <SideWheel active={active} />
        <SceneCut active={active} enabled={!intro} />
        <main>
          <Hero />
          <Pourquoi />
          <Featured />
          <Marquee items={artists} speed={34} />
          <Concerts />
          <Marquee items={["Prestations", "Cadrage", "Étalonnage", "Montage"]} speed={40} reverse />
          <Process />
          <Formules />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
