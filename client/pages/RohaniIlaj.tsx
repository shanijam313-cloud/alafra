import { useState } from "react";
import { MessageCircle, User, Mail, Phone, BookOpen, Globe, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const WHATSAPP_PRIMARY_DISPLAY = "+92 304 2186295";
const WHATSAPP_PRIMARY_LINK = "923042186295";
const CONTACT_EMAIL = "ts4763970@gmail.com";

export default function RohaniIlaj() {
  const { lang, setLang, t } = useI18n();
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create message for WhatsApp
    const messageLines = [
      lang === "ur" ? "*نئی روحانی علاج کی درخواست*" : "*New Rohani Ilaj Request*",
      "",
      `${lang === "ur" ? "• مریض کا نام" : "• Patient Name"}: ${formData.fullName || "-"}`,
      `${lang === "ur" ? "• والد کا نام" : "• Father's Name"}: ${formData.fatherName || "-"}`,
      `${lang === "ur" ? "• ماں کا نام" : "• Mother's Name"}: ${formData.motherName || "-"}`,
      `${lang === "ur" ? "• ای میل" : "• Email"}: ${formData.email || "-"}`,
      `${lang === "ur" ? "• فون" : "• Phone"}: ${formData.phone || "-"}`,
    ];

    if (formData.message) {
      messageLines.push("", `${lang === "ur" ? "• پیغام" : "• Message"}: ${formData.message}`);
    }

    messageLines.push("", lang === "ur" ? "روحانی علاج کے فارم سے جمع کروایا گیا۔" : "Submitted via Rohani Ilaj Form.");

    const encodedMessage = encodeURIComponent(messageLines.join("\n"));
    const whatsappUrl = `https://wa.me/${WHATSAPP_PRIMARY_LINK}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setFormData({
      fullName: "",
      fatherName: "",
      motherName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="container pb-20 pt-12 space-y-10">
      {/* About Us Section - Made smaller */}
      <div className="relative rounded-3xl border border-gray-800/70 bg-gray-900 px-6 py-6 shadow-[0_32px_70px_-32px_rgba(0,0,0,0.5)] md:px-8 md:py-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-900/0 to-gray-800/20" />
          <div className="absolute inset-0 pattern-mosaic opacity-10" />
          <svg
            className="absolute -bottom-10 left-0 right-0 text-gray-700/20"
            height="100"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80 C 200 30, 400 30, 600 80 S 1000 130, 1200 80 L1200 100 L0 100 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gray-200">
              {t("nav_rohani_ilaj")}
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-400" />
              <div className="flex gap-1">
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 text-xs rounded-full transition ${
                    lang === "en"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {t("english")}
                </button>
                <button
                  onClick={() => setLang("ur")}
                  className={`px-3 py-1 text-xs rounded-full transition ${
                    lang === "ur"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {t("urdu")}
                </button>
                <button
                  onClick={() => setLang("ar")}
                  className={`px-3 py-1 text-xs rounded-full transition ${
                    lang === "ar"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {t("arabic")}
                </button>
              </div>
            </div>
          </div>
          
          <h1 className="text-xl font-semibold text-white">
            {lang === "ur" 
              ? "آن لائن روحانی علاج (مستند روحانی عملیات) عملیات، تعویذ، وظائف برائے روحانی شفا" 
              : lang === "ar"
              ? "العلاج الروحاني عبر الإنترنت (عمليات روحانية موثقة) التعويذ، الصلوات، للشفاء الروحاني"
              : "Online Roohani Ilaj (مستند روحانی عملیات) Amliyat, Taweez, Wazaif for Spiritual Healing"}
          </h1>

          <div className="border-t border-gray-700/50 pt-4">
            <p className="text-gray-300">
              {lang === "ur"
                ? "آج کی جلد باز دنیا میں بہت سے لوگ جسمانی اور ذہنی صحت کے مسائل، سماجی اور معاشی مشکلات کا شکار ہوتے ہیں۔ ہماری آن لائن روحانی علاج کی خدمات ہر کسی کے لیے دستیاب ہیں۔"
                : lang === "ar"
                ? "في عالمنا السريع اليوم، يعاني الكثيرون من مشاكل صحية جسدية ونفسية. تتوفر خدمات العلاج الروحاني عبر الإنترنت للجميع."
                : "In today's fast-paced world, many people face physical and mental health challenges. Our online Rohani ilaj services are available for everyone."}
            </p>
          </div>
          
          <div className="mt-4">
            <figure className="wp-block-kadence-image kb-image584_29f3b0-c7">
              <img 
                decoding="async" 
                src="https://midnightblue-oryx-763437.hostingersite.com/wp-content/uploads/2025/04/rohani-ilaj-poster-1.webp" 
                alt={lang === "ur" ? "آن لائن روحانی علاج پوسٹر" : lang === "ar" ? "بوستر العلاج الروحاني عبر الإنترنت" : "online rohani ilaj poster"} 
                className="kb-img wp-image-1394 rounded-xl border border-gray-700/70 shadow-sm w-full"
                title={lang === "ur" 
                  ? "آن لائن روحانی علاج (مستند روحانی عملیات) عملیات، تعویذ، وظائف برائے روحانی شفا 2" 
                  : lang === "ar"
                  ? "العلاج الروحاني عبر الإنترنت (عمليات روحانية موثقة) التعويذ، الصلوات، للشفاء الروحاني 2"
                  : "Online Roohani Ilaj (مستند روحانی عملیات) Amliyat, Taweez, Wazaif for Spiritual Healing 2"}
              />
            </figure>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative rounded-3xl border border-gray-800/70 bg-gray-900 px-6 py-8 shadow-[0_32px_70px_-32px_rgba(0,0,0,0.5)] md:px-10 md:py-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/25 via-gray-900/0 to-gray-800/15" />
          <div className="absolute inset-0 pattern-mosaic opacity-10" />
          <svg
            className="absolute -bottom-10 left-0 right-0 text-gray-700/20"
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

        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            {lang === "ur" ? "روانی علاج کے لیے رابطہ کریں" : lang === "ar" ? "تواصل للعلاج الروحاني" : "Contact for Rohani Ilaj"}
          </h2>

          <p className="text-gray-300">
            {lang === "ur"
              ? "ہم بطور ماہر روحانی معالج استخارہ، کالا جادو کاٹ، بندشوں کا علاج، روحانی بیماریوں، سایہ، گھر و کاروبار کے مسائل، نظر بد، عملِ محبت، اور رشتوں کے مسائل کا کامیاب روحانی حل فراہم کرتے ہیں۔ اگر آپ کسی بھی پریشانی میں مبتلا ہیں تو آج ہی ہم سے رابطہ کریں"
              : lang === "ar"
              ? "نحن كخبراء في العلاج الروحاني نقدم حلولاً روحانية ناجحة للاستخارة، وقطع السحر الأسود، وعلاج السحريات، والأمراض الروحانية، والوساوس، ومشاكل المنزل والعمل، وعين الحسد، وعمليات الحب، ومشاكل العلاقات. إذا كنت تعاني من أي ضرر فاتصل بنا اليوم"
              : "ہم بطور ماہر روحانی معالج استخارہ، کالا جادو کاٹ، بندشوں کا علاج، روحانی بیماریوں، سایہ، گھر و کاروبار کے مسائل، نظر بد، عملِ محبت، اور رشتوں کے مسائل کا کامیاب روحانی حل فراہم کرتے ہیں۔ اگر آپ کسی بھی پریشانی میں مبتلا ہیں تو آج ہی ہم سے رابطہ کریں"}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="h-5 w-5 text-gray-300" />
                <span className="font-medium text-white">
                  {lang === "ur" ? "رابطہ کی معلومات" : lang === "ar" ? "معلومات الاتصال" : "Contact Information"}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-gray-400" />
                  <a
                    className="text-gray-200 font-medium hover:underline flex items-center gap-2"
                    href={`https://wa.me/${WHATSAPP_PRIMARY_LINK}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Send className="h-4 w-4" />
                    {WHATSAPP_PRIMARY_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <a
                    className="text-gray-200 font-medium hover:underline"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              
              <div className="mt-6">
                <Button asChild className="rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700">
                  <a href={`https://wa.me/${WHATSAPP_PRIMARY_LINK}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {lang === "ur" ? "واٹس ایپ پیغام" : lang === "ar" ? "رسالة واتساب" : "WhatsApp Message"}
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex-1">
              <figure className="wp-block-kadence-image kb-image584_8e7995-c7">
                <img 
                  decoding="async" 
                  src="/hero/Rohani-Ilaj.jpg" 
                  alt={lang === "ur" ? "روحانی علاج، عامل بابا" : lang === "ar" ? "العلاج الروحاني، بابا المعالج" : "Spiritual Healing, Baba"} 
                  className="kb-img wp-image-2244 rounded-xl border border-gray-700/70 shadow-sm w-full"
                  title={lang === "ur" 
                    ? "آن لائن روحانی علاج (مستند روحانی عملیات) عملیات، تعویذ، وظائف برائے روحانی شفا 1" 
                    : lang === "ar"
                    ? "العلاج الروحاني عبر الإنترنت (عمليات روحانية موثقة) التعويذ، الصلوات، للشفاء الروحاني 1"
                    : "Online Roohani Ilaj (مستند روحانی عملیات) Amliyat, Taweez, Wazaif for Spiritual Healing 1"}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative rounded-3xl border border-gray-800/70 bg-gray-900 px-6 py-8 shadow-[0_32px_70px_-32px_rgba(0,0,0,0.5)] md:px-10 md:py-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-gray-900/0 to-gray-800/10" />
          <div className="absolute inset-0 pattern-mosaic opacity-10" />
          <svg
            className="absolute -bottom-10 left-0 right-0 text-gray-700/20"
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

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {lang === "ur" ? "روحانی علاج کے لیے فارم" : lang === "ar" ? "نموذج العلاج الروحاني" : "Rohani Ilaj Form"}
            </h2>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
            <p className="text-gray-300 text-justify">
              {lang === "ur"
                ? "اس سروس کے ذریعے دنیا بھر کے پریشان حال اپنے مسائل، پریشانی، بے روزگاری اور جنّات و جادو کے معاملات کا حل پاتے ہیں۔ ہزاروں اسلامی بھائی اور بہنیں روحانی علاج کے محکمے سے رابطہ کرتی ہیں، جن کے نام امیر اہل سنت کے خطوط بھیجے جاتے ہیں۔ الحمد للہ، اس سروس کے ذریعے بے شمار دکھی اور پریشان حال لوگوں کو شفا ملتی ہے۔"
                : lang === "ar"
                ? "من خلال هذه الخدمة، يجد الناس في جميع أنحاء العالم حلولاً لمشاكلهم وصعوباتهم وأزماتهم المالية والمسائل المتعلقة بالجن والسحر. يتواصل آلاف الإخوة والأخوات المسلمين مع قسم العلاج الروحاني، ويتم إرسال رسائل من أمير أهل السنة إليهم. الحمد لله، تماثل عدد لا يحصى من المسلمين والمسلمات المتألمين والمحتاجين للشفاء والراحة من خلال هذه الخدمة."
                : "Through this service, the grief-stricken people all over the world find solutions to their problems, difficulties, unemployment, Jinns and magic issues. Thousands of Islamic brothers and Islamic sisters contact Department Rohani Ilaj. Letters of Ameer-e-Ahlesunnat are mailed to them. اَلْـحَمْـدُ لـِلّٰـه countless afflicted and distressed Islamic brothers and sisters are getting spiritual healing and relief through this service."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-200" htmlFor="fullName">
                  <User className="h-4 w-4" />
                  {lang === "ur" ? "مریض کا پورا نام" : lang === "ar" ? "الاسم الكامل للمريض" : "Full Name of Patient"}
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 rounded-2xl border border-gray-700/80 bg-gray-800 px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600/40 focus:border-gray-600 transition"
                  placeholder={lang === "ur" ? "مکمل نام درج کریں" : lang === "ar" ? "أدخل الاسم الكامل" : "Enter full name"}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-200" htmlFor="fatherName">
                  <User className="h-4 w-4" />
                  {lang === "ur" ? "والد کا نام" : lang === "ar" ? "اسم الأب" : "Father's Name"}
                </label>
                <input
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 rounded-2xl border border-gray-700/80 bg-gray-800 px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600/40 focus:border-gray-600 transition"
                  placeholder={lang === "ur" ? "والد کا نام درج کریں" : lang === "ar" ? "أدخل اسم الأب" : "Enter father's name"}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-200" htmlFor="motherName">
                  <User className="h-4 w-4" />
                  {lang === "ur" ? "ماں کا نام" : lang === "ar" ? "اسم الأم" : "Mother's Name"}
                </label>
                <input
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 rounded-2xl border border-gray-700/80 bg-gray-800 px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600/40 focus:border-gray-600 transition"
                  placeholder={lang === "ur" ? "ماں کا نام درج کریں" : lang === "ar" ? "أدخل اسم الأم" : "Enter mother's name"}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-200" htmlFor="email">
                  <Mail className="h-4 w-4" />
                  {lang === "ur" ? "ای میل" : lang === "ar" ? "البريد الإلكتروني" : "Email"}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 rounded-2xl border border-gray-700/80 bg-gray-800 px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600/40 focus:border-gray-600 transition"
                  placeholder={lang === "ur" ? "ای میل ایڈریس درج کریں" : lang === "ar" ? "أدخل عنوان البريد الإلكتروني" : "Enter email address"}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-200" htmlFor="phone">
                  <Phone className="h-4 w-4" />
                  {lang === "ur" ? "فون نمبر" : lang === "ar" ? "رقم الهاتف" : "Phone Number"}
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 rounded-2xl border border-gray-700/80 bg-gray-800 px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600/40 focus:border-gray-600 transition"
                  placeholder={lang === "ur" ? "فون نمبر درج کریں" : lang === "ar" ? "أدخل رقم الهاتف" : "Enter phone number"}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-200" htmlFor="message">
                  <BookOpen className="h-4 w-4" />
                  {lang === "ur" ? "پیغام / مسئلہ کی تفصیلات" : lang === "ar" ? "الرسالة / تفاصيل المشكلة" : "Message / Problem Details"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full rounded-2xl border border-gray-700/80 bg-gray-800 px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600/40 focus:border-gray-600 transition"
                  placeholder={lang === "ur" ? "اپنے مسئلہ کی تفصیل سے وضاحت کریں" : lang === "ar" ? "صف مشكلتك بالتفصيل" : "Describe your problem in detail"}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-800 px-6 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-gray-700 border border-gray-700 flex-1"
              >
                <Send className="h-5 w-5" />
                {lang === "ur" ? "واٹس ایپ کے ذریعے بھیجیں" : lang === "ar" ? "إرسال عبر واتساب" : "Send via WhatsApp"}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => setFormData({
                  fullName: "",
                  fatherName: "",
                  motherName: "",
                  email: "",
                  phone: "",
                  message: ""
                })}
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-gray-700 bg-gray-800 px-6 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 transition hover:bg-gray-700 flex-1"
              >
                {lang === "ur" ? "فارم ری سیٹ کریں" : lang === "ar" ? "إعادة تعيين النموذج" : "Reset Form"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative rounded-3xl border border-gray-800/70 bg-gray-900 px-6 py-8 shadow-[0_32px_70px_-32px_rgba(0,0,0,0.5)] md:px-10 md:py-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-gray-900/0 to-gray-800/10" />
          <div className="absolute inset-0 pattern-mosaic opacity-10" />
          <svg
            className="absolute -bottom-10 left-0 right-0 text-gray-700/20"
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

        <div className="relative z-10 mx-auto max-w-4xl">
          <figure className="wp-block-kadence-image kb-image584_7d8af3-82">
            <img 
              decoding="async" 
              src="https://rohaniilajonline.pk/wp-content/uploads/2025/10/روحانی-علاج-حاصل-کرنے-کا-طریقہن.webp" 
              alt={lang === "ur" ? "قرآنی علاج، روحانی علاج" : lang === "ar" ? "العلاج القرآني، العلاج الروحاني" : "Quranic treatment, spiritual healing"} 
              className="kb-img wp-image-2262 rounded-xl border border-gray-700/70 shadow-sm w-full"
              title={lang === "ur" 
                ? "آن لائن روحانی علاج (مستند روحانی عملیات) عملیات، تعویذ، وظائف برائے روحانی شفا 3" 
                : lang === "ar"
                ? "العلاج الروحاني عبر الإنترنت (عمليات روحانية موثقة) التعويذ، الصلوات، للشفاء الروحاني 3"
                : "Online Roohani Ilaj (مستند روحانی عملیات) Amliyat, Taweez, Wazaif for Spiritual Healing 3"}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}