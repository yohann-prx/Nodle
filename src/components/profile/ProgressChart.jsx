import React from 'react';
import { motion } from 'framer-motion';

const ProgressChart = ({ progress, title }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    
    const progressColors = {
      dev: '#0047AB', // primary blue
      marketing: '#FF7F50', // accent orange
      design: '#4CAF50', // success green
    };

    return (
        <div className="flex flex-col items-center">
          {title && <h3 className="text-gray-500 text-sm mb-4">{title}</h3>}
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="10"
              />
              {/* Progress circle */}
              <motion.circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke={progressColors[Object.keys(progressColors).find(key => title?.toLowerCase().includes(key)) || '#0047AB']}
                strokeWidth="10"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1, ease: "easeOut" }}
                transform="rotate(-90 60 60)"
              />
              {/* Text in the middle */}
              <text
                x="60"
                y="60"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#333"
                fontSize="16"
                fontWeight="bold"
              >
                {`${progress}%`}
              </text>
            </svg>
          </div>
        </div>
      );
};

export default ProgressChart;