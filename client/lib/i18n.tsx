import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

export type Lang = "en" | "ur" | "ar";

type TranslationEntry = {
  en: string;
  ur: string;
  ar?: string;
};

type Translations = Record<string, TranslationEntry>;

export const translations: Translations = {
  site_name: { en: "Al Afra Islamic Academy", ur: "العفراء اسلامک اکیڈمی", ar: "أكاديمية العفراء الإسلامية" },
  brand_short: { en: "Al Afra", ur: "العفراء", ar: "العفراء" },
  nav_home: { en: "Home", ur: "ہوم", ar: "الرئيسية" },
  nav_about: { en: "About", ur: "ہمارے بارے میں", ar: "من نحن" },
  nav_courses: { en: "Courses", ur: "کورسز", ar: "الدورات" },
  nav_admissions: { en: "Admissions", ur: "داخلہ", ar: "التسجيل" },
  nav_rohani_ilaj: { en: "Rohani Ilaj", ur: "روحانی علاج", ar: "العلاج الروحاني" },
  nav_contact: { en: "Contact", ur: "رابطہ", ar: "اتصل بنا" },
  cta_apply: { en: "Apply Now", ur: "داخلہ لیں", ar: "قدّم الآن" },
  cta_view_courses: { en: "View Courses", ur: "کورسز دیکھیں", ar: "عرض الدورات" },
  hero_title: { en: "Al Afra Islamic Academy", ur: "العفراء اسلامک اکیڈمی", ar: "أكاديمية العفراء الإسلامية" },
  hero_sub: { en: "Learning in the Light of the Qur’an & Sunnah", ur: "قرآن و سنت کی روشنی میں تعلیم", ar: "التعلّم في نور القرآن والسنة" },
  why_title: { en: "Why Choose Us", ur: "ہم کیوں منتخب کریں؟", ar: "لماذا تختارنا؟" },
  testimonials: { en: "Testimonials", ur: "آراء طلبہ", ar: "آراء الطلاب" },
  featured_courses: { en: "Featured Courses", ur: "منتخب کورسز", ar: "دورات مميزة" },
  see_all_courses: { en: "See all courses", ur: "سب کورسز دیکھیں", ar: "عرض كل الدورات" },
  banner_quote_ar: { en: "And say: My Lord, increase me in knowledge.", ur: "وَقُلْ رَبِّ زِدْنِي عِلْمًا", ar: "وَقُلْ رَبِّ زِدْنِي عِلْمًا" },
  banner_quote_ref: { en: "(Qur’an 20:114)", ur: "(سورۃ طٰہٰ:114)", ar: "(سورة طه: ٢١٤)" },
  about_title: { en: "About Us", ur: "ہمارے بارے میں", ar: "من نحن" },
  about_mission: { en: "Our Mission", ur: "ہمارا مشن", ar: "رسالتنا" },
  about_vision: { en: "Our Vision", ur: "ہمارا وژن", ar: "رؤيتنا" },
  about_mission_desc: {
    en: "To spread the knowledge of the Qur’an and Sunnah with excellence and character.",
    ur: "قرآن و سنت کا علم بہترین انداز اور اخلاق کے ساتھ عام کرنا۔",
    ar: "نشر علوم القرآن والسنة بتميّز وأخلاق رفيعة.",
  },
  about_vision_desc: {
    en: "A global community of students grounded in authentic Islamic scholarship.",
    ur: "مستند اسلامی علم پر قائم طلبہ کی عالمی برادری۔",
    ar: "مجتمع عالمي من الطلاب المرتبطين بالعلم الشرعي الأصيل.",
  },
  about_teacher_spotlight_title: { en: "Teacher Spotlight", ur: "اساتذہ کا تعارف", ar: "نبذة عن المدرس" },
  about_teacher_spotlight_name: { en: "Muhammad Tayyab", ur: "محمد طیب", ar: "محمد طيب" },
  about_teacher_spotlight_badge: { en: "Experienced Scholar", ur: "تجربہ کار عالم", ar: "عالم ذو خبرة" },
  about_teacher_spotlight_p1: {
    en: "Muhammad Tayyab is an experienced Islamic scholar and instructor from Lahore, Pakistan, with over eleven years of teaching experience in Hifz classes. He has also served as a Qur’an Translation and Islamic Studies Editor at Babur & Gohar Publishers, Lahore, contributing to high-quality Islamic publications. In addition to his teaching and editorial work, he is a spiritual healer (Rohani Ma’alij) with nearly fifteen years of experience in providing spiritual guidance and support. He previously taught at the renowned Jamia Ashrafia, Lahore, where he guided students through various levels of Islamic education.",
    ur: "محمد طیب لاہور، پاکستان کے ایک تجربہ کار اسلامی اسکالر اور معلم ہیں جنہیں حفظ کی کلاسوں میں تدریس کا گیارہ سالہ تجربہ حاصل ہے۔ انہوں نے بابُر اینڈ گوہر پبلشرز لاہور میں قرآن ترجمہ اور اسلامیات کے ایڈیٹر کے طور پر بھی خدمات انجام دی ہیں اور معیاری اسلامی مطبوعات کی تیاری میں حصہ لیا ہے۔ تدریس اور ادارت کے ساتھ ساتھ وہ روحانی معالج (روحانی معالج) بھی ہیں اور گزشتہ پندرہ برس سے روحانی رہنمائی اور معاونت فراہم کر رہے ہیں۔ وہ معروف جامعہ اشرفیہ لاہور میں بھی تدریس کر چکے ہیں جہاں انہوں نے مختلف درجات کے طلبہ کی رہنمائی کی۔",
    ar: "محمد طيب عالم إسلامي ومدرّس ذو خبرة من لاهور الباكستانية، يملك أكثر من أحد عشر عامًا من الخبرة في تدريس حلقات حفظ القرآن. عمل أيضًا محررًا للترجمة القرآنية والدراسات الإسلامية في دار بابُر وغوهر للنشر في لاهور، مسهمًا في إصدار مطبوعات إسلامية عالية الجودة. إلى جانب التدريس والتحرير، يعمل معالجًا روحيًا منذ نحو خمسة عشر عامًا مقدّمًا الاستشارة والدعم الروحي. درّس سابقًا في جامعة أشرفية الشهيرة في لاهور حيث أشرف على طلاب في مستويات مختلفة من التعليم الشرعي.",
  },
  about_teacher_spotlight_p2: {
    en: "Academically, he holds a modern education degree (F.A) and is a Hafiz al-Qur’an as well as a Fazil of Dars-e-Nizami, having completed his religious studies from Jamia Farooqia, Karachi in 2015. He is fluent in Urdu, Pashto, and Arabic, allowing him to connect with a wide range of students. His approach to teaching blends deep scholarship with humility, sincerity, and a commitment to preserving authentic Islamic tradition while engaging modern learners effectively.",
    ur: "علمی اعتبار سے وہ جدید تعلیم کی ڈگری (ایف اے) رکھتے ہیں اور حافظِ قرآن ہونے کے ساتھ درسِ نظامی کے فاضل بھی ہیں، جب کہ 2015 میں انہوں نے جامعہ فاروقیہ کراچی سے اپنی دینی تعلیم مکمل کی۔ انہیں اردو، پشتو اور عربی پر مکمل عبور حاصل ہے جس سے وہ مختلف پس منظر کے طلبہ سے بآسانی جڑتے ہیں۔ ان کا اندازِ تدریس عالمانہ گہرائی، انکساری، اخلاص اور اصیل اسلامی روایت کی حفاظت کے عزم کو جدید طلبہ کی ضروریات کے ساتھ ہم آہنگ کرتا ہے۔",
    ar: "على الصعيد الأكاديمي يحمل شهادة تعليم عصري (F.A) وهو حافظ لكتاب الله وفاضل في برنامج دراسات درس نظامي بعد أن أتم تعليمه الديني في جامعة فاروقية بكراتشي عام 2015. يتقن الأردية والبشتوية والعربية، مما يتيح له التواصل مع نطاق واسع من الطلاب. يمزج في أسلوبه بين العلم الراسخ والتواضع والإخلاص والحرص على صون التراث الإسلامي الأصيل مع مواكبة احتياجات المتعلمين المعاصرين.",
  },
  teachers_title: { en: "Our Teachers", ur: "ہمارے اساتذہ", ar: "معلمونا" },
  milestones_title: { en: "Milestones", ur: "کارنامے", ar: "إنجازات" },
  courses_title: { en: "Courses", ur: "کورسز", ar: "الدورات" },
  filter_all: { en: "All", ur: "تمام", ar: "الكل" },
  filter_tafseer: { en: "Tafseer", ur: "تفسیر", ar: "التفسير" },
  filter_tajweed: { en: "Tajweed", ur: "تجوید", ar: "التجويد" },
  filter_arabic: { en: "Arabic", ur: "عربی", ar: "العربية" },
  filter_islamic: { en: "Islamic Studies", ur: "اسلامک اسٹڈیز", ar: "الدراسات الإسلامية" },
  admissions_title: { en: "Admissions", ur: "داخلہ", ar: "التسجيل" },
  admissions_guidelines_badge: { en: "Student Guidelines", ur: "طلبہ کی رہنما ہدایات", ar: "إرشادات الطلاب" },
  admissions_guidelines_title: { en: "Please review the student guidelines", ur: "براہ کرم طلبہ کی رہنما ہدایات ملاحظہ کریں", ar: "يرجى الاطلاع على إرشادات الطلاب" },
  admissions_guidelines_ack: { en: "I have read and agree to the guidelines.", ur: "میں نے ہدایات پڑھ لی ہیں اور ان سے متفق ہوں۔", ar: "لقد قرأت الإرشادات وأوافق عليها." },
  admissions_guidelines_continue: { en: "I Agree, Continue", ur: "میں متفق ہوں، آگے بڑھیں", ar: "أوافق، متابعة" },
  admissions_guidelines_cancel: { en: "Cancel", ur: "منسوخ کریں", ar: "إلغاء" },
  admissions_guidelines_confirmed: { en: "Guidelines acknowledged", ur: "ہدایات کی توثیق ہوگئی", ar: "تم تأكيد الإرشادات" },
  admissions_form_applicant: { en: "Applicant Information", ur: "درخواست گزار کی معلومات", ar: "بيانات المتقدم" },
  admissions_form_schedule: { en: "Schedule & Preferences", ur: "شیڈول اور ترجیحات", ar: "الجدول الزمني والتفضيلات" },
  admissions_form_courses: { en: "Course & Days", ur: "کورس اور ایام", ar: "الدورة والأيام" },
  admissions_form_gender: { en: "Gender Preference", ur: "استاد کی ترجیح", ar: "تفضيل المعلم/المعلمة" },
  admissions_form_timing: { en: "Preferred Timing", ur: "پسندیدہ اوقات", ar: "الوقت المفضل" },
  admissions_form_experience: { en: "Experience Level", ur: "تجربے کا درجہ", ar: "مستوى الخبرة" },
  admissions_form_days: { en: "Preferred Days", ur: "پسندیدہ دن", ar: "الأيام المفضلة" },
  admissions_form_message: { en: "Message (optional)", ur: "پیغام (اختیاری)", ar: "رسالة (اختياري)" },
  admissions_form_submit_whatsapp: { en: "Submit via WhatsApp", ur: "واٹس ایپ کے ذریعے جمع کریں", ar: "إرسال عبر واتساب" },
  admissions_whatsapp_note: {
    en: "Submissions go to WhatsApp: {number}",
    ur: "درخواست واٹس ایپ پر ارسال ہوگی: {number}",
    ar: "سيُرسل الطلب إلى واتساب: {number}",
  },
  admissions_success_heading: { en: "Application Received", ur: "درخواست موصول ہوگئی", ar: "تم استلام الطلب" },
  admissions_success_next: { en: "Explore Courses", ur: "مزید کورسز دیکھیں", ar: "استكشف الدورات" },
  admissions_success_support: {
    en: "Need urgent help? Message us on WhatsApp {number}.",
    ur: "فوری مدد درکار ہے؟ ہمیں واٹس ایپ {number} پر پیغام بھیجیں۔",
    ar: "هل تحتاج مساعدة عاجلة؟ أرسل لنا رسالة على واتساب {number}.",
  },
  admissions_review_terms: { en: "Review Agreement", ur: "معاہدہ دوبارہ دیکھیں", ar: "مراجعة الاتفاقية" },
  contact_title: { en: "Contact", ur: "رابطہ", ar: "اتصل بنا" },
  form_name: { en: "Full Name", ur: "نام", ar: "الاسم الكامل" },
  form_age: { en: "Age", ur: "عمر", ar: "العمر" },
  form_email: { en: "Email", ur: "ای میل", ar: "البريد الإلكتروني" },
  form_phone: { en: "Phone", ur: "فون", ar: "الهاتف" },
  form_course: { en: "Preferred Course", ur: "پسندیدہ کورس", ar: "الدورة المفضلة" },
  form_message: { en: "Message", ur: "پیغام", ar: "رسالة" },
  form_submit: { en: "Submit", ur: "جمع کریں", ar: "إرسال" },
  success_submitted: { en: "Your submission was received. We'll contact you soon.", ur: "آپ کی درخواست موصول ہوگئی ہے، جلد رابطہ کریں گے۔", ar: "تم استلام طلبك، وسنتواصل معك قريبًا." },
  language: { en: "Language", ur: "زبان", ar: "اللغة" },
  english: { en: "English", ur: "انگریزی", ar: "الإنجليزية" },
  urdu: { en: "Urdu", ur: "اردو", ar: "الأردية" },
  arabic: { en: "Arabic", ur: "عربی", ar: "العربية" },
  
  // Rohani Ilaj translations
  rohani_ilaj_title: { en: "Rohani Ilaj", ur: "روحانی علاج", ar: "العلاج الروحاني" },
  rohani_ilaj_subtitle: { en: "Spiritual Healing Services", ur: "روحانی شفا کی خدمات", ar: "خدمات الشفاء الروحاني" },
  rohani_ilaj_description: { 
    en: "Authentic spiritual healing for all kinds of problems including black magic, jinn possession, and negative energies.", 
    ur: "کالا جادو، جن کا تعلق، اور منفی توانائیوں سمیت تمام قسم کے مسائل کے لیے مستند روحانی علاج۔", 
    ar: "علاج روحي أصيل لجميع أنواع المشاكل بما في ذلك السحر الأسود وإضافة الجن والطاقة السلبية." 
  },
  rohani_ilaj_contact: { en: "Contact for Spiritual Healing", ur: "روحانی شفا کے لیے رابطہ کریں", ar: "تواصل للعلاج الروحاني" },
  rohani_ilaj_form_title: { en: "Spiritual Healing Request Form", ur: "روحانی شفا کی درخواست کا فارم", ar: "نموذج طلب العلاج الروحاني" },
  rohani_ilaj_patient_name: { en: "Patient Full Name", ur: "مریض کا پورا نام", ar: "الاسم الكامل للمريض" },
  rohani_ilaj_father_name: { en: "Father's Name", ur: "والد کا نام", ar: "اسم الأب" },
  rohani_ilaj_mother_name: { en: "Mother's Name", ur: "ماں کا نام", ar: "اسم الأم" },
  rohani_ilaj_problem_details: { en: "Problem Details", ur: "مسئلہ کی تفصیلات", ar: "تفاصيل المشكلة" },
  rohani_ilaj_submit_whatsapp: { en: "Submit via WhatsApp", ur: "واٹس ایپ کے ذریعے جمع کریں", ar: "إرسال عبر واتساب" },
  rohani_ilaj_reset_form: { en: "Reset Form", ur: "فارم ری سیٹ کریں", ar: "إعادة تعيين النموذج" },

};

const isLang = (value: string | null): value is Lang => value === "en" || value === "ur" || value === "ar";

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("lang");
  return isLang(stored) ? stored : "en";
};

const translate = (entry: TranslationEntry, lang: Lang) => {
  if (lang === "ar") {
    return entry.ar ?? entry.en;
  }
  if (lang === "ur") {
    return entry.ur;
  }
  return entry.en;
};

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof translations) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => getInitialLang());

  const setLang = useCallback((l: Lang) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", l);
    }
    setLangState(l);
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    const isRTL = lang === "ur" || lang === "ar";
    el.lang = lang;
    el.dir = isRTL ? "rtl" : "ltr";
    el.classList.toggle("lang-ur", lang === "ur");
    el.classList.toggle("lang-ar", lang === "ar");
    el.classList.toggle("lang-rtl", isRTL);
  }, [lang]);

  const t = useMemo(() => (key: keyof typeof translations) => translate(translations[key], lang), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
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
