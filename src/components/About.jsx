import FadeInSection from './FadeInSection';

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <FadeInSection>
          <p className="text-xs tracking-[0.25em] uppercase text-stone font-sans font-light mb-16 md:mb-20">
            01 — Why Valo Exists
          </p>
        </FadeInSection>

        {/* Editorial two-column layout on desktop */}
        <div className="md:grid md:grid-cols-12 md:gap-16 lg:gap-24">

          {/* Left column: section heading */}
          <div className="md:col-span-4 mb-12 md:mb-0">
            <FadeInSection delay={100}>
              <h2 className="font-serif font-light text-charcoal leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Why Valo
                <br />
                <em className="italic text-stone">Exists</em>
              </h2>
            </FadeInSection>
          </div>

          {/* Right column: body copy */}
          <div className="md:col-span-8 space-y-10">

            <FadeInSection delay={150}>
              <p className="font-sans font-light text-stone text-base md:text-lg leading-loose">
                Modern Christian men are often fragmented — spiritually inspired
                but undisciplined, ambitious but unanchored, connected yet isolated.
              </p>
            </FadeInSection>

            <FadeInSection delay={220}>
              <p className="font-serif font-light text-charcoal leading-snug"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
              >
                Valo House forms integrated men.
              </p>
            </FadeInSection>

            <FadeInSection delay={290}>
              <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-linen pt-8">
                {['Men of faith.', 'Men of strength.', 'Men of stewardship.', 'Men of influence.'].map((line) => (
                  <span
                    key={line}
                    className="font-sans font-light text-stone text-sm tracking-wide"
                  >
                    {line}
                  </span>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={380}>
              <p className="font-serif italic text-charcoal border-l-2 border-bronze pl-6"
                style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)' }}
              >
                This is not networking. This is formation.
              </p>
            </FadeInSection>

          </div>
        </div>

      </div>
    </section>
  );
}
