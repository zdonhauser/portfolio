interface ProjectCardProps {
  title: string;
  description: string;
  type: 'external' | 'preview';
  url?: string;
  githubUrl?: string;
  preview?: React.ReactNode;
  tags?: string[];
  onClick?: () => void;
}

export default function ProjectCard({ 
  title, 
  description, 
  type, 
  url, 
  githubUrl,
  preview, 
  tags = [],
  onClick
}: ProjectCardProps) {
  const cardContent = (
    <div className="bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-300 p-6 group relative overflow-hidden">
      {/* Geometric corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12">
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[48px] border-l-transparent border-t-[48px] border-t-gray-800 group-hover:border-t-gray-700 transition-colors"></div>
      </div>
      
      <div className="mb-4 relative z-10">
        <h3 className="text-xl font-light text-white mb-3 tracking-wide">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {preview && (
        <div className="mb-4 bg-black border border-gray-800 p-4">
          {preview}
        </div>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs text-gray-300 border border-gray-700 hover:border-gray-500 transition-colors tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center text-gray-500 text-xs uppercase tracking-widest">
        <span>
          {type === 'external' ? 'Live Demo' : 'Internal System'}
        </span>
        <div className="flex items-center space-x-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-gray-300 transition-colors"
              aria-label="View on GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
          )}
          {type === 'external' && url && (
            <div className="w-4 h-4 relative">
              <div className="absolute inset-0 border border-gray-500 transform rotate-45"></div>
              <div className="absolute top-1 right-0 w-2 h-px bg-gray-500"></div>
              <div className="absolute top-0 right-1 w-px h-2 bg-gray-500"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      onClick={onClick}
      className="block w-full text-left hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
    >
      {cardContent}
    </div>
  );
}