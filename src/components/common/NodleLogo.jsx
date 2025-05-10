import React from 'react';
import { Box } from 'lucide-react';

const NodleLogo = ({ size = 'md' }) => {
    const sizeClasses = {
      sm: 'h-6',
      md: 'h-8',
      lg: 'h-10'
    };

    return (
        <div className="flex items-center">
          <div className="text-primary mr-1">
            <Box className={`${sizeClasses[size]} transform rotate-45`} strokeWidth={3} />
          </div>
          <span className={`font-bold text-primary ${size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'}`}>
            nodle
          </span>
        </div>
      );
    };

export default NodleLogo;