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
  