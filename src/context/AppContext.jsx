import React, { createContext, useContext, useState, useEffect } from "react";
import { mockCourses, mockArticles, mockSchools } from "../data/mockData";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  ]);

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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
