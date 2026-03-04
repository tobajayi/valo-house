import FadeInSection from './FadeInSection';

const gatheringTypes = [
  {
    title: 'Formation Dinners',
    description:
      'Curated meals where men gather around a table for structured conversation, shared meals, and honest dialogue.',
  },
  {
    title: 'Strength & Wellness Challenges',
    description:
      'Physical challenges that forge discipline, reveal character, and build brotherhood through shared exertion.',
  },
  {
    title: 'Valo Sessions',
    description:
      'Select public events where formation meets culture — open to the broader community by invitation.',
  },
  {
    title: 'Retreats',
    description:
      'Seasonal withdrawals from noise — silence, reflection, renewal, and deep relational investment.',
  },
  {
    title: 'Impact Initiatives',
    description:
      'Organized expressions of stewardship: service, investment, and influence in the surrounding community.',
  },
];

export default function Gatherings() {
  return (
    <section id="gatherings" className="py-28 md:py-40 border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <FadeInSection>
          <p className="text-xs tracking-[0.25em] uppercase text-stone font-sans font-light mb-16 md:mb-20">
            04 — Gatherings
          </p>
        </FadeInSection>

        {/* Editorial layout */}
        <div className="md:grid md:grid-cols-12 md:gap-16 lg:gap-24">

          {/* Left: heading + description */}
          <div className="md:col-span-4 mb-16 md:mb-0">
            <FadeInSection delay={80}>
              <h2 className="font-serif font-light text-charcoal leading-tight mb-8"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Gather<em className="italic text-stone">ings</em>
              </h2>
              <p className="font-sans font-light text-stone text-base leading-loose">
                Valo gatherings are intentional.
                <br />
                Structured.
                <br />
                Brotherhood-driven.
              </p>
            </FadeInSection>
          </div>

          {/* Right: gathering types */}
          <div className="md:col-span-8">
            {gatheringTypes.map((item, index) => (
              <FadeInSection key={item.title} delay={index * 80}>
                <div className="border-t border-linen py-8 md:py-10 group">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <h3 className="font-serif font-light text-charcoal mb-3 group-hover:text-bronze transition-colors duration-400"
                        style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="font-sans font-light text-stone text-sm leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-sans font-light text-xs text-stone/40 tracking-[0.15em] flex-shrink-0 pt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </FadeInSection>
            ))}
            <div className="border-t border-linen" />
          </div>

        </div>

      </div>
    </section>
  );
}
