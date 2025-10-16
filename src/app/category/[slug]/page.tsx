// app/category/[slug]/page.tsx
"use client"
import React from "react";
import { products } from "@/data/products";
import Link from "next/link";
import ProductCardMini from "@/components/ProductCardMini";


interface CategoryPageProps {
    params: {
        slug: string;
    };
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    // const { slug } = params;
    const unwrappedParams = React.use(params); // unwrap the Promise

    const slug = unwrappedParams.slug;

    const filtered = products.filter(
        (product) => product.category.toLowerCase() === slug.toLowerCase()
    );

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold capitalize mb-6">
                Category: {slug}
            </h1>

            {filtered.length === 0 ? (
                <p>No products found in this category.</p>
            ) : (
                <div className="flex flex-wrap gap-6">
                    {filtered.map((product) => (
                        <Link
                            key={product.id}
                            href={`/category/${slug}/product/${product.id}`}
                            className="flex flex-wrap gap-6"
                        ><ProductCardMini
                                key={product.id}
                                image={product.thumbnail}
                                title={product.title}
                                price={`₹${product.price}`}
                            />
                        </Link>

                    ))}
                </div>
            )}
        </div>
    );
}
