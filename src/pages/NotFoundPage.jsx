import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
