import ComparisonTable from '@/components/ComparisonTable';

async function getProducts(categorySlug: string) {
    // In a real build, use an environment variable for the API URL
    const res = await fetch(`http://localhost:5000/api/products/${categorySlug}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const products = await getProducts(params.slug);
    const categoryName = params.slug.replace('-', ' ').toUpperCase();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">{categoryName} Comparison</h1>
            <p className="text-gray-600 mb-8 max-w-2xl">
                Compare the top rated {categoryName} tools. We have analyzed features, pricing, and support to help you choose the best option for your business.
            </p>

            <ComparisonTable products={products} />
        </div>
    );
}
