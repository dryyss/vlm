export default function Footer() {
  return (
    <footer className="border-t border-line bg-stage px-[5%] py-14">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div>
          <p className="display text-[clamp(3.2rem,10vw,7rem)] normal-case tracking-[-0.05em] text-white">vlm.</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-sand">
            Valentin Moldovan · VLMPROD
          </p>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.14em] text-cream/55">
          <a href="https://www.instagram.com/vln_4095" target="_blank" rel="noopener noreferrer" className="hover:text-cream">
            Instagram
          </a>
          <a href="https://www.tiktok.com/@vln_4095" target="_blank" rel="noopener noreferrer" className="hover:text-cream">
            TikTok
          </a>
          <a href="https://www.youtube.com/@vln_4095" target="_blank" rel="noopener noreferrer" className="hover:text-cream">
            YouTube
          </a>
          <a href="https://vimeo.com/vln_4095" target="_blank" rel="noopener noreferrer" className="hover:text-cream">
            Vimeo
          </a>
        </div>
      </div>
      <p className="mt-12 font-mono text-[10px] tracking-[0.1em] text-cream/35">
        © 2026 VLMPROD — Mentions légales sur demande
      </p>
    </footer>
  );
}
