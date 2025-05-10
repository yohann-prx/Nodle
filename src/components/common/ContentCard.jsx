import React from 'react';
import { Play, Bookmark, BookmarkCheck } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

const ContentCard = ({ content, type = 'course' }) => {
    const { toggleFavorite, isFavorite } = useAppContext();
    const isContentFavorite = isFavorite(content.id, type);
  
    const formatDuration = (duration) => {
      const minutes = Math.floor(duration);
      const seconds = Math.round((duration - minutes) * 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    const handleToggleFavorite = (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(content.id, type);
    };

    return (
        <motion.div 
          className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative aspect-video bg-gray-200 overflow-hidden">
            <img 
              src={type === 'course' ? content.thumbnail : content.image} 
              alt={content.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />