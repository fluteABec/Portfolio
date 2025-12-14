import { motion } from 'motion/react';
import { Code2, Palette, Zap, Github, Linkedin, Mail, FileDown, Target, Rocket, Monitor, Layers } from 'lucide-react';
import { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:nathan.5courcelle@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        {/* Static background shapes - no animation */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #679436 0%, #05668D 100%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'linear-gradient(225deg, #05668D 0%, #679436 100%)' }}
        />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          {/* Title - Full Width */}
          <div className="text-center mb-16">
            <h1 className="text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-[#7AAA4A] to-[#1A7A9E] bg-clip-text text-transparent">
              Nathan Courcelle
            </h1>
          </div>

          {/* Content Grid - 50/50 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl text-[#F2F2F2]">
                Développeur Front-End UI/UX
              </h2>

              <p className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed">
                Ma vision du développement web ? C'est la technologie au service de l'usage. Ça peut paraître bête mais on a tendance à l'oublier c'est pour ça que j'en fais le point principal de mes créations : Je crée des solutions pertinentes qui donnent exactement le résultat que l'on attend d'elle.
              </p>

              <button
                onClick={() => onNavigate('projects')}
                className="px-10 py-5 rounded-full text-lg glass-strong hover:bg-gradient-to-r hover:from-[#679436] hover:to-[#05668D] transition-all duration-200"
              >
                Voir mes projets
              </button>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#679436] to-[#05668D] rounded-full blur-xl opacity-50" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 glass">
                  <img
                    src="/src/components/images/imageProfil.avif"
                    alt="Nathan Courcelle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-6 relative">
        {/* Background decorative shapes */}
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #679436 0%, #05668D 100%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'linear-gradient(225deg, #05668D 0%, #679436 100%)' }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl text-center mb-6 text-[#F2F2F2]">
            Mon savoir-faire
          </h2>
          <p className="text-center text-xl text-[#A0A0A0] mb-16 max-w-2xl mx-auto">
            Des solutions complètes, du design au déployement
          </p>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development Service */}
            <div className="glass rounded-3xl p-10 hover:glass-strong transition-all duration-200 border border-white/10 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#679436]/20 to-[#679436]/10 group-hover:from-[#679436]/30 group-hover:to-[#679436]/20 transition-all duration-200">
                  <Monitor className="w-10 h-10 text-[#7AAA4A]" />
                </div>
                <h3 className="text-3xl text-[#F2F2F2]">Développement Web</h3>
              </div>

              <p className="text-lg text-[#A0A0A0] mb-6 leading-relaxed">
                Conception de solutions web sur-mesure, de la simple page vitrine aux applications complexes
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-[#A0A0A0]">
                  <span className="text-[#7AAA4A] mt-1">✓</span>
                  <span>Sites web responsive et accessibles</span>
                </li>
                <li className="flex items-start gap-3 text-[#A0A0A0]">
                  <span className="text-[#7AAA4A] mt-1">✓</span>
                  <span>Numérique responsable</span>
                </li>
                <li className="flex items-start gap-3 text-[#A0A0A0]">
                  <span className="text-[#7AAA4A] mt-1">✓</span>
                  <span>Optimisation technique (Vitesse de chargement & SEO)</span>
                </li>
                <li className="flex items-start gap-3 text-[#A0A0A0]">
                  <span className="text-[#7AAA4A] mt-1">✓</span>
                  <span>Gestion dynamique des données</span>               
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-[#679436]/10 text-[#7AAA4A] text-sm">HTML</span>
                <span className="px-4 py-2 rounded-full bg-[#679436]/10 text-[#7AAA4A] text-sm">CSS</span>
                <span className="px-4 py-2 rounded-full bg-[#679436]/10 text-[#7AAA4A] text-sm">JS</span>
                <span className="px-4 py-2 rounded-full bg-[#679436]/10 text-[#7AAA4A] text-sm">Node.js</span>
                <span className="px-4 py-2 rounded-full bg-[#679436]/10 text-[#7AAA4A] text-sm">Express.js</span>
                <span className="px-4 py-2 rounded-full bg-[#679436]/10 text-[#7AAA4A] text-sm">Prisma (notions)</span>
                <span className="px-4 py-2 rounded-full bg-[#679436]/10 text-[#7AAA4A] text-sm">MySQL</span>
              </div>
            </div>

            {/* UI/UX Design Service */}
            <div className="glass rounded-3xl p-10 hover:glass-strong transition-all duration-200 border border-white/10 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#05668D]/20 to-[#05668D]/10 group-hover:from-[#05668D]/30 group-hover:to-[#05668D]/20 transition-all duration-200">
                  <Layers className="w-10 h-10 text-[#1A7A9E]" />
                </div>
                <h3 className="text-3xl text-[#F2F2F2]">Design UI/UX</h3>
              </div>

              <p className="text-lg text-[#A0A0A0] mb-6 leading-relaxed">
                Conception d'interfaces esthétiques et intuitives, prêtes à être intégrées
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-[#A0A0A0]">
                  <span className="text-[#1A7A9E] mt-1">✓</span>
                  <span>Maquettes et prototypes interactifs</span>
                </li>
                <li className="flex items-start gap-3 text-[#A0A0A0]">
                  <span className="text-[#1A7A9E] mt-1">✓</span>
                  <span>Conception centrée utilisateur</span>
                </li>
                <li className="flex items-start gap-3 text-[#A0A0A0]">
                  <span className="text-[#1A7A9E] mt-1">✓</span>
                  <span>Design responsive</span>
                </li>
                <li className="flex items-start gap-3 text-[#A0A0A0]">
                  <span className="text-[#1A7A9E] mt-1">✓</span>
                  <span>Identité visuelle et branding</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-[#05668D]/10 text-[#1A7A9E] text-sm">Figma</span>
                <span className="px-4 py-2 rounded-full bg-[#05668D]/10 text-[#1A7A9E] text-sm">Affinity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambition Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#679436]/20 to-[#05668D]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-12 h-12 text-[#679436]" />
                <h2 className="text-5xl text-[#F2F2F2]">Objectifs & Ambitions</h2>
              </div>

              <p className="text-xl text-[#A0A0A0] mb-6 leading-relaxed">
                Mon ambition est de mettre le numérique au service du savoir-faire local. Je souhaite permettre aux artisans et TPE d'avoir une vitrine digitale qui reflète la qualité réelle de leur travail.
              </p>

              <div className="flex items-start gap-4 mb-6">
                <Rocket className="w-8 h-8 text-[#05668D] mt-1 flex-shrink-0" />
                <p className="text-lg text-[#A0A0A0] leading-relaxed">
                  C'est cette quête de légitimité qui guide mon apprentissage rigoureux aujourd'hui : acquérir une maîtrise technique solide pour offrir, demain, une image digitale à la hauteur de leur talent.
                  </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="glass rounded-full px-6 py-3">
                  <span className="text-[#7AAA4A]">Approche Hybride</span>
                </div>
                <div className="glass rounded-full px-6 py-3">
                  <span className="text-[#1A7A9E]">Rigueur</span>
                </div>
                <div className="glass rounded-full px-6 py-3">
                  <span className="text-[#7AAA4A]">Pertinence</span>
                </div>
                <div className="glass rounded-full px-6 py-3">
                  <span className="text-[#1A7A9E]">Veille Technologique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl text-center mb-16 text-[#F2F2F2]">
            Me contacter
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-[#F2F2F2]">Nom</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-full glass-strong focus:outline-none focus:ring-2 focus:ring-[#679436] bg-transparent text-[#F2F2F2]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-[#F2F2F2]">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-full glass-strong focus:outline-none focus:ring-2 focus:ring-[#679436] bg-transparent text-[#F2F2F2]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-[#F2F2F2]">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-3xl glass-strong focus:outline-none focus:ring-2 focus:ring-[#679436] bg-transparent text-[#F2F2F2] resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-200"
                >
                  Envoyer
                </button>
              </form>
            </div>

            {/* Contact Info & CV Download */}
            <div className="space-y-6">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl mb-6 text-[#F2F2F2]">Connect With Me</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:nathan.5courcelle@gmail.com"
                    className="flex items-center gap-4 p-4 glass-strong rounded-full hover:bg-gradient-to-r hover:from-[#679436]/20 hover:to-[#05668D]/20 transition-all duration-200"
                  >
                    <Mail className="w-6 h-6 text-[#679436]" />
                    <span className="text-[#F2F2F2]">nathan.5courcelle@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/fluteABec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-strong rounded-full hover:bg-gradient-to-r hover:from-[#679436]/20 hover:to-[#05668D]/20 transition-all duration-200"
                  >
                    <Github className="w-6 h-6 text-[#05668D]" />
                    <span className="text-[#F2F2F2]">Mon GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nathan-courcelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-strong rounded-full hover:bg-gradient-to-r hover:from-[#679436]/20 hover:to-[#05668D]/20 transition-all duration-200"
                  >
                    <Linkedin className="w-6 h-6 text-[#679436]" />
                    <span className="text-[#F2F2F2]">Mon LinkedIn</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => onNavigate('cv')}
                className="w-full px-8 py-6 rounded-full glass-strong hover:bg-gradient-to-r hover:from-[#679436] hover:to-[#05668D] transition-all duration-200 flex items-center justify-center gap-3"
              >
                <FileDown className="w-6 h-6" />
                <span>Download CV / View Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}