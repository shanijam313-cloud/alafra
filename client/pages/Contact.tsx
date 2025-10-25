import { MessageCircle } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const WHATSAPP_PRIMARY_DISPLAY = "03353503511";
const WHATSAPP_PRIMARY_LINK = "923353503511";
const WHATSAPP_ALT_DISPLAY = "+92 304 2186295";
const WHATSAPP_ALT_LINK = "923042186295";

export default function Contact() {
  const { t, lang } = useI18n();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const submission = {
      name: (formData.get("name") ?? "").toString().trim(),
      email: (formData.get("email") ?? "").toString().trim(),
      phone: (formData.get("phone") ?? "").toString().trim(),
      message: (formData.get("message") ?? "").toString().trim(),
    };

    const messageLines = [
      "*New Contact Message*",
      "",
      `Name (نام): ${submission.name || "-"}`,
      `Email (ای میل): ${submission.email || "-"}`,
      `Phone (فون): ${submission.phone || "-"}`,
    ];

    if (submission.message) {
      messageLines.push("", `Message (پیغام): ${submission.message}`);
    }

    messageLines.push("", "Submitted via Contact Form.");

    const encodedMessage = encodeURIComponent(messageLines.join("\n"));
    const whatsappUrl = `https://wa.me/${WHATSAPP_PRIMARY_LINK}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    form.reset();
  };
  return (
    <div className="container mx-auto py-12 grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold mb-4">{t("contact_title")}</h1>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm">{t("form_name")}</label>
            <input required name="name" className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm">{t("form_email")}</label>
              <input required name="email" type="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
            </div>
            <div>
              <label className="text-sm">{t("form_phone")}</label>
              <input name="phone" className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="text-sm">{t("form_message")}</label>
            <textarea name="message" rows={4} className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
          </div>
          <Button type="submit" className="rounded-full">{t("form_submit")}</Button>
        </form>

        <div className="mt-6 space-y-2 text-sm text-foreground/80">
          <p>{lang === "en" ? "Location: Gulberg III, Lahore, Pakistan" : "مقام: گلبرگ تھری، لاہور، پاکستان"}</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-foreground/60">{lang === "en" ? "Admissions WhatsApp:" : "داخلہ واٹس ایپ:"}</span>
              <a
                className="text-primary font-medium"
                href={`https://wa.me/${WHATSAPP_PRIMARY_LINK}`}
                target="_blank"
                rel="noreferrer"
              >
                {WHATSAPP_PRIMARY_DISPLAY}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-foreground/60">{lang === "en" ? "General WhatsApp:" : "عام واٹس ایپ:"}</span>
              <a
                className="text-primary font-medium"
                href={`https://wa.me/${WHATSAPP_ALT_LINK}`}
                target="_blank"
                rel="noreferrer"
              >
                {WHATSAPP_ALT_DISPLAY}
              </a>
            </div>
          </div>
          <p>Email: info@alafra.academy</p>
          <p>{lang === "en" ? "Office Hours: Mon–Sat 9:00–18:00 PKT" : "اوقات کار: پیر تا ہفتہ 9:00 تا 18:00"}</p>
        </div>
      </div>

      <div className="rounded-xl border overflow-hidden shadow-sm">
        <iframe
          title="Gulberg Lahore Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.013042606188!2d74.34018895!3d31.5070206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190fd5c4cf7ebd%3A0xb482ca392116745d!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2054000!5e0!3m2!1sen!2sPK!4v1736965678901!5m2!1sen!2sPK"
          width="100%"
          height="380"
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
