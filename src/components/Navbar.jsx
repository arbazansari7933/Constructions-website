import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteInfo } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color] duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--color-line)]" : "bg-transparent"
      }`}
    >
      <nav className={`container-wide flex items-center justify-between transition-[padding] duration-300 ${scrolled ? "py-3" : "py-6"}`}>
        <a href="#home" className="flex items-baseline gap-2 shrink-0">
          <span
            className={`font-display font-bold tracking-tight text-lg sm:text-xl transition-colors ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            EJAZ
          </span>
          <span
            className={`font-body text-[11px] sm:text-xs uppercase tracking-[0.18em] transition-colors ${
              scrolled ? "text-stone" : "text-paper/70"
            }`}
          >
            Constructions
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-clay ${
                  scrolled ? "text-ink-soft" : "text-paper/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteInfo.phone}`}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              scrolled ? "text-ink-soft" : "text-paper/90"
            }`}
          >
            <Phone size={15} strokeWidth={2} />
            Call
          </a>
          <a
            href="#contact"
            className="bg-clay text-paper text-sm font-semibold px-5 py-2.5 chamfer hover:bg-clay-dark transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden p-2 -mr-2 ${scrolled ? "text-ink" : "text-paper"}`}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-ink text-paper flex flex-col">
          <div className="container-wide flex items-center justify-between py-6">
            <span className="font-display font-bold text-lg">EJAZ CONSTRUCTIONS</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={26} />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-6 mt-4">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-white/10">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-2xl font-display"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto px-6 pb-10 flex flex-col gap-3">
            <a href={`tel:${siteInfo.phone}`} className="border border-white/20 text-center py-3.5 font-medium">
              Call {siteInfo.phone}
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="bg-clay text-center py-3.5 font-semibold chamfer">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
