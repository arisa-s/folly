"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface FollyCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  maxHeight?: number | string;
}

const MOBILE_BREAKPOINT = 768;
const DESKTOP_SLIDES = 2.35; // 2 full cards + partial third
const MOBILE_SLIDES = 1.35; // 1 full card + partial second

export default function FollyCarousel({
  images,
  maxHeight,
}: FollyCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [slidesPerView, setSlidesPerView] = useState(DESKTOP_SLIDES);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [mounted, setMounted] = useState(false);

  console.log({ canScrollPrev });

  const resolvedMaxHeight =
    typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight;

  const slideBasis = useMemo(
    () => `${(1 / slidesPerView) * 100}%`,
    [slidesPerView]
  );

  const updateSlidesPerView = useCallback(() => {
    if (typeof window === "undefined") return;
    setSlidesPerView(
      window.innerWidth < MOBILE_BREAKPOINT ? MOBILE_SLIDES : DESKTOP_SLIDES
    );
  }, []);

  const updateArrowState = useCallback(() => {
    const node = trackRef.current;
    if (!node) return;
    const maxScrollLeft = node.scrollWidth - node.clientWidth;
    const prevValue = maxScrollLeft > 0 && node.scrollLeft > 8;
    const nextValue = maxScrollLeft > 0 && node.scrollLeft < maxScrollLeft - 8;
    console.log("updateArrowState", {
      scrollLeft: node.scrollLeft,
      maxScrollLeft,
      scrollWidth: node.scrollWidth,
      clientWidth: node.clientWidth,
      prevValue,
      nextValue,
    });
    setCanScrollPrev(prevValue);
    setCanScrollNext(nextValue);
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [updateSlidesPerView]);

  useEffect(() => {
    setMounted(true);
    const node = trackRef.current;
    if (!node) return;
    const handleScroll = () => updateArrowState();
    updateArrowState();
    node.addEventListener("scroll", handleScroll, { passive: true });
    return () => node.removeEventListener("scroll", handleScroll);
  }, [updateArrowState, slidesPerView, images.length]);

  const scrollByOneSlide = useCallback(
    (direction: "prev" | "next") => {
      const node = trackRef.current;
      if (!node) return;
      const scrollAmount =
        (node.clientWidth / slidesPerView) * (direction === "next" ? 1 : -1);
      node.scrollBy({ left: scrollAmount, behavior: "smooth" });
    },
    [slidesPerView]
  );

  if (!images?.length) {
    return null;
  }

  return (
    <div className="relative w-full" style={{ maxHeight: resolvedMaxHeight }}>
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-8"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          maxHeight: resolvedMaxHeight,
        }}
      >
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="snap-start shrink-0 overflow-hidden bg-neutral-200"
            style={{
              flexBasis: slideBasis,
              maxHeight: resolvedMaxHeight,
            }}
          >
            <div
              className="relative aspect-3/4 w-full"
              style={{ maxHeight: resolvedMaxHeight }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 80vw, 30vw"
                className="h-full w-full object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {mounted && (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center px-2 md:px-6">
          {canScrollPrev ? (
            <button
              type="button"
              aria-label="Previous photo"
              disabled={!canScrollPrev}
              onClick={() => scrollByOneSlide("prev")}
              className="pointer-events-auto cursor-pointer inline-flex h-10 w-10 items-center justify-center text-white transition md:h-12 md:w-12"
            >
              <span aria-hidden>⟵</span>
            </button>
          ) : null}
          {canScrollNext ? (
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => scrollByOneSlide("next")}
              disabled={!canScrollNext}
              className="pointer-events-auto cursor-pointer inline-flex h-10 w-10 items-center justify-center text-white transition disabled:opacity-30 md:h-12 md:w-12 ml-auto"
            >
              <span aria-hidden>⟶</span>
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
