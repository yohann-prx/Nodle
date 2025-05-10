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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            École tech & formations
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une école ou une formation..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="relative md:w-64">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ville ou région"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                className="text-gray-700 hover:text-primary transition-colors flex items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5 mr-2" />
                <span>Filtres</span>
              </button>

              <div className="flex items-center space-x-2">
                <button
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-100 text-primary" : "text-gray-500 hover:text-primary"}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  className={`p-2 rounded ${viewMode === "list" ? "bg-gray-100 text-primary" : "text-gray-500 hover:text-primary"}`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {showFilters && (
              <motion.div
                className="mt-6 pt-6 border-t border-gray-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Type de programme
                    </h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">Bootcamp</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">
                          Certification
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">Bachelor</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">Master</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Durée</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">
                          Moins de 3 mois
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">3-6 mois</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">6-12 mois</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">Plus d'un an</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Spécialisation
                    </h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">
                          Web Development
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">UX/UI Design</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">Data Science</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">
                          Cybersecurity
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mr-3 hover:bg-gray-300 transition-colors">
                    Réinitialiser
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                    Appliquer les filtres
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          <div
            className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"} gap-6`}
          >
            {schools.map((school, index) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <SchoolCard school={school} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
