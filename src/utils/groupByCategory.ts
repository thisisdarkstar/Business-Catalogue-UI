// utils/groupByCategory.ts

import { Product } from "../data/products";

export function getLatestProductPerCategory(products: Product[]) {
    const grouped = products.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, Product[]>);

    return Object.entries(grouped).map(([category, items]) => {
        const sorted = items.sort(
            (a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        return {
            category,
            product: sorted[0],
        };
    });
}
