"use client";

import React, { useState, useEffect, useRef } from "react";

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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      {/* Height controller */}
      <img
        src={slides[currentIndex].imageUrl}
        alt="slide height reference"
        className="w-full h-auto block"
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
            <img
              src={slide.imageUrl}
              alt={slide.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {(slide.title || slide.subtitle || slide.buttonText) && (
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                {slide.title && (
                  <h2 className="text-2xl md:text-5xl text-white mb-4 drop-shadow bg-[#3DBC27] p-3">
                    {slide.title}
                  </h2>
                )}
                {slide.subtitle && (
                  <p className="text-xl text-white mb-6 drop-shadow">
                    {slide.subtitle}
                  </p>
                )}
                {slide.buttonText && slide.buttonLink && (
                  <a
                    href={slide.buttonLink}
                    target="_blank" // Open in new tab
                    className="px-6 py-3 bg-[#3DBC27] hover:bg-[#32A822] text-white font-semibold transition-all duration-300 transform hover:scale-105"
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
