import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <i className="bi bi-star-fill mr-2"></i>
              Solution complète d'élevage
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Gérez votre
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500"> élevage </span>
              intelligemment
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              EasyBreading révolutionne la gestion d'élevage avec des outils modernes pour le suivi du cheptel, 
              la planification sanitaire et l'optimisation des performances.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <i className="bi bi-play-circle mr-2"></i>
                Commencer gratuitement
              </button>
              <button className="border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                <i className="bi bi-camera-video mr-2"></i>
                Voir la démo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <i className="bi bi-check-circle-fill text-primary-500 mr-2"></i>
                Gratuit pendant 30 jours
              </div>
              <div className="flex items-center">
                <i className="bi bi-check-circle-fill text-primary-500 mr-2"></i>
                Support 24/7
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Tableau de bord</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total animaux</p>
                      <p className="text-2xl font-bold text-primary-600">247</p>
                    </div>
                    <i className="bi bi-heart-pulse text-primary-500 text-2xl"></i>
                  </div>
                </div>
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Naissances</p>
                      <p className="text-2xl font-bold text-secondary-600">12</p>
                    </div>
                    <i className="bi bi-plus-circle text-secondary-500 text-2xl"></i>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <i className="bi bi-bell text-primary-600"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Vaccination prévue</p>
                      <p className="text-xs text-gray-500">Lot A - Dans 2 jours</p>
                    </div>
                  </div>
                  <i className="bi bi-chevron-right text-gray-400"></i>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                      <i className="bi bi-graph-up text-secondary-600"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Rapport mensuel</p>
                      <p className="text-xs text-gray-500">Performance +15%</p>
                    </div>
                  </div>
                  <i className="bi bi-chevron-right text-gray-400"></i>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
