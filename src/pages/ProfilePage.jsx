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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <ProfileSidebar />

        <div className="flex-grow">
          <div className="relative mb-8">
            <div className="h-48 bg-gradient-to-r from-primary to-secondary rounded-t-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Cover"
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            <div className="absolute top-36 left-8">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-b-lg px-8 pt-16 pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {user.name}
                  </h1>
                  <p className="text-gray-600">
                    Membre depuis {user.memberSince}
                  </p>
                  <p className="text-primary font-medium">{user.level}</p>
                </div>

                <button className="mt-4 md:mt-0 flex items-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors">
                  <Plus className="h-4 w-4 mr-2" />
                  <span>Ajouter un lien</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <motion.div
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-medium text-gray-500 text-sm mb-4">
                Heures cette semaine
              </h2>
              <div className="flex justify-center">
                <ProgressChart
                  progress={
                    user.progress.dev +
                    user.progress.marketing +
                    user.progress.design
                  }
                  title=""
                />
                <div className="absolute text-center mt-20">
                  <span className="block text-4xl font-bold text-gray-900">
                    {user.watchTime}
                  </span>
                  <span className="block text-sm text-gray-500">
                    HEURES DE VEILLE
                  </span>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="h-2 bg-primary rounded-full mb-1"></div>
                  <span className="text-xs text-gray-600">Dev</span>
                </div>
                <div className="text-center">
                  <div className="h-2 bg-accent rounded-full mb-1"></div>
                  <span className="text-xs text-gray-600">Marketing</span>
                </div>
                <div className="text-center">
                  <div className="h-2 bg-success rounded-full mb-1"></div>
                  <span className="text-xs text-gray-600">Design</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-sm p-6 col-span-1 lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h2 className="font-medium text-gray-500 text-sm mb-4">
                Évolution des notes
              </h2>
              <div className="h-48 flex items-end">
                <div className="w-full h-full relative">
                  {/* Simplified placeholder for the chart - in a real app, you'd use a chart library */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-1/12 h-[40%] bg-accent mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[30%] bg-accent mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[20%] bg-accent mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[30%] bg-accent mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[40%] bg-accent mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[50%] bg-accent mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[60%] bg-success mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[50%] bg-success mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[70%] bg-success mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[60%] bg-success mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[80%] bg-success mx-0.5 rounded-t-sm"></div>
                    <div className="w-1/12 h-[60%] bg-success mx-0.5 rounded-t-sm"></div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>DEC 2024</span>
                <span>JAN</span>
                <span>FEV</span>
                <span>MAR</span>
                <span>AVR</span>
                <span>MAI</span>
              </div>
            </motion.div>
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <h2 className="text-xl font-bold text-gray-900 mr-2">
                  Favoris :{" "}
                </h2>
                <button className="flex items-center text-primary font-medium">
                  <span>Vidéo longue</span>
                  <ChevronDown className="h-5 w-5 ml-1" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteContent.map((content, index) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ContentCard content={content} type="course" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
