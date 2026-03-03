import { useTranslation } from '../contexts/LanguageContext';
import { ProjectPageLayout } from './ProjectPageLayout';

interface IUTDefensePageProps {
  onBack: () => void;
}

export function IUTDefensePage({ onBack }: IUTDefensePageProps) {
  const { t } = useTranslation();

  return (
    <ProjectPageLayout
      onBack={onBack}
      ns="IUTDefensePage"
      accent={['#05668D', '#1A7A9E']}
      heroImage="/images/Site-Soutenance-hero.avif"
      infoCards={[
        {
          label: t('IUTDefensePage.techTitle') as string,
          value: ['HTML', 'CSS', 'PHP', 'MySQL'],
          color: '#05668D',
        },
        {
          label: t('IUTDefensePage.roleTitle') as string,
          value: t('IUTDefensePage.role') as string,
          color: '#679436',
        },
        {
          label: t('IUTDefensePage.yearTitle') as string,
          value: t('IUTDefensePage.year') as string,
          color: '#05668D',
        },
      ]}
      showNR
      processImages={[
        { src: '/images/Site-Soutenance-SQL.avif', caption: (t('IUTDefensePage.processGalleryItems') as any[])[0].caption, alt: (t('IUTDefensePage.processGalleryItems') as any[])[0].alt },
      ]}
      finalImages={[
        { src: '/images/Site-Soutenance-back1.avif', caption: (t('IUTDefensePage.finalGalleryItems') as any[])[0].caption, alt: (t('IUTDefensePage.finalGalleryItems') as any[])[0].alt },
        { src: '/images/Site-Soutenance-front.avif', caption: (t('IUTDefensePage.finalGalleryItems') as any[])[1].caption, alt: (t('IUTDefensePage.finalGalleryItems') as any[])[1].alt },
        { src: '/images/Site-Soutenance-back2.avif', caption: (t('IUTDefensePage.finalGalleryItems') as any[])[2].caption, alt: (t('IUTDefensePage.finalGalleryItems') as any[])[2].alt },
      ]}
      actions={[
        { type: 'code', href: 'https://github.com/fluteABec/GestionSoutenance', label: t('IUTDefensePage.ctaCode') as string },
      ]}
    />
  );
}
