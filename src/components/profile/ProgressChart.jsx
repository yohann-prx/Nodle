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
};