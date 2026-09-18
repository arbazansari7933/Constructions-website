import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-steel-dark">
      {/* Construction image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/premium-photo/asian-two-business-man-construction-engineers-supervising-progress-construction-project-construction-site_61243-1493.jpg?w=2000"
          alt="Construction engineers supervising a construction project"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-steel-dark via-steel-dark/70 to-steel-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-dark/90 via-steel-dark/30 to-transparent" />
      </div>

      <div className="relative container-wide pt-40 pb-24 lg:pt-52 lg:pb-16 min-h-[640px] flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <p className="text-amber font-medium text-sm tracking-wide">
              RAZA BAZAAR · KOLKATA
            </p>

            <span className="h-px w-10 bg-paper/30" />

            <p className="text-paper/55 text-sm">
              100+ completed projects
            </p>
          </div>

          <h1 className="font-display font-bold text-paper text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.06]">
            Building with experience.
            <br />
            Finishing with excellence.
          </h1>

          <p className="mt-5 text-paper/75 text-base sm:text-lg leading-relaxed max-w-lg">
            Ejaz Constructions is a family-led construction business based in
            Raza Bazaar, Kolkata. Our stated capability is complete
            construction from foundation through full marble finishing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-clay text-paper font-semibold px-6 py-3.5 chamfer hover:bg-clay-dark transition-colors"
            >
              Start Your Project
              <ArrowRight size={17} />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-paper font-medium px-2 py-3.5 border-b border-paper/40 hover:border-paper transition-colors"
            >
              View Our Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}