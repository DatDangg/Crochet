import { supabase } from '@/lib/supabaseClient';
import { Product } from '@/lib/types';
import { ProductCard } from '@/components/ProductCard';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const { data: products, error } = await supabase.from('products').select('*');

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-stone-900 mb-12 text-center">All Products</h1>
        {error ? (
          <p className="text-center text-red-500">Error loading products.</p>
        ) : products?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-stone-500">No products found.</p>
        )}
      </div>
    </main>
  );
}
