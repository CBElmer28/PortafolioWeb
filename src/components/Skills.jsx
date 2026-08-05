import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => { if (skillsRef.current) observer.unobserve(skillsRef.current); };
  }, []);

  const areas = [
    {
      label: "Backend",
      icon: "devicon-spring-original colored",
      skills: [
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "Spring Boot", icon: "devicon-spring-original colored" },
        { name: "PHP / Laravel", icon: "devicon-laravel-original colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      ]
    },
    {
      label: "Frontend",
      icon: "devicon-react-original colored",
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Angular", icon: "devicon-angularjs-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
        { name: "HTML5 / CSS3", icon: "devicon-html5-plain colored" },
      ]
    },
    {
      label: "Bases de Datos",
      icon: "devicon-postgresql-plain colored",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
      ]
    },
    {
      label: "DevOps & Cloud",
      icon: "devicon-docker-plain colored",
      skills: [
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "GitHub Actions", icon: "devicon-github-original" },
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
      ]
    },
    {
      label: "Testing & Herramientas",
      icon: "devicon-postman-plain colored",
      skills: [
        { name: "Postman", icon: "devicon-postman-plain colored" },
        { name: "Jira", icon: "devicon-jira-plain colored" },
        { name: "Scrum", icon: null },
      ]
    },
  ];

  return (
    <div ref={skillsRef} id="habilidades"
      className={`py-24 border-t border-white/5 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

      <div className="mb-14">
        <p className="text-xs font-bold tracking-widest uppercase text-neutral-600 mb-3">Habilidades</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
          Stack <span className="text-indigo-400">tecnológico</span>
        </h2>
      </div>

      <div className="space-y-0">
        {areas.map((area, i) => (
          <div
            key={i}
            className={`grid grid-cols-12 gap-6 py-5 border-b border-white/5 hover:bg-white/[0.02] transition-colors group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="col-span-12 md:col-span-3 flex items-center gap-3">
              {area.icon
                ? <i className={`${area.icon} text-2xl shrink-0`} />
                : <span className="w-6" />
              }
              <h3 className="text-sm font-bold text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">
                {area.label}
              </h3>
            </div>

            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2 items-center">
              {area.skills.map((skill, j) => (
                <span
                  key={j}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-400 border border-neutral-800 rounded-lg hover:border-neutral-600 hover:text-neutral-200 transition-all cursor-default"
                >
                  {skill.icon && <i className={`${skill.icon} text-base`} />}
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