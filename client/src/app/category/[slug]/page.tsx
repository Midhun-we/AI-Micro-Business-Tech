import ComparisonTable from '@/components/ComparisonTable';
import { getProductsByCategory } from '@/lib/mockData';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const products = getProductsByCategory(params.slug);
    const categoryName = params.slug.replace(/-/g, ' ').toUpperCase();

    if (products.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Category Not Found</h1>
                <p className="text-gray-600">Sorry, we don't have products for this category yet.</p>
            </div>
        );
    }

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
