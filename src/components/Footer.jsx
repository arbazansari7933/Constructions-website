import { navLinks, siteInfo } from "../data/content";
import { services } from "../data/services";

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8">
      <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        <div>
          <p className="font-display font-bold text-paper text-lg">EJAZ CONSTRUCTIONS</p>
          <p className="text-paper/55 text-sm mt-3 leading-relaxed max-w-xs">
            A family-led construction company based in Raza Bazaar, Kolkata —
            building from foundation to full marble finish.
          </p>
          <div className="flex gap-4 mt-5 text-paper/55 text-sm">
            <a href={siteInfo.instagram} className="hover:text-paper transition-colors">Instagram</a>
            <a href={siteInfo.facebook} className="hover:text-paper transition-colors">Facebook</a>
          </div>
        </div>

        <div>
          <p className="text-paper/40 text-xs tracking-wide uppercase mb-4">Navigation</p>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-paper/70 text-sm hover:text-paper transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-paper/40 text-xs tracking-wide uppercase mb-4">Services</p>
          <ul className="space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.index} className="text-paper/70 text-sm">{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-paper/40 text-xs tracking-wide uppercase mb-4">Contact</p>
          <ul className="space-y-2.5 text-paper/70 text-sm">
            <li>{siteInfo.location}</li>
            <li>{siteInfo.phone}</li>
            <li>{siteInfo.whatsapp}</li>
            <li>{siteInfo.email}</li>
          </ul>
        </div>
      </div>

      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-paper/40 text-xs">
        <p>© {new Date().getFullYear()} Ejaz Constructions. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-paper/70 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-paper/70 transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
