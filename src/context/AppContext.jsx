import React, { createContext, useContext, useState, useEffect } from "react";
import { mockCourses, mockArticles, mockSchools } from "../data/mockData";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [courses, setCourses] = useState(mockCourses);
  const [articles, setArticles] = useState(mockArticles);
  const [schools, setSchools] = useState(mockSchools);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState({
    id: "1",
    name: "Choninhooo_",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    memberSince: "Mars 2025",
    level: "Terminale Générale",
    progress: {
      dev: 30,
      marketing: 60,
      design: 45,
    },
    watchTime: 14,
    favoriteContent: [],
  });

  const [categories, setCategories] = useState([
    { id: "code", name: "Code", active: true },
    { id: "design", name: "Design", active: true },
    { id: "marketing", name: "Marketing", active: true },
    { id: "communication", name: "Communication", active: true },
    { id: "ai", name: "Intelligence Artificielle", active: true },
    { id: "3d", name: "3D", active: true },
    { id: "data", name: "Data Science", active: true },
    { id: "ux", name: "UX/UI", active: true },
  ]);

  useEffect(() => {
    // Filter content based on search query when it changes
    if (searchQuery) {
      const filteredCourses = mockCourses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setCourses(filteredCourses);

      const filteredArticles = mockArticles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setArticles(filteredArticles);
    } else {
      setCourses(mockCourses);
      setArticles(mockArticles);
    }
  }, [searchQuery]);

  const toggleFavorite = (contentId, contentType) => {
    setUser((prev) => {
      const currentFavorites = [...prev.favoriteContent];
      const contentIndex = currentFavorites.findIndex(
        (item) => item.id === contentId && item.type === contentType,
      );

      if (contentIndex >= 0) {
        // Remove from favorites
        currentFavorites.splice(contentIndex, 1);
      } else {
        // Add to favorites
        currentFavorites.push({ id: contentId, type: contentType });
      }

      return {
        ...prev,
        favoriteContent: currentFavorites,
      };
    });
  };

  const isFavorite = (contentId, contentType) => {
    return user.favoriteContent.some(
      (item) => item.id === contentId && item.type === contentType,
    );
  };

  const value = {
    courses,
    articles,
    schools,
    isLoading,
    searchQuery,
    setSearchQuery,
    user,
    setUser,
    categories,
    setCategories,
    toggleFavorite,
    isFavorite,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
