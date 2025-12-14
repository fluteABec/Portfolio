import { ArrowLeft, Github } from 'lucide-react';

interface IUTDefensePageProps {
  onBack: () => void;
}

export function IUTDefensePage({ onBack }: IUTDefensePageProps) {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative overflow-hidden">
      {/* Background decorative shapes */}
      <div
        className="absolute top-40 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #05668D 0%, #1A7A9E 100%)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(225deg, #1A7A9E 0%, #05668D 100%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#F2F2F2] mb-12 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour aux projets</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#1A7A9E] to-[#05668D] bg-clip-text text-transparent">
            Gestion des Soutenances IUT
          </h1>
          <p className="text-xl text-[#A0A0A0]">
            Application web de gestion des évaluations de stages pour l'IUT Informatique
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass rounded-3xl overflow-hidden mb-12">
          <img
            src="/src/components/images/Site-Soutenance-hero.png"
            alt="Gestion des Soutenances IUT"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">PHP</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">MySQL</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">JavaScript</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">CSS</span>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">Rôle</h3>
            <p className="text-[#A0A0A0]">Développeur Front-end & Designer CSS</p>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">Année</h3>
            <p className="text-[#A0A0A0]">2025</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">À propos du projet</h2>
          <div className="space-y-4 text-[#A0A0A0]">
            <p>
              Projet réalisé en équipe dans le cadre de la deuxième année d'IUT Informatique.
              L'objectif était de concevoir une application web centralisant la gestion complète des soutenances de stage et d'alternance : 
              attribution des jurys, saisie et consultation des grilles d'évaluation, suivi des notes, administration des comptes 
              (professeurs, étudiants), automatisation de certaines tâches internes (mails, remontées de données) ainsi qu'un travail 
              sur la sécurisation des données.
            </p>
            <p>
              J'ai développé la page d'accueil du professeur (vue personnalisée des soutenances à venir et passées, tri dynamique) 
              et assuré l'intégration complète du design (CSS global conforme à la charte graphique de l'IUT).
            </p>
            <p>
              Projet collaboratif de plus d'un mois avec la méthode agile, utilisant GitHub pour la gestion de version 
              et VS Code pour le développement.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Aperçu de l'interface</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">Interface Back-office - Diffusion des résultat</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/src/components/images/Site-Soutenance-back1.png"
                  alt="Back-office gestion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">Interface Front-office Professeur</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/src/components/images/Site-Soutenance-back2.png"
                  alt="Grilles d'évaluation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">Interface Back-office - Grilles de notations</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/src/components/images/Site-Soutenance-front.png"
                  alt="Front-office étudiant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">Structure de la base de données MySQL</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/src/components/images/Site-Soutenance-SQL.png"
                  alt="Base de données SQL"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Fonctionnalités principales</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-[#05668D]">Espace Administrateur</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>Tableau de bord avec statistiques et indicateurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>Gestion des soutenances (salles, créneaux, jurys)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>Remontée et validation des notes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>Export CSV et envoi automatique par email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>Création et gestion des grilles d'évaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>Administration des utilisateurs et droits d'accès</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-[#679436]">Espace Étudiant</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Consultation des informations personnelles de stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Visualisation des grilles d'évaluation attribuées</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Consultation détaillée des notes par critère</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Accès aux commentaires du jury</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Historique complet des évaluations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Suivi du statut d'évaluation en temps réel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Aspects techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg mb-3 text-[#05668D]">Backend</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>PHP avec architecture MVC</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>MySQL avec requêtes préparées (sécurité)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>PHPMailer pour l'envoi d'emails automatisés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>Système d'authentification sécurisé avec sessions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-3 text-[#679436]">Frontend</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>HTML5 & CSS3</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>PHP pour l'interactivité dynamique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>DataTables pour les tableaux de données</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Design conforme à la charte graphique IUT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/fluteABec/GestionSoutenance"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full glass-strong hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            Voir le code
          </a>
        </div>
      </div>
    </div>
  );
}