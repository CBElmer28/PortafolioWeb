import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import "./App.css";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden font-sans selection:bg-indigo-500 selection:text-white">
      
      <Navbar />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="inicio"><Hero /></section>
        <section id="habilidades"><Skills /></section>
        <section id="proyectos"><Projects /></section>
        <section id="contacto"><Contact /></section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;