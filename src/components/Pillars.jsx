import FadeInSection from './FadeInSection';

const pillars = [
  {
    numeral: 'I',
    title: 'Faith',
    description: 'Spiritual formation & authority.',
  },
  {
    numeral: 'II',
    title: 'Business & Career Excellence',
    description: 'Competence, leadership & professional mastery.',
  },
  {
    numeral: 'III',
    title: 'Brotherhood & Community',
    description: 'Belonging, culture & relational strength.',
  },
  {
    numeral: 'IV',
    title: 'Strength & Wellness',
    description: 'Discipline, vitality & physical capability.',
  },
  {
    numeral: 'V',
    title: 'Wealth & Influence',
    description: 'Financial intelligence & purpose-driven impact.',
  },
];

function PillarCard({ numeral, title, description, delay }) {
  return (
    <FadeInSection delay={delay} className="group">
      <div className="border-t-2 border-linen group-hover:border-bronze transition-colors duration-500 pt-7 pb-8 h-full">
        <span className="block font-sans font-light text-xs tracking-[0.2em] uppercase text-stone group-hover:text-bronze transition-colors duration-500 mb-6">
          {numeral}
        </span>
        <h3 className="font-serif font-light text-charcoal mb-4 leading-snug"
          style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)' }}
        >
          {title}
        </h3>
        <p className="font-sans font-light text-stone text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </FadeInSection>
  );
}

export default function Pillars() {
  return (
    <section id="pillars" className="py-28 md:py-40 border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <FadeInSection>
          <p className="text-xs tracking-[0.25em] uppercase text-stone font-sans font-light mb-6">
            02 — The Five Pillars
          </p>
        </FadeInSection>

        {/* Section heading */}
        <FadeInSection delay={80}>
          <h2 className="font-serif font-light text-charcoal leading-tight mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            What We
            <br />
            <em className="italic text-stone">Build Together</em>
          </h2>
        </FadeInSection>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 sm:gap-x-8 lg:gap-x-10">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.numeral}
              {...pillar}
              delay={index * 80}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
