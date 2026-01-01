import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface CabanesYourtesPageProps {
  onBack: () => void;
}

export function CabanesYourtesPage({ onBack }: CabanesYourtesPageProps) {
  const { t } = useTranslation();
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
          <span>{t('CabanesYourtesPage.backButton')}</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#7AAA4A] to-[#679436] bg-clip-text text-transparent">
            {t('CabanesYourtesPage.title')}
          </h1>
          <p className="text-xl text-[#A0A0A0]">
            {t('CabanesYourtesPage.subtitle')}
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass rounded-3xl overflow-hidden mb-12">
          <img
            src="/images/Site-CYVA-hero.avif"
            alt="Cabanes et Yourtes"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">{t('CabanesYourtesPage.info.techTitle')}</h3>
            <div className="flex flex-wrap gap-2">
              {(t('CabanesYourtesPage.info.technologies') as string[]).map((tech, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-white/5 text-sm">{tech}</span>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">{t('CabanesYourtesPage.info.roleTitle')}</h3>
            <p className="text-[#A0A0A0]">{t('CabanesYourtesPage.info.role')}</p>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">{t('CabanesYourtesPage.info.yearTitle')}</h3>
            <p className="text-[#A0A0A0]">{t('CabanesYourtesPage.info.year')}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('CabanesYourtesPage.aboutTitle')}</h2>
          <div className="space-y-4 text-[#A0A0A0]">
            <p>{t('CabanesYourtesPage.description1')}</p>
            <p>{t('CabanesYourtesPage.description2')}</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('CabanesYourtesPage.galleryTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">{t('CabanesYourtesPage.gallery.image1')}</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/images/Site-CYVA-Affinity.avif"
                  alt="Nature environnante"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">{t('CabanesYourtesPage.gallery.image2')}</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/images/Site-CYVA-wireframe.avif"
                  alt="Vue d'ensemble"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">{t('CabanesYourtesPage.gallery.image3')}</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/images/Site-CYVA-colibris.avif"
                  alt="Vue d'ensemble"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">{t('CabanesYourtesPage.gallery.image4')}</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/images/Site-CYVA-hebergement.avif"
                  alt="Vue d'ensemble"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">{t('CabanesYourtesPage.gallery.image5')}</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/images/Site-CYVA-infos.avif"
                  alt="Vue d'ensemble"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('CabanesYourtesPage.featuresTitle')}</h2>
          <ul className="space-y-3 text-[#A0A0A0]">
            {(t('CabanesYourtesPage.features') as string[]).map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#679436] mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <a 
            href="https://cabanes-et-yourtes.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-200 flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            {t('CabanesYourtesPage.viewSite')}
          </a>
          <a 
            href="https://github.com/fluteABec/Cabanes-et-Yourtes"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full glass-strong hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            {t('CabanesYourtesPage.viewCode')}
          </a>
        </div>
      </div>
    </div>
  );
}
