import { whatWeStandFor } from "../data/content";
import { demoImages } from "../data/demoImages";

export default function About() {
  return (
    <section id="about" className="container-wide py-24 lg:py-32">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          {/* DEMO photo (Unsplash License) — swap for a real Ejaz Constructions site photo */}
          <div className="aspect-[4/5] bg-stone-light/40 chamfer-lg overflow-hidden border border-line">
            <img
              src={demoImages.about}
              alt="Building under construction, demo photography"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-6 -right-6 bg-clay text-paper px-6 py-5 chamfer max-w-[235px] shadow-xl">
            <p className="text-paper/60 text-[10px] uppercase tracking-[0.18em]">Our core promise</p>
            <p className="font-display font-bold text-base leading-snug mt-2">
              Foundation to full marble finish.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-clay font-medium text-sm tracking-wide mb-3">About Ejaz Constructions</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            A family construction business, built on site experience.
          </h2>
          <div className="mt-6 space-y-4 text-ink-soft/85 leading-relaxed max-w-lg">
            <p>
              Ejaz Constructions is a family-owned construction business based in
              Raza Bazaar, Kolkata. The company's approach to building has been
              shaped over the years by direct, hands-on family involvement in
              construction work.
            </p>
            <p>
              We take on projects from the foundation stage through to full
              finishing, including marble and flooring work, with the same
              people supervising a project from start to end.
            </p>
            <p>
              Our focus stays on quality craftsmanship and personal
              involvement on site — not on volume.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
            {whatWeStandFor.map((item) => (
              <div key={item} className="border-l-2 border-clay pl-3">
                <p className="font-display font-semibold text-ink text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
