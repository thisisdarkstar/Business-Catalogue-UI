'use client';

import React, { useState } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number | string;
  description?: string;
}

export default function ProductCard({ image, title, price, description }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border">
      {/* Fixed-size image wrapper */}
      <div className="w-full min-h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            className="w-full h-full object-cover"
            style={{ minHeight: '12rem' }}
            src={image}
            alt={title}
            onError={() => setImgError(true)}
          />
        ) : (
          // fallback placeholder if image fails
          <div className="text-gray-400 text-sm select-none" style={{ minHeight: '12rem' }}>
            Image not available
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {description && <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">{price}</span>
        </div>
      </div>
    </div>
  );
}
