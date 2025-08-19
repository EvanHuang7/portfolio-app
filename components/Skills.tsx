"use client";

import { useState } from "react";
import {
  Monitor,
  Database,
  Globe,
  Cloud,
  Server,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      icon: <Monitor size={28} />,
      title: "Frontend Development",
      description:
        "React, Next.js, Angular, TypeScript, JavaScript, Tailwind CSS, Shadcn, Daisy UI, Framer Motion, Redux, Zustand, and Tanstack Query",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Server size={28} />,
      title: "Backend Development",
      description:
        "Node.js, Express.js, GoLang, Python, Flask, PHP and Microservices architecture",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Database size={28} />,
      title: "Database",
      description:
        "PostgreSQL, MySQL, MongoDB, Redis, Firebase, SQLAlchemy, Prisma ORM and Drizzle ORM",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud",
      description:
        "Google Cloud Platform, AWS, Kubernetes, Docker, Docker Swarm, CI/CD pipelines, GitHub Actions Workflow, ArgoCD and KluCtl GitOps",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Globe size={28} />,
      title: "Web Technologies",
      description:
        "HTTP/HTTPS, gRPC, Kafka, RabbitMQ, WebSockets, Stream.io and Clerk & Clerk Billing",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Other",
      description:
        "Google Gemini AI, Vapi AI, Imagekit.io AI, Cloudflare, Cloudinary and Datadog",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
        </div>

        <div className="grid gap-12 items-center mb-20">
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I&apos;m passionate about building scalable, high-quality products
              with clean architecture, modern technologies and elegant UI/UX.{" "}
              <strong>
                My expertise spans full-stack development, cloud infrastructure,
                web technologies, AI integrations, and responsive design
              </strong>
              —transforming ideas into impactful, real-world solutions.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Below are the skills I&apos;m proficient in, honed through
              personal projects and professional experience.{" "}
              <strong>
                In the Projects section, you can use the filter buttons to view
                only the projects that showcase a specific skill.
              </strong>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`bg-card/50 backdrop-blur-sm border-border hover:border-muted-border transition-all duration-300 transform hover:scale-105 cursor-pointer h-full ${
                hoveredSkill === index ? "shadow-lg shadow-cyan-500/20" : ""
              }`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white flex-shrink-0`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
