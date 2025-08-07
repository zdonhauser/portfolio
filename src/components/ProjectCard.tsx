interface ProjectCardProps {
  title: string;
  description: string;
  type: 'external' | 'preview';
  url?: string;
  preview?: React.ReactNode;
  tags?: string[];
  onClick?: () => void;
}

export default function ProjectCard({ 
  title, 
  description, 
  type, 
  url, 
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
        {type === 'external' && url && (
          <div className="w-4 h-4 relative">
            <div className="absolute inset-0 border border-gray-500 transform rotate-45"></div>
            <div className="absolute top-1 right-0 w-2 h-px bg-gray-500"></div>
            <div className="absolute top-0 right-1 w-px h-2 bg-gray-500"></div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <button
      onClick={onClick}
      className="block w-full text-left hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
    >
      {cardContent}
    </button>
  );
}