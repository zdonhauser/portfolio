'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ImageCarousel from './ImageCarousel';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
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
  } | null;
  onNextProject?: () => void;
  onPreviousProject?: () => void;
}

export default function ProjectModal({ isOpen, onClose, project, onNextProject, onPreviousProject }: ProjectModalProps) {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Let ImageCarousel handle arrow keys for image navigation
      // Project navigation will be handled by ImageCarousel when at boundaries
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-lg max-w-[98vw] max-h-[98vh] w-full h-full flex flex-col overflow-hidden">
        {/* Close Button - Fixed Position */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Content Area - Takes up most of the space */}
        <div className="flex-1 flex items-center justify-center p-4 min-h-0">
          {project.images && project.images.length > 0 ? (
            <ImageCarousel 
              images={project.images}
              className="flex items-center justify-center"
              size="fullscreen"
              onNextProject={onNextProject}
              onPreviousProject={onPreviousProject}
            />
          ) : project.preview ? (
            <div className="w-full h-full flex items-center justify-center bg-black border border-gray-800 rounded">
              {project.preview}
            </div>
          ) : null}
        </div>

        {/* Bottom Details Panel - Compact */}
        <div className="flex-shrink-0 bg-gray-800/90 backdrop-blur-sm border-t border-gray-700 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Project Title */}
              <h2 className="text-xl font-light text-white tracking-wide">
                {project.title}
              </h2>

              {/* Tags and Actions */}
              <div className="flex items-center space-x-4">
                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs text-gray-300 border border-gray-700 hover:border-gray-500 transition-colors tracking-wide uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 transition-colors tracking-wide uppercase text-xs font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                      </svg>
                      <span>View on GitHub</span>
                    </a>
                  )}
                  
                  {project.type === 'external' && project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors tracking-wide uppercase text-xs font-medium"
                    >
                      <span>View Live Site</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  
                  {project.type === 'preview' && (
                    <div className="inline-flex items-center space-x-2 text-gray-400 text-xs uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                      <span>Internal System</span>
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}