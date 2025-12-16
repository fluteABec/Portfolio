import { ArrowLeft, Github } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface ClimbImprovePageProps {
  onBack: () => void;
}

export function ClimbImprovePage({ onBack }: ClimbImprovePageProps) {
  const { t } = useTranslation();
  
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
          <span>{t('ClimbImprovePage.backButton')}</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#1A7A9E] to-[#05668D] bg-clip-text text-transparent">
            {t('ClimbImprovePage.title')}
          </h1>
          <p className="text-xl text-[#A0A0A0]">
            {t('ClimbImprovePage.subtitle')}
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass rounded-3xl overflow-hidden mb-12">
          <img
            src="/images/Site-ClimbImprove1.avif"
            alt="ClimbImprove Hero"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">{t('ClimbImprovePage.info.techTitle')}</h3>
            <div className="flex flex-wrap gap-2">
              {(t('ClimbImprovePage.info.technologies') as string[]).map((tech, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-white/5 text-sm">{tech}</span>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#679436]">{t('ClimbImprovePage.info.contextTitle')}</h3>
            <p className="text-[#A0A0A0]">{t('ClimbImprovePage.info.context')}</p>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg mb-2 text-[#05668D]">{t('ClimbImprovePage.info.yearTitle')}</h3>
            <p className="text-[#A0A0A0]">{t('ClimbImprovePage.info.year')}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('ClimbImprovePage.aboutTitle')}</h2>
          <div className="space-y-4 text-[#A0A0A0]">
            <p>{t('ClimbImprovePage.description1')}</p>
            <p>{t('ClimbImprovePage.description2')}</p>
            <p>{t('ClimbImprovePage.description3')}</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('ClimbImprovePage.galleryTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">{t('ClimbImprovePage.gallery.image1')}</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/images/Site-ClimbImprove1.avif"
                  alt="Site ClimbImprove Accueil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">{t('ClimbImprovePage.gallery.image2')}</p>
              <div className="glass rounded-3xl overflow-hidden h-64">
                <img
                  src="/images/Site-ClimbImprove2.avif"
                  alt="Site ClimbImprove Features"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-[#A0A0A0] text-sm font-medium mb-3">{t('ClimbImprovePage.gallery.image3')}</p>
              <div className="glass rounded-3xl overflow-hidden h-80">
                <img
                  src="/images/Site-ClimbImprove3.avif"
                  alt="Site ClimbImprove Global"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('ClimbImprovePage.ecosystemTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-[#05668D]">{t('ClimbImprovePage.ecosystem.app.title')}</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                {(t('ClimbImprovePage.ecosystem.app.items') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#05668D] mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-[#679436]">{t('ClimbImprovePage.ecosystem.holds.title')}</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                {(t('ClimbImprovePage.ecosystem.holds.items') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#679436] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t('ClimbImprovePage.skillsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl mb-4 text-[#679436]">{t('ClimbImprovePage.skills.design.title')}</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                {(t('ClimbImprovePage.skills.design.items') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#679436] mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-[#05668D]">{t('ClimbImprovePage.skills.soft.title')}</h3>
              <ul className="space-y-2 text-[#A0A0A0]">
                {(t('ClimbImprovePage.skills.soft.items') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#05668D] mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
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
            {t('ClimbImprovePage.viewCode')}
          </a>
        </div>
      </div>
    </div>
  );
}
