import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Filter, Grid, List } from "lucide-react";
import SchoolCard from "../components/common/SchoolCard";
import { useAppContext } from "../context/AppContext";

const TrainingPage = () => {
  const { schools } = useAppContext();
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [location, setLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);
};

export default TrainingPage;
