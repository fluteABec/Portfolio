import { useTranslation } from '../contexts/LanguageContext';
import { ProjectPageLayout } from './ProjectPageLayout';

interface LeoAgentPageProps {
  onBack: () => void;
}

export function LeoAgentPage({ onBack }: LeoAgentPageProps) {
  const { t } = useTranslation();

  return (
    <ProjectPageLayout
      onBack={onBack}
      ns="LeoAgentPage"
      accent={['#05668D', '#7A4ACB']}
      heroImage="/images/Site-Leo-hero.avif"
      infoCards={[
        {
          label: t('LeoAgentPage.techTitle') as string,
          value: ['OpenClaw', 'Docker', 'Node.js', 'n8n', 'API Voyager', 'Extension Chrome', 'Bash', 'LLM'],
          color: '#05668D',
        },
        {
          label: t('LeoAgentPage.roleTitle') as string,
          value: t('LeoAgentPage.role') as string,
          color: '#7A4ACB',
        },
        {
          label: t('LeoAgentPage.yearTitle') as string,
          value: t('LeoAgentPage.year') as string,
          color: '#05668D',
        },
      ]}
      showNR={true}
      processImages={[
        { src: '/images/Site-Leo-architecture.avif', caption: (t('LeoAgentPage.processGalleryItems') as any[])[0].caption, alt: (t('LeoAgentPage.processGalleryItems') as any[])[0].alt },
      ]}
      finalImages={[
        { src: '/images/Site-Leo-campagnes.avif', caption: (t('LeoAgentPage.finalGalleryItems') as any[])[0].caption, alt: (t('LeoAgentPage.finalGalleryItems') as any[])[0].alt },
        { src: '/images/Site-Leo-prospects.avif', caption: (t('LeoAgentPage.finalGalleryItems') as any[])[1].caption, alt: (t('LeoAgentPage.finalGalleryItems') as any[])[1].alt },
      ]}
      actions={[]}
    />
  );
}
