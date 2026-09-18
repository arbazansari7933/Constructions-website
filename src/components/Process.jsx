import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="bg-ink py-24 lg:py-32">
      <div className="container-wide">
        <div className="max-w-xl">
          <p className="text-amber font-medium text-sm tracking-wide mb-3">Our Process</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper leading-tight">
            How a project moves forward.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-6 gap-px bg-white/10">
          {processSteps.map((step) => (
            <div key={step.step} className="bg-ink p-6">
              <span className="font-display text-clay text-sm">{step.step}</span>
              <h3 className="font-display font-semibold text-paper text-base mt-3">{step.title}</h3>
              <p className="text-paper/55 text-sm mt-2 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
