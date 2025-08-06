import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
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
              <div className="w-32 h-32 mb-6">
                <Image
                  src="/screenshots/IMG_6801.jpg"
                  alt="Zachary Donhauser"
                  width={128}
                  height={128}
                  className="rounded-full object-cover w-full h-full border-4 border-white/20"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Zachary Donhauser
              </h1>
            </div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <p className="text-2xl font-light tracking-wide">
                  Full Stack Software Engineer
                </p>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="flex justify-center items-center space-x-6 text-gray-300 text-sm">
                <span className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <span>Austin, TX</span>
                </span>
                <a href="mailto:zac@donrey.dev" className="hover:text-white transition-colors border-b border-transparent hover:border-white">
                  zac@donrey.dev
                </a>
                <a href="https://www.linkedin.com/in/zachary-donhauser/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Full stack software engineer with over a decade of leadership experience running a family-owned 
                amusement park, where I played a key role on the executive team while leading the design and 
                development of a fully integrated POS and operations platform.
              </p>
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
          <ProjectCard
            title="ZDTs Amusement Park Website"
            description="Revamped amusement park website using Shopify Hydrogen with React 18, TypeScript, GraphQL, Vite, Tailwind, and React Router v7. Deployed via Shopify Oxygen with integrated ticketing system."
            type="external"
            url="https://react.zdtamusement.com"
            tags={["React", "TypeScript", "Shopify Hydrogen", "GraphQL", "Tailwind"]}
            preview={
              <Image
                src="/screenshots/zdtamusement.png"
                alt="ZDTs Amusement Park Website Screenshot"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded"
              />
            }
          />
          
          <ProjectCard
            title="Point of Sale System"
            description="Custom POS system for ticketing and fast-service food environments built with React and Node.js, packaged in Electron for system-level storage and direct peripheral access."
            type="preview"
            preview={
              <div className="flex items-center justify-center py-12">
                <div className="relative">
                  {/* Geometric POS terminal design */}
                  <div className="w-20 h-16 border-2 border-gray-600 relative">
                    <div className="absolute inset-2 border border-gray-700"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gray-600"></div>
                  </div>
                  <div className="w-24 h-2 bg-gray-700 mx-auto mt-1"></div>
                  <div className="w-16 h-1 bg-gray-800 mx-auto mt-1"></div>
                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Live Production</p>
                  </div>
                </div>
              </div>
            }
            tags={["React", "Node.js", "Electron", "PostgreSQL"]}
          />

          <ProjectCard
            title="Kitchen Display System"
            description="Real-time KDS with synchronized front-of-house and back-of-house order lifecycle management using webhooks. Streamlines food service operations with live order tracking."
            type="preview"
            preview={
              <div className="flex items-center justify-center py-12">
                <div className="relative">
                  {/* Multiple screen layout for KDS */}
                  <div className="flex space-x-2">
                    <div className="w-12 h-16 border-2 border-gray-600 relative">
                      <div className="absolute top-2 left-1 right-1 h-2 bg-gray-700"></div>
                      <div className="absolute top-5 left-1 right-1 h-1 bg-gray-800"></div>
                      <div className="absolute top-7 left-1 right-1 h-1 bg-gray-800"></div>
                    </div>
                    <div className="w-12 h-16 border-2 border-gray-600 relative">
                      <div className="absolute top-2 left-1 right-1 h-2 bg-gray-700"></div>
                      <div className="absolute top-5 left-1 right-1 h-1 bg-gray-800"></div>
                    </div>
                    <div className="w-12 h-16 border-2 border-gray-600 relative">
                      <div className="absolute top-2 left-1 right-1 h-2 bg-gray-700"></div>
                    </div>
                  </div>
                  {/* Sync arrows */}
                  <div className="flex justify-center mt-2 space-x-1">
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Real-time Sync</p>
                  </div>
                </div>
              </div>
            }
            tags={["React", "Node.js", "WebHooks", "Real-time"]}
          />

          <ProjectCard
            title="Employee Time Tracking"
            description="Employee clock-in terminal and time tracking tools with administrative controls for industry-specific hours handling and live time-clock monitoring."
            type="preview"
            preview={
              <div className="flex items-center justify-center py-12">
                <div className="relative">
                  {/* Clock terminal design */}
                  <div className="w-20 h-20 border-2 border-gray-600 relative">
                    <div className="absolute inset-3 border border-gray-700 rounded-full">
                      <div className="absolute top-1/2 left-1/2 w-px h-4 bg-gray-600 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-90"></div>
                      <div className="absolute top-1/2 left-1/2 w-px h-3 bg-gray-600 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-0"></div>
                      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                  <div className="w-24 h-2 bg-gray-700 mx-auto mt-2"></div>
                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Time Management</p>
                  </div>
                </div>
              </div>
            }
            tags={["Electron", "PostgreSQL", "Admin Controls"]}
          />

          <ProjectCard
            title="Membership Management"
            description="Comprehensive membership access management system with recurring billing options via Shopify integration. Handles member check-ins and subscription management."
            type="preview"
            preview={
              <div className="flex items-center justify-center py-12">
                <div className="relative">
                  {/* Member card stack design */}
                  <div className="relative">
                    <div className="w-16 h-10 border border-gray-800 bg-gray-900 transform rotate-3"></div>
                    <div className="w-16 h-10 border border-gray-700 bg-gray-800 absolute top-0 transform rotate-1"></div>
                    <div className="w-16 h-10 border-2 border-gray-600 bg-gray-900 absolute top-0">
                      <div className="absolute top-1 left-1 w-2 h-1 bg-gray-600"></div>
                      <div className="absolute bottom-1 right-1 w-4 h-px bg-gray-700"></div>
                      <div className="absolute bottom-2 right-1 w-3 h-px bg-gray-700"></div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Member Access</p>
                  </div>
                </div>
              </div>
            }
            tags={["Shopify", "Billing", "Membership"]}
          />

          <ProjectCard
            title="Mobile Party Booking PWA"
            description="Progressive Web App for mobile party and group booking with remote availability access. Streamlines the booking process for special events and group visits."
            type="preview"
            preview={
              <div className="flex items-center justify-center py-12">
                <div className="relative">
                  {/* Mobile phone design */}
                  <div className="w-12 h-20 border-2 border-gray-600 rounded relative">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-px bg-gray-700"></div>
                    <div className="absolute top-3 left-1 right-1 bottom-3 border border-gray-700">
                      <div className="absolute top-1 left-1 right-1 h-1 bg-gray-700"></div>
                      <div className="absolute top-3 left-1 right-1 h-px bg-gray-800"></div>
                      <div className="absolute top-4 left-1 right-1 h-px bg-gray-800"></div>
                      <div className="absolute bottom-1 right-1 w-3 h-2 border border-gray-700"></div>
                    </div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 border border-gray-700 rounded-full"></div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Mobile PWA</p>
                  </div>
                </div>
              </div>
            }
            tags={["PWA", "Mobile", "Booking System"]}
          />
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
                  <div className="w-2 h-2 bg-white mr-3"></div>
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
                  <div className="w-2 h-2 bg-white mr-3"></div>
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
                  <div className="w-2 h-2 bg-white mr-3"></div>
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
    </div>
  );
}
