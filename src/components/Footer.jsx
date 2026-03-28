export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-linen py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top: wordmark + tagline */}
        <div className="mb-16 md:mb-20">
          <p className="font-serif font-light text-charcoal tracking-tight mb-2"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Valo House
          </p>
          <p className="font-serif italic text-stone text-lg md:text-xl">
            A House of Valor.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-linen mb-10" />

        {/* Bottom: links + copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <a
              href="mailto:hello@valohouse.co"
              className="font-sans font-light text-xs tracking-[0.15em] uppercase text-stone hover:text-charcoal transition-colors duration-300"
            >
              hello@valohouse.co
            </a>
            <a
              href="https://instagram.com/valohouse"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-light text-xs tracking-[0.15em] uppercase text-stone hover:text-charcoal transition-colors duration-300"
            >
              @valohouse
            </a>
          </div>

          <p className="font-sans font-light text-xs tracking-[0.12em] uppercase text-stone/50">
            &copy; {year} Valo House &mdash; Man of Valor. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
