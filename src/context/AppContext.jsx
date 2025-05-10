import React, { createContext, useContext, useState, useEffect } from "react";
import { mockCourses, mockArticles, mockSchools } from "../data/mockData";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}
