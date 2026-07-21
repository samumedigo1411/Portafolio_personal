import React from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Nav() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-[1040px] mx-auto px-8 md:pl-8 py-4 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-mono text-sm w-9 h-9 border border-border-strong flex items-center justify-center text-accent"
        >
          SM
        </a>
        <div className="hidden sm:flex gap-8 font-mono text-sm text-secondary">
          <a href="#experiencia" className="hover:text-accent transition-colors">
            {t.nav.experience}
          </a>
          <a href="#proyectos" className="hover:text-accent transition-colors">
            {t.nav.projects}
          </a>
          <a href="#stack" className="hover:text-accent transition-colors">
            {t.nav.stack}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Cambiar idioma / Switch language"
            className="font-mono text-xs px-3 py-2 border border-border-strong text-secondary hover:border-accent hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <Languages className="w-4 h-4" />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#contacto"
            className="font-mono text-sm px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-bg transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
