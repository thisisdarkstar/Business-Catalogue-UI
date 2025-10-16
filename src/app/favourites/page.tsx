// app/favourites/page.tsx
"use client"

import React from "react";
import { products } from "@/data/products";
import ProductCardMini from "@/components/ProductCardMini"; // or use ProductCardMini
import Link from "next/link";

// Dummy list of favorite product IDs (in a real app, fetch from user data)
const favouriteIds = ["m1", "w2", "b1"];

export default function FavouritesPage() {
  const favourites = products.filter((product) =>
    favouriteIds.includes(product.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Favourites ❤️</h1>

      {favourites.length === 0 ? (
        <p className="text-gray-600">You haven't added any favourites yet.</p>
      ) : (
        <div className="flex gap-6 flex-wrap">
          {favourites.map((product) => (
            <Link
              key={product.id}
              href={`/category/${product.category}/product/${product.id}`}
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

