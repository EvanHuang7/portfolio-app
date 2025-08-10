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
        "Kubernete",
        "Docker",
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
      title: "Task Management App",
      description:
        "Advanced collaborative task management application featuring real-time updates, intuitive drag-and-drop functionality, team collaboration tools, project timelines, and comprehensive reporting dashboard.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Socket.io",
        "Prisma",
        "PostgreSQL",
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Elegant weather application providing accurate location-based forecasts, interactive weather maps, detailed analytics, and personalized weather alerts with beautiful data visualizations.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "Chart.js",
        "Weather API",
        "CSS3",
        "Geolocation API",
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Social Media API",
      description:
        "Robust RESTful API powering a social media platform with comprehensive user authentication, advanced post management, real-time messaging, content moderation, and scalable architecture.",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "JWT",
        "WebSocket",
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "AI Chat Application",
      description:
        "Cutting-edge AI-powered chat application featuring advanced natural language processing, contextual conversations, multi-language support, and seamless real-time communication experience.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Python",
        "Flask",
        "OpenAI API",
        "WebSocket",
        "React",
        "SQLite",
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Modern, fully responsive portfolio website showcasing professional work with smooth animations, interactive elements, dark/light mode toggle, and optimized performance.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Next.js",
        "Tailwind CSS",
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
                    <Button
                      size="sm"
                      className="bg-cyan-500/80 hover:bg-cyan-500 text-white"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </Button>
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
