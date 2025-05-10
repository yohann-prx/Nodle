import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import NodleLogo from '../common/NodleLogo';

const Footer = () => {
    return (
      <footer className="bg-gray-100 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Link to="/" className="inline-block mb-6">
                <NodleLogo size="lg" />
              </Link>
              <p className="text-gray-600 mb-4">
                Anim ad ipsum nisi veniam magna culpa eiusmod qui reprehenderit nisi veniam cupidatat.
              </p>
              <p className="text-gray-600 mb-4">
                Anim ad ipsum
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md flex items-center space-x-2 transition-colors">
                <span>Nous contacter</span>
                <span className="text-lg">→</span>
              </button>
            </div>
            
            
          </div>
          
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
              <div className="mb-4 md:mb-0">
                <p>Blablabla © 2025</p>
                <p>Tous droits réservés</p>
              </div>
              <div className="flex space-x-6">
                <Link to="/conditions" className="hover:text-primary">Conditions générales d'utilisation</Link>
                <Link to="/mentions" className="hover:text-primary">Mentions légales</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;