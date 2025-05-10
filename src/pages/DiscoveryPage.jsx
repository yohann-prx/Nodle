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

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-12 pb-20 text-center bg-gray-50">
          <h1 className="text-5xl font-bold mb-2">
            Découvre. Explore. Apprend.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Explore les mondes qui bâtissent la tech de demain.
            <br />
            Apprends, module après module, et façonne ton avenir dès
            aujourd'hui.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPage;
