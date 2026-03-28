import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-20">

      {/* Label */}
      <div
        className={`transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '100ms' }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-stone font-sans font-light mb-10">
          A Private House
        </p>
      </div>

      {/* Main heading */}
      <div
        className={`transition-all duration-900 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '250ms' }}
      >
        <h1 className="font-serif font-light text-charcoal leading-none tracking-tight mb-5"
          style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
        >
          Valo House
        </h1>
      </div>

      {/* Etymology */}
      <div
        className={`transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '380ms' }}
      >
        <p className="text-xs tracking-[0.28em] uppercase text-bronze font-sans font-light mb-5">
          Valo — Man of Valor
        </p>
      </div>

      {/* Tagline */}
      <div
        className={`transition-all duration-900 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '500ms' }}
      >
        <p className="font-serif italic text-stone mb-14"
          style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)' }}
        >
          A House of Courage.
        </p>
      </div>

      {/* Body copy */}
      <div
        className={`transition-all duration-900 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '550ms' }}
      >
        <p className="max-w-xl mx-auto text-base md:text-lg text-stone font-sans font-light leading-relaxed mb-14">
          A private Christian men's formation house committed to building
          disciplined, spiritually grounded, competent men of strength
          and influence.
        </p>
      </div>

      {/* CTAs */}
      <div
        className={`transition-all duration-900 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '700ms' }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#invitation"
            className="px-9 py-4 bg-charcoal text-cream text-xs tracking-[0.2em] uppercase font-sans font-light hover:bg-stone transition-colors duration-300"
          >
            Request Invitation
          </a>
          <a
            href="#about"
            className="px-9 py-4 border border-charcoal text-charcoal text-xs tracking-[0.2em] uppercase font-sans font-light hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Explore the House
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-900 ease-out ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1100ms' }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.2em] uppercase text-stone/50 font-sans font-light">Scroll</span>
          <div className="w-px h-14 bg-linen" />
        </div>
      </div>
    </section>
  );
}
