import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <i className={`bi ${icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: 'bi-heart-pulse',
      title: 'Gestion du cheptel',
      description: 'Enregistrement individuel des animaux avec suivi complet des événements : naissances, décès, ventes et généalogie.',
      color: 'bg-primary-500'
    },
    {
      icon: 'bi-calendar-check',
      title: 'Plan d\'élevage intelligent',
      description: 'Calcul automatique des besoins en eau et nourriture avec planification des interventions sanitaires.',
      color: 'bg-secondary-500'
    },
    {
      icon: 'bi-shield-check',
      title: 'Suivi sanitaire',
      description: 'Carnet médical individuel avec historique des maladies, traitements et alertes préventives.',
      color: 'bg-accent-500'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Gestion financière',
      description: 'Suivi des dépenses et revenus avec calcul de rentabilité par animal ou par lot.',
      color: 'bg-primary-600'
    },
    {
      icon: 'bi-bar-chart',
      title: 'Statistiques avancées',
      description: 'Rapports détaillés et bilans zootechniques pour optimiser les performances de votre élevage.',
      color: 'bg-secondary-600'
    },
    {
      icon: 'bi-bell',
      title: 'Alertes intelligentes',
      description: 'Notifications automatiques pour les événements importants et rappels personnalisés.',
      color: 'bg-accent-600'
    }
  ];

  return (
    <section id="fonctionnalites" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="bi bi-lightning mr-2"></i>
            Fonctionnalités puissantes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tout ce dont vous avez besoin pour
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500"> réussir</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            EasyBreading combine technologie moderne et expertise agricole pour vous offrir 
            une solution complète de gestion d'élevage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
