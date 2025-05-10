import React from 'react';
import { MapPin, Star, Clock, Euro } from 'lucide-react';

const SchoolCard = ({ school }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
          <div className="p-5">
            <div className="flex items-center mb-4">
              <img 
                src={school.logo} 
                alt={school.name} 
                className="w-12 h-12 rounded-md object-cover mr-3"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{school.name}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  <span>{school.location}</span>
                </div>
              </div>
            </div>