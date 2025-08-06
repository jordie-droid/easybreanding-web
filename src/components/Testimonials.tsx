import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  company, 
  content, 
  rating, 
  avatar 
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`bi bi-star-fill text-lg ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          ></i>
        ))}
      </div>
      
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
        "{content}"
      </blockquote>
      
      <div className="flex items-center">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
          crossOrigin="anonymous"
        />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role} • {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Éleveuse',
      company: 'Ferme des Prés Verts',
      content: 'EasyBreading a révolutionné la gestion de mon élevage. Je gagne un temps précieux et mes animaux sont en meilleure santé grâce aux alertes préventives.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Pierre Martin',
      role: 'Éleveur bovin',
      company: 'GAEC Martin & Fils',
      content: 'L\'application est intuitive et complète. Les rapports financiers m\'aident à optimiser la rentabilité de mon exploitation. Je recommande vivement !',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sophie Leroy',
      role: 'Vétérinaire',
      company: 'Clinique Rurale',
      content: 'Mes clients utilisateurs d\'EasyBreading sont mieux organisés. Les carnets médicaux numériques facilitent grandement mon travail de suivi sanitaire.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Jean-Claude Moreau',
      role: 'Éleveur ovin',
      company: 'Bergerie du Soleil',
      content: 'Depuis que j\'utilise EasyBreading, j\'ai réduit mes coûts vétérinaires de 30% grâce à la prévention. L\'investissement est rapidement rentabilisé.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Isabelle Rousseau',
      role: 'Conseillère agricole',
      company: 'Chambre d\'Agriculture',
      content: 'Je recommande EasyBreading à tous mes clients éleveurs. C\'est un outil moderne qui répond parfaitement aux enjeux actuels de l\'élevage.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Thomas Girard',
      role: 'Éleveur porcin',
      company: 'Porcherie Moderne',
      content: 'L\'interface est parfaite même pour quelqu\'un comme moi qui n\'est pas très à l\'aise avec la technologie. Tout est simple et efficace.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="bi bi-chat-quote mr-2"></i>
            Témoignages clients
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ils nous font
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500"> confiance</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment EasyBreading transforme la gestion d'élevage 
            de nos utilisateurs partout en France.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <i className="bi bi-star-fill text-yellow-400 mr-2"></i>
              <span className="font-semibold">4.9/5</span>
              <span className="ml-1">sur 500+ avis</span>
            </div>
            <div className="flex items-center">
              <i className="bi bi-people text-primary-500 mr-2"></i>
              <span>2000+ éleveurs satisfaits</span>
            </div>
            <div className="flex items-center">
              <i className="bi bi-award text-secondary-500 mr-2"></i>
              <span>Certifié ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
