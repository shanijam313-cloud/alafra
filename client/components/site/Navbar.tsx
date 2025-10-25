import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
  const navItems = [
    { key: "nav_home", to: "/" },
    { key: "nav_about", to: "/about" },
    { key: "nav_courses", to: "/courses" },
    { key: "nav_admissions", to: "/admissions" },
    { key: "nav_contact", to: "/contact" },
  ] as const;
  const navLinkClasses =
    "px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 text-neutral-200/90";

  return (
    <header className="sticky top-0 z-50 border-b border-red-500/40 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 backdrop-blur-xl shadow-[0_28px_58px_-28px_rgba(220,38,38,0.55)]">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-red-700 shadow-[0_12px_24px_-12px_rgba(220,38,38,0.7)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_32px_-18px_rgba(220,38,38,0.75)]">
              <Sparkles className="h-5 w-5 text-neutral-100" aria-hidden />
            </span>
            <div className="leading-tight">
              <span className="block text-base font-semibold font-urdu-heading text-neutral-100 group-hover:text-red-400 transition-colors duration-300">
                {t("brand_short")}
              </span>
              <span className="block text-xs text-neutral-400">
                Al Afra Academy
              </span>
            </div>
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-neutral-700 bg-neutral-900/80 shadow-sm hover:bg-red-500/15 transition-colors"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <Menu className="h-5 w-5 text-neutral-200" />
        </button>

        <nav
          className={cn(
            open ? "block" : "hidden",
            "md:block absolute md:static top-full inset-x-0 md:inset-auto bg-neutral-950/95 md:bg-transparent border-b md:border-none shadow-[0_18px_42px_-30px_rgba(220,38,38,0.35)] md:shadow-none supports-[backdrop-filter]:backdrop-blur-xl",
          )}
        >
          <div className="container mx-auto md:flex md:items-center md:gap-2 py-4 md:py-0">
            <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        navLinkClasses,
                        isActive
                          ? "bg-red-500/20 text-red-400 shadow-[0_16px_32px_-22px_rgba(220,38,38,0.6)]"
                          : "hover:text-red-400 hover:bg-red-500/10",
                      )
                    }
                    onClick={() => setOpen(false)}
                  >
                    {t(item.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-3 md:mt-0 md:ms-3">
              <Link to="/admissions">
                <Button className="rounded-full px-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-neutral-100 shadow-[0_26px_44px_-24px_rgba(220,38,38,0.6)] hover:from-red-500/95 hover:via-red-600/95 hover:to-red-700/90">
                  {t("cta_apply")}
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ur" : "en")}
            className="text-xs px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-200 shadow-sm transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            {lang === "en" ? "اردو" : "English"}
          </button>
        </div>
      </div>
    </header>
  );
}
