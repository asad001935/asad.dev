import AnimatedBackground from './components/ui/AnimatedBackground';
import CursorGlow from './components/layout/CursorGlow';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Loader />
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
