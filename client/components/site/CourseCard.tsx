import { cn } from "@/lib/utils";

type CardTheme = "emerald" | "teal" | "cyan" | "amber" | "rose" | "sky";

type Props = {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  theme: CardTheme;
  lang: "en" | "ur";
  href: string;
};

const themeStyles: Record<
  CardTheme,
  {
    cardBorder: string;
    imageBorder: string;
    badge: string;
    price: string;
    cta: string;
  }
> = {
  emerald: {
    cardBorder: "border-emerald-200 shadow-[0_26px_60px_-34px_rgba(16,185,129,0.28)] hover:shadow-[0_32px_70px_-32px_rgba(16,185,129,0.36)]",
    imageBorder: "border-emerald-100",
    badge: "bg-emerald-50 border-emerald-100 text-emerald-900",
    price: "text-emerald-900",
    cta: "bg-emerald-700 hover:bg-emerald-800 text-white",
  },
  teal: {
    cardBorder: "border-teal-200 shadow-[0_26px_60px_-34px_rgba(13,148,136,0.26)] hover:shadow-[0_32px_70px_-32px_rgba(13,148,136,0.34)]",
    imageBorder: "border-emerald-100",
    badge: "bg-teal-50 border-teal-100 text-teal-900",
    price: "text-teal-900",
    cta: "bg-emerald-700 hover:bg-emerald-800 text-white",
  },
  cyan: {
    cardBorder: "border-cyan-200 shadow-[0_26px_60px_-34px_rgba(14,165,233,0.24)] hover:shadow-[0_32px_70px_-32px_rgba(14,165,233,0.32)]",
    imageBorder: "border-emerald-100",
    badge: "bg-cyan-50 border-cyan-100 text-cyan-900",
    price: "text-emerald-900",
    cta: "bg-emerald-700 hover:bg-emerald-800 text-white",
  },
  amber: {
    cardBorder: "border-amber-200 shadow-[0_26px_60px_-34px_rgba(245,158,11,0.26)] hover:shadow-[0_32px_70px_-32px_rgba(245,158,11,0.34)]",
    imageBorder: "border-emerald-100",
    badge: "bg-amber-50 border-amber-100 text-amber-900",
    price: "text-emerald-900",
    cta: "bg-emerald-700 hover:bg-emerald-800 text-white",
  },
  rose: {
    cardBorder: "border-rose-200 shadow-[0_26px_60px_-34px_rgba(244,114,182,0.24)] hover:shadow-[0_32px_70px_-32px_rgba(244,114,182,0.32)]",
    imageBorder: "border-emerald-100",
    badge: "bg-rose-50 border-rose-100 text-rose-900",
    price: "text-emerald-900",
    cta: "bg-emerald-700 hover:bg-emerald-800 text-white",
  },
  sky: {
    cardBorder: "border-sky-200 shadow-[0_26px_60px_-34px_rgba(56,189,248,0.24)] hover:shadow-[0_32px_70px_-32px_rgba(56,189,248,0.32)]",
    imageBorder: "border-emerald-100",
    badge: "bg-sky-50 border-sky-100 text-sky-900",
    price: "text-emerald-900",
    cta: "bg-emerald-700 hover:bg-emerald-800 text-white",
  },
};

export default function CourseCard({
  title,
  description,
  duration,
  price,
  image,
  theme,
  lang,
  href,
}: Props) {
  const styles = themeStyles[theme];
  const durationLabel = lang === "ur" ? "دورانیہ" : "Duration";

  return (
    <article
      className={cn(
        "group cursor-pointer text-left rounded-2xl border bg-white p-4 transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-emerald-600 focus-within:ring-offset-2 sm:p-6",
        styles.cardBorder,
      )}
    >
      <div className={cn("relative h-32 overflow-hidden rounded-xl border sm:h-36", styles.imageBorder)}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          width={400}
          height={200}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="mt-3 flex items-start justify-between gap-3 sm:mt-4">
        <h3 className="text-base font-semibold text-emerald-900 sm:text-lg">{title}</h3>
        {/* Duration tag removed as per user request */}
      </div>

      <p className="mt-2 text-xs text-emerald-800/80 sm:text-sm">{description}</p>

      <div className="mt-4 flex items-center justify-between gap-2 sm:mt-6 sm:gap-3">
        <div className={cn("text-sm font-semibold sm:text-base", styles.price)}>{price}</div>
        <a
          href={href}
          className={cn(
            "inline-flex h-9 items-center justify-center gap-2 rounded-xl px-4 text-xs font-medium transition sm:h-10 sm:px-4 sm:text-sm",
            styles.cta,
          )}
        >
          {lang === "ur" ? "داخلہ لیں" : "Enroll Now"}
        </a>
      </div>
    </article>
  );
}