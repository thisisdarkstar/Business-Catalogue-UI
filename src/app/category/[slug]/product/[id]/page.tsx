"use client";
import React from "react";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Heart } from "lucide-react";
import classNames from "classnames";

interface ProductPageProps {
    params: Promise<{ slug: string; id: string }>;
}

export default function ProductDetailsPage({ params }: ProductPageProps) {
    const unwrappedParams = React.use(params); // unwrap the Promise
    const { slug, id } = unwrappedParams;

    const product = products.find(
        (p) => p.id === id && p.category === slug
    );

    if (!product) return notFound();

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 3000 })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isFavourite, setIsFavourite] = useState(false);

    const images = product.images || [
        product.thumbnail
    ];

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-8">
            {/* Image Carousel */}
            <div>
                <div className="overflow-hidden rounded-2xl shadow-md" ref={emblaRef}>
                    <div className="flex">
                        {images.map((img: string, idx: number) => (
                            <div
                                key={idx}
                                className="flex-[0_0_100%] relative aspect-[4/3]"
                            >
                                <img
                                    src={img}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center mt-4 gap-2">
                    {images.map((_: string, idx: number) => (
                        <button
                            key={idx}
                            onClick={() => emblaApi?.scrollTo(idx)}
                            className={classNames(
                                "w-3 h-3 rounded-full transition-all",
                                idx === selectedIndex
                                    ? "bg-blue-600 scale-110"
                                    : "bg-gray-300 hover:bg-gray-400"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                <p className="text-2xl font-semibold text-blue-600">₹{product.price}</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {product.description}
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button
                    onClick={() => setIsFavourite(!isFavourite)}
                    className={classNames(
                        "flex items-center justify-center gap-2 px-6 py-3 border rounded-lg transition-all w-full sm:w-auto",
                        isFavourite
                            ? "bg-red-500 text-white border-red-500"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    )}
                >
                    <Heart
                        className={classNames(
                            "h-5 w-5",
                            isFavourite ? "fill-current text-white" : ""
                        )}
                    />
                    {isFavourite ? "Added to Favourites" : "Add to Favourites"}
                </button>
            </div>
        </div>
    );
}
