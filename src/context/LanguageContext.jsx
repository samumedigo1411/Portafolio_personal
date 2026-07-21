import React, { createContext, useContext, useState } from "react";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      stack: "Stack",
      contact: "Contactar",
    },
    hero: {
      role: "Desarrollador Full Stack",
      name: "Samuel Medina González",
      description:
        "Desarrollador Full Stack en IEB desde diciembre de 2024, construyendo aplicaciones en producción con PHP, JavaScript y PostgreSQL. Cursando el último semestre de Ingeniería de Sistemas y Computación en la EIA.",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Experiencia Laboral",
      jobTitle: "Desarrollador de Software (Full Stack)",
      company: "IEB — Ingeniería Especializada",
      period: "Dic. 2024 — Presente · Medellín",
      items: [
        "Desarrollo y mantenimiento de aplicaciones full stack con PHP y JavaScript, incluyendo lógica de backend e integración de datos.",
        "Gestión de bases de datos relacionales con PostgreSQL (pgAdmin): diseño y optimización de consultas para procesos internos.",
        "Actualmente en desarrollo activo de CheckIEB, un proyecto propietario interno de la empresa.",
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Stack Técnico",
      categories: [
        { label: "Lenguajes", items: ["PHP", "JavaScript", "TypeScript", "Python", "Java"] },
        { label: "Backend & Arquitectura", items: ["Spring Boot", "NestJS", "Node.js", "Keycloak", "Eureka", "APIs REST"] },
        { label: "Base de Datos", items: ["PostgreSQL", "pgAdmin"] },
        { label: "IA & Machine Learning", items: ["Scikit-learn", "YOLO (visión por computador)", "Integración de LLMs"] },
        { label: "DevOps & Cloud", items: ["Docker", "AWS (básico)", "n8n (automatización con IA)"] },
        { label: "Frontend & Herramientas", items: ["React", "HTML/CSS", "Git", "GitHub"] },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos Destacados",
      otherProjects: "Otros Proyectos",
      viewRepo: "Ver Repositorio",
      privateCode: "Código Privado",
      repoInPrep: "Repositorio en Preparación",
      featured: [
        {
          name: "MedleyAppointments",
          role: "Colaborador — Proyecto en Equipo",
          description:
            "Sistema integral de recordatorios y seguimiento de medicación para adultos mayores: recuerda tomar pastillas, coordina asistencia médica y centraliza todo en una sola aplicación. Pensado para integrarse a futuro con una \"magic box\" física que se actualiza según las pastillas que el usuario debe tomar.",
        },
        {
          name: "Microservicios de Casos Investigativos",
          role: "Autor Único",
          description:
            "Arquitectura de microservicios para un sistema de investigación de casos (proyecto universitario), con autenticación centralizada mediante Keycloak y descubrimiento de servicios con Eureka.",
        },
        {
          name: "Asistente Virtual con LLM",
          role: "Autor Único",
          description:
            "LLM propio integrado en la página web de un emprendimiento de salsas y aderezos, capaz de resolver dudas y necesidades de los clientes directamente en el sitio.",
        },
        {
          name: "Predicción de Riesgo de Cáncer de Tiroides",
          role: "Colaborador — Proyecto en Equipo",
          description:
            "Modelo de machine learning para estimar la probabilidad de que una persona desarrolle cáncer de tiroides a partir de variables clínicas.",
        },
        {
          name: "Detección de Ejercicios con Visión por Computador",
          role: "Colaborador — Proyecto en Equipo",
          description:
            "Sistema de visión por computador con YOLO para detectar y clasificar ejercicios de gimnasio a partir de fotos.",
        },
        {
          name: "CheckIEB",
          role: "Desarrollador",
          description:
            "Proyecto propietario en desarrollo activo para la empresa. Detalles reservados por confidencialidad.",
        },
      ],
      others: [
        "ML — Probabilidad de Cáncer de Tiroides (Colaborador)",
        "ML — Predicción de Resultados Mundiales (Autor Único)",
        "Compilador en C++ (Colaborador)",
        "Esperanza para Todos",
        "Lecodern",
        "YourMedic",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      labels: {
        Email: "Email",
        WhatsApp: "WhatsApp",
        LinkedIn: "LinkedIn",
        GitHub: "GitHub",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      role: "Full Stack Developer",
      name: "Samuel Medina González",
      description:
        "Full Stack Developer at IEB since December 2024, building production applications with PHP, JavaScript and PostgreSQL. Currently in the final semester of Systems and Computer Engineering at EIA.",
      viewProjects: "View Projects",
      contact: "Contact",
    },
    experience: {
      eyebrow: "Experience",
      title: "Work Experience",
      jobTitle: "Software Developer (Full Stack)",
      company: "IEB — Ingeniería Especializada",
      period: "Dec. 2024 — Present · Medellín",
      items: [
        "Development and maintenance of full stack applications with PHP and JavaScript, including backend logic and data integration.",
        "Management of relational databases with PostgreSQL (pgAdmin): design and optimization of queries for internal processes.",
        "Currently in active development of CheckIEB, an internal proprietary company project.",
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Technical Stack",
      categories: [
        { label: "Languages", items: ["PHP", "JavaScript", "TypeScript", "Python", "Java"] },
        { label: "Backend & Architecture", items: ["Spring Boot", "NestJS", "Node.js", "Keycloak", "Eureka", "REST APIs"] },
        { label: "Databases", items: ["PostgreSQL", "pgAdmin"] },
        { label: "AI & Machine Learning", items: ["Scikit-learn", "YOLO (Computer Vision)", "LLM Integration"] },
        { label: "DevOps & Cloud", items: ["Docker", "AWS (Basic)", "n8n (AI Automation)"] },
        { label: "Frontend & Tools", items: ["React", "HTML/CSS", "Git", "GitHub"] },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Featured Projects",
      otherProjects: "Other Projects",
      viewRepo: "View Repository",
      privateCode: "Private Code",
      repoInPrep: "Repository in Preparation",
      featured: [
        {
          name: "MedleyAppointments",
          role: "Collaborator — Team Project",
          description:
            "Comprehensive medication reminder and tracking system for older adults: reminds them to take pills, coordinates medical care and centralizes everything in a single application. Designed to integrate in the future with a physical \"magic box\" that updates based on the pills the user needs to take.",
        },
        {
          name: "Investigative Case Microservices",
          role: "Sole Author",
          description:
            "Microservices architecture for a investigative case system (university project), with centralized authentication via Keycloak and service discovery with Eureka.",
        },
        {
          name: "Virtual Assistant with LLM",
          role: "Sole Author",
          description:
            "Custom LLM integrated into the website of a sauces and dressings startup, capable of answering customer questions and needs directly on the site.",
        },
        {
          name: "Thyroid Cancer Risk Prediction",
          role: "Collaborator — Team Project",
          description:
            "Machine learning model to estimate the probability of a person developing thyroid cancer based on clinical variables.",
        },
        {
          name: "Exercise Detection with Computer Vision",
          role: "Collaborator — Team Project",
          description:
            "Computer vision system with YOLO to detect and classify gym exercises from photos.",
        },
        {
          name: "CheckIEB",
          role: "Developer",
          description:
            "Proprietary project in active development for the company. Details reserved for confidentiality.",
        },
      ],
      others: [
        "ML — Thyroid Cancer Probability (Collaborator)",
        "ML — World Cup Results Prediction (Sole Author)",
        "C++ Compiler (Collaborator)",
        "Hope for Everyone",
        "Lecodern",
        "YourMedic",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Talk",
      labels: {
        Email: "Email",
        WhatsApp: "WhatsApp",
        LinkedIn: "LinkedIn",
        GitHub: "GitHub",
      },
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return ctx;
}
