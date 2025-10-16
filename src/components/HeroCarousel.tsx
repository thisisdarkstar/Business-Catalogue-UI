"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export type Banner = {
  id: string;
  image: string; // public path e.g. /banners/sale1.jpg
  alt: string;
  href?: string;
  bg?: string; // optional wrapper background
};

const defaultBanners: Banner[] = [
  {
    id: "1",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/d1743320c28e67ba.jpg?q=60",
    alt: "Mega Deals",
    href: "/",
  },
  {
    id: "2",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/56422e6e9bd5a22b.jpg?q=60",
    alt: "Top Appliances",
    href: "/",
  },
  {
    id: "3",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/9501f8bbd62ad1f4.jpg?q=60",
    alt: "Trending Fashion",
    href: "/",
  },
];

export default function HeroCarousel({
  banners = defaultBanners,
  options,
  autoplayDelay = 3000,
}: {
  banners?: Banner[];
  options?: any;
  autoplayDelay?: number;
}): React.JSX.Element {
  const autoplay = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, ...(options || {}) },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollTo = (i: number) => emblaApi?.scrollTo(i);
  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  return (
    <section className="relative bg-white w-full">
      <div className="w-full">
        <div className="relative overflow-hidden">
          {/* Carousel viewport */}
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex touch-pan-y touch-pinch-zoom">
              {banners.map((b) => (
                <div key={b.id} className="embla__slide relative min-w-[100vw] shrink-0 grow-0 basis-[100vw]">
                  <Link href={b.href || "#"} className="block" aria-label={b.alt}>
                    <div className="relative w-full bg-gray-50 h-[27vh] sm:h-[30vh] md:h-[25vh] lg:h-[27vh]">
                      <Image
                        src={b.image}
                        alt={b.alt}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 1024px"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 backdrop-blur hover:bg-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 backdrop-blur hover:bg-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={
                  "h-2 w-2 rounded-full transition-all " +
                  (i === selectedIndex ? "bg-gray-900 w-4" : "bg-gray-300 hover:bg-gray-400")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
