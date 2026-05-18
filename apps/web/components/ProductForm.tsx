'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Product } from '@/lib/types';
import { useRouter } from 'next/navigation';

export default function ProductForm({ product }: { product?: Product }) {
  const router = useRouter();
  const [formData, setFormData] = useState<Omit<Product, 'id' | 'created_at' | 'updated_at'>>(
    product || { name: '', price: 0, stock_quantity: 0, description: '', image_url: null, category: null }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
      await supabase.from('products').update(formData).eq('id', product.id);
    } else {
      await supabase.from('products').insert(formData);
    }
    router.push('/admin/products');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-2 border" />
      <input type="number" placeholder="Price" value={formData.price} onChange={e => setFormData({...formData, price: parseFloat(e.target.value)})} className="w-full p-2 border" />
      <input type="number" placeholder="Stock" value={formData.stock_quantity} onChange={e => setFormData({...formData, stock_quantity: parseInt(e.target.value)})} className="w-full p-2 border" />
      <textarea placeholder="Description" value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-2 border" />
      <button type="submit" className="bg-stone-800 text-stone-50 px-4 py-2 rounded">Save</button>
    </form>
  );
}
