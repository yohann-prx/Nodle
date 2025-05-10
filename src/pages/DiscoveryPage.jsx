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
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-2">
            Découvre. Explore. Apprend.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Explore les mondes qui bâtissent la tech de demain.
            <br />
            Apprends, module après module, et façonne ton avenir dès
            aujourd'hui.
          </p>

          <form
            onSubmit={handleSearchSubmit}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Que veux-tu apprendre aujourd'hui ?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-14 pr-6 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </form>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="relative aspect-video rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className={`absolute inset-0 ${category.color} flex items-center justify-center text-6xl font-bold`}
              >
                {category.icon}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPage;
