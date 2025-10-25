import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "ur";

type Translations = Record<string, { en: string; ur: string }>;

export const translations: Translations = {
  site_name: { en: "Al Afra Islamic Academy", ur: "العفراء اسلامک اکیڈمی" },
  brand_short: { en: "Al Afra", ur: "العفراء" },
  nav_home: { en: "Home", ur: "ہوم" },
  nav_about: { en: "About", ur: "ہمارے بارے میں" },
  nav_courses: { en: "Courses", ur: "کورسز" },
  nav_admissions: { en: "Admissions", ur: "داخلہ" },
  nav_contact: { en: "Contact", ur: "رابطہ" },
  cta_apply: { en: "Apply Now", ur: "داخلہ لیں" },
  cta_view_courses: { en: "View Courses", ur: "کورسز دیکھیں" },
  hero_title: { en: "Al Afra Islamic Academy", ur: "العفراء اسلامک اکیڈمی" },
  hero_sub: { en: "Learning in the Light of the Qur’an & Sunnah", ur: "قرآن و سنت کی روشنی میں تعلیم" },
  why_title: { en: "Why Choose Us", ur: "ہم کیوں منتخب کریں؟" },
  testimonials: { en: "Testimonials", ur: "آراء طلبہ" },
  featured_courses: { en: "Featured Courses", ur: "منتخب کورسز" },
  see_all_courses: { en: "See all courses", ur: "سب کورسز دیکھیں" },
  banner_quote_ar: { en: "And say: My Lord, increase me in knowledge.", ur: "وَقُلْ رَبِّ زِدْنِي عِلْمًا" },
  banner_quote_ref: { en: "(Qur’an 20:114)", ur: "(سورۃ طٰہٰ:114)" },
  about_title: { en: "About Us", ur: "ہمارے بارے میں" },
  about_mission: { en: "Our Mission", ur: "ہمارا مشن" },
  about_vision: { en: "Our Vision", ur: "ہمارا وژن" },
  about_mission_desc: {
    en: "To spread the knowledge of the Qur’an and Sunnah with excellence and character.",
    ur: "قرآن و سنت کا علم بہترین انداز اور اخلاق کے ساتھ عام کرنا۔",
  },
  about_vision_desc: {
    en: "A global community of students grounded in authentic Islamic scholarship.",
    ur: "مستند اسلامی علم پر قائم طلبہ کی عالمی برادری۔",
  },
  about_teacher_spotlight_title: { en: "Teacher Spotlight", ur: "اساتذہ کا تعارف" },
  about_teacher_spotlight_name: { en: "Muhammad Tayyab", ur: "محمد طیب" },
  about_teacher_spotlight_badge: { en: "Experienced Scholar", ur: "تجربہ کار عالم" },
  about_teacher_spotlight_p1: {
    en: "Muhammad Tayyab is an experienced Islamic scholar and instructor from Lahore, Pakistan, with over eleven years of teaching experience in Hifz classes. He has also served as a Qur’an Translation and Islamic Studies Editor at Babur & Gohar Publishers, Lahore, contributing to high-quality Islamic publications. In addition to his teaching and editorial work, he is a spiritual healer (Rohani Ma’alij) with nearly fifteen years of experience in providing spiritual guidance and support. He previously taught at the renowned Jamia Ashrafia, Lahore, where he guided students through various levels of Islamic education.",
    ur: "محمد طیب لاہور، پاکستان کے ایک تجربہ کار اسلامی اسکالر اور معلم ہیں جنہیں حفظ کی کلاسوں میں تدریس کا گیارہ سالہ تجربہ حاصل ہے۔ انہوں نے بابُر اینڈ گوہر پبلشرز لاہور میں قرآن ترجمہ اور اسلامیات کے ایڈیٹر کے طور پر بھی خدمات انجام دی ہیں اور معیاری اسلامی مطبوعات کی تیاری میں حصہ لیا ہے۔ تدریس اور ادارت کے ساتھ ساتھ وہ روحانی معالج (روحانی معالج) بھی ہیں اور گزشتہ پندرہ برس سے روحانی رہنمائی اور معاونت فراہم کر رہے ہیں۔ وہ معروف جامعہ اشرفیہ لاہور میں بھی تدریس کر چکے ہیں جہاں انہوں نے مختلف درجات کے طلبہ کی رہنمائی کی۔",
  },
  about_teacher_spotlight_p2: {
    en: "Academically, he holds a modern education degree (F.A) and is a Hafiz al-Qur’an as well as a Fazil of Dars-e-Nizami, having completed his religious studies from Jamia Farooqia, Karachi in 2015. He is fluent in Urdu, Pashto, and Arabic, allowing him to connect with a wide range of students. His approach to teaching blends deep scholarship with humility, sincerity, and a commitment to preserving authentic Islamic tradition while engaging modern learners effectively.",
    ur: "علمی اعتبار سے وہ جدید تعلیم کی ڈگری (ایف اے) رکھتے ہیں اور حافظِ قرآن ہونے کے ساتھ درسِ نظامی کے فاضل بھی ہیں، جب کہ 2015 میں انہوں نے جامعہ فاروقیہ کراچی سے اپنی دینی تعلیم مکمل کی۔ انہیں اردو، پشتو اور عربی پر مکمل عبور حاصل ہے جس سے وہ مختلف پس منظر کے طلبہ سے بآسانی جڑتے ہیں۔ ان کا اندازِ تدریس عالمانہ گہرائی، انکساری، اخلاص اور اصیل اسلامی روایت کی حفاظت کے عزم کو جدید طلبہ کی ضروریات کے ساتھ ہم آہنگ کرتا ہے۔",
  },
  teachers_title: { en: "Our Teachers", ur: "ہمارے اساتذہ" },
  milestones_title: { en: "Milestones", ur: "کارنامے" },
  courses_title: { en: "Courses", ur: "کورسز" },
  filter_all: { en: "All", ur: "تمام" },
  filter_tafseer: { en: "Tafseer", ur: "تفسیر" },
  filter_tajweed: { en: "Tajweed", ur: "تجوید" },
  filter_arabic: { en: "Arabic", ur: "عربی" },
  filter_islamic: { en: "Islamic Studies", ur: "اسلامک اسٹڈیز" },
  admissions_title: { en: "Admissions", ur: "داخلہ" },
  admissions_guidelines_badge: { en: "Student Guidelines", ur: "طلبہ کی رہنما ہدایات" },
  admissions_guidelines_title: { en: "Please review the student guidelines", ur: "براہ کرم طلبہ کی رہنما ہدایات ملاحظہ کریں" },
  admissions_guidelines_ack: { en: "I have read and agree to the guidelines.", ur: "میں نے ہدایات پڑھ لی ہیں اور ان سے متفق ہوں۔" },
  admissions_guidelines_continue: { en: "I Agree, Continue", ur: "میں متفق ہوں، آگے بڑھیں" },
  admissions_guidelines_cancel: { en: "Cancel", ur: "منسوخ کریں" },
  admissions_guidelines_confirmed: { en: "Guidelines acknowledged", ur: "ہدایات کی توثیق ہوگئی" },
  admissions_form_applicant: { en: "Applicant Information", ur: "درخواست گزار کی معلومات" },
  admissions_form_schedule: { en: "Schedule & Preferences", ur: "شیڈول اور ترجیحات" },
  admissions_form_courses: { en: "Course & Days", ur: "کورس اور ایام" },
  admissions_form_gender: { en: "Gender Preference", ur: "استاد کی ترجیح" },
  admissions_form_timing: { en: "Preferred Timing", ur: "پسندیدہ اوقات" },
  admissions_form_experience: { en: "Experience Level", ur: "تجربے کا درجہ" },
  admissions_form_days: { en: "Preferred Days", ur: "پسندیدہ دن" },
  admissions_form_message: { en: "Message (optional)", ur: "پیغام (اختیاری)" },
  admissions_form_submit_whatsapp: { en: "Submit via WhatsApp", ur: "واٹس ایپ کے ذریعے جمع کریں" },
  admissions_whatsapp_note: {
    en: "Submissions go to WhatsApp: {number}",
    ur: "درخواست واٹس ایپ پر ارسال ہوگی: {number}",
  },
  admissions_success_heading: { en: "Application Received", ur: "درخواست موصول ہوگئی" },
  admissions_success_next: { en: "Explore Courses", ur: "مزید کورسز دیکھیں" },
  admissions_success_support: {
    en: "Need urgent help? Message us on WhatsApp {number}.",
    ur: "فوری مدد درکار ہے؟ ہمیں واٹس ایپ {number} پر پیغام بھیجیں۔",
  },
  admissions_review_terms: { en: "Review Agreement", ur: "معاہدہ دوبارہ دیکھیں" },
  contact_title: { en: "Contact", ur: "رابطہ" },
  form_name: { en: "Full Name", ur: "نام" },
  form_age: { en: "Age", ur: "عمر" },
  form_email: { en: "Email", ur: "ای میل" },
  form_phone: { en: "Phone", ur: "فون" },
  form_course: { en: "Preferred Course", ur: "پसندیدہ کورس" },
  form_message: { en: "Message", ur: "پیغام" },
  form_submit: { en: "Submit", ur: "جمع کریں" },
  success_submitted: { en: "Your submission was received. We'll contact you soon.", ur: "آپ کی درخواست موصول ہوگئی ہے، جلد رابطہ کریں گے۔" },
  language: { en: "Language", ur: "زبان" },
  english: { en: "English", ur: "انگریزی" },
  urdu: { en: "Urdu", ur: "اردو" },
};

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof translations) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en");

  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang === "ur" ? "ur" : "en";
    el.dir = lang === "ur" ? "rtl" : "ltr";
    el.classList.toggle("lang-ur", lang === "ur");
  }, [lang]);

  const t = useMemo(() => (key: keyof typeof translations) => translations[key][lang], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function getTranslationPair(key: keyof typeof translations) {
  return translations[key];
}
