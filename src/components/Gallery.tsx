"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Ceiling Lights Installation" },
  { id: 2, src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Baseboard Replacement" },
  { id: 3, src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Door Hardware Upgrade" },
  { id: 4, src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Bathroom Grout Renewal" },
  { id: 5, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Interior Touch-up Painting" },
  { id: 6, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Wall Mounting Perfection" },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const showNext = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const showPrev = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => showNext(),
    onSwipedRight: () => showPrev(),
    trackMouse: true
  });

  return (
    <section id="gallery" className="py-20 bg-crispWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slateGray mb-4">Our Work Gallery</h2>
          <p className="text-lg text-gray-600">Precision in every detail.</p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <button
              key={img.id}
              onClick={() => openLightbox(index)}
              aria-label={`View larger image of ${img.title}`}
              className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-gray-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-safetyOrange focus-visible:ring-offset-2 w-full text-left block cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slateGray/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <Maximize2 className="text-white w-8 h-8 mb-2" />
                <span className="text-white font-medium text-lg px-4 text-center">{img.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm touch-none"
          onClick={closeLightbox}
          {...handlers}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center text-white z-10">
            <span className="font-medium bg-black/50 px-3 py-1 rounded-full">
              {currentIndex + 1} / {galleryImages.length}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 bg-black/50 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 p-3 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors z-10 hidden sm:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="relative max-w-5xl w-full px-4 sm:px-16 flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].title}
              className="max-h-[80vh] w-auto object-contain rounded-lg select-none"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing
            />
            <p className="text-white text-xl mt-4 font-medium text-center bg-black/50 px-4 py-2 rounded-lg">
              {galleryImages[currentIndex].title}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-4 p-3 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors z-10 hidden sm:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

        </div>
      )}
    </section>
  );
}
