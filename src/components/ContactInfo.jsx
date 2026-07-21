import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const contactsMeta = [
  {
    icon: Mail,
    key: "Email",
    value: "samuelmedinago@gmail.com",
    href: "mailto:samuelmedinago@gmail.com",
  },
  {
    icon: Phone,
    key: "WhatsApp",
    value: "+57 314 585 5338",
    href: "https://wa.me/573145855338",
  },
  {
    icon: Linkedin,
    key: "LinkedIn",
    value: "samuel-medina-gonzález",
    href: "https://www.linkedin.com/in/samuel-medina-gonz%C3%A1lez-1b837b316/",
  },
  {
    icon: Github,
    key: "GitHub",
    value: "samumedigo1411 (Samuel Medina)",
    href: "https://github.com/samumedigo1411",
  },
];

export default function ContactInfo() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" className="py-28 bg-bg text-primary">
      <div className="max-w-[1040px] mx-auto px-8 md:pl-20">
        <div className="font-mono text-sm text-accent flex items-center gap-2.5 mb-6">
          <span className="w-[9px] h-[9px] bg-accent inline-block" />
          {t.contact.eyebrow}
        </div>
        <h2 className="font-display font-semibold text-3xl mb-12">{t.contact.title}</h2>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {contactsMeta.map((c) => (
            <a
              key={c.key}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 border border-border bg-surface p-5 hover:border-accent transition-colors"
            >
              <div className="w-10 h-10 border border-border-strong flex items-center justify-center text-accent flex-shrink-0">
                <c.icon className="w-[18px] h-[18px]" />
              </div>
              <div>
                <div className="font-mono text-[11px] text-muted uppercase tracking-wider">
                  {t.contact.labels[c.key]}
                </div>
                <div className="text-primary text-[15px]">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
