import { useState } from 'react';
import FadeInSection from './FadeInSection';

const inputBase =
  'w-full bg-transparent border-b border-linen py-3.5 text-charcoal font-sans font-light text-sm placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors duration-300';

const labelBase =
  'block text-xs tracking-[0.18em] uppercase text-stone font-sans font-light mb-2';

export default function Invitation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="invitation" className="py-28 md:py-40 border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <FadeInSection>
          <p className="text-xs tracking-[0.25em] uppercase text-stone font-sans font-light mb-16 md:mb-20">
            05 — Membership
          </p>
        </FadeInSection>

        <div className="md:grid md:grid-cols-12 md:gap-16 lg:gap-24">

          {/* Left: heading + copy */}
          <div className="md:col-span-5 mb-16 md:mb-0">
            <FadeInSection delay={80}>
              <h2 className="font-serif font-light text-charcoal leading-tight mb-8"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
              >
                This Is a
                <br />
                <em className="italic text-stone">Private House</em>
              </h2>

              <div className="space-y-6">
                <p className="font-sans font-light text-stone text-sm md:text-base leading-loose">
                  Core membership is referral-based and Christian-only.
                </p>
                <p className="font-sans font-light text-stone text-sm md:text-base leading-loose">
                  If you are a disciplined man seeking formation, responsibility,
                  and long-term impact, you may request an invitation.
                </p>
                <div className="pt-4 border-t border-linen">
                  <p className="font-sans font-light text-stone/60 text-xs leading-relaxed tracking-wide">
                    All requests are reviewed by existing members.
                    We respond to every submission personally.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7">
            <FadeInSection delay={160}>
              {submitted ? (
                <div className="py-16 text-center md:text-left">
                  <h3 className="font-serif font-light text-charcoal mb-4"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                  >
                    Request Received.
                  </h3>
                  <p className="font-sans font-light text-stone text-sm md:text-base leading-loose">
                    We review every request with care. You will hear from us directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">

                  {/* Row: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <label className={labelBase} htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className={labelBase} htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Row: Age + City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <label className={labelBase} htmlFor="age">Age</label>
                      <input
                        id="age"
                        type="number"
                        required
                        min="18"
                        max="75"
                        placeholder="Your age"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className={labelBase} htmlFor="city">City</label>
                      <input
                        id="city"
                        type="text"
                        required
                        placeholder="City, Country"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className={labelBase} htmlFor="why">
                      Why are you drawn to Valo House?
                    </label>
                    <textarea
                      id="why"
                      required
                      rows={5}
                      placeholder="A few honest sentences..."
                      className={`${inputBase} resize-none border border-linen px-4 py-3.5 focus:border-charcoal mt-2`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-10 py-4 bg-charcoal text-cream text-xs tracking-[0.2em] uppercase font-sans font-light hover:bg-stone transition-colors duration-300"
                    >
                      Submit Request
                    </button>
                  </div>

                </form>
              )}
            </FadeInSection>
          </div>

        </div>

      </div>
    </section>
  );
}
