// components/HeroHighlights.tsx
"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { getLatestProductPerCategory } from "@/utils/groupByCategory";
import CategorySelectorModal from "./CategorySelectorModal";


export default function HeroHighlights() {
    const [isCategoryModalOpen, setCategoryModalOpen] = React.useState(false);

    const highlights = getLatestProductPerCategory(products);

    return (
        <section className="relative bg-gray-50 py-10">
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Best Deals for You
                    </h2>
                    <button
                        onClick={() => setCategoryModalOpen(true)}
                        className="text-sm font-medium text-gray-900 hover:text-gray-600"
                    >
                        View More →
                    </button>
                </div>

                {/* Grid of highlights */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {highlights.map(({ category, product }) => (
                        <Link
                            key={product.id}
                            href={`/category/${category}`}
                            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                        >
                            <ProductCard
                                image={product.thumbnail}
                                title={product.title}
                                price={`From ₹${product.price}`}
                                description={product.description}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <CategorySelectorModal isOpen={isCategoryModalOpen} onClose={() => setCategoryModalOpen(false)} />
        </section>
    );
}
