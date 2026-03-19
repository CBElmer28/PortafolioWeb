import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import "./App.css";

const Home = () => {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section id="inicio"><Hero /></section>
      <section id="habilidades"><Skills /></section>
      <section id="proyectos"><Projects /></section>
      <section id="contacto"><Contact /></section>
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden font-sans selection:bg-indigo-500 selection:text-white">
        
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