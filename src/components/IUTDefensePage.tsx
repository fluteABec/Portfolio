import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
            IUT Defense Management
          </h1>
          <p className="text-xl text-[#A0A0A0]">
            Plateforme de gestion des soutenances universitaires
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass rounded-3xl overflow-hidden mb-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?w=1200"
            alt="IUT Defense Management"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">TypeScript</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">React</span>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">Rôle</h3>
            <p className="text-[#A0A0A0]">Full-Stack Developer & UI/UX Designer</p>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">Année</h3>
            <p className="text-[#A0A0A0]">2024</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">À propos du projet</h2>
          <div className="space-y-4 text-[#A0A0A0]">
            <p>
              Application web complète développée pour faciliter la gestion des soutenances de projets universitaires.
              Cette plateforme permet aux étudiants, enseignants et jurys de coordonner efficacement l'organisation
              des présentations finales.
            </p>
            <p>
              Le système offre une interface intuitive pour la planification des créneaux, l'attribution des salles,
              la gestion des jurys et l'envoi de notifications automatiques. L'accent a été mis sur l'expérience
              utilisateur pour rendre le processus aussi fluide que possible pour tous les acteurs.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Aperçu de l'interface</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-3xl overflow-hidden h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
                alt="Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="glass rounded-3xl overflow-hidden h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                alt="Analytics"
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
              <span className="text-[#05668D] mt-1">•</span>
              <span>Système de planification intelligent avec gestion des conflits d'horaires</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#05668D] mt-1">•</span>
              <span>Attribution automatique des jurys selon les compétences et disponibilités</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#05668D] mt-1">•</span>
              <span>Notifications en temps réel par email et notifications push</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#05668D] mt-1">•</span>
              <span>Dashboard personnalisé pour chaque type d'utilisateur</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#05668D] mt-1">•</span>
              <span>Système d'export des plannings au format PDF et iCalendar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#05668D] mt-1">•</span>
              <span>Interface d'administration pour la gestion des ressources</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#05668D] to-[#679436] hover:from-[#1A7A9E] hover:to-[#7AAA4A] transition-all duration-200 flex items-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Voir la démo
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