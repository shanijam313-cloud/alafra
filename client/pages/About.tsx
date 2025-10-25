import { Shield } from "lucide-react";

import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <div className="container mx-auto py-12 space-y-12">

      <section className="relative overflow-hidden rounded-3xl border border-red-500/25 bg-black/90 px-8 py-10 shadow-[0_34px_64px_-24px_rgba(0,0,0,0.75)]">
        <span className="pointer-events-none absolute inset-y-0 -start-24 h-[160%] w-64 rotate-12 bg-gradient-to-br from-red-500/30 via-transparent to-transparent blur-3xl opacity-60" />
        <div className="grid gap-8 md:grid-cols-2 relative z-10">
          <div className="space-y-3">
            <h3 className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-red-300/80">
              <span className="h-px w-8 bg-red-400/60" />
              {t("about_mission")}
            </h3>
            <p className="text-lg leading-relaxed text-neutral-100 font-urdu-heading bg-black/70 border border-red-500/25 rounded-2xl px-6 py-5 shadow-[0_18px_34px_-20px_rgba(220,38,38,0.55)]">
              {t("about_mission_desc")}
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-red-300/80">
              <span className="h-px w-8 bg-red-400/60" />
              {t("about_vision")}
            </h3>
            <p className="text-lg leading-relaxed text-neutral-100 font-urdu-heading bg-black/70 border border-red-500/25 rounded-2xl px-6 py-5 shadow-[0_18px_34px_-20px_rgba(220,38,38,0.55)]">
              {t("about_vision_desc")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-black/95 px-8 py-10 shadow-[0_32px_72px_-28px_rgba(220,38,38,0.55)]">
        <span className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-40 pointer-events-none" />
        <div className="relative z-10 space-y-6">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-100">{t("about_teacher_spotlight_title")}</h3>
                  <p className="text-sm uppercase tracking-[0.4em] text-red-300/80">{t("about_teacher_spotlight_name")}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/15 px-5 py-2 text-xs uppercase tracking-[0.35em] text-red-200">
                  <Shield className="h-4 w-4" aria-hidden />
                  {t("about_teacher_spotlight_badge")}
                </div>
              </div>
              <article className="space-y-4 text-neutral-100/90 leading-8 md:text-lg">
                <p>{t("about_teacher_spotlight_p1")}</p>
                <p>{t("about_teacher_spotlight_p2")}</p>
              </article>
            </div>
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl border border-red-500/30 shadow-[0_30px_60px_-32px_rgba(220,38,38,0.6)] md:h-72 md:w-72">
              <img
                src="/teacher/WhatsApp Image 2025-10-25 at 12.22.24_6a1c8d16.jpg"
                alt="Muhammad Tayyab"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section />
    </div>
  );
}
