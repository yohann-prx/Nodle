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

            <div className="mb-3">
          <div className="flex items-center mb-1">
            <Star className="h-4 w-4 text-amber-400 mr-1" />
            <span className="font-medium text-gray-900">{school.rating}</span>
            <span className="text-sm text-gray-500 ml-1">({school.reviewCount} avis)</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {school.programTypes.map((type, index) => (
              <span key={index} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-800 rounded">
                {type}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {school.description}
        </p>

        <div className="flex justify-between text-sm mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-400 mr-1" />
            <span>{school.duration.min}-{school.duration.max} {school.duration.unit}s</span>
          </div>
          <div className="flex items-center">
            <Euro className="h-4 w-4 text-gray-400 mr-1" />
            <span>{school.tuition.min.toLocaleString()}-{school.tuition.max.toLocaleString()} {school.tuition.currency}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100">
          <h4 className="font-medium text-gray-900 mb-2">Spécialisations</h4>
          <div className="flex flex-wrap gap-1">
            {school.specializations.map((spec, index) => (
              <span key={index} className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-5 py-3 flex justify-between">
        <button className="text-gray-700 text-sm font-medium hover:text-primary transition-colors">
          Comparer
        </button>
        <button className="text-primary text-sm font-medium hover:text-primary-dark transition-colors">
          Voir les détails
        </button>
      </div>
    </div>
  );
};
