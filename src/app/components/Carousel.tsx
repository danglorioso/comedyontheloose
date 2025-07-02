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
      className="relative w-full h-[500px] overflow-hidden"
      onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
      onMouseLeave={resetAutoPlay}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="w-full h-full bg-black/40 flex flex-col items-center justify-center text-center px-4">
            {slide.title && (
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow">
                {slide.title}
              </h2>
            )}
            {slide.subtitle && (
              <p className="text-lg md:text-xl text-white mb-6 drop-shadow">
                {slide.subtitle}
              </p>
            )}
            {slide.buttonText && slide.buttonLink && (
              <a
                href={slide.buttonLink}
                className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
              >
                {slide.buttonText}
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition z-20"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition z-20"
        aria-label="Next Slide"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-yellow-400" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
