"use client";

import { useState } from 'react';
import Link from 'next/link';

interface Product {
    id: number;
    name: string;
    seo_slug: string;
    overall_rating: number;
    price_low: number;
    price_high: number;
    feature_rating_json: Record<string, number>;
    affiliate_link_base: string;
}

interface ComparisonTableProps {
    products: Product[];
}

export default function ComparisonTable({ products: initialProducts }: ComparisonTableProps) {
    const [products, setProducts] = useState(initialProducts);
    const [sortKey, setSortKey] = useState<'rating' | 'price'>('rating');

    const handleSort = (key: 'rating' | 'price') => {
        const sorted = [...products].sort((a, b) => {
            if (key === 'rating') return b.overall_rating - a.overall_rating;
            if (key === 'price') return a.price_low - b.price_low;
            return 0;
        });
        setProducts(sorted);
        setSortKey(key);
    };

    return (
        <div className="overflow-hidden bg-white shadow-sm ring-1 ring-gray-200 rounded-xl">
            <div className="p-5 border-b border-gray-100 bg-surface flex items-center justify-between">
                <h3 className="font-bold text-lg text-secondary">Top Picks</h3>
                <div className="flex gap-2">
                    <span className="text-sm font-medium text-text self-center mr-2">Sort by:</span>
                    <button
                        onClick={() => handleSort('rating')}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${sortKey === 'rating' ? 'bg-secondary text-white shadow-sm' : 'bg-white text-text border border-gray-200 hover:bg-gray-50'}`}
                    >
                        Highest Rated
                    </button>
                    <button
                        onClick={() => handleSort('price')}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${sortKey === 'price' ? 'bg-secondary text-white shadow-sm' : 'bg-white text-text border border-gray-200 hover:bg-gray-50'}`}
                    >
                        Lowest Price
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Product</th>
                            <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Our Score</th>
                            <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Price (Mo)</th>
                            <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 hidden sm:table-cell">Key Features</th>
                            <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product, index) => (
                            <tr key={product.id} className="group hover:bg-blue-50/30 transition-colors">
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        {index === 0 && sortKey === 'rating' && (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                                                Top Pick
                                            </span>
                                        )}
                                        <Link href={`/reviews/${product.seo_slug}`} className="font-bold text-secondary text-lg hover:text-primary transition">
                                            {product.name}
                                        </Link>
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                                            <span className="text-primary font-bold text-lg">{product.overall_rating}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap text-text font-medium">
                                    ${product.price_low} <span className="text-gray-400 font-normal">-</span> ${product.price_high}
                                </td>
                                <td className="px-6 py-5 hidden sm:table-cell">
                                    <div className="flex flex-wrap gap-1">
                                        {product.feature_rating_json && Object.entries(product.feature_rating_json).slice(0, 3).map(([key, rating]) => (
                                            <span key={key} className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs capitalize">
                                                {key.replace('_', ' ')}: {rating}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-right whitespace-nowrap">
                                    <a
                                        href={`http://localhost:5000/api/track-click?product_id=${product.id}`}
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-lg shadow-sm text-white bg-accent hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                        Check Price
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
