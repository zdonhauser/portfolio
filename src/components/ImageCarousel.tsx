'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  size?: 'card' | 'modal' | 'fullscreen';
  onNextProject?: () => void;
  onPreviousProject?: () => void;
}

export default function ImageCarousel({ images, className = '', size = 'card', onNextProject, onPreviousProject }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const touchRef = useRef<HTMLDivElement>(null);
  
  // Minimum distance required to trigger swipe
  const minSwipeDistance = 50;

  // Reset to first image when images change (new project)
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const goToNext = useCallback(() => {
    if (currentIndex === images.length - 1) {
      // At last image, go to next project if available
      if (onNextProject) {
        onNextProject();
      }
    } else {
      // Go to next image in current project
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [currentIndex, images.length, onNextProject]);

  const goToPrevious = useCallback(() => {
    if (currentIndex === 0) {
      // At first image, go to previous project if available
      if (onPreviousProject) {
        onPreviousProject();
      }
    } else {
      // Go to previous image in current project
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  }, [currentIndex, images.length, onPreviousProject]);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  }, [touchStart, touchEnd, minSwipeDistance, goToNext, goToPrevious]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (size === 'fullscreen') {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToNext();
        }
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [goToPrevious, goToNext, size]);

  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className={`${className}`}>
        {/* Desktop Layout - Side buttons */}
        <div className={`hidden md:flex items-center gap-6`}>
          {/* Previous Project Button - Desktop only */}
          {size === 'fullscreen' && onPreviousProject && (
            <button
              onClick={onPreviousProject}
              className="flex-shrink-0 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-all duration-200 border border-white/20"
              aria-label="Previous project"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {/* Image Container */}
          <div className={`${size === 'fullscreen' ? 'flex-1 flex justify-center items-center' : ''}`}>
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={size === 'fullscreen' ? 1200 : size === 'modal' ? 800 : 400}
              height={size === 'fullscreen' ? 900 : size === 'modal' ? 600 : 300}
              className={
                size === 'fullscreen' 
                  ? "w-auto max-w-full max-h-full object-contain rounded"
                  : size === 'modal' 
                  ? "w-full h-auto max-h-96 object-contain rounded"
                  : "w-full h-48 object-cover rounded"
              }
            />
          </div>
          
          {/* Next Project Button - Desktop only */}
          {size === 'fullscreen' && onNextProject && (
            <button
              onClick={onNextProject}
              className="flex-shrink-0 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-all duration-200 border border-white/20"
              aria-label="Next project"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        
        {/* Mobile Layout - Image above, buttons below */}
        <div className="md:hidden">
          {/* Image Container */}
          <div 
            ref={touchRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="flex justify-center items-center mb-4"
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={size === 'fullscreen' ? 1200 : size === 'modal' ? 800 : 400}
              height={size === 'fullscreen' ? 900 : size === 'modal' ? 600 : 300}
              className={
                size === 'fullscreen' 
                  ? "w-full max-w-full max-h-full object-contain rounded"
                  : size === 'modal' 
                  ? "w-full h-auto max-h-96 object-contain rounded"
                  : "w-full h-48 object-cover rounded"
              }
            />
          </div>
          
          {/* Mobile Navigation Buttons */}
          {size === 'fullscreen' && (onNextProject || onPreviousProject) && (
            <div className="flex justify-center items-center space-x-4">
              {onPreviousProject && (
                <button
                  onClick={onPreviousProject}
                  className="flex items-center space-x-2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm"
                  aria-label="Previous project"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Previous</span>
                </button>
              )}
              
              <div className="text-gray-400 text-xs px-2">Swipe to navigate</div>
              
              {onNextProject && (
                <button
                  onClick={onNextProject}
                  className="flex items-center space-x-2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm"
                  aria-label="Next project"
                >
                  <span>Next</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`${className}`}>
      {/* Desktop Layout - Side buttons */}
      <div className={`hidden md:flex items-center gap-6`}>
        {/* Previous Navigation Button - Desktop only for fullscreen */}
        {size === 'fullscreen' && (
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-all duration-200 border border-white/20"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {/* Main Image Container */}
        <div className={`relative overflow-hidden rounded group ${size === 'fullscreen' ? 'flex-1 flex justify-center items-center' : ''}`}>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={size === 'fullscreen' ? 1200 : size === 'modal' ? 800 : 400}
            height={size === 'fullscreen' ? 900 : size === 'modal' ? 600 : 300}
            className={
              size === 'fullscreen'
                ? "w-auto max-w-full max-h-full object-contain transition-all duration-300 rounded"
                : size === 'modal'
                ? "w-full h-auto max-h-96 object-contain transition-all duration-300 rounded"
                : "w-full h-48 object-cover transition-all duration-300"
            }
          />
          
          {/* Overlay arrows for non-fullscreen sizes */}
          {size !== 'fullscreen' && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Next image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
        
        {/* Next Navigation Button - Desktop only for fullscreen */}
        {size === 'fullscreen' && (
          <button
            onClick={goToNext}
            className="flex-shrink-0 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-all duration-200 border border-white/20"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Layout - Image above, buttons below */}
      <div className="md:hidden">
        {/* Main Image Container */}
        <div 
          ref={touchRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative overflow-hidden rounded group flex justify-center items-center mb-4"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={size === 'fullscreen' ? 1200 : size === 'modal' ? 800 : 400}
            height={size === 'fullscreen' ? 900 : size === 'modal' ? 600 : 300}
            className={
              size === 'fullscreen'
                ? "w-full max-w-full max-h-full object-contain transition-all duration-300 rounded"
                : size === 'modal'
                ? "w-full h-auto max-h-96 object-contain transition-all duration-300 rounded"
                : "w-full h-48 object-cover transition-all duration-300"
            }
          />
        </div>

        {/* Mobile Navigation for Multiple Images */}
        {size === 'fullscreen' && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={goToPrevious}
              className="flex items-center space-x-2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Prev</span>
            </button>
            
            <div className="text-gray-400 text-xs px-2">
              {currentIndex + 1} / {images.length} • Swipe
            </div>
            
            <button
              onClick={goToNext}
              className="flex items-center space-x-2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm"
              aria-label="Next image"
            >
              <span>Next</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Dot Indicators - Desktop Only */}
      <div className="hidden md:flex justify-center space-x-2 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}