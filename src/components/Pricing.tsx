import React from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular = false, 
  buttonText 
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
      popular ? 'border-primary-500 scale-105' : 'border-gray-200 hover:border-primary-300'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Le plus populaire
          </span>
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-gray-900">{price}</span>
            <span className="text-gray-600 ml-2">/{period}</span>
          </div>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <i className="bi bi-check-circle-fill text-primary-500 mr-3"></i>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '€29',
      period: 'mois',
      description: 'Parfait pour les petits élevages',
      features: [
        'Jusqu\'à 50 animaux',
        'Suivi sanitaire de base',
        'Rapports mensuels',
        'Support par email',
        'Application mobile'
      ],
      buttonText: 'Commencer gratuitement'
    },
    {
      name: 'Professional',
      price: '€79',
      period: 'mois',
      description: 'Idéal pour les élevages moyens',
      features: [
        'Jusqu\'à 500 animaux',
        'Suivi sanitaire avancé',
        'Plans d\'élevage automatiques',
        'Gestion financière complète',
        'Rapports personnalisés',
        'Support prioritaire',
        'Intégrations vétérinaires'
      ],
      popular: true,
      buttonText: 'Essayer 30 jours gratuits'
    },
    {
      name: 'Enterprise',
      price: '€199',
      period: 'mois',
      description: 'Pour les grandes exploitations',
      features: [
        'Animaux illimités',
        'Toutes les fonctionnalités',
        'API personnalisée',
        'Formation dédiée',
        'Support 24/7',
        'Gestionnaire de compte',
        'Déploiement sur site'
      ],
      buttonText: 'Contactez-nous'
    }
  ];

  return (
    <section id="tarifs" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="bi bi-tag mr-2"></i>
            Tarifs transparents
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choisissez le plan qui vous
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500"> convient</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Commencez gratuitement et évoluez selon vos besoins. 
            Tous les plans incluent 30 jours d'essai gratuit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Toutes les formules incluent une garantie de remboursement de 30 jours
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <i className="bi bi-shield-check text-primary-500 mr-2"></i>
              Sécurité garantie
            </div>
            <div className="flex items-center">
              <i className="bi bi-headset text-primary-500 mr-2"></i>
              Support inclus
            </div>
            <div className="flex items-center">
              <i className="bi bi-arrow-repeat text-primary-500 mr-2"></i>
              Mises à jour gratuites
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
