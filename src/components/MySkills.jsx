import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function MySkills() {
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
    <section id="stack" className="py-28 bg-bg text-primary">
      <div className="max-w-[1040px] mx-auto px-8 md:pl-20">
        <div className="font-mono text-sm text-accent flex items-center gap-2.5 mb-6">
          <span className="w-[9px] h-[9px] bg-accent inline-block" />
          {t.skills.eyebrow}
        </div>
        <h2 className="font-display font-semibold text-3xl mb-12">{t.skills.title}</h2>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {t.skills.categories.map((cat) => (
            <div key={cat.label}>
              <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-3.5 font-medium">
                {cat.label}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm text-secondary border border-border px-3.5 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
