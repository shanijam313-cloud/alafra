import { useState } from "react";

import { Button } from "@/components/ui/button";
import TestimonialCarousel from "@/components/site/TestimonialCarousel";
import { useI18n } from "@/lib/i18n";
import CourseCard from "@/components/site/CourseCard";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  BadgeCheck,
  Clock,
  GraduationCap,
  Laptop,
  PiggyBank,
  Users as UsersIcon,
} from "lucide-react";

export default function Index() {
  const [donationOpen, setDonationOpen] = useState(false);
  const { t, lang } = useI18n();
  const featureCards = [
    {
      title: "Qualified Teachers",
      desc: "تجربہ کار اور سند یافتہ اساتذہ",
      Icon: GraduationCap,
    },
    {
      title: "Flexible Timings",
      desc: "آسان اوقاتِ کار",
      Icon: Clock,
    },
    {
      title: "Certified Courses",
      desc: "مستند کورسز",
      Icon: BadgeCheck,
    },
    {
      title: "Live & Recorded",
      desc: "براہِ راست اور ریکارڈڈ کلاسز",
      Icon: Laptop,
    },
    {
      title: "Community",
      desc: "علمی ماحول اور رہنمائی",
      Icon: UsersIcon,
    },
    {
      title: "Affordable",
      desc: "معقول فیس",
      Icon: PiggyBank,
    },
  ] as const;

  const featureVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="hero-bg absolute inset-0 -z-10 pointer-events-none">
          <div className="slide" style={{ backgroundImage: "image-set(url('/hero/photo-1596125160970-6f02eeba00d3.avif') 1x, url('/hero/photo-1596125160970-6f02eeba00d3.avif') 2x)" }} />
          <div className="slide" style={{ backgroundImage: "image-set(url('/hero/photo-1609599006353-e629aaabfeae.avif') 1x, url('/hero/photo-1609599006353-e629aaabfeae.avif') 2x)" }} />
          <div className="slide" style={{ backgroundImage: "image-set(url('/hero/photo-1576764402988-7143f9cca90a.avif') 1x, url('/hero/photo-1576764402988-7143f9cca90a.avif') 2x)" }} />
        </div>
        <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6 text-center md:text-right">
            <h1 className="font-urdu-heading text-4xl md:text-6xl leading-tight tracking-wide text-white drop-shadow-[0_15px_45px_rgba(0,0,0,0.65)]">
              {lang === "ur" ? t("hero_title") : t("hero_title")}
            </h1>
            <p className="text-foreground/80 text-base md:text-lg">
              {t("hero_sub")}
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-end">
              <a href="/admissions">
                <Button className="rounded-full px-6 py-6 text-sm md:text-base">{t("cta_apply")}</Button>
              </a>
              <Button
                variant="outline"
                className="rounded-full border-red-500/60 text-red-300 hover:bg-red-500/15 hover:text-red-100 px-8 py-6 text-sm md:text-base"
                onClick={() => setDonationOpen(true)}
              >
                {lang === "ur" ? "ابھی عطیہ دیں" : "Donate Now"}
              </Button>
            </div>
          </div>

          <div className="md:order-first hidden md:block" />
        </div>
      </section>

      <Dialog
        open={donationOpen}
        onOpenChange={setDonationOpen}
      >
        <DialogContent className="bg-neutral-950 text-white border border-red-500/30 shadow-[0_40px_90px_-30px_rgba(220,38,38,0.55)]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-white">
              {lang === "ur" ? "ڈونیشن تفصیلات" : "Support the Academy"}
            </DialogTitle>
            <DialogDescription className="text-sm text-white/60">
              {lang === "ur"
                ? "اپنا عطیہ براہِ راست ہمارے ایزی پیسہ اکاؤنٹ میں جمع کریں۔"
                : "Send your donation directly via Easypaisa to keep Qur’an education accessible."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5 py-6 text-center">
            <p className="text-sm text-white/60">
              {lang === "ur"
                ? "ذیل میں ایزی پیسہ نمبر درج ہے۔ رقم ٹرانسفر کرنے کے بعد براہ کرم رسید واٹس ایپ پر بھیج دیں۔"
                : "Here is our Easypaisa number. After transferring, kindly share the receipt on WhatsApp."}
            </p>
            <div className="inline-flex items-center justify-center rounded-2xl border border-red-500/40 bg-black/70 px-6 py-4 text-lg font-semibold tracking-[0.25em] text-red-200 shadow-[0_24px_48px_-28px_rgba(220,38,38,0.65)]">
              03353503511
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-red-300/80">
              {lang === "ur" ? "ایزی پیسہ / جاز کیش" : "Easypaisa / JazzCash"}
            </p>
            <Button
              variant="outline"
              className="rounded-full border-red-500/60 text-red-200 hover:bg-red-500/15 hover:text-red-100 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em]"
              asChild
            >
              <a
                href="https://wa.me/923353503511"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "ur" ? "واٹس ایپ پر رابطہ کریں" : "Message on WhatsApp"}
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Why Choose Us */}
      <section className="py-14">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right mb-8">{t("why_title")}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature, index) => (
              <motion.article
                key={feature.title}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -80px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.21, 0.78, 0.25, 0.99] }}
                className="group relative overflow-hidden rounded-2xl border border-red-500/25 bg-black/90 p-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-[0_34px_64px_-20px_rgba(220,38,38,0.55)]"
              >
                <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-600/10 to-transparent blur-2xl" />
                  <span className="absolute inset-0 bg-gradient-to-t from-red-500/15 via-transparent to-transparent" />
                </span>
                <div className="relative z-10">
                  <feature.Icon className="mb-4 h-10 w-10 text-red-300 drop-shadow-[0_6px_16px_rgba(220,38,38,0.45)] transition-transform duration-300 group-hover:scale-110" aria-hidden />
                  <h3 className="inline-flex items-center text-lg font-semibold uppercase tracking-[0.35em] text-neutral-100/95 bg-black/65 px-5 py-2 rounded-full shadow-[0_18px_34px_-24px_rgba(220,38,38,0.65)] transition-all duration-300 group-hover:bg-red-500/20 group-hover:text-red-200 group-hover:tracking-[0.45em]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base font-urdu-heading leading-relaxed text-neutral-100/95 bg-black/60 border border-red-500/25 px-4 py-2 rounded-xl shadow-[0_16px_30px_-18px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:bg-red-500/15 group-hover:text-red-100">
                    {feature.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-red-400/70 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:tracking-[0.45em]">
                    <span className="h-px w-8 bg-red-500/60" />
                    <span className="text-neutral-100/80">Discover</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="relative py-20 text-white bg-black cursor-pointer"
        role="link"
        aria-label={lang === "ur" ? "آراء طلبہ" : "Open Admission"}
      >
        <div className="absolute inset-0 pattern-mosaic opacity-10" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-urdu-heading text-3xl md:text-4xl text-white">
              {lang === "ur" ? "ہمارے طلبہ کیا کہتے ہیں" : "What Our Students Say"}
            </h2>
            <p className="mt-3 text-white/80">
              {lang === "ur"
                ? "قرآنی تعلیم میں امتیازی خدمات کے باعث دنیا بھر کے طلبہ کا اعتماد۔"
                : "Trusted by learners worldwide for excellence in Qur’an education."}
            </p>
          </div>
          <div className="mt-10 overflow-hidden">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold">{t("featured_courses")}</h2>
            <a href="/courses" className="text-sm text-primary hover:underline">{t("see_all_courses")}</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              title={lang === "ur" ? "نورانی قائدہ" : "Noorani Qaida"}
              description={
                lang === "ur"
                  ? "عربی حروف اور مخارج کی مضبوط بنیاد کے ساتھ اپنی قراءت کا آغاز کریں۔"
                  : "Build a solid foundation in Arabic letters, makharij, and confident recitation."
              }
              duration={lang === "ur" ? "۸ تا ۱۲ ہفتے" : "8-12 weeks"}
              price={lang === "ur" ? "$49 / ماہ" : "$49/mo"}
              image="/course/WhatsApp Image 2025-10-13 at 20.44.46_be5776ad.jpg"
              theme="emerald"
              lang={lang}
              href={`/admissions?course=${encodeURIComponent("Noorani Qaida")}`}
            />
            <CourseCard
              title={lang === "ur" ? "قرآن مع تجوید" : "Qur'an with Tajweed"}
              description={
                lang === "ur"
                  ? "تصدیق شدہ اساتذہ کے ساتھ روزانہ کی مشق اور مکمل تجویدی رہنمائی حاصل کریں۔"
                  : "Daily practice with certified teachers to master tajweed rules in real recitation."
              }
              duration={lang === "ur" ? "۳ تا ۶ ماہ" : "3-6 months"}
              price={lang === "ur" ? "$69 / ماہ" : "$69/mo"}
              image="/course/WhatsApp Image 2025-10-13 at 20.44.33_59e075c2.jpg"
              theme="teal"
              lang={lang}
              href={`/admissions?course=${encodeURIComponent("Qur'an with Tajweed")}`}
            />
            <CourseCard
              title={lang === "ur" ? "حفظ القرآن" : "Hifz Qur'an"}
              description={
                lang === "ur"
                  ? "روزانہ اہداف، ناظمہ رہنمائی اور مستقل نگرانی کے ساتھ اپنے حفظ کو مکمل کریں۔"
                  : "Achieve memorisation goals with structured targets, mentorship, and consistent review."
              }
              duration={lang === "ur" ? "لچکدار" : "Flexible"}
              price={lang === "ur" ? "$89 / ماہ" : "$89/mo"}
              image="/course/WhatsApp Image 2025-10-13 at 20.44.20_d41950c3.jpg"
              theme="cyan"
              lang={lang}
              href={`/admissions?course=${encodeURIComponent("Hifz Qur'an")}`}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner with Quranic Quote */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="rounded-3xl border bg-gradient-to-br from-primary/10 via-accent/10 to-background p-8 md:p-12 text-center md:text-right shadow-sm">
            <p className="font-urdu-heading text-2xl md:text-3xl">{t("banner_quote_ar")}</p>
            <p className="mt-2 text-sm text-foreground/80">{t("banner_quote_ref")}</p>
            <div className="mt-5">
              <a href="/admissions">
                <Button className="rounded-full px-6">ابھی داخلہ لیں</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
