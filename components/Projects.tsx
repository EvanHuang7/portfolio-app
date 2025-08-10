"use client";

import { useState } from "react";
import { ExternalLink, Github, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "AI Tools Studio",
      description:
        "🛠️ AI Tools Studio is a full-stack microservices application seamlessly integrated with ☁️ Google Cloud Platform (GCP). It empowers users to create stunning content in seconds using a suite of AI-powered tools, including 🎨 Image Editing, 🖼️ AI Image Generation, 🎬 Video Generation and 💬 Intelligent Conversations.",
      image:
        "https://storage.googleapis.com/ai-tools-gcs-bucket/Portfolio%20App%20Images/AI-Tools-Studio-Project-Card.png",
      technologies: [
        "React",
        "TypeScript",
        "Express.js",
        "Node.js",
        "JavaScript",
        "GoLang",
        "Python",
        "Flask",
        "PostgreSql",
        "MongoDB",
        "Redis",
        "Drizzle ORM",
        "Clerk & Clerk Billing",
        "Shadcn",
        "Tailwind CSS",
        "Tanstack Query",
        "Google Cloud Platform",
        "Google Kubernetes Engine",
        "Google Compute Engine",
        "Google Cloud Storage",
        "GCP Cloud Pub/Sub",
        "Google Gemini AI",
        "Vapi AI",
        "Imagekit.io AI",
        "gRPC",
        "RabbitMQ",
        "Kafka",
        "Kubernetes",
        "Docker",
        "CI/CD pipelines",
        "GitHub Actions Workflow",
        "KluCtl GitOps",
        "Cloudflare",
        "Microservices",
      ],
      demoUrl: "https://aitools-evanhuang.duckdns.org/",
      githubUrl: "https://github.com/EvanHuang7/ai-tools",
    },
    {
      id: 2,
      title: "Order Food",
      description:
        "🍔 Oder Food is a full-stack food delivery platform, integrated with ☁️ AWS, that connects customers, restaurants, and delivery drivers in a unified system.",
      image:
        "https://storage.googleapis.com/ai-tools-gcs-bucket/Portfolio%20App%20Images/Order-Food-Project-Card.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM",
        "Redux",
        "Shadcn",
        "Tailwind CSS",
        "Framer Motion",
        "AWS",
        "Cognito",
        "EC2",
        "RDS",
        "API Gateway",
        "Amplify",
        "S3",
        "SNS",
        "SES",
        "Google Gemini AI",
        "Vapi AI",
        "PM2",
      ],
      demoUrl: "https://main.d3vq2tufq59s1m.amplifyapp.com/",
      githubUrl: "https://github.com/EvanHuang7/order-food",
    },
    {
      id: 3,
      title: "LetsChat",
      description:
        "💬 LetsChat is a MERN stack (full-stack) real-time chat application that lets users connect with new friends and chat privately. Users can also create group chats, invite friends, and enjoy group messaging or even group video calls. In addition, users can post moments, as well as like and comment on others’ moments.",
      image:
        "https://storage.googleapis.com/ai-tools-gcs-bucket/Portfolio%20App%20Images/LetsChat-Project-Card.png",
      technologies: [
        "React",
        "JavaScript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Cloudinary",
        "Zustand",
        "Daisy UI",
        "Tailwind CSS",
        "Socket.io",
        "WebSocket",
        "Stream.io",
      ],
      demoUrl: "https://letschat-qrze.onrender.com/",
      githubUrl: "https://github.com/EvanHuang7/LetsChat",
    },
    {
      id: 4,
      title: "AI Job Interview",
      description:
        "💬 AI Job Interview is a full-stack Next.js application that enables users to conduct mock interviews with AI. After each session, the AI provides personalized feedback to help users improve their interview skills.",
      image:
        "https://storage.googleapis.com/ai-tools-gcs-bucket/Portfolio%20App%20Images/AI-Job-Interview-Project-Card.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Firebase",
        "Shadcn",
        "Tailwind CSS",
        "Google Gemini AI",
        "Vapi AI",
      ],
      demoUrl:
        "https://ai-job-interview-l5wyt5aco-evan-huangs-projects-53e2b658.vercel.app/",
      githubUrl: "https://github.com/EvanHuang7/ai_job_interview",
    },
    {
      id: 5,
      title: "Item Shopping",
      description:
        "Item Shopping is an e-commerce app built with PHP, which offers a comprehensive platform for users to buy and sell.",
      image:
        "https://storage.googleapis.com/ai-tools-gcs-bucket/Portfolio%20App%20Images/Item-Shopping-Project-Card.png",
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      demoUrl: "https://www.youtube.com/watch?v=HH3utaJtaF8",
      githubUrl: "https://github.com/EvanHuang7/Item-Shopping-website",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Modern, fully responsive portfolio website showcasing professional work with smooth animations, interactive elements, dark/light mode toggle, and optimized performance.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Python",
        "Flask",
        "TypeScript",
        "Framer Motion",
        "Shadcn/ui",
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  // Get all unique technologies
  const allTechnologies = [
    "All",
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort();

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <section id="projects" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise across various
            technologies and domains.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-h-32 overflow-y-auto">
          {allTechnologies.map((tech) => (
            <Button
              key={tech}
              onClick={() => setFilter(tech)}
              variant={filter === tech ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                filter === tech
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  : "border-border text-muted-foreground hover:text-cyan-400 hover:border-cyan-400"
              }`}
            >
              <Tag size={16} className="mr-2" />
              {tech}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-muted-border transition-all duration-300 transform hover:scale-105 overflow-hidden group h-full flex flex-col"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 flex-shrink-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    {/* Demo Button */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-cyan-500/80 hover:bg-cyan-500 text-white"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </Button>
                    </a>

                    {/* Code Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted/50 text-cyan-400 rounded text-xs border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
