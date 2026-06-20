import { useTranslation } from '../contexts/LanguageContext';
import { ProjectPageLayout } from './ProjectPageLayout';

interface LogosAiActPageProps {
  onBack: () => void;
}

export function LogosAiActPage({ onBack }: LogosAiActPageProps) {
  const { t } = useTranslation();

  return (
    <ProjectPageLayout
      onBack={onBack}
      ns="LogosAiActPage"
      accent={['#7A4ACB', '#05668D']}
      heroImage="/images/Logo-AiAct-hero.avif"
      infoCards={[
        {
          label: t('LogosAiActPage.toolsTitle') as string,
          value: ['Affinity', 'IA générative', 'SVG'],
          color: '#7A4ACB',
        },
        {
          label: t('LogosAiActPage.contextTitle') as string,
          value: t('LogosAiActPage.context') as string,
          color: '#05668D',
        },
        {
          label: t('LogosAiActPage.objectiveTitle') as string,
          value: t('LogosAiActPage.objective') as string,
          color: '#7A4ACB',
        },
      ]}
      showNR={false}
      processImages={[
        { src: '/images/Logo-AiAct-declinaisons.avif', caption: (t('LogosAiActPage.processGalleryItems') as any[])[0].caption, alt: (t('LogosAiActPage.processGalleryItems') as any[])[0].alt },
      ]}
      finalImages={[
        { src: '/images/Logo-AiAct-clair.svg', caption: (t('LogosAiActPage.finalGalleryItems') as any[])[0].caption, alt: (t('LogosAiActPage.finalGalleryItems') as any[])[0].alt },
        { src: '/images/Logo-AiAct-sombre.avif', caption: (t('LogosAiActPage.finalGalleryItems') as any[])[1].caption, alt: (t('LogosAiActPage.finalGalleryItems') as any[])[1].alt },
      ]}
      actions={[
        { type: 'site', href: 'https://audit-ia-act.eu/fr/', label: t('LogosAiActPage.ctaSite') as string },
      ]}
    />
  );
}
