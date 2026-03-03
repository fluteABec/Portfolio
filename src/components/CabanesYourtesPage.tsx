import { useTranslation } from '../contexts/LanguageContext';
import { ProjectPageLayout } from './ProjectPageLayout';

interface CabanesYourtesPageProps {
  onBack: () => void;
}

export function CabanesYourtesPage({ onBack }: CabanesYourtesPageProps) {
  const { t } = useTranslation();

  return (
    <ProjectPageLayout
      onBack={onBack}
      ns="CabanesYourtesPage"
      accent={['#679436', '#05668D']}
      heroImage="/images/Site-CYVA-hero.avif"
      infoCards={[
        {
          label: t('CabanesYourtesPage.techTitle') as string,
          value: ['HTML', 'CSS', 'JS', 'Figma', 'Affinity', 'Responsive Design', 'Optimisation SEO'],
          color: '#679436',
        },
        {
          label: t('CabanesYourtesPage.roleTitle') as string,
          value: t('CabanesYourtesPage.role') as string,
          color: '#05668D',
        },
        {
          label: t('CabanesYourtesPage.yearTitle') as string,
          value: t('CabanesYourtesPage.year') as string,
          color: '#679436',
        },
      ]}
      showNR
      processImages={[
        { src: '/images/Site-CYVA-Affinity.avif', caption: (t('CabanesYourtesPage.processGalleryItems') as any[])[0].caption, alt: (t('CabanesYourtesPage.processGalleryItems') as any[])[0].alt },
        { src: '/images/Site-CYVA-wireframe.avif', caption: (t('CabanesYourtesPage.processGalleryItems') as any[])[1].caption, alt: (t('CabanesYourtesPage.processGalleryItems') as any[])[1].alt },
      ]}
      finalImages={[
        { src: '/images/Site-CYVA-hebergement.avif', caption: (t('CabanesYourtesPage.finalGalleryItems') as any[])[0].caption, alt: (t('CabanesYourtesPage.finalGalleryItems') as any[])[0].alt },
        { src: '/images/Site-CYVA-colibris.avif', caption: (t('CabanesYourtesPage.finalGalleryItems') as any[])[1].caption, alt: (t('CabanesYourtesPage.finalGalleryItems') as any[])[1].alt },
        { src: '/images/Site-CYVA-infos.avif', caption: (t('CabanesYourtesPage.finalGalleryItems') as any[])[2].caption, alt: (t('CabanesYourtesPage.finalGalleryItems') as any[])[2].alt },
      ]}
      actions={[
        { type: 'site', href: 'https://cabanes-et-yourtes.vercel.app', label: t('CabanesYourtesPage.ctaSite') as string },
        { type: 'code', href: 'https://github.com/fluteABec/Cabanes-et-Yourtes', label: t('CabanesYourtesPage.ctaCode') as string },
      ]}
    />
  );
}
