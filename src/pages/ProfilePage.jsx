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
      </div>
    </div>
  );
};

export default ProfilePage;
