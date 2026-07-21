import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiencia" className="py-28 bg-bg text-primary">
      <div className="max-w-[1040px] mx-auto px-8 md:pl-20">
        <div className="font-mono text-sm text-accent flex items-center gap-2.5 mb-6">
          <span className="w-[9px] h-[9px] bg-accent inline-block" />
          {t.experience.eyebrow}
        </div>
        <h2 className="font-display font-semibold text-3xl mb-12">{t.experience.title}</h2>

        <div
          ref={ref}
          className={`border border-border bg-surface p-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex justify-between items-start flex-wrap gap-2 mb-5">
            <div>
              <div className="font-display font-semibold text-lg">
                {t.experience.jobTitle}
              </div>
              <div className="text-accent-2 font-medium">{t.experience.company}</div>
            </div>
            <div className="font-mono text-sm text-muted whitespace-nowrap">
              {t.experience.period}
            </div>
          </div>
          <ul className="space-y-2.5">
            {t.experience.items.map((item, i) => (
              <li key={i} className="relative pl-6 text-secondary">
                <span className="absolute left-0 text-accent-dim font-mono">&rarr;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
