import { ArrowLeft, ExternalLink, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UIDesignPosterPageProps {
  onBack: () => void;
}

export function UIDesignPosterPage({ onBack }: UIDesignPosterPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative overflow-hidden">
      {/* Background decorative shapes */}
      <div
        className="absolute top-32 right-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #679436 0%, #05668D 100%)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(225deg, #05668D 0%, #679436 100%)' }}
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
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#7AAA4A] via-[#679436] to-[#05668D] bg-clip-text text-transparent">
            UI Design Poster
          </h1>
          <p className="text-xl text-[#A0A0A0]">
            CV visuel au format poster - Style album cover
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass rounded-3xl overflow-hidden mb-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1631786170318-ef467b60ef9a?w=1200"
            alt="UI Design Poster"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">Outils</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Figma</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Illustrator</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Photoshop</span>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">Discipline</h3>
            <p className="text-[#A0A0A0]">Graphic Design & Branding</p>
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
              Ce projet consiste en un CV visuel au format poster, inspiré des designs de pochettes d'albums musicaux.
              L'objectif était de créer un document qui se démarque tout en restant professionnel et lisible.
            </p>
            <p>
              Le design combine des éléments graphiques audacieux avec une hiérarchie visuelle claire. Chaque section
              du CV est représentée de manière artistique tout en conservant les informations essentielles facilement
              accessibles. Ce format innovant permet de présenter compétences et expériences d'une manière mémorable.
            </p>
          </div>
        </div>

        {/* Design Process */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Processus créatif</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-3 text-[#679436]">Recherche & Inspiration</h3>
              <p className="text-[#A0A0A0]">
                Analyse de pochettes d'albums emblématiques et étude des tendances du design graphique contemporain
                pour créer une esthétique unique et personnelle.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-[#05668D]">Typographie & Couleurs</h3>
              <p className="text-[#A0A0A0]">
                Sélection minutieuse de polices de caractères et création d'une palette de couleurs cohérente
                reflétant mon identité de designer.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Examples */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Variations du design</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-3xl overflow-hidden h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600"
                alt="Variation design 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="glass rounded-3xl overflow-hidden h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=600"
                alt="Variation design 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Caractéristiques du design</h2>
          <ul className="space-y-3 text-[#A0A0A0]">
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span>Hiérarchie visuelle claire facilitant la lecture rapide des informations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#05668D] mt-1">•</span>
              <span>Équilibre entre créativité artistique et professionnalisme</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span>Utilisation de pictogrammes et icônes personnalisés</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#05668D] mt-1">•</span>
              <span>Format imprimable haute qualité (A3/A2)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span>Palette de couleurs cohérente avec mon identité visuelle</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-200 flex items-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Voir en grand
          </button>
          <button className="px-8 py-4 rounded-full glass-strong hover:bg-white/10 transition-all duration-200 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Télécharger PDF
          </button>
        </div>
      </div>
    </div>
  );
}