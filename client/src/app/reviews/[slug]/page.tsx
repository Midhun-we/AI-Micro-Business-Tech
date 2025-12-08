
import StickyCTA from '@/components/StickyCTA';
import Script from 'next/script';


async function getProduct(slug: string) {
    // Static content generation requires data fetching during build or run
    const res = await fetch(`http://localhost:5000/api/products/detail/${slug}`, { cache: 'no-store' });
    if (!res.ok) {
        return null;
    }
    return res.json();
}

export default async function ReviewPage({ params }: { params: { slug: string } }) {
    const product = await getProduct(params.slug);

    if (!product) {
        return <div className="text-center py-20">Product not found</div>;
    }

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.overall_rating,
            "bestRating": "5",
            "ratingCount": "10"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": product.price_low,
            "url": `http://localhost:3000/reviews/${product.seo_slug}`
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Script
                id="product-json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <div className="bg-gray-50 border-b border-gray-200 py-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name} Review</h1>
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <span className="text-3xl font-bold text-primary">{product.overall_rating}</span>
                        <div className="text-yellow-400 text-2xl">★★★★★</div>
                    </div>
                    <a
                        href={`http://localhost:5000/api/track-click?product_id=${product.id}`}
                        target="_blank"
                        className="inline-block px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-blue-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Visit Official Website
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-12 grid gap-12">

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                        <h3 className="text-lg font-bold text-green-800 mb-4">Pros</h3>
                        <ul className="space-y-2">
                            {product.pros_json?.map((pro: string, i: number) => (
                                <li key={i} className="flex gap-2 text-green-900">
                                    <span>✓</span> {pro}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h3 className="text-lg font-bold text-red-800 mb-4">Cons</h3>
                        <ul className="space-y-2">
                            {product.cons_json?.map((con: string, i: number) => (
                                <li key={i} className="flex gap-2 text-red-900">
                                    <span>✗</span> {con}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Deep Dive Review Content */}
                <div className="prose prose-lg max-w-none">
                    {/* In a real app, render Markdown here safely */}
                    <div dangerouslySetInnerHTML={{ __html: product.review_text_markdown?.replace(/\n/g, '<br/>') || '' }} />
                </div>

                {/* Feature Ratings */}
                <div className="bg-gray-50 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6">Feature Breakdown</h2>
                    <div className="grid gap-4">
                        {product.feature_rating_json && Object.entries(product.feature_rating_json).map(([key, rating]: [string, any]) => (
                            <div key={key} className="flex items-center gap-4">
                                <span className="w-32 capitalize font-medium text-gray-700">{key.replace('_', ' ')}</span>
                                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary"
                                        style={{ width: `${(Number(rating) / 5) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="font-bold text-gray-900">{rating}/5</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <StickyCTA
                link={`http://localhost:5000/api/track-click?product_id=${product.id}`}
                price={`$${product.price_low}/mo`}
            />
        </div>
    );
}
