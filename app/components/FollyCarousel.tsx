"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export interface FollyCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function FollyCarousel({ images }: FollyCarouselProps) {
  const width = 1249;
  const height = 1740;

  return (
    <div className="mx-10 md:mx-24">
      {/* Main Content */}
      <Carousel
        responsive={responsive}
        draggable
        swipeable
        arrows
        customTransition="transform 500ms ease-in-out"
        className="-mx-10 md:-mx-24"
        infinite
        focusOnSelect={true}
      >
        {images.map((image, index) => (
          <div key={index} className={`md:m-6 m-2 transition-all duration-500`}>
            <Image
              alt={image.alt || "Defa Image"}
              src={image.src}
              width={width}
              height={height}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
