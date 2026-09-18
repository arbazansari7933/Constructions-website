import { MapPin } from "lucide-react";
import { siteInfo as info } from "../data/content";

export default function Locations() {
  return (
    <section className="container-wide py-24 lg:py-32">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-center">
        <div>
          <p className="text-clay font-medium text-sm tracking-wide mb-3">Where We Work</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            Working across Kolkata.
          </h2>
          <p className="mt-5 text-ink-soft/75 leading-relaxed max-w-md">
            Ejaz Constructions is based in {info.location}, and takes on
            residential and building projects across Kolkata.
          </p>

          <div className="mt-8 flex items-center gap-3 pb-3 border-b border-line max-w-md">
            <MapPin size={16} className="text-clay shrink-0" />
            <span className="font-display font-semibold text-ink text-sm">{info.location} — Office</span>
          </div>
        </div>

        <div className="aspect-square bg-paper-dim border border-line chamfer-lg flex items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <rect width="400" height="400" fill="#EFE9DD" />
            <g stroke="#C9C1B2" strokeWidth="1">
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" />
              ))}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
              ))}
            </g>
            {[
              [130, 120],
              [260, 90],
              [190, 210],
              [90, 260],
              [300, 250],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="7" fill="#B94E1F" />
                <circle cx={x} cy={y} r="14" fill="#B94E1F" opacity="0.15" />
              </g>
            ))}
            <text x="200" y="380" textAnchor="middle" fill="#8C8478" fontSize="12" fontFamily="IBM Plex Sans">
              Illustrative map — Kolkata service area
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
