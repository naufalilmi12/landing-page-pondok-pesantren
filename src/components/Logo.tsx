import React from 'react';
import { PESANTREN_INFO } from '../config/pesantrenConfig';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = false }) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${sizeClasses[size]} shrink-0 rounded-full bg-white p-0.5 shadow-sm border border-stone-200/90 overflow-hidden flex items-center justify-center`}
      >
        <img
          src={PESANTREN_INFO.logo}
          alt={`Logo Resmi ${PESANTREN_INFO.namaResmi}`}
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
      {showText && (
        <div className="leading-tight">
          <span className="block text-base sm:text-lg font-bold text-[#063D32] font-editorial tracking-tight">
            {PESANTREN_INFO.namaResmi}
          </span>
          <span className="block text-[11px] uppercase tracking-wider text-[#68736D] font-medium">
            {PESANTREN_INFO.subJudul}
          </span>
        </div>
      )}
    </div>
  );
};
