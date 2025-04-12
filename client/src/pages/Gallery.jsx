import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Lightbox } from "../components/Lightbox";
import { galleryImages } from "../utils/GalleryImages";
import { useTranslation } from "react-i18next";

export const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const goPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-32">
        <h1 className=" font-serif text-2xl italic tracking-wide mb-10 text-center">
          {t("galleryTitle")}
        </h1>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              onClick={() => openLightbox(index)}
              className="w-full mb-4 rounded-lg break-inside-avoid cursor-pointer hover:scale-[1.01] transition-transform duration-300"
              alt={`gallery-${index}`}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </div>
  );
};
