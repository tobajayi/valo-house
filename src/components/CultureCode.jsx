import FadeInSection from './FadeInSection';

const standards = [
  'We build.',
  'We show up.',
  'We keep our word.',
  'We train our bodies.',
  'We steward wealth.',
  'We protect brotherhood.',
  'We think long-term.',
];

export default function CultureCode() {
  return (
    <section id="culture" className="py-28 md:py-40 border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <FadeInSection>
          <p className="text-xs tracking-[0.25em] uppercase text-stone font-sans font-light mb-16 md:mb-20">
            03 — The Standard
          </p>
        </FadeInSection>

        {/* Two-column layout */}
        <div className="md:grid md:grid-cols-12 md:gap-16 lg:gap-24">

          {/* Left: heading */}
          <div className="md:col-span-4 mb-16 md:mb-0 md:sticky md:top-32 md:self-start">
            <FadeInSection delay={80}>
              <h2 className="font-serif font-light text-charcoal leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                The Valo
                <br />
                <em className="italic text-stone">Standard</em>
              </h2>
              <p className="font-sans font-light text-stone text-sm leading-relaxed mt-8 max-w-xs">
                Seven commitments that define life inside Valo House. Not aspirations — expectations.
              </p>
            </FadeInSection>
          </div>

          {/* Right: statements list */}
          <div className="md:col-span-8">
            {standards.map((statement, index) => (
              <FadeInSection key={statement} delay={index * 70}>
                <div className="border-t border-linen py-7 md:py-9 flex items-baseline justify-between group">
                  <span
                    className="font-serif font-light text-charcoal group-hover:text-bronze transition-colors duration-400 leading-none"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                  >
                    {statement}
                  </span>
                  <span className="font-sans font-light text-xs text-stone/50 tracking-[0.15em] ml-8 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </FadeInSection>
            ))}
            {/* Closing border */}
            <div className="border-t border-linen" />
          </div>

        </div>

      </div>
    </section>
  );
}
