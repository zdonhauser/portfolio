'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  size?: 'card' | 'modal' | 'fullscreen';
}

export default function ImageCarousel({ images, className = '', size = 'card' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={size === 'fullscreen' ? 1200 : size === 'modal' ? 800 : 400}
          height={size === 'fullscreen' ? 900 : size === 'modal' ? 600 : 300}
          className={
            size === 'fullscreen' 
              ? "w-full h-full object-contain rounded"
              : size === 'modal' 
              ? "w-full h-auto max-h-96 object-contain rounded"
              : "w-full h-48 object-cover rounded"
          }
        />
      </div>
    );
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image */}
      <div className="relative overflow-hidden rounded">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={size === 'fullscreen' ? 1200 : size === 'modal' ? 800 : 400}
          height={size === 'fullscreen' ? 900 : size === 'modal' ? 600 : 300}
          className={
            size === 'fullscreen'
              ? "w-full h-full object-contain transition-all duration-300 rounded"
              : size === 'modal'
              ? "w-full h-auto max-h-96 object-contain transition-all duration-300 rounded"
              : "w-full h-48 object-cover transition-all duration-300"
          }
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Next image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 mt-3">
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

      {/* Image Counter */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}