"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Slide {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(slides.length).fill(false));
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Preload images for smoother transitions
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new window.Image();
      img.onload = () => {
        setImagesLoaded(prev => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
      img.src = slide.imageUrl;
    });
  }, [slides]);

  const resetAutoPlay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (autoPlay) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, autoPlayInterval);
    }
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, autoPlay, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex((index + slides.length) % slides.length);
  };

  const prevSlide = () => goToSlide(currentIndex - 1);
  const nextSlide = () => goToSlide(currentIndex + 1);

  return (
    <div
      className="relative w-full overflow-hidden mb-2"
      onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
      onMouseLeave={resetAutoPlay}
    >
      {/* Height controller - matches image dimensions */}
      <Image
        src={slides[currentIndex].imageUrl}
        alt="slide height reference"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={currentIndex === 0}
      />

      {/* Slide stack with fade transition */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Show loading placeholder if image not loaded */}
            {!imagesLoaded[index] && (
              <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                <span className="text-gray-400"></span>
              </div>
            )}
            
            <Image
              src={slide.imageUrl}
              alt={slide.title || `Slide ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-300 ${
                imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
              loading={index <= 2 ? "eager" : "lazy"}
              sizes="100vw"
            />

            {(slide.title || slide.subtitle || slide.buttonText) && (
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                {slide.title && (
                  <h2 className="text-lg md:text-5xl text-white mb-4 drop-shadow bg-primary p-3">
                    {slide.title}
                  </h2>
                )}
                {slide.subtitle && (
                  <p className="text-md text-white md:mb-6 mb-2 drop-shadow max-w-sm md:max-w-4xl w-full">
                    {slide.subtitle}
                  </p>
                )}
                {slide.buttonText && slide.buttonLink && (
                  <a
                    href={slide.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/20 text-white text-3xl w-10 h-10 flex items-center justify-center hover:bg-black/70 transition z-20"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/20 text-white text-3xl w-10 h-10 flex items-center justify-center hover:bg-black/70 transition z-20"
        aria-label="Next Slide"
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 transition border-2 border-white hover:cursor-pointer ${
              index === currentIndex ? "bg-white" : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
