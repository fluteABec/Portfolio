import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ExternalLink, Github, Download, X, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

/* ─── types ─── */
interface GalleryImage {
  src: string;
  caption: string;
  alt: string;
}

interface InfoCard {
  label: string;          // translated title
  value: string | string[]; // text or tech tags
  color: string;          // accent colour
}

interface ActionButton {
  type: 'site' | 'code' | 'post' | 'download';
  href: string;
  label: string;
}

export interface ProjectPageProps {
  onBack: () => void;
  /** Translation key prefix, e.g. "CabanesYourtesPage" */
  ns: string;
  /** Gradient accent colours [from, to] */
  accent: [string, string];
  /** Hero image path */
  heroImage: string;
  /** Info cards (tech, role, year…) */
  infoCards: InfoCard[];
  /** Show "Numérique Responsable" section (web projects only) */
  showNR?: boolean;
  /** Process gallery images */
  processImages: GalleryImage[];
  /** Final gallery images */
  finalImages: GalleryImage[];
  /** CTA buttons */
  actions: ActionButton[];
}

/* ─── Lightbox ─── */
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const img = images[currentIndex];

  return createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
      }}
      onClick={onClose}
    >
      {/* Close button — always visible */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          zIndex: 10000,
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'white',
        }}
      >
        <X style={{ width: '1.5rem', height: '1.5rem' }} />
      </button>

      {/* Navigation arrows — always shown when > 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            style={{
              position: 'absolute',
              left: '2rem',
              zIndex: 10000,
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            <ChevronLeft style={{ width: '1.75rem', height: '1.75rem' }} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            style={{
              position: 'absolute',
              right: '2rem',
              zIndex: 10000,
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            <ChevronRight style={{ width: '1.75rem', height: '1.75rem' }} />
          </button>
        </>
      )}

      {/* Image container — centered, not full screen */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '65vw',
          maxHeight: '75vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <img
          src={img.src}
          alt={img.alt}
          style={{
            maxWidth: '100%',
            maxHeight: '60vh',
            objectFit: 'contain',
            borderRadius: '1rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        />
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', textAlign: 'center' }}>
          {img.caption}
        </p>
        {images.length > 1 && (
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>
    </div>,
    document.body,
  );
}

/* ─── Gallery grid ─── */
function GalleryGrid({
  images,
  onImageClick,
  accent,
}: {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  accent: string;
}) {
  return (
    <div className={`grid ${images.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
      {images.map((item, index) => (
        <div key={index}>
          <p className="text-[#A0A0A0] text-sm font-medium mb-3">{item.caption}</p>
          <div
            className="glass rounded-3xl overflow-hidden h-64 cursor-pointer group relative"
            onClick={() => onImageClick(index)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm px-4 py-2 rounded-full"
                style={{ backgroundColor: accent + '80' }}
              >
                Agrandir
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Layout ─── */
export function ProjectPageLayout({
  onBack,
  ns,
  accent,
  heroImage,
  infoCards,
  showNR = false,
  processImages,
  finalImages,
  actions,
}: ProjectPageProps) {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number } | null>(null);

  const openLightbox = (images: GalleryImage[], index: number) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null,
    );
  const nextImage = () =>
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null,
    );

  const [from, to] = accent;

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative overflow-hidden">
      {/* Background decorative shapes */}
      <div
        className="absolute top-40 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: `linear-gradient(225deg, ${to} 0%, ${from} 100%)` }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#F2F2F2] mb-12 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t(`${ns}.backButton`)}</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-5xl md:text-6xl mb-6 bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(to right, ${to}, ${from})` }}
          >
            {t(`${ns}.title`)}
          </h1>
          <p className="text-xl text-[#A0A0A0]">{t(`${ns}.subtitle`)}</p>
        </div>

        {/* Hero Image + description */}
        <div className="mb-12">
          <div className="glass rounded-3xl overflow-hidden">
            <img
              src={heroImage}
              alt={t(`${ns}.heroImageAlt`) as string}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <p className="text-[#A0A0A0] text-sm mt-4 text-center italic">
            {t(`${ns}.heroDescription`)}
          </p>
        </div>

        {/* Info Cards (Tech / Role / Year…) */}
        <div className={`grid md:grid-cols-${infoCards.length} gap-6 mb-12`}>
          {infoCards.map((card, i) => (
            <div key={i} className="glass rounded-3xl p-6">
              <h3 className="text-lg mb-2" style={{ color: card.color }}>
                {card.label}
              </h3>
              {Array.isArray(card.value) ? (
                <div className="flex flex-wrap gap-2">
                  {card.value.map((v, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-white/5 text-sm">
                      {v}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-[#A0A0A0]">{card.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Presentation + NR (side by side for web projects) */}
        {showNR ? (
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {/* About – 3 cols */}
            <div className="md:col-span-3 glass rounded-3xl p-8">
              <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t(`${ns}.aboutTitle`)}</h2>
              <div className="space-y-4 text-[#A0A0A0]">
                {(t(`${ns}.aboutParagraphs`) as string[]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            {/* NR – 2 cols */}
            <div className="md:col-span-2 glass rounded-3xl p-8 border border-[#679436]/20">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-6 h-6 text-[#679436]" />
                <h2 className="text-2xl text-[#679436]">{t(`${ns}.nrTitle`)}</h2>
              </div>
              <ul className="space-y-3 text-[#A0A0A0]">
                {(t(`${ns}.nrItems`) as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#679436] mt-1">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="glass rounded-3xl p-8 mb-12">
            <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t(`${ns}.aboutTitle`)}</h2>
            <div className="space-y-4 text-[#A0A0A0]">
              {(t(`${ns}.aboutParagraphs`) as string[]).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        )}

        {/* Process Gallery */}
        {processImages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t(`${ns}.processGalleryTitle`)}</h2>
            <GalleryGrid
              images={processImages}
              onImageClick={(i) => openLightbox(processImages, i)}
              accent={from}
            />
          </div>
        )}

        {/* Features */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t(`${ns}.featuresTitle`)}</h2>
          <ul className="space-y-3 text-[#A0A0A0]">
            {(t(`${ns}.features`) as string[]).map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: from }} className="mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Final Gallery */}
        {finalImages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-[#F2F2F2]">{t(`${ns}.finalGalleryTitle`)}</h2>
            <GalleryGrid
              images={finalImages}
              onImageClick={(i) => openLightbox(finalImages, i)}
              accent={from}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {actions.map((action, i) => {
            if (action.type === 'site') {
              return (
                <a
                  key={i}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full text-white transition-all duration-200 flex items-center gap-2 hover:brightness-110"
                  style={{ background: `linear-gradient(to right, ${from}, ${to})` }}
                >
                  <ExternalLink className="w-5 h-5" />
                  {action.label}
                </a>
              );
            }
            if (action.type === 'code') {
              return (
                <a
                  key={i}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full glass-strong hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  {action.label}
                </a>
              );
            }
            if (action.type === 'post') {
              return (
                <a
                  key={i}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full text-white transition-all duration-200 flex items-center gap-2 hover:brightness-110"
                  style={{ background: `linear-gradient(to right, ${from}, ${to})` }}
                >
                  <ExternalLink className="w-5 h-5" />
                  {action.label}
                </a>
              );
            }
            if (action.type === 'download') {
              return (
                <a
                  key={i}
                  href={action.href}
                  download
                  className="px-8 py-4 rounded-full glass-strong hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {action.label}
                </a>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
