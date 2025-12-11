import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CabanesYourtesPageProps {
  onBack: () => void;
}

export function CabanesYourtesPage({ onBack }: CabanesYourtesPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative overflow-hidden">
      {/* Background decorative shapes */}
      <div
        className="absolute top-40 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #679436 0%, #7AAA4A 100%)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(225deg, #7AAA4A 0%, #679436 100%)' }}
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
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#7AAA4A] to-[#679436] bg-clip-text text-transparent">
            Cabanes et Yourtes
          </h1>
          <p className="text-xl text-[#A0A0A0]">
            Site web pour hébergements écologiques en pleine nature
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass rounded-3xl overflow-hidden mb-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1627750168257-9a7d3965ef8b?w=1200"
            alt="Cabanes et Yourtes"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">React</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Responsive</span>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">Rôle</h3>
            <p className="text-[#A0A0A0]">Design & Développement Front-End</p>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">Année</h3>
            <p className="text-[#A0A0A0]">2024</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">À propos du projet</h2>
          <div className="space-y-4 text-[#A0A0A0]">
            <p>
              Ce projet a pour objectif de promouvoir le tourisme écologique à travers une expérience web immersive.
              Le site présente des hébergements insolites en pleine nature : cabanes dans les arbres, yourtes mongoles,
              et autres logements respectueux de l'environnement.
            </p>
            <p>
              L'interface a été conçue pour refléter l'atmosphère naturelle et paisible des lieux, avec une palette de
              couleurs inspirée de la forêt et des matériaux organiques. La navigation intuitive permet aux visiteurs
              de découvrir facilement les différents hébergements et leurs équipements.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Galerie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-3xl overflow-hidden h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"
                alt="Nature environnante"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="glass rounded-3xl overflow-hidden h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600"
                alt="Vue d'ensemble"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Fonctionnalités principales</h2>
          <ul className="space-y-3 text-[#A0A0A0]">
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span>Galerie photo immersive avec système de navigation fluide</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span>Intégration de système de réservation en ligne</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span>Design responsive adapté à tous les appareils</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span>Optimisation SEO pour le référencement naturel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span>Animations subtiles pour améliorer l'expérience utilisateur</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-200 flex items-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Voir le site
          </button>
          <button className="px-8 py-4 rounded-full glass-strong hover:bg-white/10 transition-all duration-200 flex items-center gap-2">
            <Github className="w-5 h-5" />
            Voir le code
          </button>
        </div>
      </div>
    </div>
  );
}