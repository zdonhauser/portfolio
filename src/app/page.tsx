'use client';

import { useState } from 'react';
import ProjectCard from "@/components/ProjectCard";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectModal from "@/components/ProjectModal";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/react';

interface ProjectData {
  title: string;
  description: string;
  type: 'external' | 'preview';
  url?: string;
  githubUrl?: string;
  preview?: React.ReactNode;
  tags?: string[];
  images?: {
    src: string;
    alt: string;
  }[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const goToNextProject = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.title === selectedProject.title);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    }
  };

  const goToPreviousProject = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.title === selectedProject.title);
      const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[previousIndex]);
    }
  };

  const projects: ProjectData[] = [

    {
      title: "Point of Sale System",
      description: "Custom POS system for ticketing and fast-service food environments built with React and Node.js. Features comprehensive order management, payment processing, and inventory tracking.",
      type: "preview",
      githubUrl: "https://github.com/zdonhauser/posdashboard-public",
      tags: ["React", "Node.js", "PostgreSQL", "GraphQL", "REST API", "Payment Processing"],
      images: [
        {
          src: "/screenshots/pos.png",
          alt: "Point of Sale System Interface"
        }
      ]
    },
    {
      title: "Kitchen Display System",
      description: "Real-time Kitchen Display System with synchronized front-of-house and back-of-house order lifecycle management using webhooks. Streamlines food service operations with live order tracking.",
      type: "preview",
      githubUrl: "https://github.com/zdonhauser/posdashboard-public/tree/main/client/src/components/KDS",
      tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "Real-time Updates", "Webhooks"],
      images: [
        {
          src: "/screenshots/kds.png",
          alt: "Kitchen Display System Screenshot"
        }
      ]
    },
    {
      title: "Daily Transaction Reports Dashboard",
      description: "Daily Transaction Reports Dashboard with real-time updates via webhooks and Plotly visualizations.",
      type: "preview",
      githubUrl: "https://github.com/zdonhauser/posdashboard-public/tree/main/client/src/components/DailyDashboard",
      tags: ["Plotly", "React", "Node.js", "PostgreSQL", "Webhooks", "Real-time Updates"],
      images: [
        {
          src: "/screenshots/dailysales.png",
          alt: "Daily Transaction Reports Dashboard Interface"
        }
      ]
    },
    {
      title: "Webhooks Microservice",
      description: "Webhooks Microservice syncing of Shopify transactions to a PostgreSQL database for real-time reporting and quick access to transaction data.",
      type: "preview",
      githubUrl: "https://github.com/zdonhauser/pos-webhooks",
      tags: ["Node.js", "Shopify API", "Webhooks", "PostgreSQL", "Real-time Updates"],
      images: [
        {
          src: "/screenshots/webhook.png",
          alt: "Webhooks Screenshot"
        }
      ]
    },
    {
      title: "Employee Time Tracking",
      description: "Employee clock-in terminal and time tracking tools with administrative controls for industry-specific hours handling and live time-clock monitoring.",
      type: "preview",
      githubUrl: "https://github.com/zdonhauser/posdashboard-public/tree/main/client/src/components/ClockIn",
      tags: ["React", "Node.js", "PostgreSQL", "Authentication", "Role Management", "Reporting"],
      images: [
        {
          src: "/screenshots/timeclock.png",
          alt: "Employee Time Clock Interface"
        },
        {
          src: "/screenshots/timeclock2.png",
          alt: "Time Tracking Management Dashboard"
        },
        {
          src: "/screenshots/timeclock3.png",
          alt: "Administrative Time Controls"
        }
      ]
    },
    {
      title: "Membership Management",
      description: "Comprehensive membership access management system with recurring billing options via Shopify integration. Handles member check-ins and subscription management.",
      type: "preview",
      githubUrl: "https://github.com/zdonhauser/posdashboard-public",
      tags: ["React", "Node.js", "PostgreSQL", "Shopify API", "GraphQL", "Subscription Management"],
      images: [
        {
          src: "/screenshots/members.png",
          alt: "Membership Management System Screenshot"
        }
      ]
    },
    {
      title: "Electron Business Platform",
      description: "Comprehensive Electron wrapper providing system-level access and peripheral integration for POS operations. Enables direct hardware communication, local storage, and unified access to all business management systems.",
      type: "preview",
      githubUrl: "https://github.com/zdonhauser/electronpos-public",
      tags: ["Electron", "Node.js", "Hardware Integration", "System APIs", "Cross-Platform", "Business Operations"],
      images: [
        {
          src: "/screenshots/pos.png",
          alt: "Electron Business Platform - POS Integration"
        },
        {
          src: "/screenshots/menu.png",
          alt: "POS Menu Management System"
        }
      ]
    },
    {
      title: "ZDTs Amusement Park Website",
      description: "Revamped amusement park website using Shopify Hydrogen with React 18, TypeScript, GraphQL, Vite, Tailwind, and React Router v7. Deployed via Shopify Oxygen with integrated ticketing system.",
      type: "external",
      url: "https://react.zdtamusement.com",
      githubUrl: "https://github.com/zdonhauser/zdt-hydrogen",
      tags: ["React", "TypeScript", "Shopify Hydrogen", "GraphQL", "Tailwind", "Vite", "React Router v7", "Shopify Oxygen"],
      images: [
        {
          src: "/screenshots/zdtamusement.png",
          alt: "ZDTs Amusement Park Website Screenshot"
        }
      ]
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-900 transform rotate-45 opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-gray-900 transform rotate-12 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-gray-900/10 transform -rotate-12"></div>
      </div>
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section with Modern Grid Background */}
        <div className="relative text-center mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-8">
              <div className="w-40 h-40 mb-6 flex items-center justify-center">
                <Image
                  src="/donrey_transparent.png"
                  alt="Don Rey - Zachary Donhauser"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Zachary Donhauser
              </h1>
            </div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <p className="text-2xl font-light tracking-wide">
                  Full Stack Software Engineer
                </p>
              </div>
              <div className="flex justify-center items-center space-x-6 text-gray-300 text-sm">
                <span className="flex items-center space-x-1">
                  <span>Austin, TX</span>
                </span>
                <a href="mailto:zac@donrey.dev" className="hover:text-white transition-colors border-b border-transparent hover:border-white">
                  zac@donrey.dev
                </a>
                <a href="https://github.com/zdonhauser" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/zachary-donhauser/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
              Full stack software engineer with a proven track record of delivering and maintaining production systems that power live businesses. Proficient in React, Node.js, Express, and PostgreSQL, with a focus on usability, performance, and continuous iteration. Designed and built a fully integrated POS and operations platform for a multi-department amusement park, supporting daily ticketing, event and party booking, food service, memberships, and employee time tracking. I take a user-centered approach to development, blending technical expertise with functional design, and bring cross-functional leadership experience that equips me for roles requiring both engineering excellence and strategic collaboration.              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-800"></div>
            <h2 className="text-3xl font-light mx-8 tracking-widest">
              FEATURED PROJECTS
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-800"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              type={project.type}
              url={project.url}
              githubUrl={project.githubUrl}
              tags={project.tags}
              preview={
                project.images && project.images.length > 1 ? (
                  <ImageCarousel images={project.images} />
                ) : project.images && project.images.length === 1 ? (
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded"
                  />
                ) : undefined
              }
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-24 relative">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-800"></div>
            <h2 className="text-2xl font-light mx-8 tracking-widest">
              TECHNICAL STACK
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-800"></div>
          </div>
          
          <div className="max-w-7xl mx-auto bg-gray-900 border border-gray-800 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <h3 className="text-sm font-light text-white uppercase tracking-widest">
                    Languages & Frameworks
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["JavaScript", "TypeScript", "React", "Node.js", "Express", "GraphQL", "REST", "WebSockets"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-xs text-gray-300 border border-gray-700 hover:border-gray-500 transition-colors tracking-wide uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <h3 className="text-sm font-light text-white uppercase tracking-widest">
                    Tools & Platforms
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Electron", "Vite", "React Router v7", "Shopify", "Heroku", "Git", "VS Code", "Stripe.js"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-xs text-gray-300 border border-gray-700 hover:border-gray-500 transition-colors tracking-wide uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <h3 className="text-sm font-light text-white uppercase tracking-widest">
                    Styling & Databases
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Tailwind", "Sass", "HTML5", "CSS3", "PostgreSQL"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-xs text-gray-300 border border-gray-700 hover:border-gray-500 transition-colors tracking-wide uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-900 border-t border-gray-800 py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-800"></div>
            <div className="mx-8">
              <div className="w-3 h-3 border border-gray-600 transform rotate-45"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-800"></div>
          </div>
          
          <div className="text-center">
            <p className="text-white font-light text-lg mb-4 tracking-wide">
              ZACHARY DONHAUSER
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-400 text-sm mb-8">
              <a href="mailto:zac@donrey.dev" className="hover:text-white transition-colors border-b border-transparent hover:border-white">
                zac@donrey.dev
              </a>
              <div className="w-px h-4 bg-gray-700"></div>
              <a href="tel:830-660-2902" className="hover:text-white transition-colors border-b border-transparent hover:border-white">
                (830) 660-2902
              </a>
              <div className="w-px h-4 bg-gray-700"></div>
              <a href="https://www.linkedin.com/in/zachary-donhauser/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white">
                LinkedIn
              </a>
            </div>
            <div className="flex justify-center items-center space-x-2 text-gray-500 text-xs tracking-widest">
              <div className="w-1 h-1 bg-gray-700"></div>
              <span>BUILT WITH NEXT.JS</span>
              <div className="w-1 h-1 bg-gray-700"></div>
              <span>TAILWIND CSS</span>
              <div className="w-1 h-1 bg-gray-700"></div>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
        onNextProject={goToNextProject}
        onPreviousProject={goToPreviousProject}
      />
    </div>
  );
}
