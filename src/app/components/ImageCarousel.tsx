"use client";

import React from 'react'
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'

export const CarouselWithCaptionsExample = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="block w-full aspect-video object-cover" src="/banner/banner1.png" alt="slide 1" />
          <CCarouselCaption className="hidden md:block text-white bg-black bg-opacity-50 p-4 rounded">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="block w-full aspect-video object-cover" src="/banner/banner2.png" alt="slide 2" />
          <CCarouselCaption className="hidden md:block text-white bg-black bg-opacity-50 p-4 rounded">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </CCarouselCaption>
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="block w-full aspect-video object-cover" src="/banner/banner3.png" alt="slide 3" />
          <CCarouselCaption className="hidden md:block text-white bg-black bg-opacity-50 p-4 rounded">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  )
}

export default CarouselWithCaptionsExample;
