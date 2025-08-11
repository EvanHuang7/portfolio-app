"use client";

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "mrxiaohui204@gmail.com",
      href: "mailto:mrxiaohui204@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+1 (306) 261-1868",
      href: "tel:+13062611868",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Saskatoon, SK",
      href: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/EvanHuang7",
      color: "hover:text-gray-300",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/evan-huang-97336b1a9/",
      color: "hover:text-blue-400",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      href: "mailto:mrxiaohui204@gmail.com",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section id="contact" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you. Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Let&apos;s Connect
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-muted-border transition-all duration-300 hover:bg-card/70 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="text-foreground font-semibold">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-card/50 backdrop-blur-sm rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-muted-border transform hover:scale-110 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Evan Huang. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
