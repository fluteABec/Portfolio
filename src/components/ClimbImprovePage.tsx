import { useTranslation } from '../contexts/LanguageContext';
import { ProjectPageLayout } from './ProjectPageLayout';

interface ClimbImprovePageProps {
  onBack: () => void;
}

export function ClimbImprovePage({ onBack }: ClimbImprovePageProps) {
  const { t } = useTranslation();

  return (
    <ProjectPageLayout
      onBack={onBack}
      ns="ClimbImprovePage"
      accent={['#7A4ACB', '#4A90E2']}
      heroImage="/images/Site-ClimbImprove1.avif"
      infoCards={[
        {
          label: t('ClimbImprovePage.techTitle') as string,
          value: ['Figma', 'FigmaMake', 'IA'],
          color: '#7A4ACB',
        },
        {
          label: t('ClimbImprovePage.contextTitle') as string,
          value: t('ClimbImprovePage.context') as string,
          color: '#4A90E2',
        },
        {
          label: t('ClimbImprovePage.yearTitle') as string,
          value: t('ClimbImprovePage.year') as string,
          color: '#7A4ACB',
        },
      ]}
      showNR
      processImages={[
        { src: '/images/Site-ClimbImprove1.avif', caption: (t('ClimbImprovePage.processGalleryItems') as any[])[0].caption, alt: (t('ClimbImprovePage.processGalleryItems') as any[])[0].alt },
      ]}
      finalImages={[
        { src: '/images/Site-ClimbImprove2.avif', caption: (t('ClimbImprovePage.finalGalleryItems') as any[])[0].caption, alt: (t('ClimbImprovePage.finalGalleryItems') as any[])[0].alt },
        { src: '/images/Site-ClimbImprove3.avif', caption: (t('ClimbImprovePage.finalGalleryItems') as any[])[1].caption, alt: (t('ClimbImprovePage.finalGalleryItems') as any[])[1].alt },
      ]}
      actions={[
        { type: 'code', href: 'https://github.com/fluteABec/ClimbImprove', label: t('ClimbImprovePage.ctaCode') as string },
      ]}
    />
  );
}
