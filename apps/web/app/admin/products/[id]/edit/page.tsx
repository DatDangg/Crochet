import { supabase } from '@/lib/supabaseClient';
import ProductForm from '@/components/ProductForm';
import { notFound } from 'next/navigation';

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const { data: product } = await supabase.from('products').select('*').eq('id', params.id).single();

  if (!product) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <ProductForm product={product} />
    </div>
  );
}
