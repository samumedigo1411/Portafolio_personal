import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import FotoPersonalCV from "../assets/img/FotoPersonalCV.jpeg";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();
  useEffect(() => setVisible(true), []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-24 bg-bg text-primary"
    >
      <div className="max-w-[1040px] w-full mx-auto px-8 md:pl-20">
        <div
          className={`grid md:grid-cols-[1.3fr_0.9fr] gap-12 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-5">
              {t.hero.role}
            </p>
            <h1 className="font-display font-semibold text-4xl md:text-5xl leading-tight mb-5 text-primary">
              {t.hero.name}
            </h1>
            <p className="font-mono text-base text-secondary mb-6">
              PHP <span className="text-border-strong mx-2">/</span> JavaScript{" "}
              <span className="text-border-strong mx-2">/</span> PostgreSQL{" "}
              <span className="text-border-strong mx-2">/</span> Python{" "}
              <span className="text-border-strong mx-2">/</span> Java
            </p>
            <p className="text-secondary max-w-md mb-9 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#proyectos"
                className="font-mono text-sm px-6 py-3 bg-accent text-[#1A1204] font-medium"
              >
                {t.hero.viewProjects}
              </a>
              <a
                href="#contacto"
                className="font-mono text-sm px-6 py-3 border border-border-strong hover:border-accent hover:text-accent transition-colors"
              >
                {t.hero.contact}
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/samumedigo1411"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:border-accent hover:text-accent transition-colors"
              >
                <Github className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-medina-gonz%C3%A1lez-1b837b316/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a
                href="mailto:samuelmedinago@gmail.com"
                aria-label="Email"
                className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[260px] h-[320px] bg-[#EDEEEC] p-3 border border-border-strong">
              <img
                src={FotoPersonalCV}
                alt="Samuel Medina González"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
