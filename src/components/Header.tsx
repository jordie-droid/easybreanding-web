import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
              <i className="bi bi-heart-pulse text-white text-lg sm:text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">EasyBreading</h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Gestion d'élevage intelligente</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Accueil</a>
            <a href="#cheptel" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Cheptel</a>
            <a href="#sante" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Santé</a>
            <a href="#elevage" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Élevage</a>
            <a href="#finances" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Finances</a>
            <a href="#rapports" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Rapports</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Commencer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <a href="#accueil" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Accueil</a>
              <a href="#cheptel" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Cheptel</a>
              <a href="#sante" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Santé</a>
              <a href="#elevage" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Élevage</a>
              <a href="#finances" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Finances</a>
              <a href="#rapports" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Rapports</a>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 mt-4">
                Commencer
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
