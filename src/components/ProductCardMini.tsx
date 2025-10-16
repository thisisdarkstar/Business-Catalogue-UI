'use client';
import React from 'react';

interface ProductCardMiniProps {
  image: string;
  title: string;
  price: string | number;
  description?: string;
}

export default function ProductCardMini({ image, title, price }: ProductCardMiniProps) {
  return (
    <div
      className="inline-block bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-all duration-200"
      style={{
        width: '14rem',
        height: '16rem',
        flexShrink: 0,
      }}
    >
      <div className="w-full h-40 overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt={title} />
      </div>
      <div className="p-2">
        <h2 className="text-sm font-semibold text-black line-clamp-2">{title}</h2>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-base font-bold text-blue-600">{price}</span>
        </div>
      </div>
    </div>
  );
}
