
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'small';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="flex items-center">
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white font-bold text-2xl md:text-3xl">U¢</div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white opacity-30"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <div className="ml-2">
            <h1 className="text-white font-bold text-xl md:text-2xl tracking-wide">UCASH</h1>
            {variant === 'default' && (
              <p className="text-white/80 text-[10px] tracking-wider">BETTER SAVINGS, BETTER LIFE</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
