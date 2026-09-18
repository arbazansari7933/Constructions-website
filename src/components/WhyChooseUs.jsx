import { Check } from "lucide-react";
import { whyChooseUs } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="container-wide py-24 lg:py-32">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20">
        <div>
          <p className="text-clay font-medium text-sm tracking-wide mb-3">Why Choose Us</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            Reasons families in Kolkata build with us.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {whyChooseUs.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 w-6 h-6 bg-clay/10 flex items-center justify-center">
                <Check size={14} className="text-clay" strokeWidth={2.5} />
              </div>
              <p className="text-ink-soft/85 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
