import { motion } from "framer-motion";
import { legacyMembers } from "../data/legacy";

export default function Legacy() {
  return (
    <section id="legacy" className="relative bg-steel-dark py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F7F3EC" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-wide relative">
        <div className="max-w-xl">
          <p className="text-amber font-medium text-sm tracking-wide mb-3">Our Legacy</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper leading-tight">
            A legacy built across generations.
          </h2>
          <p className="mt-5 text-paper/65 leading-relaxed">
            From one generation to the next, the family's knowledge of
            construction has continued to shape the way Ejaz Constructions
            works today.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 lg:mt-24">
          {/* Desktop: horizontal stepped line */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute top-[7px] left-0 right-0 h-px bg-clay origin-left"
              style={{ transformOrigin: "left" }}
            />
            <div className="grid grid-cols-4 gap-8">
              {legacyMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={i % 2 === 0 ? "" : "mt-10"}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-clay border-2 border-steel-dark relative -left-[3px]" />
                  <div className="mt-5 aspect-square bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-end p-5 text-paper/50 text-xs mb-4">
                    Family member profile photo can be added here
                  </div>
                  <p className="font-display font-bold text-paper text-lg">{member.name}</p>
                  <p className="text-amber text-xs font-medium tracking-wide mt-1">{member.role}</p>
                  <p className="text-paper/60 text-sm mt-2 leading-relaxed">{member.note}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stacked line */}
          <div className="lg:hidden relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-clay/40" />
            <div className="space-y-10">
              {legacyMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-clay" />
                  <p className="font-display font-bold text-paper text-lg">{member.name}</p>
                  <p className="text-amber text-xs font-medium tracking-wide mt-1">{member.role}</p>
                  <p className="text-paper/60 text-sm mt-2 leading-relaxed max-w-sm">{member.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
