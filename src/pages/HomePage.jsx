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

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Explorateur de contenu
              </h1>
              <p className="text-gray-600">
                {resultCount} résultats :{" "}
                {activeFilter === "all"
                  ? `${courses.filter((c) => c.type === "short-video").length} vidéos courtes, ${courses.filter((c) => c.type === "long-video").length} vidéos longues, ${articles.length} articles`
                  : activeFilter === "short-video"
                    ? `${courses.filter((c) => c.type === "short-video").length} vidéos courtes`
                    : activeFilter === "long-video"
                      ? `${courses.filter((c) => c.type === "long-video").length} vidéos longues`
                      : `${articles.length} articles`}
              </p>
            </div>

            <div className="flex items-center mt-4 sm:mt-0">
              <div className="relative mr-2">
                <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm flex items-center hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2 text-gray-500" />
                  <span>Filtres</span>
                </button>
              </div>

              <div className="bg-white border border-gray-300 rounded-md overflow-hidden">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`px-3 py-2 text-sm flex items-center ${
                      activeSortOption === option.id
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveSortOption(option.id)}
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === option.id
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveFilter(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {contentToDisplay.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ContentCard
                content={item}
                type={item.type === "article" ? "article" : "course"}
              />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
