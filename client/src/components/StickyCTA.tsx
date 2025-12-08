"use client";

import { useEffect, useState } from 'react';

export default function StickyCTA({ link, price }: { link: string; price: string }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50 animate-slide-up">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="hidden sm:block">
                    <p className="text-sm text-gray-500">Starting at</p>
                    <p className="font-bold text-lg text-gray-900">{price}</p>
                </div>
                <a
                    href={link}
                    target="_blank"
                    className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition text-center shadow-lg"
                >
                    Check Price & Get Trial
                </a>
            </div>
        </div>
    );
}
