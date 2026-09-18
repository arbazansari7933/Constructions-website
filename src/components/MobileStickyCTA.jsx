import { Phone, MessageCircle, FileText } from "lucide-react";
import { siteInfo } from "../data/content";

export default function MobileStickyCTA() {
  const waLink = `https://wa.me/916291362516?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-ink border-t border-white/10 grid grid-cols-3 divide-x divide-white/10">
      <a href={`tel:${siteInfo.phone}`} className="flex flex-col items-center justify-center gap-1 py-3 text-paper">
        <Phone size={18} />
        <span className="text-[11px] font-medium">Call</span>
      </a>
      <a href={waLink} className="flex flex-col items-center justify-center gap-1 py-3 text-paper">
        <MessageCircle size={18} />
        <span className="text-[11px] font-medium">WhatsApp</span>
      </a>
      <a href="#contact" className="flex flex-col items-center justify-center gap-1 py-3 bg-clay text-paper">
        <FileText size={18} />
        <span className="text-[11px] font-medium">Quote</span>
      </a>
    </div>
  );
}
