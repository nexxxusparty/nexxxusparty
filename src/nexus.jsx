import React, {useEffect, useMemo, useRef, useState} from 'react';

/** Paramètres d'affichage (tunable simplement) */
const CARD_RATIO = 0.44;     // desktop
const CARD_MAX   = 980;      // largeur max (px)
const GAP_MIN    = 12;       // espacement min entre cartes
const GAP_MAX    = 24;       // espacement max
const GAP_RATIO  = 0.020;

// ✅ CORRECTION : Fonction cohérente pour obtenir la largeur viewport
const getViewportWidth = () => {
  if (typeof window === 'undefined') return 1200;
  return window.innerWidth;
};

export default function NexusPage() {
  // ---- Slides (contenu) ----
  const slides = [
    // ==================== ARTISTES (affiche festival) ====================
    {
      id: "artistes",
      label: "Artistes",
      node: (
        <div className="h-[60vh] w-[70vw] max-w-[900px] flex items-center justify-center">
          <div className="h-full aspect-[9/16] max-h-[60vh] rounded-xl overflow-hidden border border-red-700/40 bg-black/60 text-red-700 p-5 md:p-7 flex">
            <div className="m-auto w-full max-w-[92%]">
              <p className="text-[9px] md:text-[10px] tracking-[0.2em] text-red-700/60 uppercase mb-2 text-left">
                artistes
              </p>

              <div className="mb-3 space-y-1.5 text-center">
                {["PLAYBOI CARTI", "KEN CARSON", "NETTSPEND"].map((name) => (
                  <div
                    key={name}
                    className="uppercase leading-none [text-shadow:_0_0_10px_rgba(239,68,68,.15)]"
                    style={{
                      fontSize: "clamp(18px,4.6vw,32px)",
                      letterSpacing: ".02em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>

              <div className="mb-2 space-y-1.5">
                {[
                  ["LIL UZI VERT", "2HOLLIS"],
                  ["NATE SIB", "YOUNG THUG"],
                  ["FUTURE", "TRAVIS SCOTT"],
                  ["DAVID GUETTA", "RIHANNA"],
                ].map((pair, i) => (
                  <div
                    key={i}
                    className="w-full flex items-center justify-center gap-2 uppercase text-center leading-none"
                    style={{fontSize: "clamp(11px,1.9vw,16px)"}}
                  >
                    <span className="tracking-wide">{pair[0]}</span>
                    <span aria-hidden className="mx-1 text-red-700/60 select-none">✦</span>
                    <span className="tracking-wide">{pair[1]}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-x-8 gap-y-2 flex-wrap uppercase mb-2">
                {["JEUNE MORTY","SCH","HAMZA"].map((name) => (
                  <span
                    key={name}
                    className="text-[clamp(9px,1.3vw,12px)] tracking-wide"
                  >
                    {name}
                  </span>
                ))}
              </div>

              <div className="h-px w-full bg-red-700/25 mb-2" />
              <div className="text-center text-[8px] md:text-[9px] tracking-[0.25em] text-red-700/60 uppercase">
                LA LINE UP EST SUCCEPTIBLE D'ÉVOLUER
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "xxx-party",
      label: "XXX Party",
      node: (
        <div className="h-[60vh] w-[70vw] max-w-[900px] flex items-center justify-center">
          <div className="h-full aspect-[9/16] max-h-[60vh] rounded-xl overflow-hidden border border-red-700/40 bg-black/60">
            <div className="h-full w-full bg-gradient-to-br from-red-900/20 to-black flex items-center justify-center text-red-700 text-2xl font-bold">
              XXX PARTY FLYER
            </div>
          </div>
        </div>
      ),
    },

    // ==================== TEASER VIDÉO (9:16) ====================
    {
      id: "teaser",
      label: "Teaser",
      node: (
        <div className="h-[60vh] w-[70vw] max-w-[900px] flex items-center justify-center">
          <div className="h-full aspect-[9/16] max-h-[60vh] rounded-xl overflow-hidden border border-red-700/40 bg-black">
            <div className="h-full w-full flex items-center justify-center text-red-700/60 text-sm">
              [Vidéo Teaser]
            </div>
          </div>
        </div>
      ),
    },

    // ==================== PLAYLIST ====================
    {
      id: "playlist",
      label: "Playlist",
      node: (
        <div className="h-[60vh] w-[70vw] max-w-[900px] flex items-center justify-center">
          <div className="h-full aspect-[9/16] max-h-[60vh] rounded-xl overflow-hidden border border-red-700/40 bg-black/60 text-red-700 p-6 md:p-8 flex">
            <div className="m-auto flex flex-col items-center gap-5 w-full max-w-[92%]">
              <h2
                className="uppercase tracking-wide text-center"
                style={{ fontSize: "clamp(18px, 3.2vw, 55px)", letterSpacing: ".02em" }}
              >
                PLAYLIST OFFICIELLE
              </h2>

              <button
                onClick={()=>window.open("https://open.spotify.com/playlist/2DAwhXLNq8zXdsXUX7ZbNW","_blank")}
                className="px-5 py-2.5 border border-red-700 text-red-700 hover:bg-red-700 hover:text-black transition rounded text-[clamp(12px,1.6vw,20px)]"
              >
                Acceder a la playlist
              </button>

              <div className="w-24 h-24 bg-red-900/30 rounded-md" />
            </div>
          </div>
        </div>
      ),
    },

    // ==================== RÉSEAUX ====================
    {
      id: "reseaux",
      label: "Reseaux",
      node: (
        <div className="h-[60vh] w-[70vw] max-w-[900px] flex items-center justify-center">
          <div className="h-full aspect-[9/16] max-h-[60vh] rounded-xl overflow-hidden border border-red-700/40 bg-black/60 text-red-700 p-6 md:p-8 flex">
            <div className="m-auto flex flex-col items-center gap-6 w-full max-w-[92%]">
              <h2
                className="uppercase tracking-wide text-center"
                style={{ fontSize: "clamp(18px, 3.2vw, 55px)", letterSpacing: ".02em" }}
              >
                INOUBIABLE
              </h2>

              <div className="flex items-center gap-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-900/30 rounded-full" />
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-900/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const baseLen = slides.length;
  const triple = useMemo(()=>[...slides, ...slides, ...slides], [slides]);

  // ---- États layout ----
  const [cardW, setCardW] = useState(700);
  const [gap, setGap] = useState(18);
  const [sidePad, setSidePad] = useState(100);
  const [vh, setVh] = useState(900);

  const railRef = useRef(null);
  const [active, setActive] = useState(0);

  // ✅ CORRECTION : Calcul cohérent avec getViewportWidth()
  useEffect(()=>{
    const compute = () => {
      if (typeof window === "undefined") return;

      const w = getViewportWidth();
      const h = window.innerHeight;
      const isMobile = w < 768;

      // Largeur carte : plus large sur mobile
      const ratio = isMobile ? 0.85 : CARD_RATIO;
      const cw = Math.min(w * ratio, isMobile ? 420 : CARD_MAX);

      // Gap : plus petit sur mobile
      const gp = isMobile ? 10 : Math.max(GAP_MIN, Math.min(GAP_MAX, w * GAP_RATIO));

      // Padding latéral pour centrer le snap
      const sp = Math.max(12, (w - cw) / 2);

      setCardW(cw);
      setGap(gp);
      setSidePad(sp);
      setVh(h);
    };
    compute();
    window.addEventListener("resize", compute);
    return ()=> window.removeEventListener("resize", compute);
  },[]);

  // ✅ CORRECTION : Centre visuel basé sur window.innerWidth / 2 (cohérent)
  const visualCenter = () => getViewportWidth() / 2;

  // Masquer header/footer + reset global
  useEffect(()=>{
    const css = document.createElement("style");
    css.textContent = `
      header, footer { display:none !important }
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        background: #000 !important;
        overflow-x: hidden !important;
      }
    `;
    document.head.appendChild(css);
    return ()=> css.remove();
  },[]);

  // ✅ CORRECTION : Recentrer au chargement ET au resize/zoom
  useEffect(()=>{
    const rail = railRef.current;
    if(!rail) return;
    const one = (cardW + gap);
    const setW = baseLen * one;
    const targetCenter = sidePad + setW + 2 * one + cardW / 2; // index 2
    const left = targetCenter - visualCenter();
    rail.scrollLeft = left;
  },[baseLen, cardW, gap, sidePad]); // ✅ Se recalcule au resize

  // Scroll + boucle + index actif
  useEffect(()=>{
    const rail = railRef.current;
    if(!rail) return;

    const onWheel = (e)=>{
      if (Math.abs(e.deltaY) < 1) return;
      e.preventDefault();
      rail.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };

    const onScroll = ()=>{
      const setW = baseLen * (cardW + gap);
      const x = rail.scrollLeft;

      if (x < sidePad + (cardW + gap) * 0.5) {
        rail.scrollLeft = x + setW;
        return;
      }
      if (x > sidePad + setW + setW - (cardW + gap) * 0.5) {
        rail.scrollLeft = x - setW;
        return;
      }

      const center = x - sidePad - setW + visualCenter();
      const idx = Math.round(center / (cardW + gap));
      setActive(mod(idx, baseLen));
    };

    rail.addEventListener("wheel", onWheel, {passive:false});
    rail.addEventListener("scroll", onScroll);
    return ()=> {
      rail.removeEventListener("wheel", onWheel);
      rail.removeEventListener("scroll", onScroll);
    };
  },[baseLen, cardW, gap, sidePad]);

  // ✅ Aller à un index
  const goTo = (targetIdx)=>{
    const rail = railRef.current;
    if(!rail) return;
    const one = (cardW + gap);
    const setW = baseLen * one;
    const targetCenter = sidePad + setW + targetIdx * one + cardW / 2;
    const left = targetCenter - visualCenter();
    rail.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-black text-red-700">
      {/* ✅ CORRECTION : Logo AU-DESSUS du menu (z-index plus élevé) */}
      <div className="fixed z-[10000] left-1/2 -translate-x-1/2 top-3 md:top-8 pointer-events-none">
        <div className="w-[48vw] max-w-[260px] md:w-[22vw] md:max-w-[360px] aspect-[5/1] overflow-hidden flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-red-700 to-red-500 opacity-80 flex items-center justify-center text-black font-bold text-xs md:text-base">
            NEXXXUS
          </div>
        </div>
      </div>

      {/* ✅ CORRECTION : MENU avec z-index inférieur au logo */}
      <div className="fixed top-16 md:top-20 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 md:gap-3">
        {slides.map((s, i)=>(
          <button
            key={s.id}
            onClick={()=>goTo(i)}
            className={`text-[10px] md:text-sm uppercase tracking-wide px-2 py-1 rounded 
              ${i===active ? "bg-red-700 text-black" : "text-red-700 hover:text-red-400"}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* RAIL */}
      <div
        ref={railRef}
        className="no-scrollbar overflow-x-auto overflow-y-hidden h-screen w-full"
        style={{ 
          scrollSnapType: "x mandatory", 
          paddingLeft: sidePad, 
          paddingRight: sidePad 
        }}
      >
        <div
          className="flex items-center h-screen"
          style={{ 
            gap, 
            paddingTop: getViewportWidth() < 768 ? "22vh" : "8vh" // ✅ Plus d'espace sur mobile
          }}
        >
          {triple.map((item, i)=>(
            <CoverCard
              key={`${item.id}-${i}`}
              width={cardW}
              height={Math.min(vh, (getViewportWidth() < 768 ? Math.round(vh*0.60) : 680))} // ✅ Cartes moins hautes sur mobile
              cardW={cardW}
              gap={gap}
              centerX={visualCenter()}
            >
              {item.node}
            </CoverCard>
          ))}
        </div>
      </div>

      {/* Points d'état */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            className="flex items-center justify-center"
          >
            {i === active ? (
              <span className="w-5 h-5 bg-red-700 rounded-sm" />
            ) : (
              <span className="w-2.5 h-2.5 rounded-full bg-red-700/30" />
            )}
          </span>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar{ display:none }
        .no-scrollbar{ scrollbar-width:none; -ms-overflow-style:none }
        .cover-card{
          scroll-snap-align: center;
          transition: transform 220ms ease, opacity 220ms ease, filter 220ms ease;
          will-change: transform, opacity, filter;
        }
      `}</style>
    </div>
  );
}

const mod = (n,m)=>((n%m)+m)%m;

function CoverCard({children, width, height, cardW, gap, centerX}) {
  const ref = useRef(null);
  const [t, setT] = useState({scale: 1, rotate: 0, opacity: 1, blur: 0, glow: 0, glowScale: 1});

  useEffect(()=>{
    const el = ref.current;
    if(!el) return;

    const update = ()=>{
      const r = el.getBoundingClientRect();
      const center = (typeof centerX === "number" ? centerX : (getViewportWidth() / 2));
      const cardCenter = r.left + r.width / 2;
      const distPx = Math.abs(cardCenter - center);

      const oneCard = cardW + gap;
      const normRaw = Math.min(1, distPx / oneCard);
      const norm = Math.pow(normRaw, 0.8);

      const MAX_SCALE = 1.06;
      const MIN_SCALE = 0.82;
      const scale   = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * (1 - norm);
      const MAX_ROT  = 6;
      const rotate   = (cardCenter < center ? -1 : 1) * MAX_ROT * norm;
      const opacity  = 1 - 0.15 * norm;
      const blur     = 1.0 * norm;

      const glow     = Math.max(0, 1 - Math.pow(norm, 0.9));
      const glowScale= 1 + 0.18 * (1 - norm);

      setT({scale, rotate, opacity, blur, glow, glowScale});
    };

    update();
    const onScroll = ()=>update();
    const onResize = ()=>update();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll, true);
      window.addEventListener("resize", onResize);
    }
    const id = setInterval(update, 60);
    return ()=>{
      clearInterval(id);
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScroll, true);
      }
    };
  }, [cardW, gap, centerX]);

  return (
    <div
      ref={ref}
      className="cover-card flex-shrink-0 flex items-center justify-center rounded-2xl relative isolate"
      style={{
        width,
        height: Math.min(height, 680),
        transform: `perspective(1200px) rotateY(${t.rotate}deg) scale(${t.scale})`,
        opacity: t.opacity,
        filter: `blur(${t.blur}px)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[10px] z-[-1] rounded-[28px]"
        style={{
          opacity: 0.55 * t.glow,
          transform: `scale(${t.glowScale})`,
          transition: "opacity 220ms ease, transform 220ms ease",
          background: `
            radial-gradient(closest-side,
              rgba(239,68,68,0.45) 0%,
              rgba(239,68,68,0.22) 40%,
              rgba(239,68,68,0.10) 65%,
              rgba(239,68,68,0.03) 80%,
              transparent 100%)`,
          filter: "blur(8px)",
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}