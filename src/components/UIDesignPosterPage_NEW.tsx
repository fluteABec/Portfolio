import { ArrowLeft, ExternalLink, Download } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface UIDesignPosterPageProps {
  onBack: () => void;
}

export function UIDesignPosterPage({ onBack }: UIDesignPosterPageProps) {
  const { t } = useTranslation();
  
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
          <span>{t('UIDesignPosterPage.backButton')}</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#7AAA4A] via-[#679436] to-[#05668D] bg-clip-text text-transparent">
            {t('UIDesignPosterPage.title')}
          </h1>
          <p className="text-xl text-[#A0A0A0]">
            {t('UIDesignPosterPage.subtitle')}
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
            <h3 className="text-lg mb-2 text-[#679436]">{t('UIDesignPosterPage.info.toolsTitle')}</h3>
            <div className="flex flex-wrap gap-2">
              {(t('UIDesignPosterPage.info.tools') as string[]).map((tool, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-white/5 text-sm">{tool}</span>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">{t('UIDesignPosterPage.info.contextTitle')}</h3>
            <p className="text-[#A0A0A0]">{t('UIDesignPosterPage.info.context')}</p>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">{t('UIDesignPosterPage.info.objectiveTitle')}</h3>
            <p className="text-[#A0A0A0]">{t('UIDesignPosterPage.info.objective')}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('UIDesignPosterPage.aboutTitle')}</h2>
          <div className="space-y-4 text-[#A0A0A0]">
            <p>{t('UIDesignPosterPage.description1')}</p>
            <p>{t('UIDesignPosterPage.description2')}</p>
          </div>
        </div>

        {/* Design Process */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('UIDesignPosterPage.strategyTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-3 text-[#679436]">{t('UIDesignPosterPage.strategy.storytelling.title')}</h3>
              <p className="text-[#A0A0A0]">
                {t('UIDesignPosterPage.strategy.storytelling.description')}
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-[#05668D]">{t('UIDesignPosterPage.strategy.visual.title')}</h3>
              <p className="text-[#A0A0A0]">
                {t('UIDesignPosterPage.strategy.visual.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Process Image */}
        <div className="mb-12">
          <p className="text-[#A0A0A0] text-sm font-medium mb-3">{t('UIDesignPosterPage.processImage')}</p>
          <div className="glass rounded-3xl overflow-hidden">
            <img
              src="/images/Page-Pochette-Affinity.avif"
              alt="Création du visuel sur Affinity Designer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('UIDesignPosterPage.conceptTitle')}</h2>
          <ul className="space-y-3 text-[#A0A0A0]">
            {(t('UIDesignPosterPage.conceptDetails') as string[]).map((detail, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className={index % 2 === 0 ? "text-[#679436] mt-1" : "text-[#05668D] mt-1"}>•</span>
                <span dangerouslySetInnerHTML={{ __html: detail }}></span>
              </li>
            ))}
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
            {t('UIDesignPosterPage.viewPost')}
          </a>
          <a 
            href="/PochetteAlbum-NathanCourcelle.avif"
            download="PochetteAlbum-NathanCourcelle.avif"
            className="px-8 py-4 rounded-full glass-strong hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            {t('UIDesignPosterPage.downloadVisual')}
          </a>
        </div>
      </div>
    </div>
  );
}
