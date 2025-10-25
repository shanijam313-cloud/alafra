import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useI18n } from "@/lib/i18n";

const testimonials = [
  {
    initials: "AK",
    quoteEn: "Al Afra transformed my recitation. The one-on-one feedback made Tajweed easy to grasp.",
    quoteUr: "العفراء نے میری تلاوت میں انقلاب پیدا کیا۔ ایک بہ ایک رہنمائی سے تجوید سیکھنا آسان ہو گیا۔",
    name: "Ayesha Khan",
    courseEn: "Tajweed",
    courseUr: "تجوید",
  },
  {
    initials: "MA",
    quoteEn: "Flexible timings helped me memorize while working full-time. Highly recommend their courses!",
    quoteUr: "لچکدار اوقات نے مجھے نوکری کے ساتھ ساتھ حفظ کرنے میں مدد دی۔ ان کے کورسز کی بھرپور سفارش کرتا ہوں۔",
    name: "Muhammad Ali",
    courseEn: "Hifz & Tajweed",
    courseUr: "حفظ و تجوید",
  },
  {
    initials: "FN",
    quoteEn: "Professional and spiritually uplifting. Classes are immersive and grounded in authentic scholarship.",
    quoteUr: "پیشہ ورانہ اور روحانی طور پر مضبوط۔ کلاسیں دلکش اور مستند علم پر مبنی ہیں۔",
    name: "Fatima Noor",
    courseEn: "Arabic",
    courseUr: "عربی",
  },
];

export default function TestimonialCarousel() {
  const { lang } = useI18n();
  return (
    <Carousel className="w-full" opts={{ align: "center", loop: true }}>
      <CarouselContent className="flex gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <CarouselItem
            key={i}
            className="basis-full pl-0 sm:basis-[75%] lg:basis-[45%] xl:basis-[32%]"
          >
            <div className="mx-auto h-full max-w-sm rounded-xl border border-white/10 bg-white/10 p-4 sm:p-6 shadow-[0_26px_68px_-40px_rgba(0,0,0,0.75)] backdrop-blur border-solid flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-38px_rgba(239,68,68,0.45)]">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/15 grid place-items-center text-white/80 text-sm font-semibold border border-white/20">
                  {t.initials}
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed">
                “{lang === "ur" ? t.quoteUr : t.quoteEn}”
              </p>
              <div className="mt-4 text-xs sm:text-sm font-medium text-white/85 mt-auto">
                {t.name}
                <span className="block text-white/60 font-normal">
                  {lang === "ur" ? t.courseUr : t.courseEn}
                </span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white border-white/30 hover:bg-white/10 absolute -left-10 top-1/2 -translate-y-1/2" />
      <CarouselNext className="text-white border-white/30 hover:bg-white/10 absolute -right-10 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
