import { trustStats } from "../data/content";

export default function TrustStats() {
  return (
    <div className="relative z-10 -mt-1">
      <div className="container-wide">
        <div className="bg-ink grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/10 chamfer-lg">
          {trustStats.map((stat) => (
            <div key={stat.label} className="py-7 px-5 sm:px-6">
              <div className="font-display font-bold text-paper text-lg sm:text-2xl leading-tight">
                {stat.value}
              </div>
              <div className="text-paper/55 text-xs sm:text-sm mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
