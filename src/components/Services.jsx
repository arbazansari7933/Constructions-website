import {
  Home as HomeIcon,
  Building2,
  Layers,
  HardHat,
  PaintRoller,
  Gem,
  Hammer,
  ClipboardList,
} from "lucide-react";
import { services } from "../data/services";

const icons = [HomeIcon, Building2, Layers, HardHat, PaintRoller, Gem, Hammer, ClipboardList];

export default function Services() {
  return (
    <section id="services" className="bg-paper-dim py-24 lg:py-32">
      <div className="container-wide">
        <div className="max-w-xl">
          <p className="text-clay font-medium text-sm tracking-wide mb-3">What We Do</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            Construction services, start to finish.
          </h2>
          <p className="mt-5 text-ink-soft/75 leading-relaxed">
            Our core strength is delivering a project from foundation to full
            marble finish, without handing it between unrelated teams.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div key={service.index} className="bg-paper-dim p-7 hover:bg-paper transition-colors group">
                <div className="flex items-center justify-between">
                  <Icon size={26} strokeWidth={1.6} className="text-clay" />
                  <span className="font-display text-xs text-stone">{service.index}</span>
                </div>
                <h3 className="font-display font-semibold text-ink text-base mt-5">{service.title}</h3>
                <p className="text-ink-soft/70 text-sm mt-2 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
