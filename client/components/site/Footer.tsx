import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER_DISPLAY = "03353503511";
const WHATSAPP_NUMBER_LINK = "923353503511";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-red-500/30 bg-neutral-950/95">
      <div className="container mx-auto py-12 grid gap-8 md:grid-cols-3 text-white/85">
        <div>
          <h3 className="text-lg font-semibold font-urdu-heading mb-3 text-white">
            Al Afra Islamic Academy
          </h3>
          <p className="text-sm text-white/65">
            Learning in the Light of the Qur’an &amp; Sunnah
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm">
            <a
              className="inline-flex items-center gap-2 text-red-300 transition hover:text-red-200"
              href={`https://wa.me/${WHATSAPP_NUMBER_LINK}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp {WHATSAPP_NUMBER_DISPLAY}
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link className="transition hover:text-red-200" to="/">Home</Link></li>
            <li><Link className="transition hover:text-red-200" to="/about">About</Link></li>
            <li><Link className="transition hover:text-red-200" to="/courses">Courses</Link></li>
            <li><Link className="transition hover:text-red-200" to="/admissions">Admissions</Link></li>
            <li><Link className="transition hover:text-red-200" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-red-300" /> Karachi, Pakistan</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-300" /> {WHATSAPP_NUMBER_DISPLAY}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-red-300" /> info@alafra.academy</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-red-300" /> Mon–Sat: 9:00–18:00 PKT</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-red-500/20 bg-black/40">
        <div className="container mx-auto py-4 text-xs text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Al Afra Islamic Academy. All rights reserved.</p>
          <p>Developed with dedication</p>
        </div>
      </div>
    </footer>
  );
}
