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

         {type === 'course' && (
          <>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-primary text-white rounded-full p-2 transform hover:scale-110 transition-transform">
                <Play className="h-6 w-6" fill="white" />
              </button>
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded">
              {formatDuration(content.duration)}
            </div>
          </>
        )}
        
        {type === 'article' && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded">
            {content.readTime} min de lecture
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {content.title}
        </h3>

        {type === 'course' && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src={content.creator.avatar}
                alt={content.creator.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">
                {content.creator.name}
              </span>
            </div>
            
            <button 
              onClick={handleToggleFavorite}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {isContentFavorite ? 
                <BookmarkCheck className="h-5 w-5 text-primary" /> : 
                <Bookmark className="h-5 w-5" />
              }
            </button>
          </div>
        )}
        
        {type === 'article' && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src={content.author.avatar}
                alt={content.author.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">
                {content.author.name}
              </span>
            </div>
            
            <button 
              onClick={handleToggleFavorite}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {isContentFavorite ? 
                <BookmarkCheck className="h-5 w-5 text-primary" /> : 
                <Bookmark className="h-5 w-5" />
              }
            </button>
          </div>
        )}
      </div>