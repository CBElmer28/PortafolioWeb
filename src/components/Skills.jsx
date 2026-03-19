import { useEffect, useRef, useState } from 'react';
import { FaCode, FaLaptopCode, FaDatabase, FaChartPie, FaCloud, FaRobot } from 'react-icons/fa6';

const Skills = () => {
  // Mantenemos tu estructura de datos con Devicon
  const skillCategories = [
    { title: "Backend & Arquitectura", icon: <FaCode />, skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "Microservicios", icon: null },
      { name: "APIs RESTful", icon: null },
      { name: "JWT", icon: null }
    ]},
    { title: "Frontend & Móvil", icon: <FaLaptopCode />, skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "React Native", icon: "devicon-react-original" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" }
    ]},
    { title: "Bases de Datos", icon: <FaDatabase />, skills: [
      { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Cassandra", icon: "devicon-cassandra-plain colored" },
    ]},
    { title: "Data Intelligence & BI", icon: <FaChartPie />, skills: [
      { name: "Power BI", icon: null }, 
      { name: "BigQuery", icon: "devicon-googlecloud-plain colored" },
      { name: "DAX Avanzado", icon: null },
      { name: "SSIS", icon: null },
      { name: "ETL Pipelines", icon: null }
    ]},
    { title: "DevOps & Cloud", icon: <FaCloud />, skills: [
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "GitHub Actions", icon: "devicon-github-original" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Ubuntu", icon: "devicon-ubuntu-plain colored" }
    ]},
    { title: "Automatización, QA & IA", icon: <FaRobot />, skills: [
      { name: "JUnit", icon: null },
      { name: "Prometheus", icon: "devicon-prometheus-original colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Scrum/Agile", icon: null },
      { name: "JMeter", icon: null }
    ]}
  ];

  // ✅ Referencia y Estado para la Animación al Scroll
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Dejamos de observar una vez que se muestra
        }
      },
      { threshold: 0.1 } 
    );

    // Corregido: Quitamos el ".ref" que sobraba
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      // Corregido también por si acaso
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    // ✅ Aplicamos animación de fade-in inicial a toda la sección
    <div ref={skillsRef} className={`py-28 relative border-b border-white/5 animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Decoración de fondo sutil */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Stack <span className="text-indigo-500">Tecnológico</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Un conjunto de herramientas modernas y metodologías que utilizo para construir soluciones end-to-end robustas, escalables y eficientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          // ✅ Animación fadeInUp con delay escalonado para cada tarjeta
          <div 
            key={index} 
            className={`bg-neutral-900/40 border border-white/5 rounded-3xl p-8 hover:border-indigo-500/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Título de la Categoría */}
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4 text-white">
              <span className="text-2xl text-neutral-400">{category.icon}</span>
              <h3 className="text-xl font-semibold tracking-wide">{category.title}</h3>
            </div>
            
            {/* Habilidades Individuales */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name}
                  className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-neutral-300 bg-neutral-950 rounded-lg border border-neutral-800 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/5 transition-colors cursor-default"
                >
                  {skill.icon && <i className={`${skill.icon} text-xl`}></i>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;