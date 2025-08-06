import React, { useState } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className={`text-sm ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'} mt-1`}>
            {change} ce mois
          </p>
        </div>
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          <i className={`bi ${icon} text-white text-xl`}></i>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cheptel');

  const stats = [
    {
      title: 'Total animaux',
      value: '247',
      change: '+12',
      icon: 'bi-heart-pulse',
      color: 'bg-primary-500'
    },
    {
      title: 'Naissances',
      value: '18',
      change: '+5',
      icon: 'bi-plus-circle',
      color: 'bg-secondary-500'
    },
    {
      title: 'Vaccinations',
      value: '156',
      change: '+23',
      icon: 'bi-shield-check',
      color: 'bg-accent-500'
    },
    {
      title: 'Revenus',
      value: '€15,420',
      change: '+8.2%',
      icon: 'bi-graph-up',
      color: 'bg-primary-600'
    }
  ];

  const recentActivities = [
    {
      type: 'birth',
      message: 'Naissance de 3 veaux dans le lot A',
      time: 'Il y a 2 heures',
      icon: 'bi-plus-circle',
      color: 'text-green-600'
    },
    {
      type: 'vaccination',
      message: 'Vaccination programmée pour demain',
      time: 'Il y a 4 heures',
      icon: 'bi-calendar-check',
      color: 'text-blue-600'
    },
    {
      type: 'alert',
      message: 'Alerte santé - Vache #247',
      time: 'Il y a 6 heures',
      icon: 'bi-exclamation-triangle',
      color: 'text-red-600'
    },
    {
      type: 'sale',
      message: 'Vente de 5 animaux - €3,200',
      time: 'Hier',
      icon: 'bi-cash-coin',
      color: 'text-green-600'
    }
  ];

  return (
    <section id="cheptel" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tableau de bord interactif
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visualisez en temps réel les données de votre élevage et prenez des décisions éclairées.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              {/* Tabs */}
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
                {[
                  { id: 'cheptel', label: 'Cheptel', icon: 'bi-heart-pulse' },
                  { id: 'sante', label: 'Santé', icon: 'bi-shield-check' },
                  { id: 'elevage', label: 'Élevage', icon: 'bi-calendar-check' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <i className={`${tab.icon} mr-2`}></i>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-4">
                {activeTab === 'cheptel' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Gestion du cheptel</h3>
                    <div className="space-y-3">
                      {[
                        { id: 'A001', name: 'Vache Marguerite', age: '4 ans', status: 'Bonne santé', color: 'green' },
                        { id: 'A002', name: 'Taureau Ferdinand', age: '6 ans', status: 'Surveillance', color: 'yellow' },
                        { id: 'A003', name: 'Vache Blanchette', age: '3 ans', status: 'Gestante', color: 'blue' }
                      ].map((animal) => (
                        <div key={animal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                              <i className="bi bi-heart-pulse text-primary-600"></i>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{animal.name}</p>
                              <p className="text-sm text-gray-600">ID: {animal.id} • {animal.age}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              animal.color === 'green' ? 'bg-green-100 text-green-800' :
                              animal.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {animal.status}
                            </span>
                            <i className="bi bi-chevron-right text-gray-400"></i>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'sante' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Suivi sanitaire</h3>
                    <div className="space-y-3">
                      {[
                        { type: 'Vaccination', animal: 'Lot A (25 animaux)', date: 'Demain', urgent: true },
                        { type: 'Vermifuge', animal: 'Vache #247', date: 'Dans 3 jours', urgent: false },
                        { type: 'Contrôle vétérinaire', animal: 'Taureau Ferdinand', date: 'La semaine prochaine', urgent: false }
                      ].map((task, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              task.urgent ? 'bg-red-100' : 'bg-blue-100'
                            }`}>
                              <i className={`bi bi-shield-check ${task.urgent ? 'text-red-600' : 'text-blue-600'}`}></i>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{task.type}</p>
                              <p className="text-sm text-gray-600">{task.animal}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`text-sm font-medium ${task.urgent ? 'text-red-600' : 'text-gray-900'}`}>
                              {task.date}
                            </p>
                            {task.urgent && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-1">
                                Urgent
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'elevage' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Plan d'élevage</h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Eau quotidienne</p>
                            <p className="text-2xl font-bold text-primary-600">2,470L</p>
                          </div>
                          <i className="bi bi-droplet text-primary-500 text-2xl"></i>
                        </div>
                      </div>
                      <div className="bg-secondary-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Nourriture</p>
                            <p className="text-2xl font-bold text-secondary-600">185kg</p>
                          </div>
                          <i className="bi bi-basket text-secondary-500 text-2xl"></i>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-gray-900">Distribution du matin</p>
                          <span className="text-sm text-gray-600">6h00</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">75% complété</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-gray-900">Distribution du soir</p>
                          <span className="text-sm text-gray-600">18h00</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Programmé</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Activités récentes</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <i className={`${activity.icon} ${activity.color} text-lg`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <i className="bi bi-plus-circle text-primary-600"></i>
                    <span className="text-sm font-medium text-gray-900">Ajouter un animal</span>
                  </div>
                  <i className="bi bi-chevron-right text-gray-400"></i>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <i className="bi bi-calendar-plus text-secondary-600"></i>
                    <span className="text-sm font-medium text-gray-900">Programmer intervention</span>
                  </div>
                  <i className="bi bi-chevron-right text-gray-400"></i>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-accent-50 hover:bg-accent-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <i className="bi bi-file-earmark-text text-accent-600"></i>
                    <span className="text-sm font-medium text-gray-900">Générer rapport</span>
                  </div>
                  <i className="bi bi-chevron-right text-gray-400"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
