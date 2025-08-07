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
    preview?: React.ReactNode;
    tags?: string[];
    images?: {
      src: string;
      alt: string;
    }[];
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
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
              className="w-full h-full max-h-full"
              size="fullscreen"
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
                <div className="flex items-center">
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