import { supabase } from '@/lib/supabaseClient';
// import { Product } from '@/lib/types'; // Removed
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-stone-200">
        <div className="relative h-96 w-full mb-6 rounded-lg overflow-hidden">
          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-500">No Image</div>
          )}
        </div>
        <h1 className="text-3xl font-bold text-stone-900 mb-2">{product.name}</h1>
        <p className="text-lg text-stone-600 mb-4">{product.category}</p>
        <p className="text-2xl font-semibold text-stone-900 mb-6">${product.price}</p>
        <p className="text-stone-700 leading-relaxed mb-8">{product.description}</p>
        <button className="bg-stone-800 text-stone-50 px-6 py-3 rounded hover:bg-stone-700 transition">
          Add to Cart
        </button>
      </div>
    </main>
  );
}
