import { MapPin, ArrowUpRight } from "lucide-react";
import { projectAreas } from "../data/projects";
import { demoImages } from "../data/demoImages";

const areaNotes = [
  "Construction work in one of Kolkata's established commercial areas.",
  "Project work around the Girish Park area.",
  "Construction work completed in the Kalighat area.",
  "Project work around Shyambazar.",
  "Construction work in the Marquis Square area.",
];

export default function Projects() {
  return (
    <section id="projects" className="bg-paper-dim py-24 lg:py-32">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
          <div className="max-w-2xl">
            <p className="text-clay font-medium text-sm tracking-wide mb-3">Project Locations</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
              100+ completed projects across Kolkata.
            </h2>
            <p className="mt-5 text-ink-soft/75 leading-relaxed">
              These are the Kolkata areas currently confirmed by the business. We are intentionally showing them as locations rather than inventing project names, budgets or completion dates.
            </p>
          </div>
          <div className="shrink-0 border border-clay/30 bg-paper px-5 py-4 chamfer">
            <p className="text-clay font-display font-bold text-2xl">100+</p>
            <p className="text-stone text-xs mt-1">Projects completed</p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectAreas.map((area, i) => (
            <article key={area} className="group bg-paper border border-line chamfer overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-stone-light/40 relative">
                <img src={demoImages.projects[i % demoImages.projects.length]} alt={`Construction work in ${area}, Kolkata`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5 text-paper">
                  <p className="text-amber text-xs font-medium tracking-wide">KOLKATA</p>
                  <p className="font-display font-bold text-xl mt-1">{area}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="flex items-center gap-2 text-ink-soft text-sm font-medium"><MapPin size={15} className="text-clay" /> {area}, Kolkata</p>
                  <ArrowUpRight size={17} className="text-stone group-hover:text-clay transition-colors" />
                </div>
                <p className="text-ink-soft/65 text-sm mt-3 leading-relaxed">{areaNotes[i]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
