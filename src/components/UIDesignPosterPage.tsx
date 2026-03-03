import { useTranslation } from '../contexts/LanguageContext';
import { ProjectPageLayout } from './ProjectPageLayout';

interface UIDesignPosterPageProps {
  onBack: () => void;
}

export function UIDesignPosterPage({ onBack }: UIDesignPosterPageProps) {
  const { t } = useTranslation();

  return (
    <ProjectPageLayout
      onBack={onBack}
      ns="UIDesignPosterPage"
      accent={['#679436', '#05668D']}
      heroImage="/PochetteAlbum-NathanCourcelle.avif"
      infoCards={[
        {
          label: t('UIDesignPosterPage.toolsTitle') as string,
          value: ['Affinity', 'Canva (Veille)', 'LinkedIn'],
          color: '#679436',
        },
        {
          label: t('UIDesignPosterPage.contextTitle') as string,
          value: t('UIDesignPosterPage.context') as string,
          color: '#05668D',
        },
        {
          label: t('UIDesignPosterPage.objectiveTitle') as string,
          value: t('UIDesignPosterPage.objective') as string,
          color: '#679436',
        },
      ]}
      showNR={false}
      processImages={[
        { src: '/images/Page-Pochette-Affinity.avif', caption: (t('UIDesignPosterPage.processGalleryItems') as any[])[0].caption, alt: (t('UIDesignPosterPage.processGalleryItems') as any[])[0].alt },
      ]}
      finalImages={[
        { src: '/PochetteAlbum-NathanCourcelle.avif', caption: (t('UIDesignPosterPage.finalGalleryItems') as any[])[0].caption, alt: (t('UIDesignPosterPage.finalGalleryItems') as any[])[0].alt },
      ]}
      actions={[
        { type: 'post', href: 'https://www.linkedin.com/posts/nathan-courcelle_stagiaire-d%C3%A9veloppement-web-disponible-activity-7396274349088927745-roqL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFXut_0Bc2aejZ9oYETLUmwP9FhPe_4y2u4', label: t('UIDesignPosterPage.ctaPost') as string },
        { type: 'download', href: '/PochetteAlbum-NathanCourcelle.avif', label: t('UIDesignPosterPage.ctaDownload') as string },
      ]}
    />
  );
}
