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
};

export default HomePage;
