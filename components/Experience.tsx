"use client";

import { useState } from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      id: 0,
      company: "Vendasta",
      position: "Full Stack Software Developer",
      location: "Saskatoon, SK",
      period: "2020 - 2024",
      description:
        "Led the development of an innovative communications app at Vendasta, enhancing SMB customer engagement. Adept at mentoring, with a focus on achieving project milestones through teamwork.",
      achievements: [
        "Developed an AI-powered communications app that centralizes all messages—including SMS and communications across platforms like email, Google, Facebook, Instagram, and others—into a unified inbox, helping small and medium-sized businesses better connect and engage with their customers in one place while reducing operational complexity and labor cost",
        "Integrated the single communication app with other software systems, including automation system, Customer Relationship Management (CRM) system, customer support system, and email system etc",
        "Investigated technical uncertainty related to new features, broke the feature into doable tasks and lead the team to deliver the feature by completing those tasks",
        "Worked collaboratively with senior team members to design solutions that resolve customer facing issues",
        "Fixed incorrect data in the software, upgraded the architecture system of the software and improved the stability of the software",
        "Migrated existing customer data from the old system to the new while ensuring the security and availability of legacy data during architecture  and system upgrades",
        "Actively monitored application health status and assisted support team in identifying and resolving customer issues as quickly as possible",
        "Provided valuable feedback in code review process, documented important system features and mentored junior developers",
        "Helped with Agile or Scrum process in the team by leading sprint retro, helping to estimate and plan sprints in PBR (Product Backlog Refinement) and showing new product features in sprint review",
      ],
      technologies: [
        "GoLang",
        "Angular",
        "TypeScript",
        "Python",
        "JavaScript",
        "Kubernetes",
        "Google Cloud Platform",
        "Elasticsearch",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "Google Cloud Pub/Sub",
        "gRPC",
        "Microservices",
        "CI/CD pipelines",
      ],
    },
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
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experiences[0].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                  Technologies Used
                </h4>
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
