"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface CategorySelectorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const categories = [
    {
        label: "Men's",
        slug: "mens",
        emoji: "🧔",
    },
    {
        label: "Women's",
        slug: "womens",
        emoji: "👩",
    },
    {
        label: "Girls",
        slug: "girls",
        emoji: "👧",
    },
    {
        label: "Boys",
        slug: "boys",
        emoji: "👦",
    },
];

export default function CategorySelectorModal({
    isOpen,
    onClose,
}: CategorySelectorModalProps) {
    const router = useRouter();

    const handleCategoryClick = (slug: string) => {
        onClose();
        router.push(`/category/${slug}`);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full p-10 border border-gray-200">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Choose a Category
                </h2>

                <div className="grid grid-cols-2 gap-6">
                    {categories.map((cat) => (
                        <button
                            key={cat.slug}
                            onClick={() => handleCategoryClick(cat.slug)}
                            className="flex flex-col items-center justify-center h-44 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-200 focus:outline-none"
                        >
                            <div className="text-5xl mb-3">{cat.emoji}</div>
                            <span className="text-xl font-semibold text-gray-700">
                                {cat.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                    aria-label="Close"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}
