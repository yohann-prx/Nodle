import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Calendar, Clock, ThumbsUp } from "lucide-react";
import ContentCard from "../components/common/ContentCard";
import Sidebar from "../components/home/Sidebar";
import { useAppContext } from "../context/AppContext";

const HomePage = () => {
  const { courses, articles } = useAppContext();
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSortOption, setActiveSortOption] = useState("popular");

  const filterOptions = [
    { id: "all", label: "Tous" },
    { id: "short-video", label: "Vidéos courtes" },
    { id: "long-video", label: "Vidéos longues" },
    { id: "articles", label: "Articles" },
  ];

  const sortOptions = [
    {
      id: "popular",
      label: "Populaires",
      icon: <ThumbsUp className="h-4 w-4 mr-1" />,
    },
    {
      id: "recent",
      label: "Récents",
      icon: <Calendar className="h-4 w-4 mr-1" />,
    },
    {
      id: "duration",
      label: "Durée",
      icon: <Clock className="h-4 w-4 mr-1" />,
    },
  ];

  const filteredContent = () => {
    let content = [];

    if (
      activeFilter === "all" ||
      activeFilter === "short-video" ||
      activeFilter === "long-video"
    ) {
      content = [
        ...content,
        ...courses.filter(
          (course) => activeFilter === "all" || course.type === activeFilter,
        ),
      ];
    }

    if (activeFilter === "all" || activeFilter === "articles") {
      content = [
        ...content,
        ...articles.map((article) => ({ ...article, type: "article" })),
      ];
    }

    // Sort content
    if (activeSortOption === "popular") {
      content.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (activeSortOption === "recent") {
      content.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    } else if (activeSortOption === "duration") {
      content.sort((a, b) => {
        const aDuration = a.duration || a.readTime || 0;
        const bDuration = b.duration || b.readTime || 0;
        return aDuration - bDuration;
      });
    }

    return content;
  };

  const contentToDisplay = filteredContent();
  const resultCount = contentToDisplay.length;
};

export default HomePage;
