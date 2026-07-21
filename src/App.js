import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Nav from './components/Nav';
import ModernHero from './components/ModernHero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MySkills from './components/MySkills';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-bg">
        <Nav />
        <ModernHero />
        <Experience />
        <Projects />
        <MySkills />
        <ContactInfo />
      </div>
    </LanguageProvider>
  );
}

export default App;
