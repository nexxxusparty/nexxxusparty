import React, { useState, useEffect } from 'react';

export default function NexusCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // ---- Slides (contenu) ----
  const slides = [
    {
      id: "artistes",
      label: "Artistes",
      content: (
        <div className="w-full h-full border border-red-700/40 rounded-xl flex items-center justify-center p-8 relative overflow-hidden">
          {/* Image de fond */}
          <div 
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: 'url(/background-slide.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Overlay noir semi-transparent */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Contenu au-dessus */}
          <div className="text-center relative z-20">
            <p className="text-[10px] tracking-[0.2em] text-red-700/60 uppercase mb-4">artistes</p>
            <div className="space-y-2 mb-4">
              {["PLAYBOI CARTI", "KEN CARSON", "NETTSPEND"].map((name) => (
                <div key={name} className="text-red-700 text-2xl md:text-3xl uppercase tracking-wide">
                  {name}
                </div>
              ))}
            </div>
            <div className="space-y-1.5 mb-3">
              {[
                ["LIL UZI VERT", "2HOLLIS"],
                ["NATE SIB", "YOUNG THUG"],
                ["FUTURE", "TRAVIS SCOTT"],
                ["DAVID GUETTA", "RIHANNA"],
              ].map((pair, i) => (
                <div key={i} className="text-red-700 text-sm md:text-base uppercase flex items-center justify-center gap-2">
                  <span>{pair[0]}</span>
                  <span className="text-red-700/60">✦</span>
                  <span>{pair[1]}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 text-xs uppercase mb-3">
              {["JEUNE MORTY", "SCH", "HAMZA"].map((name) => (
                <span key={name} className="text-red-700/80">{name}</span>
              ))}
            </div>
            <div className="h-px w-full bg-red-700/25 mb-2" />
            <p className="text-[9px] tracking-[0.25em] text-red-700/60 uppercase">
              LA LINE UP EST SUCCEPTIBLE D'ÉVOLUER
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "xxx-party",
      label: "XXX Party",
      content: (
        <div className="w-full h-full border border-red-700/40 rounded-xl overflow-hidden relative">
          {/* Image de fond */}
          <div 
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: 'url(/background-slide.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Overlay noir semi-transparent */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Contenu au-dessus */}
          <img src="/flyer.png" alt="Flyer XXX Party" className="w-full h-full object-cover relative z-20" />
        </div>
      ),
    },
    {
      id: "teaser",
      label: "Teaser",
      content: (
        <div className="w-full h-full border border-red-700/40 rounded-xl overflow-hidden relative">
          {/* Image de fond */}
          <div 
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: 'url(/background-slide.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Overlay noir semi-transparent */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Contenu au-dessus */}
          <video
            src="/teaser.mp4"
            poster="/teaser-poster.jpg"
            autoPlay
            muted
            loop
            controls
            playsInline
            className="w-full h-full object-cover relative z-20"
          />
        </div>
      ),
    },
    {
      id: "playlist",
      label: "Playlist",
      content: (
        <div className="w-full h-full border border-red-700/40 rounded-xl flex items-center justify-center p-8 relative overflow-hidden">
          {/* Image de fond */}
          <div 
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: 'url(/background-slide.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Overlay noir semi-transparent */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Contenu au-dessus */}
          <div className="text-center space-y-6 relative z-20">
            <h2 className="text-red-700 text-3xl md:text-4xl uppercase tracking-wide">
              PLAYLIST OFFICIELLE
            </h2>
            <button
              onClick={() => window.open("https://open.spotify.com/playlist/2DAwhXLNq8zXdsXUX7ZbNW", "_blank")}
              className="px-6 py-3 border border-red-700 text-red-700 hover:bg-red-700 hover:text-black transition rounded uppercase text-sm"
            >
              Acceder a la playlist
            </button>
            <img
              src="/playlist-cover.png"
              alt="Playlist cover"
              onClick={() => window.open("https://open.spotify.com/playlist/2DAwhXLNq8zXdsXUX7ZbNW", "_blank")}
              className="cursor-pointer w-24 h-24 mx-auto object-cover rounded-md shadow-md hover:opacity-80 transition"
            />
          </div>
        </div>
      ),
    },
    {
      id: "reseaux",
      label: "Reseaux",
      content: (
        <div className="w-full h-full border border-red-700/40 rounded-xl flex items-center justify-center p-8 relative overflow-hidden">
          {/* Image de fond */}
          <div 
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: 'url(/background-slide.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Overlay noir semi-transparent */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Contenu au-dessus */}
          <div className="text-center space-y-6 relative z-20">
            <h2 className="text-red-700 text-3xl md:text-4xl uppercase tracking-wide">
              INOUBIABLE
            </h2>
            <div className="flex items-center justify-center gap-8">
              <img
                src="/instagram.png"
                alt="Instagram"
                onClick={() => window.open("https://www.instagram.com/n3x.x.xus", "_blank")}
                className="cursor-pointer hover:opacity-80 transition w-20 h-20 object-contain"
              />
              <img
                src="/tiktok.png"
                alt="TikTok"
                onClick={() => window.open("https://www.tiktok.com/@n33x.us", "_blank")}
                className="cursor-pointer hover:opacity-80 transition w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Bloquer le scroll de la page
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Navigation avec gestion du scroll infini
  const goToSlide = (index) => {
    setIsTransitioning(true);
    setActiveIndex(index);
  };

  const nextSlide = () => {
    goToSlide(activeIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(activeIndex - 1);
  };

  // Gérer la téléportation aux vrais slides quand on atteint les clones
  useEffect(() => {
    if (activeIndex === -1) {
      // On est sur le clone du dernier (avant le premier)
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(slides.length - 1);
      }, 500);
    } else if (activeIndex === slides.length) {
      // On est sur le clone du premier (après le dernier)
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500);
    }
  }, [activeIndex, slides.length]);

  // Gestion du swipe sur mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // Gestion de la molette sur desktop avec throttle
  const [canScroll, setCanScroll] = useState(true);
  
  const handleWheel = (e) => {
    if (!isMobile && canScroll) {
      e.preventDefault();
      if (e.deltaY > 0) {
        nextSlide();
      } else if (e.deltaY < 0) {
        prevSlide();
      }
      // Bloquer le scroll pendant 400ms pour ralentir
      setCanScroll(false);
      setTimeout(() => setCanScroll(true), 400);
    }
  };

  // Calculer l'index réel pour l'affichage des indicateurs
  const displayIndex = ((activeIndex % slides.length) + slides.length) % slides.length;

  return (
    <div className="fixed inset-0 bg-black text-red-700 overflow-hidden">
      {/* Logo - Centré en haut */}
      <div className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="w-[50vw] max-w-[260px] md:w-[18vw] md:max-w-[300px]">
          <img
            src="/logo.png"
            alt="Logo NEXXXUS"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </div>
      </div>

      {/* Menu de navigation - Desktop en haut à gauche, Mobile centré sous le logo */}
      <nav className="fixed top-28 md:top-5 left-1/2 md:left-5 -translate-x-1/2 md:translate-x-0 z-40 flex gap-2 md:gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`px-2 md:px-3 py-1 text-[11px] md:text-sm uppercase tracking-wide rounded transition whitespace-nowrap ${
              index === displayIndex
                ? 'bg-red-700 text-black'
                : 'text-red-700 hover:text-red-400'
            }`}
          >
            {slide.label}
          </button>
        ))}
      </nav>

      {/* Carrousel - Centré verticalement et horizontalement */}
      <div 
        className="absolute top-[55%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] md:w-[17vw] max-w-[280px] md:max-w-[320px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{ perspective: isMobile ? '1200px' : '2000px' }}
      >
        <div className="relative aspect-[9/16] w-full" style={{ transformStyle: 'preserve-3d' }}>
          {/* Afficher les slides avec clones pour effet infini */}
          {[-1, ...Array.from({ length: slides.length }, (_, i) => i), slides.length].map((slideIndex) => {
            // slideIndex peut être -1 (clone du dernier), 0-4 (vrais slides), ou 5 (clone du premier)
            let actualSlide;
            let key;
            
            if (slideIndex === -1) {
              actualSlide = slides[slides.length - 1];
              key = `clone-last-${slides.length - 1}`;
            } else if (slideIndex === slides.length) {
              actualSlide = slides[0];
              key = `clone-first-0`;
            } else {
              actualSlide = slides[slideIndex];
              key = `slide-${slideIndex}`;
            }

            const offset = slideIndex - activeIndex;
            const isActive = slideIndex === activeIndex;
            
            // ✅ Effet 3D circulaire en profondeur (comme un manège)
            const absOffset = Math.abs(offset);
            
            // Rayon du cercle 3D (plus petit sur mobile)
            const radius = isMobile ? 220 : 450;
            
            // Angle de chaque slide sur le cercle (en degrés convertis en radians)
            const angle = (offset * 72) * (Math.PI / 180); // 72° = 360/5 slides
            
            // Position X et Z sur le cercle
            const circleX = Math.sin(angle) * radius;
            const circleZ = Math.cos(angle) * radius - radius; // -radius pour centrer
            
            // Rotation : slides aux extrémités (±2) sont face verso, adjacentes légèrement tournées
            const isBackSide = absOffset >= 2;
            let rotateY;
            if (isBackSide) {
              rotateY = offset * 72 + 180; // Face verso pour les extrémités
            } else if (absOffset === 1) {
              rotateY = isMobile ? offset * 40 : offset * 35; // Adjacentes un peu plus tournées sur mobile
            } else {
              rotateY = 0; // Slide centrale face à nous
            }
            
            // Scale : adapté pour mobile
            const scale = isActive ? 1 : (isMobile ? Math.max(0.7, 1 - absOffset * 0.12) : Math.max(0.75, 1 - absOffset * 0.10));
            
            // Opacity : adjacentes visibles, extrémités transparentes
            let opacity;
            if (isBackSide) {
              opacity = isMobile ? 0.25 : 0.35; // Moins visible sur mobile
            } else if (absOffset === 1) {
              opacity = isMobile ? 0.75 : 0.85; // Adjacentes bien visibles
            } else {
              opacity = isActive ? 1 : 0.65;
            }
            
            return (
              <div
                key={key}
                className={`absolute inset-0 ease-out ${isTransitioning ? 'transition-all duration-500' : ''}`}
                style={{
                  transform: `
                    translate3d(${circleX}px, 0, ${circleZ}px)
                    scale(${scale})
                    rotateY(${rotateY}deg)
                  `,
                  opacity: opacity,
                  filter: isBackSide ? 'brightness(0.5)' : 'none', // Effet sombre pour le verso
                  zIndex: isActive ? 10 : Math.abs(offset) > 2 ? 0 : 5 - absOffset,
                  pointerEvents: isActive ? 'auto' : 'none',
                  transformStyle: 'preserve-3d',
                }}
              >
                {actualSlide.content}
              </div>
            );
          })}
        </div>
      </div>

      {/* Flèches de navigation - Desktop uniquement */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-30 text-red-700 hover:text-red-500 transition text-4xl"
            aria-label="Slide précédent"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-30 text-red-700 hover:text-red-500 transition text-4xl"
            aria-label="Slide suivant"
          >
            ›
          </button>
        </>
      )}

      {/* Indicateurs en bas */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all"
            aria-label={`Aller au slide ${index + 1}`}
          >
            {index === displayIndex ? (
              <img src="/x.png" alt="Active" className="w-5 h-5 object-contain" />
            ) : (
              <span className="block w-2.5 h-2.5 rounded-full bg-red-700/30" />
            )}
          </button>
        ))}
      </div>

      <style>{`
        body {
          overflow: hidden !important;
        }
      `}</style>
    </div>
  );
}