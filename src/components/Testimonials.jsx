import { ShieldCheck, Users, MapPinned } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Built on trust", text: "A family-led approach where construction is treated as a long-term relationship, not just a one-time job." },
  { icon: Users, title: "Family involvement", text: "The business has grown through generations of the same family staying involved in the work." },
  { icon: MapPinned, title: "Kolkata experience", text: "Known project locations include Bura Bazar, Girish Park, Kalighat, Shyambazar and Marquis Square." },
];

export default function Testimonials() {
  return (
    <section className="bg-paper-dim py-24 lg:py-32">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="text-clay font-medium text-sm tracking-wide mb-3">The Ejaz Approach</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            A construction business with people behind the work.
          </h2>
          <p className="mt-5 text-ink-soft/75 leading-relaxed">
            We have kept this section focused on what is known about the business rather than adding made-up client testimonials. Real customer stories can be added here as the company collects them.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-paper border border-line p-7 chamfer hover:border-clay/40 transition-colors">
              <div className="w-11 h-11 bg-clay/10 flex items-center justify-center text-clay">
                <Icon size={22} strokeWidth={1.7} />
              </div>
              <h3 className="font-display font-semibold text-ink text-lg mt-6">{title}</h3>
              <p className="text-ink-soft/70 text-sm mt-2 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
