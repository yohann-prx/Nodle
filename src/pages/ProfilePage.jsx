import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import ContentCard from "../components/common/ContentCard";
import ProgressChart from "../components/profile/ProgressChart";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const { user, courses } = useAppContext();
  const [activeTab, setActiveTab] = useState("video-longue");

  // Filter favorite content
  const favoriteContent = courses.slice(0, 8);
};

export default ProfilePage;
