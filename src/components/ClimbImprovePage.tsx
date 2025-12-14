import { ArrowLeft, Github } from 'lucide-react';

interface ClimbImprovePageProps {
  onBack: () => void;
}

export function ClimbImprovePage({ onBack }: ClimbImprovePageProps) {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative overflow-hidden">
      {/* Background decorative shapes - Couleurs adaptées (Violet/Bleu) */}
      <div
        className="absolute top-40 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #7A4ACB 0%, #4A90E2 100%)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(225deg, #4A90E2 0%, #7A4ACB 100%)' }}
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
          {/* Dégradé Vert comme sur la source ClimbImprove */}
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#1A7A9E] to-[#05668D] bg-clip-text text-transparent">
            ClimbImprove
          </h1>
          <p className="text-xl text-[#A0A0A0]">
            Révolutionner l'escalade par l'IA et les objets connectés
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass rounded-3xl overflow-hidden mb-12">
          <img
            src="/src/components/images/Site-ClimbImprove1.avif"
            alt="ClimbImprove Hero"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Figma Make</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">IA</span>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">Contexte</h3>
            <p className="text-[#A0A0A0]">Projet universitaire en binôme (Cours d'anglais)</p>
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
              Réalisé en binôme dans le cadre d'un cours d'anglais en deuxième année de BUT Informatique Graphique, 
              <strong> ClimbImprove</strong> est un projet conceptuel visant à révolutionner l'escalade grâce à l'alliance 
              de l'intelligence artificielle et d'objets connectés.
            </p>
            <p>
              Pour pallier des délais restreints tout en explorant les technologies d'IA, nous avons utilisé 
              <strong> Figma Make</strong> pour simuler l'architecture de ce service. Mon rôle a consisté à imaginer 
              le concept global et à développer intégralement le site web vitrine, pièce maîtresse de notre évaluation sur stand.
            </p>
            <p>
              Ce site détaille un écosystème complet : une application capable d'analyse vidéo biomécanique 
              (<strong>"Movement Analysis"</strong>) et de coaching personnalisé (<strong>"Smart Guidance"</strong>), 
              couplée à des prises connectées durables en bois et polyester.
            </p>
          </div>
        </div>

        {/* Image Gallery - Adaptée pour 3 images */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Aperçu de l'interface</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">Interface - Analyse & Accueil</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/src/components/images/Site-ClimbImprove1.avif"
                  alt="Site ClimbImprove Accueil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">Détail des fonctionnalités</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/src/components/images/Site-ClimbImprove2.avif"
                  alt="Site ClimbImprove Features"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">Présentation globale du concept</p>
              <div className="glass rounded-3xl overflow-hidden h-80">
                <img
                  src="/src/components/images/Site-ClimbImprove3.avif"
                  alt="Site ClimbImprove Global"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features -> Écosystème */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Écosystème du projet</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-[#05668D]">Application Mobile</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span><strong>Movement Analysis :</strong> Analyse vidéo biomécanique en temps réel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span><strong>Smart Guidance :</strong> Coaching personnalisé basé sur l'IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>Suivi détaillé de la progression du grimpeur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span>Données précises sur les performances</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-[#679436]">Prises Connectées</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Matériaux durables : bois et polyester</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Capteurs de pression intégrés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Outils de création de voies pour les ouvreurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span>Analyse de la charge et de la technique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Features -> Compétences Développées */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Compétences développées</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl mb-4 text-[#679436]">Conception & Technique</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span><strong>Innovation :</strong> Conception produit alliant IA et IoT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span><strong>Design UX/UI :</strong> Création d'interfaces optimisées sur Figma</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#679436] mt-1">•</span>
                  <span><strong>IA Figma Make :</strong> Simulation de processus complexes</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-[#05668D]">Réalisation & Soft Skills</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span><strong>Développement web :</strong> Création du site vitrine complet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span><strong>Communication :</strong> Présentation et vente du concept en anglais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#05668D] mt-1">•</span>
                  <span><strong>Travail d'équipe :</strong> Collaboration efficace en binôme</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/fluteABec/ClimbImprove"
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