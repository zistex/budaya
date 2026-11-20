import { useState } from 'react';
import { Landmark } from 'lucide-react';

interface ArchivalImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ArchivalImage({ src, alt, caption, className = '' }: ArchivalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EFEFEF] border border-[#E0E0E0] text-[#525252] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Landmark className="w-7 h-7 mb-2 text-[#404040]" strokeWidth={1.25} />
        <p className="text-xs font-medium text-[#171717] max-w-[22ch]">
          {caption || 'Arsip Bangunan Cagar Budaya'}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`archival-photo block w-full h-full object-cover ${className}`}
      loading="lazy"
    />
  );
}
