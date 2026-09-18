import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { siteInfo } from "../data/content";

export default function QuickContact() {
  const waLink = `https://wa.me/916291362516?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

  const cards = [
    { icon: Phone, label: "Call Us", value: siteInfo.phone, href: `tel:${siteInfo.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: siteInfo.whatsapp, href: waLink },
    { icon: Mail, label: "Email", value: siteInfo.email, href: "#contact" },
    { icon: MapPin, label: "Visit Office", value: siteInfo.location, href: "#" },
  ];

  return (
    <section className="bg-ink py-16">
      <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {cards.map(({ icon: Icon, label, value, href }) => (
          <a key={label} href={href} className="bg-ink p-7 hover:bg-ink-soft transition-colors group">
            <Icon size={22} className="text-clay" strokeWidth={1.8} />
            <p className="font-display font-semibold text-paper text-sm mt-4">{label}</p>
            <p className="text-paper/55 text-sm mt-1">{value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
