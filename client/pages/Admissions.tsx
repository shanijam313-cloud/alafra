import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, RefreshCw, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

type Stage = "guidelines" | "form" | "success";

type SubmissionData = {
  fullName: string;
  gender: string;
  age: string;
  phone: string;
  timing: string;
  experience: string;
  course: string;
  days: string;
  message: string;
};

const guidelinesContent = [
  {
    en: "Regular attendance and punctuality are expected.",
    ur: "باقاعدہ حاضری اور وقت کی پابندی ضروری ہے۔",
  },
  {
    en: "Respectful behaviour with teachers and classmates is mandatory.",
    ur: "اساتذہ اور ساتھی طلبہ کے ساتھ باوقار رویہ لازم ہے۔",
  },
  {
    en: "Keep audio and video on during class unless advised otherwise.",
    ur: "کلاس کے دوران آڈیو اور ویڈیو کھلی رکھیں، جب تک اس کے برخلاف ہدایت نہ دی جائے۔",
  },
  {
    en: "Tuition fees should be paid on the agreed schedule.",
    ur: "طے شدہ شیڈول کے مطابق فیس ادا کرنا لازم ہے۔",
  },
] as const;

const genderOptions = [
  { value: "male", label: { en: "Male Teacher", ur: "استاد (مرد)" } },
  { value: "female", label: { en: "Female Teacher", ur: "استاد (خاتون)" } },
  { value: "any", label: { en: "No Preference", ur: "کوئی بھی مناسب" } },
] as const;

const timingOptions = [
  { value: "sehar", label: { en: "Sehar (pre-dawn)", ur: "سحر (فجر سے پہلے)" } },
  { value: "morning", label: { en: "Morning", ur: "صبح" } },
  { value: "afternoon", label: { en: "Afternoon", ur: "دوپہر" } },
  { value: "evening", label: { en: "Evening", ur: "شام" } },
  { value: "isha", label: { en: "After Isha", ur: "بعد از عشاء" } },
  { value: "weekend", label: { en: "Weekend", ur: "ویک اینڈ" } },
] as const;

const experienceOptions = [
  { value: "beginner", label: { en: "Beginner", ur: "ابتدائی" } },
  { value: "intermediate", label: { en: "Intermediate", ur: "درمیانہ" } },
  { value: "advanced", label: { en: "Advanced", ur: "اعلیٰ" } },
] as const;

const courseOptions = [
  { value: "noorani-qaida", label: { en: "Noorani Qaida", ur: "نورانی قائدہ" } },
  { value: "quran-reading", label: { en: "Qur’an Reading", ur: "قرآن خوانی" } },
  { value: "tajweed", label: { en: "Tajweed", ur: "تجوید" } },
  { value: "hifz", label: { en: "Hifz (Memorisation)", ur: "حفظ" } },
  { value: "tafseer", label: { en: "Tafseer", ur: "تفسیر" } },
  { value: "islamic-studies", label: { en: "Islamic Studies", ur: "اسلامک اسٹڈیز" } },
] as const;

const daysOptions = [
  { value: "mon-fri", label: { en: "Mon – Fri", ur: "پیر تا جمعہ" } },
  { value: "mon-thu", label: { en: "Mon – Thu", ur: "پیر تا جمعرات" } },
  { value: "weekends", label: { en: "Weekends", ur: "ویک اینڈ" } },
  { value: "custom", label: { en: "Custom", ur: "حسبِ ضرورت" } },
] as const;

const RAW_WHATSAPP_NUMBER = "03353503511";

const sanitizeForWhatsAppLink = (input: string) => {
  const digits = input.replace(/\D/g, "");
  if (digits.startsWith("92")) {
    return digits;
  }
  if (digits.startsWith("0")) {
    return `92${digits.slice(1)}`;
  }
  return digits;
};

const WHATSAPP_NUMBER_DISPLAY = RAW_WHATSAPP_NUMBER;
const WHATSAPP_NUMBER_LINK = sanitizeForWhatsAppLink(RAW_WHATSAPP_NUMBER);

const formatOptionLabel = (
  options: ReadonlyArray<{ value: string; label: { en: string; ur: string } }>,
  value: string,
  lang: "en" | "ur",
) => {
  const option = options.find((item) => item.value === value);
  if (!option) return value || "-";
  return option.label[lang];
};

const formatOptionLabelForMessage = (
  options: ReadonlyArray<{ value: string; label: { en: string; ur: string } }>,
  value: string,
) => {
  const option = options.find((item) => item.value === value);
  if (!option) return value || "-";
  return `${option.label.en} / ${option.label.ur}`;
};

export default function Admissions() {
  const { t, lang } = useI18n();
  const [stage, setStage] = useState<Stage>("guidelines");
  const [acknowledged, setAcknowledged] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<SubmissionData | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stage === "form" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (stage === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [stage]);

  const handleContinue = () => {
    if (!acknowledged) return;
    setStage("form");
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
  };

  const handleReset = () => {
    setStage("guidelines");
    setAcknowledged(false);
    setLastSubmission(null);
  };

  const createWhatsappMessage = (submission: SubmissionData) => {
    const lines = [
      "*New Admission Request / نئی داخلہ درخواست*",
      "",
      `• Name / نام: ${submission.fullName || "-"}`,
      `• Age / عمر: ${submission.age || "-"}`,
      `• Contact / رابطہ: ${submission.phone || "-"}`,
      `• Preferred Teacher / استاد کی ترجیح: ${formatOptionLabelForMessage(genderOptions, submission.gender)}`,
      `• Preferred Timing / پسندیدہ وقت: ${formatOptionLabelForMessage(timingOptions, submission.timing)}`,
      `• Experience Level / تجربہ: ${formatOptionLabelForMessage(experienceOptions, submission.experience)}`,
      `• Course Interest / کورس: ${formatOptionLabelForMessage(courseOptions, submission.course)}`,
      `• Preferred Days / ایام: ${formatOptionLabelForMessage(daysOptions, submission.days)}`,
    ];

    if (submission.message) {
      lines.push("", `• Notes / نوٹس: ${submission.message}`);
    }

    lines.push("", "Submitted via Admissions Form.");
    return lines.join("\n");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const submission: SubmissionData = {
      fullName: (formData.get("fullName") ?? "").toString().trim(),
      gender: (formData.get("gender") ?? "").toString(),
      age: (formData.get("age") ?? "").toString().trim(),
      phone: (formData.get("phone") ?? "").toString().trim(),
      timing: (formData.get("timing") ?? "").toString(),
      experience: (formData.get("experience") ?? "").toString(),
      course: (formData.get("course") ?? "").toString(),
      days: (formData.get("days") ?? "").toString(),
      message: (formData.get("message") ?? "").toString().trim(),
    };

    setLastSubmission(submission);

    const encodedMessage = encodeURIComponent(createWhatsappMessage(submission));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_LINK}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    form.reset();
    setStage("success");
    setTimeout(() => {
      if (successRef.current) {
        successRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
  };

  const guidelineList = useMemo(
    () => guidelinesContent.map((item) => (lang === "ur" ? item.ur : item.en)),
    [lang],
  );

  const inputClass =
    "w-full h-12 rounded-2xl border border-emerald-200/80 bg-white px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition";
  const textareaClass =
    "w-full min-h-[100px] rounded-2xl border border-emerald-200/80 bg-white px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition";

  return (
    <section className="container pb-20 pt-12 space-y-10">
      <div className="relative rounded-3xl border border-emerald-200/70 bg-white px-6 py-8 shadow-[0_32px_70px_-32px_rgba(4,120,87,0.25)] md:px-10 md:py-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/12 via-white/0 to-emerald-500/6" />
          <div className="absolute inset-0 pattern-mosaic opacity-25" />
          <svg
            className="absolute -bottom-10 left-0 right-0 text-emerald-900/5"
            height="160"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120 C 200 40, 400 40, 600 120 S 1000 200, 1200 120 L1200 160 L0 160 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            {t("admissions_guidelines_badge")}
          </div>
          <h2 className="text-2xl font-semibold text-emerald-900">
            {t("admissions_guidelines_title")}
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-800/85">
            {guidelineList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {stage === "guidelines" ? (
            <>
              <label className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-900">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(event) => setAcknowledged(event.target.checked)}
                  className="h-4 w-4 rounded border-emerald-400 text-emerald-600 focus:ring-emerald-500"
                />
                {t("admissions_guidelines_ack")}
              </label>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={handleContinue}
                  disabled={!acknowledged}
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-emerald-700 px-6 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-emerald-500/50"
                >
                  {t("admissions_guidelines_continue")}
                </Button>
                <Link
                  to="/"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-emerald-200 px-6 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50"
                >
                  {t("admissions_guidelines_cancel")}
                </Link>
              </div>
            </>
          ) : (
            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                {t("admissions_guidelines_confirmed")}
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-emerald-300 bg-white px-5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 transition hover:bg-emerald-50"
                >
                  <RefreshCw className="me-2 h-4 w-4" />
                  {t("admissions_review_terms")}
                </Button>
                {stage === "success" && (
                  <Button
                    asChild
                    className="inline-flex h-11 items-center justify-center rounded-2xl bg-emerald-700 px-6 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-emerald-800"
                  >
                    <Link to="/courses">{t("admissions_success_next")}</Link>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {stage === "form" && (
        <div
          ref={formRef}
          className="relative rounded-3xl border border-emerald-200/70 bg-white px-6 py-8 shadow-[0_32px_70px_-32px_rgba(4,120,87,0.25)] md:px-10 md:py-12 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-white/0 to-emerald-500/5" />
            <div className="absolute inset-0 pattern-mosaic opacity-25" />
            <svg
              className="absolute -bottom-10 left-0 right-0 text-emerald-900/5"
              height="160"
              viewBox="0 0 1200 160"
              preserveAspectRatio="none"
            >
              <path
                d="M0 120 C 200 40, 400 40, 600 120 S 1000 200, 1200 120 L1200 160 L0 160 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
                  {t("admissions_form_applicant")}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-emerald-900" htmlFor="fullName">
                  {t("form_name")}
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  required
                  placeholder={lang === "ur" ? "اپنا مکمل نام درج کریں" : "Your full name"}
                  className={inputClass}
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-emerald-900" htmlFor="gender">
                  {t("admissions_form_gender")}
                </label>
                <select id="gender" name="gender" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {lang === "ur" ? "استاد کی پسند منتخب کریں" : "Select preference"}
                  </option>
                  {genderOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-emerald-900" htmlFor="age">
                  {t("form_age")}
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="3"
                  required
                  placeholder={lang === "ur" ? "مثلاً 12" : "e.g. 12"}
                  className={inputClass}
                  inputMode="numeric"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-emerald-900" htmlFor="phone">
                  {t("form_phone")}
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  placeholder={lang === "ur" ? "03xx xxxxxxx" : "e.g. 03xx xxxxxxx"}
                  className={inputClass}
                  autoComplete="tel"
                />
              </div>

              <div className="md:col-span-2">
                <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
                  {t("admissions_form_schedule")}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-emerald-900" htmlFor="timing">
                  {t("admissions_form_timing")}
                </label>
                <select id="timing" name="timing" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {lang === "ur" ? "اوقات منتخب کریں" : "Select timing"}
                  </option>
                  {timingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-emerald-900" htmlFor="experience">
                  {t("admissions_form_experience")}
                </label>
                <select id="experience" name="experience" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {lang === "ur" ? "سطح منتخب کریں" : "Select experience"}
                  </option>
                  {experienceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
                  {t("admissions_form_courses")}
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-emerald-900" htmlFor="course">
                  {t("form_course")}
                </label>
                <select id="course" name="course" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {lang === "ur" ? "کورس منتخب کریں" : "Choose a course"}
                  </option>
                  {courseOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-emerald-900" htmlFor="days">
                  {t("admissions_form_days")}
                </label>
                <select id="days" name="days" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {lang === "ur" ? "دن منتخب کریں" : "Choose days"}
                  </option>
                  {daysOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-emerald-900" htmlFor="message">
                  {t("admissions_form_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={
                    lang === "ur"
                      ? "اپنے اہداف، سابقہ تجربہ یا ترجیحی وقت لکھیں"
                      : "Share goals, experience, or timing details"
                  }
                  className={textareaClass}
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-6 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-800"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t("admissions_form_submit_whatsapp")}
                </Button>
                <Link
                  to="/courses"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-emerald-200 px-6 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50"
                >
                  {t("admissions_success_next")}
                </Link>
                <div className="text-sm text-emerald-800/80 sm:ms-auto">
                  {t("admissions_whatsapp_note").replace("{number}", WHATSAPP_NUMBER_DISPLAY)}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {stage === "success" && (
        <div
          ref={successRef}
          className="relative rounded-3xl border border-emerald-200/70 bg-white px-6 py-8 text-center shadow-[0_32px_70px_-32px_rgba(4,120,87,0.25)] md:px-10 md:py-12 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-white/0 to-emerald-500/5" />
            <div className="absolute inset-0 pattern-mosaic opacity-25" />
            <svg
              className="absolute -bottom-10 left-0 right-0 text-emerald-900/5"
              height="160"
              viewBox="0 0 1200 160"
              preserveAspectRatio="none"
            >
              <path
                d="M0 120 C 200 40, 400 40, 600 120 S 1000 200, 1200 120 L1200 160 L0 160 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-2xl space-y-5">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 shadow-[0_24px_48px_-24px_rgba(4,120,87,0.35)]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-emerald-900">
              {t("admissions_success_heading")}
            </h3>
            <p className="text-sm text-emerald-800/85">{t("success_submitted")}</p>
            <p className="text-sm text-emerald-800/70">
              {t("admissions_success_support").replace("{number}", WHATSAPP_NUMBER_DISPLAY)}
            </p>

            {lastSubmission && (
              <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-4 text-left text-sm text-emerald-900 shadow-sm">
                <p className="font-semibold text-emerald-800">
                  {lang === "ur" ? "آپ کی فراہم کردہ معلومات" : "Your submitted details"}
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>{t("form_name")}:</strong> {lastSubmission.fullName || "-"}
                  </li>
                  <li>
                    <strong>{t("form_age")}:</strong> {lastSubmission.age || "-"}
                  </li>
                  <li>
                    <strong>{t("form_phone")}:</strong> {lastSubmission.phone || "-"}
                  </li>
                  <li>
                    <strong>{t("admissions_form_gender")}:</strong> {formatOptionLabel(genderOptions, lastSubmission.gender, lang)}
                  </li>
                  <li>
                    <strong>{t("admissions_form_timing")}:</strong> {formatOptionLabel(timingOptions, lastSubmission.timing, lang)}
                  </li>
                  <li>
                    <strong>{t("admissions_form_experience")}:</strong> {formatOptionLabel(experienceOptions, lastSubmission.experience, lang)}
                  </li>
                  <li>
                    <strong>{t("form_course")}:</strong> {formatOptionLabel(courseOptions, lastSubmission.course, lang)}
                  </li>
                  <li>
                    <strong>{t("admissions_form_days")}:</strong> {formatOptionLabel(daysOptions, lastSubmission.days, lang)}
                  </li>
                  {lastSubmission.message && (
                    <li>
                      <strong>{t("admissions_form_message")}:</strong> {lastSubmission.message}
                    </li>
                  )}
                </ul>
              </div>
            )}

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button
                asChild
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-emerald-700 px-6 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-emerald-800"
              >
                <Link to="/courses">{t("admissions_success_next")}</Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-white px-5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 transition hover:bg-emerald-50"
              >
                <RefreshCw className="h-4 w-4" />
                {t("admissions_review_terms")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
