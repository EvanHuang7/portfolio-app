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
        "Led the development of a unified AI-powered communications app at Vendasta, improving SMB engagement and reducing complexity. Strong collaborator with experience in mentorship, RFCs, and Agile delivery.",
      achievements: [
        "Developed an AI-powered communications app that centralized SMS, Email, Instagram, WhatsApp, and Facebook messages into a unified inbox, handling 10M+ messages/month and helping SMBs streamline customer engagement while reducing operational complexity and costs.",
        "Built robust gRPC and REST APIs in microservices with Go and Python to support new product features and third-party integrations with CRM, automation, and customer support platforms, contributing to a 20% increase in customer retention.",
        "Collaborated with designers to build scalable, tested front-end features in JavaScript, TypeScript, and Angular for seamless user experiences, improving feature adoption by 30%.",
        "Led feature delivery by investigating technical uncertainties, breaking down initiatives into actionable Jira tasks, and guiding the team to successful completion, improving team sprint completion rate to 95%.",
        "Managed cross-database integrations and migrations (MySQL, PostgreSQL, Elasticsearch, Firebase, Google Cloud Datastore) while architecting event-driven workflows with Google Cloud Pub/Sub, processing 5M+ asynchronous events monthly and reducing downtime by 40% during system upgrades.",
        "Deployed and monitored cloud-native infrastructure on GCP with Kubernetes, Docker, CI/CD pipelines, ArgoCD, and Datadog, achieving 99.9% uptime and reducing incident resolution time by 50%.",
        "Improved team productivity and collaboration by leading Agile processes (sprint retros, PBR planning, feature demos), authoring 12+ RFCs, mentoring 3+ junior developers, conducting code reviews, and documenting key system features, resulting in a 20% faster feature delivery.",
      ],
      technologies: [
        "Go",
        "Python",
        "Angular",
        "TypeScript",
        "JavaScript",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "Elasticsearch",
        "gRPC",
        "REST APIs",
        "Microservices",
        "Google Cloud Pub/Sub",
        "Google Cloud Platform",
        "Kubernetes",
        "Docker",
        "CI/CD pipelines",
        "ArgoCD",
        "Datadog",
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
