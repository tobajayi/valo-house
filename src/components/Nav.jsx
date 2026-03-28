import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Gatherings', href: '#gatherings' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-cream/95 backdrop-blur-md border-b border-linen'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="font-serif text-base tracking-[0.25em] uppercase text-charcoal hover:text-stone transition-colors duration-300"
          >
            Valo
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.18em] uppercase text-stone hover:text-charcoal transition-colors duration-300 font-sans font-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#invitation"
              className="text-xs tracking-[0.18em] uppercase border border-charcoal text-charcoal px-5 py-2.5 hover:bg-charcoal hover:text-cream transition-all duration-300 font-sans font-light"
            >
              Request Invitation
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-xs tracking-[0.18em] uppercase text-stone font-sans font-light"
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col justify-center items-start px-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-8 mt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block font-serif text-4xl text-charcoal hover:text-stone transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#invitation"
            onClick={handleLinkClick}
            className="block font-serif text-4xl text-bronze hover:text-stone transition-colors duration-300"
          >
            Request Invitation
          </a>
        </div>
        <p className="mt-auto mb-16 text-xs tracking-[0.2em] uppercase text-stone font-sans font-light">
          A House of Valor
        </p>
      </div>
    </>
  );
}
