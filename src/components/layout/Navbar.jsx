import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import NodleLogo from '../common/NodleLogo';

const Navbar = () => {
    const { searchQuery, setSearchQuery } = useAppContext();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      navigate('/');
    };
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <NodleLogo />
              </Link>
              
              <nav className="hidden md:flex items-center space-x-6">
                <NavLink to="/decouverte" className={({ isActive }) => 
                  `text-base font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
                }>
                  Découverte
                </NavLink>
                <NavLink to="/formations" className={({ isActive }) => 
                  `text-base font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
                }>
                  Formations
                </NavLink>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-[250px] focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              </form>
              
              <Link to="/profil" className="text-gray-700 hover:text-primary">
                <User className="h-6 w-6" />
              </Link>
              
              <button 
                className="md:hidden text-gray-700 hover:text-primary"
                onClick={toggleMobileMenu}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        
        
      </header>
    );
  };
  
  export default Navbar;