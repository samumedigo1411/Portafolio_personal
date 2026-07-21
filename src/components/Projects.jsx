import React, { useEffect, useRef, useState } from "react";
import { Github, Lock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Metadata fija (no traducible): stack, link y flag de privacidad, en el mismo
// orden que las listas "featured" del archivo de traducciones.
const featuredMeta = [
  { stack: "TypeScript · NestJS", link: "https://github.com/samumedigo1411/MedleyAppointments" },
  { stack: "Java · Spring Boot · Keycloak · Eureka", link: "https://github.com/samumedigo1411/MicroserviciosCasos.git" },
  { stack: "LLM · Integración web", link: "https://github.com/samumedigo1411/saboresIA.git" },
  { stack: "Python · Machine Learning", link: "https://github.com/samumedigo1411/Thyrod_cancer_risk.git" },
  { stack: "Python · YOLO", link: "https://github.com/samumedigo1411/Workout_detection_YOLO.git" },
  { stack: "Proyecto interno — IEB", link: null, private: true },
];

export default function Projects() {
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

  const featured = t.projects.featured.map((p, i) => ({ ...p, ...featuredMeta[i] }));

  return (
    <section id="proyectos" className="py-28 bg-bg text-primary">
      <div className="max-w-[1040px] mx-auto px-8 md:pl-20">
        <div className="font-mono text-sm text-accent flex items-center gap-2.5 mb-6">
          <span className="w-[9px] h-[9px] bg-accent inline-block" />
          {t.projects.eyebrow}
        </div>
        <h2 className="font-display font-semibold text-3xl mb-12">{t.projects.title}</h2>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-5 mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {featured.map((p) => (
            <div
              key={p.name}
              className="border border-border bg-surface p-6 hover:border-border-strong transition-colors group flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="font-display font-semibold text-lg">{p.name}</div>
                {p.private && <Lock className="w-4 h-4 text-muted flex-shrink-0 mt-1" />}
              </div>
              <div className="font-mono text-xs text-accent-2 mb-1">{p.stack}</div>
              <div className="font-mono text-[11px] text-muted mb-4">{p.role}</div>
              <p className="text-secondary text-sm mb-5 flex-1">{p.description}</p>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-secondary group-hover:text-accent inline-flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  {t.projects.viewRepo}
                </a>
              ) : (
                <span className="font-mono text-xs text-muted">
                  {p.private ? t.projects.privateCode : t.projects.repoInPrep}
                </span>
              )}
            </div>
          ))}
        </div>

        <div>
          <p className="font-mono text-sm text-muted mb-4">{t.projects.otherProjects}</p>
          <div className="flex flex-wrap gap-2.5">
            {t.projects.others.map((name) => (
              <span
                key={name}
                className="font-mono text-sm text-secondary border border-border px-3.5 py-2"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
