import { useState } from "react";
import CourseCard from "@/components/site/CourseCard";
import { useI18n } from "@/lib/i18n";

type Course = {
  slug: string;
  title: { en: string; ur: string };
  description: { en: string; ur: string };
  duration: { en: string; ur: string };
  price: { en: string; ur: string };
  image: string;
  category: "Tafseer" | "Tajweed" | "Arabic" | "Islamic";
  theme: "emerald" | "teal" | "cyan" | "amber" | "rose" | "sky";
};

const courses: Course[] = [
  {
    slug: "noorani-qaida",
    title: { en: "Noorani Qaida", ur: "نورانی قائدہ" },
    description: {
      en: "Foundational Arabic letters, makharij, and pronunciation for complete beginners.",
      ur: "عربی حروف، مخارج اور تلفظ کے بنیادی اصول مکمل ابتدائی طلبہ کے لیے۔",
    },
    duration: { en: "8-12 weeks", ur: "۸ تا ۱۲ ہفتے" },
    price: { en: "$49/mo", ur: "$49 / ماہ" },
    image: "/course/WhatsApp Image 2025-10-13 at 20.44.46_be5776ad.jpg",
    category: "Tajweed",
    theme: "emerald",
  },
  {
    slug: "quran-with-tajweed",
    title: { en: "Qur'an with Tajweed", ur: "قرآن مع تجوید" },
    description: {
      en: "Learn correct Qur'an recitation with certified teachers and practical tajweed rules.",
      ur: "تصدیق شدہ اساتذہ کے ساتھ درست قراءت اور عملی تجوید کے اصول سیکھیں۔",
    },
    duration: { en: "3-6 months", ur: "۳ تا ۶ ماہ" },
    price: { en: "$69/mo", ur: "$69 / ماہ" },
    image: "/course/WhatsApp Image 2025-10-13 at 20.44.33_59e075c2.jpg",
    category: "Tajweed",
    theme: "teal",
  },
  {
    slug: "hifz-quran",
    title: { en: "Hifz Qur'an", ur: "حفظ القرآن" },
    description: {
      en: "Complete memorisation journey with daily guidance, revision plans, and mentor feedback.",
      ur: "روزانہ رہنمائی، دہرائی کے منصوبوں اور اساتذہ کی نگرانی کے ساتھ مکمل حفظ کا سفر۔",
    },
    duration: { en: "Flexible", ur: "لچکدار" },
    price: { en: "$89/mo", ur: "$89 / ماہ" },
    image: "/course/WhatsApp Image 2025-10-13 at 20.44.20_d41950c3.jpg",
    category: "Islamic",
    theme: "cyan",
  },
  {
    slug: "quran-tafseer",
    title: { en: "Qur'an Tafseer", ur: "تفسیر القرآن" },
    description: {
      en: "Understand Qur'anic meanings, themes, and lessons through classical commentaries.",
      ur: "قرآن کے معانی، موضوعات اور اسباق کو مستند تفاسیر کے ذریعے سمجھیں۔",
    },
    duration: { en: "3-6 months", ur: "۳ تا ۶ ماہ" },
    price: { en: "$79/mo", ur: "$79 / ماہ" },
    image: "/course/WhatsApp Image 2025-10-13 at 20.43.45_e778e93c.jpg",
    category: "Tafseer",
    theme: "amber",
  },
  {
    slug: "arabic-language",
    title: { en: "Arabic Language", ur: "عربی زبان" },
    description: {
      en: "Essential Arabic skills to follow Qur'an, hadith, and foundational Islamic texts.",
      ur: "قرآن، حدیث اور بنیادی اسلامی متون کو سمجھنے کے لیے ضروری عربی مہارتیں سیکھیں۔",
    },
    duration: { en: "6-10 weeks", ur: "۶ تا ۱۰ ہفتے" },
    price: { en: "$55/mo", ur: "$55 / ماہ" },
    image: "/course/WhatsApp Image 2025-10-13 at 20.44.06_058a7cb4.jpg",
    category: "Arabic",
    theme: "rose",
  },
  {
    slug: "kids-quran-classes",
    title: { en: "Kids Qur'an Classes", ur: "بچوں کی قرآن کلاسز" },
    description: {
      en: "Interactive Qur'an lessons for children with engaging activities and friendly teachers.",
      ur: "دلچسپ سرگرمیوں اور فکرمند اساتذہ کے ساتھ بچوں کے لیے پروقار قرآن کلاسز۔",
    },
    duration: { en: "Flexible", ur: "لچکدار" },
    price: { en: "$45/mo", ur: "$45 / ماہ" },
    image: "/course/WhatsApp Image 2025-10-13 at 20.45.05_32952f02.jpg",
    category: "Islamic",
    theme: "sky",
  },
];

export default function Courses() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<string>("All");

  const uniqueCourses = courses.filter(
    (course, index, arr) => arr.findIndex((c) => c.title.en === course.title.en) === index,
  );

  const filtered = uniqueCourses.filter((c) => (filter === "All" ? true : c.category === filter));
  const categoryLabels = {
    Tafseer: t("filter_tafseer"),
    Tajweed: t("filter_tajweed"),
    Arabic: t("filter_arabic"),
    Islamic: t("filter_islamic"),
  } as const;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-6">{t("courses_title")}</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: "All", label: t("filter_all") },
          { key: "Tafseer", label: t("filter_tafseer") },
          { key: "Tajweed", label: t("filter_tajweed") },
          { key: "Arabic", label: t("filter_arabic") },
          { key: "Islamic", label: t("filter_islamic") },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-1 rounded-full border ${filter === f.key ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <CourseCard
            key={c.slug}
            title={c.title[lang]}
            description={c.description[lang]}
            duration={c.duration[lang]}
            price={c.price[lang]}
            image={c.image}
            theme={c.theme}
            lang={lang}
            href={`/admissions?course=${encodeURIComponent(c.title.en)}`}
          />
        ))}
      </div>
    </div>
  );
}
