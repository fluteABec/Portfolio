import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Download, Code, Database, Users, Globe, Mail, Phone, MapPin, Guitar, Mountain, ChefHat } from 'lucide-react';

const experiences = [
  {
    role: 'Employé Polyvalent Saisonnier',
    company: 'Forteresse de Saint-Vidal',
    location: 'Saint-Vidal (43)',
    period: '2025',
    description: 'Poste polyvalent au sein d\'un site historique touristique.',
    achievements: [
      'Accueil des visiteurs et service à la taverne',
      'Entretien des chambres et jardins',
      'Animation de visites guidées',
      'Participation artistique en tant que comédien'
    ]
  },
  {
    role: 'Employé en Chambre d\'Hôte',
    company: 'Cabanes et Yourtes de la Vallée de l\'Ance',
    location: 'Sauvessanges (63)',
    period: '2022 - 2024',
    description: 'Gestion complète de l\'accueil et des services en hébergements écologiques.',
    achievements: [
      'Accueil des clients et gestion de la réception',
      'Présentation des lieux et des équipements',
      'Préparation des paniers repas et petits déjeuners',
      'Entretien des cabanes, yourtes et espaces extérieurs'
    ]
  },
  {
    role: 'Accompagnement Chef d\'Équipe (Stage)',
    company: 'Clauger',
    location: 'Cournon d\'Auvergne (63)',
    period: '2021',
    description: 'Stage de découverte dans le domaine du froid industriel.',
    achievements: [
      'Découverte du concept de froid industriel',
      'Observation des contrôles et processus de fabrication',
      'Initiation à l\'automatisation',
      'Expérience terrain en fromagerie'
    ]
  }
];

const education = [
  {
    degree: 'Bachelor Universitaire de Technologie (ex DUT)',
    school: 'IUT Clermont Auvergne, Site du Puy-en-Velay',
    location: 'Le Puy-en-Velay (43)',
    period: '2024 - 2027',
    description: 'Formation en développement web et informatique, avec spécialisation en frontend et UX/UI.'
  },
  {
    degree: 'Baccalauréat',
    school: 'Lycée Charles et Adrien Dupuy',
    location: 'Le Puy-en-Velay (43)',
    period: '2024',
    description: 'Spécialités : Mathématiques, NSI (Numérique et Sciences Informatiques) et HGGSP.'
  }
];

const skills = [
  {
    category: 'Développement Web & Logiciel',
    icon: <Code className="w-6 h-6" />,
    items: [
  'HTML - CSS - JavaScript',
  'Node.js - Express.js',
      'Python',
      'C++',
      'Analyse des besoins techniques',
      'Conception d\'architectures',
      'Développement d\'interfaces responsives',
      'Tests unitaires et correctifs',
      'Gestion de versions (Git)'
    ]
  },
  {
    category: 'Bases de Données & Outils',
    icon: <Database className="w-6 h-6" />,
    items: [
      'MySQL',
      'phpMyAdmin',
      'VS Code',
      'VS Studio 2022',
  'GitHub',
  'Figma',
  'Affinity',
      'Gestion et intégrité des données',
      'Optimisation des performances'
    ]
  },
  {
    category: 'UX/UI & Intégration',
    icon: <Globe className="w-6 h-6" />,
    items: [
      'Interfaces centrées utilisateur',
      'Collaboration avec designers',
      'Amélioration expérience visuelle',
      'Intégration éléments graphiques',
      'Optimisation SEO',
      'Standards web'
    ]
  },
  {
    category: 'Gestion de Projet',
    icon: <Users className="w-6 h-6" />,
    items: [
      'Veille concurrentielle',
      'Analyse des besoins',
      'Rédaction cahiers des charges',
      'Documentation technique',
      'Travail d\'équipe',
      'Communication'
    ]
  }
];

const languages = [
  { name: 'Anglais', level: 'B2', color: '#05668D' },
  { name: 'Italien', level: 'A2', color: '#679436' }
];

const interests = [
  {
    title: 'Grimpeur de Bloc',
    description: 'Ce que j\'aime le plus, c\'est mettre toute ma technique dans le dévers !',
    icon: <Mountain className="w-8 h-8" />
  },
  {
    title: 'Guitariste Amateur',
    description: 'Mon objectif ? Réussir à jouer Clocks de Coldplay en trio avec mes amis.',
    icon: <Guitar className="w-8 h-8" />
  },
  {
    title: 'Cuisinier / Pâtissier',
    description: 'Avec mes lasagnes, je suis imbattable !',
    icon: <ChefHat className="w-8 h-8" />
  }
];

export function CVPage() {
  const handleDownloadCV = () => {
    // Option 1: Si vous avez un PDF dans le dossier public/
    const link = document.createElement('a');
    link.href = '/CV-Nathan-Courcelle.pdf'; // Placez votre CV.pdf dans le dossier public/
    link.download = 'CV-Nathan-Courcelle.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl mb-4 bg-gradient-to-r from-[#7AAA4A] to-[#1A7A9E] bg-clip-text text-transparent">
            Nathan Courcelle
          </h1>
          <p className="text-2xl text-[#F2F2F2] mb-3">Développeur Web</p>
          <p className="text-lg text-[#A0A0A0] mb-6">18 ans</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-[#A0A0A0]">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#679436]" />
              <span>Le Puy-en-Velay (43)</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#679436]" />
              <a href="mailto:nathan.5courcelle@gmail.com" className="hover:text-[#F2F2F2] transition-colors">
                nathan.5courcelle@gmail.com
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="glass rounded-3xl p-8 mb-8 max-w-3xl mx-auto">
            <p className="text-[#A0A0A0] leading-relaxed">
              Actuellement Développeur Web en formation, j'ai choisi ce domaine pour pouvoir jouer avec ma créativité. 
              J'apprécie particulièrement le <span className="text-[#05668D] font-semibold">frontend</span>. 
              Je suis satisfait quand mon wireframe se transforme en un site qui ne néglige pas l'UI ni l'UX.
            </p>
          </div>

          <button
            onClick={handleDownloadCV}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
            Télécharger le CV
          </button>
        </motion.div>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8 text-[#05668D]" />
            <h2 className="text-4xl text-[#F2F2F2]">Formation</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass rounded-3xl p-8 hover:glass-strong transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl text-[#F2F2F2] mb-1">{edu.degree}</h3>
                    <p className="text-lg text-[#05668D] mb-1">{edu.school}</p>
                    <p className="text-sm text-[#679436]">{edu.location}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full glass text-[#A0A0A0]">
                    {edu.period}
                  </span>
                </div>

                <p className="text-[#A0A0A0] leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl text-[#F2F2F2] mb-8">Compétences</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover:glass-strong transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 text-[#679436]">
                  {skillGroup.icon}
                  <h3 className="text-xl text-[#F2F2F2]">{skillGroup.category}</h3>
                </div>

                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-[#A0A0A0] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#05668D] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Languages Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl text-[#F2F2F2] mb-8">Langues</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover:glass-strong transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl text-[#F2F2F2]">{lang.name}</h3>
                  <span 
                    className="px-4 py-2 rounded-full text-lg font-semibold"
                    style={{ backgroundColor: `${lang.color}33`, color: lang.color }}
                  >
                    {lang.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8 text-[#679436]" />
            <h2 className="text-4xl text-[#F2F2F2]">Expériences</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass rounded-3xl p-8 hover:glass-strong transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl text-[#F2F2F2] mb-1">{exp.role}</h3>
                    <p className="text-lg text-[#679436] mb-1">{exp.company}</p>
                    <p className="text-sm text-[#05668D]">{exp.location}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full glass text-[#A0A0A0]">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[#A0A0A0] mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#A0A0A0]">
                      <span className="text-[#05668D] mt-1">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-4xl text-[#F2F2F2] mb-8">Centres d'intérêt</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover:glass-strong transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-[#679436]">
                  {interest.icon}
                </div>
                <h3 className="text-xl text-[#F2F2F2] mb-3 text-center">{interest.title}</h3>
                <p className="text-[#A0A0A0] text-center text-sm leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
