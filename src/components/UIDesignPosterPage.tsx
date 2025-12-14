import { ArrowLeft, ExternalLink, Download } from 'lucide-react';

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
            CV pochette d'album
          </h1>
          <p className="text-xl text-[#A0A0A0]">
            Campagne LinkedIn & Personal Branding - Concept Album
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass rounded-3xl overflow-hidden mb-12">
          <img
            src="/PochetteAlbum-NathanCourcelle.avif"
            alt="Visuel du post LinkedIn style pochette d'album"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">Outils</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Affinity</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Canva (Veille)</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">LinkedIn</span>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">Contexte</h3>
            <p className="text-[#A0A0A0]">BUT Informatique (2ème année)</p>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">Objectif</h3>
            <p className="text-[#A0A0A0]">Recherche de stage Dev Web</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">À propos du projet</h2>
          <div className="space-y-4 text-[#A0A0A0]">
            <p>
              Dans le cadre du module "Projet Personnel et Professionnel", j'ai conçu une campagne de recherche de stage disruptive pour avril 2025. 
              Plutôt que de simplement poster un CV PDF, j'ai choisi de traiter ma candidature comme la sortie d'un <strong>"premier single"</strong> musical.
            </p>
            <p>
              Le concept repose sur une analogie forte entre la musique et le code : rythme, équilibre, et absence de dissonance. 
              Le visuel principal est une <strong>pochette d'album stylisée</strong> où les informations classiques d'un CV sont réinterprétées graphiquement 
              pour capter l'attention des recruteurs dans un flux LinkedIn saturé.
            </p>
          </div>
        </div>

        {/* Design Process */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Stratégie & Création</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-3 text-[#679436]">Storytelling Musical</h3>
              <p className="text-[#A0A0A0]">
                Rédaction intégrale du post avec un champ lexical musical ("release", "mastering", "notes techniques"). 
                L'idée était de présenter mes compétences en frontend (HTML, CSS, JS) comme une composition rigoureuse et harmonieuse.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-[#05668D]">Conception Visuelle (Affinity)</h3>
              <p className="text-[#A0A0A0]">
                Création d'un visuel unique remplaçant le CV traditionnel. Hiérarchisation de l'information sous forme de "Tracklist" 
                pour les compétences, titre de l'album pour le poste visé, et crédits pour les informations de contact.
              </p>
            </div>
          </div>
        </div>

        {/* Process Image */}
        <div className="mb-12">
          <p className="text-[#A0A0A0] text-sm font-medium mb-3">Processus de création sur Affinity</p>
          <div className="glass rounded-3xl overflow-hidden">
            <img
              src="/src/components/images/Page-Pochette-Affinity.avif"
              alt="Création du visuel sur Affinity Designer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* Key Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">Détails du concept</h2>
          <ul className="space-y-3 text-[#A0A0A0]">
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span><strong>Tracklist des compétences :</strong> Présentation originale des hard skills (Dev Web).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#05668D] mt-1">•</span>
              <span><strong>Approche "Release" :</strong> Annonce du stage comme une sortie exclusive d'un artiste émergent.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#679436] mt-1">•</span>
              <span><strong>Design sous Affinity :</strong> Maîtrise des outils graphiques démontrée par la pratique.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#05668D] mt-1">•</span>
              <span><strong>Double impact :</strong> Mise en avant simultanée des compétences techniques (Affinity) et créatives (l'idée en elle même).</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <a 
            href="https://www.linkedin.com/posts/nathan-courcelle_stagiaire-d%C3%A9veloppement-web-disponible-activity-7396274349088927745-roqL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFXut_0Bc2aejZ9oYETLUmwP9FhPe_4y2u4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-200 flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Voir le post LinkedIn
          </a>
          <a 
            href="/PochetteAlbum-NathanCourcelle.avif"
            download="PochetteAlbum-NathanCourcelle.avif"
            className="px-8 py-4 rounded-full glass-strong hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Télécharger le visuel
          </a>
        </div>
      </div>
    </div>
  );
}