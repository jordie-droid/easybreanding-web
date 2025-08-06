import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <i className="bi bi-rocket mr-2"></i>
          Prêt à commencer ?
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Transformez votre élevage
          <br />
          <span className="text-yellow-300">dès aujourd'hui</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Rejoignez plus de 2000 éleveurs qui ont déjà optimisé leur gestion 
          avec EasyBreading. Essai gratuit de 30 jours, sans engagement.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
            <i className="bi bi-play-circle mr-2"></i>
            Commencer gratuitement
          </button>
          <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center">
            <i className="bi bi-calendar-check mr-2"></i>
            Planifier une démo
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-white/80">
          <div className="flex items-center">
            <i className="bi bi-check-circle-fill text-green-300 mr-2"></i>
            30 jours gratuits
          </div>
          <div className="flex items-center">
            <i className="bi bi-check-circle-fill text-green-300 mr-2"></i>
            Sans engagement
          </div>
          <div className="flex items-center">
            <i className="bi bi-check-circle-fill text-green-300 mr-2"></i>
            Support inclus
          </div>
          <div className="flex items-center">
            <i className="bi bi-check-circle-fill text-green-300 mr-2"></i>
            Configuration gratuite
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
