import { useTranslation } from '../contexts/LanguageContext';
import { ProjectPageLayout } from './ProjectPageLayout';

interface BandBusinessPageProps {
  onBack: () => void;
}

export function BandBusinessPage({ onBack }: BandBusinessPageProps) {
  const { t } = useTranslation();

  return (
    <ProjectPageLayout
      onBack={onBack}
      ns="BandBusinessPage"
      accent={['#05668D', '#679436']}
      heroImage="/images/Site-BAB-hero.avif"
      infoCards={[
        {
          label: t('BandBusinessPage.techTitle') as string,
          value: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Stripe', 'PHPMailer', 'MySQL', 'Git'],
          color: '#05668D',
        },
        {
          label: t('BandBusinessPage.roleTitle') as string,
          value: t('BandBusinessPage.role') as string,
          color: '#679436',
        },
        {
          label: t('BandBusinessPage.yearTitle') as string,
          value: t('BandBusinessPage.year') as string,
          color: '#05668D',
        },
      ]}
      showNR={true}
      processImages={[
        { src: '/images/Site-BAB-admin.avif', caption: (t('BandBusinessPage.processGalleryItems') as any[])[0].caption, alt: (t('BandBusinessPage.processGalleryItems') as any[])[0].alt },
      ]}
      finalImages={[
        { src: '/images/Site-BAB-facture.avif', caption: (t('BandBusinessPage.finalGalleryItems') as any[])[0].caption, alt: (t('BandBusinessPage.finalGalleryItems') as any[])[0].alt },
      ]}
      actions={[
        { type: 'site', href: 'https://bandbusiness.powehi.eu/reservation/', label: t('BandBusinessPage.ctaSite') as string },
      ]}
    />
  );
}
