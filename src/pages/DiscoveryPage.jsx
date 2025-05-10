import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const categories = [
  { id: "design", name: "Design", icon: "D", color: "bg-primary text-white" },
  { id: "code", name: "Code", icon: "</>", color: "bg-secondary text-white" },
  { id: "design2", name: "Design", icon: "D", color: "bg-primary text-white" },
  { id: "code2", name: "Code", icon: "</>", color: "bg-secondary text-white" },
  { id: "design3", name: "Design", icon: "D", color: "bg-primary text-white" },
  { id: "code3", name: "Code", icon: "</>", color: "bg-secondary text-white" },
  { id: "design4", name: "Design", icon: "D", color: "bg-primary text-white" },
  { id: "code4", name: "Code", icon: "</>", color: "bg-secondary text-white" },
  { id: "design5", name: "Design", icon: "D", color: "bg-primary text-white" },
  { id: "code5", name: "Code", icon: "</>", color: "bg-secondary text-white" },
  { id: "design6", name: "Design", icon: "D", color: "bg-primary text-white" },
  { id: "code6", name: "Code", icon: "</>", color: "bg-secondary text-white" },
];

const DiscoveryPage = () => {
  const { searchQuery, setSearchQuery } = useAppContext();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
};
