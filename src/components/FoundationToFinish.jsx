import { journeySteps } from "../data/services";

export default function FoundationToFinish() {
  return (
    <section className="container-wide py-24 lg:py-32">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20">
        <div>
          <p className="text-clay font-medium text-sm tracking-wide mb-3">Our Capability</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            From foundation to final finish.
          </h2>
          <p className="mt-5 text-ink-soft/75 leading-relaxed max-w-md">
            This is the construction journey a typical project moves through.
            Ejaz Constructions' verified strength spans from the foundation
            stage through to full marble and flooring finish.
          </p>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-8">
            {journeySteps.map((step, i) => (
              <div key={step} className="relative flex items-baseline gap-4">
                <div
                  className={`absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    i === 0 || i === journeySteps.length - 1
                      ? "bg-clay border-clay"
                      : "bg-paper border-stone-light"
                  }`}
                />
                <span className="font-display text-xs text-stone w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-semibold text-ink text-lg">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
