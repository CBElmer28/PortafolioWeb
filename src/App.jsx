import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import "./App.css";

const Home = () => {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section id="inicio"><Hero /></section>
      <section id="habilidades"><Skills /></section>
      <section id="experiencia"><Experience /></section>
      <section id="proyectos"><Projects /></section>
      <Education />
      <section id="contacto"><Contact /></section>
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden font-sans selection:bg-indigo-500 selection:text-white bg-neutral-950 text-neutral-200">
        {/* Fondo sutil */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[150px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-800/8 blur-[120px]" />
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto/:id" element={<ProjectDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
