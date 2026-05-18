import { supabase } from '@/lib/supabaseClient';
import { Product } from '@/lib/types';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .limit(8);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-stone-900 mb-6">Handmade with Love</h1>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">Discover our collection of unique, handcrafted crochet items for your home and lifestyle.</p>
          <Link href="/products" className="inline-block rounded-full bg-stone-900 px-8 py-3 text-white font-semibold hover:bg-stone-700 transition">
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Featured Products</h2>
        {error ? (
          <div className="text-center p-10 text-red-500">Error loading products: {error.message}</div>
        ) : products?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-stone-500">No featured products yet.</p>
        )}
        <div className="text-center mt-12">
            <Link href="/products" className="text-stone-900 font-semibold border-b-2 border-stone-900 pb-1 hover:border-stone-600">View All Products</Link>
        </div>
      </section>
    </main>
  );
}
