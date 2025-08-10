"use client";

import { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      id: 0,
      company: 'Vendasta',
      position: 'Full Stack Software Developer',
      location: 'Saskatoon, SK',
      period: '2023 - Present',
      description: 'Developing and maintaining enterprise-scale web applications and services that empower local businesses. Working with modern technologies to build scalable solutions and enhance user experiences.',
      achievements: [
        'Developed and maintained full-stack web applications using modern technologies',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented responsive user interfaces and optimized application performance',
        'Participated in code reviews and contributed to best practices and coding standards',
        'Worked with APIs and databases to build scalable backend services'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'SQL', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development, building expertise 
            and delivering impactful solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Details */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experiences[0].position}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                    <div className="flex items-center">
                      <span className="text-cyan-400 font-semibold">
                        {experiences[0].company}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {experiences[0].location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {experiences[0].period}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {experiences[0].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experiences[0].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted/50 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;