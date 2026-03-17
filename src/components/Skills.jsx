import { FaCode, FaLaptopCode, FaDatabase, FaChartPie, FaCloud, FaRobot } from 'react-icons/fa6';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Arquitectura",
      icon: <FaCode />, 
      skills: [
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "Spring Boot", icon: "devicon-spring-original colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "Microservicios", icon: null },
        { name: "APIs RESTful", icon: null },
        { name: "JWT", icon: null }
      ]
    },
    {
      title: "Frontend & Móvil",
      icon: <FaLaptopCode />,
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Angular", icon: "devicon-angularjs-plain colored" },
        { name: "React Native", icon: "devicon-react-original" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: <FaDatabase />,
      skills: [
        { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Cassandra", icon: "devicon-cassandra-plain colored" },
        { name: "Modelado Dimensional", icon: null }
      ]
    },
    {
      title: "Data Intelligence & BI",
      icon: <FaChartPie />,
      skills: [
        { name: "Power BI", icon: null },
        { name: "pandas", icon: "devicon-pandas-plain colored" },
        { name: "BigQuery", icon: "devicon-googlecloud-plain colored" },
        { name: "DAX Avanzado", icon: null },
        { name: "SSIS", icon: null },
        { name: "ETL Pipelines", icon: null }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud />,
      skills: [
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "GitHub Actions", icon: "devicon-github-original" },
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "GCP", icon: "devicon-googlecloud-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "Linux", icon: "devicon-linux-plain" },
        { name: "Ubuntu", icon: "devicon-ubuntu-plain colored" }
      ]
    },
    {
      title: "Automatización, QA & IA",
      icon: <FaRobot />,
      skills: [
        { name: "JUnit", icon: null },
        { name: "Prometheus", icon: "devicon-prometheus-original colored" },
        { name: "Postman", icon: "devicon-postman-plain colored" },
        { name: "Prompt Engineering", icon: null },
        { name: "Scrum/Agile", icon: null },
        { name: "JMeter", icon: null }
      ]
    }
  ];

  return (
    <div className="py-24 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Stack <span className="text-indigo-500">Tecnológico</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Herramientas y tecnologías que utilizo para construir soluciones robustas y escalables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-3 text-white">
              <span className="text-xl text-neutral-400">{category.icon}</span>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-300 bg-neutral-950 rounded-md border border-neutral-800 hover:border-indigo-500/50 hover:text-white transition-colors"
                >
                  {skill.icon && <i className={`${skill.icon} text-lg`}></i>}
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