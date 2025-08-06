'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface WebsiteScreenshotProps {
  url: string;
  alt: string;
  className?: string;
}

export default function WebsiteScreenshot({ url, alt, className = '' }: WebsiteScreenshotProps) {
  const [screenshotUrl, setScreenshotUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Using htmlcsstoimage.com API (free tier available)
    // Alternative: screenshotapi.net, htmlcsstoimage.com, or similar services
    const generateScreenshot = () => {
      try {
        // Encode the URL for the screenshot service
        const encodedUrl = encodeURIComponent(url);
        
        // Using a free screenshot service API
        // Format: https://image.thum.io/get/width/1200/crop/800/noanimate/{URL}
        const thumbnailUrl = `https://image.thum.io/get/width/1200/crop/800/noanimate/${encodedUrl}`;
        
        setScreenshotUrl(thumbnailUrl);
        setLoading(false);
      } catch (err) {
        console.error('Error generating screenshot:', err);
        setError(true);
        setLoading(false);
      }
    };

    generateScreenshot();
  }, [url]);

  if (loading) {
    return (
      <div className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <svg className="animate-spin h-8 w-8 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-sm text-gray-500">Loading screenshot...</p>
        </div>
      </div>
    );
  }

  if (error || !screenshotUrl) {
    return (
      <div className={`bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <svg className="h-12 w-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm text-gray-500">Screenshot unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded ${className}`}>
      <Image
        src={screenshotUrl}
        alt={alt}
        width={1200}
        height={800}
        className="object-cover w-full h-full"
        onError={() => setError(true)}
      />
    </div>
  );
}