import { useTranslation } from '../contexts/LanguageContext';
import { ProjectPageLayout } from './ProjectPageLayout';

interface AfficheYohanLidonPageProps {
  onBack: () => void;
}

export function AfficheYohanLidonPage({ onBack }: AfficheYohanLidonPageProps) {
  const { t } = useTranslation();

  return (
    <ProjectPageLayout
      onBack={onBack}
      ns="AfficheYohanLidonPage"
      accent={['#679436', '#7AAA4A']}
      heroImage="/images/Affiche-YohanLidon-hero.avif"
      infoCards={[
        {
          label: t('AfficheYohanLidonPage.toolsTitle') as string,
          value: ['Affinity', 'IA générative'],
          color: '#679436',
        },
        {
          label: t('AfficheYohanLidonPage.contextTitle') as string,
          value: t('AfficheYohanLidonPage.context') as string,
          color: '#7AAA4A',
        },
        {
          label: t('AfficheYohanLidonPage.objectiveTitle') as string,
          value: t('AfficheYohanLidonPage.objective') as string,
          color: '#679436',
        },
      ]}
      showNR={false}
      processImages={[
        { src: '/images/Affiche-YohanLidon-process.avif', caption: (t('AfficheYohanLidonPage.processGalleryItems') as any[])[0].caption, alt: (t('AfficheYohanLidonPage.processGalleryItems') as any[])[0].alt },
      ]}
      finalImages={[
        { src: '/images/Affiche-YohanLidon-final.avif', caption: (t('AfficheYohanLidonPage.finalGalleryItems') as any[])[0].caption, alt: (t('AfficheYohanLidonPage.finalGalleryItems') as any[])[0].alt },
      ]}
      actions={[
        { type: 'site', href: 'https://www.yohanlidon.com', label: t('AfficheYohanLidonPage.ctaSite') as string },
      ]}
    />
  );
}
