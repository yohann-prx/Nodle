import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const isProfilePage = location.pathname === '/profil';
    
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${isProfilePage ? 'bg-gray-50' : ''}`}>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;