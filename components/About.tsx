"use client";

import { useState } from 'react';
import { Code, Database, Globe, Cloud, Server, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      icon: <Code size={28} />,
      title: 'Frontend Development',
      description: 'Expert in modern frontend technologies including React, Next.js, Vue.js, TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, SASS, and responsive design principles. Experienced in state management with Redux, Zustand, and Context API.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server size={28} />,
      title: 'Backend Development',
      description: 'Proficient in server-side development using Node.js, Express.js, Python, Django, FastAPI, and PHP. Skilled in building RESTful APIs, GraphQL endpoints, microservices architecture, and implementing authentication and authorization systems.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Database size={28} />,
      title: 'Database',
      description: 'Extensive experience with both SQL and NoSQL databases including PostgreSQL, MySQL, MongoDB, Redis, and Firebase. Skilled in database design, optimization, indexing, and data modeling for scalable applications.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud',
      description: 'Experienced with cloud platforms including AWS, Google Cloud Platform, and Azure. Proficient in containerization with Docker, orchestration with Kubernetes, CI/CD pipelines, and serverless architectures.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Globe size={28} />,
      title: 'Web Technologies',
      description: 'Deep understanding of web fundamentals including HTTP/HTTPS protocols, WebSockets, Progressive Web Apps (PWA), Service Workers, Web APIs, browser optimization, and modern build tools like Webpack, Vite, and Parcel.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile development using React Native and Flutter. Experience with native iOS and Android development, mobile UI/UX best practices, app store deployment, and mobile-specific performance optimization.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full stack developer with 5+ years of experience building 
            scalable web applications. I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Started as a curious computer science student, I've evolved into a seasoned developer 
              who thrives on creating exceptional digital experiences. My journey spans across 
              startups and established companies, where I've led teams and delivered products 
              used by millions.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest technologies. When I'm not coding, you'll find me contributing to open 
              source projects or mentoring aspiring developers.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`bg-card/50 backdrop-blur-sm border-border hover:border-muted-border transition-all duration-300 transform hover:scale-105 cursor-pointer h-full ${
                hoveredSkill === index ? 'shadow-lg shadow-cyan-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;