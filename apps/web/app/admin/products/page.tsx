import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function AdminProductsPage() {
  const { data: products } = await supabase.from('products').select('*');

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-stone-900">Products</h1>
        <Link href="/admin/products/new" className="bg-stone-800 text-stone-50 px-4 py-2 rounded">Add Product</Link>
      </div>
      <table className="w-full bg-white border border-stone-200">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Stock</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-4">{product.name}</td>
              <td className="p-4">${product.price}</td>
              <td className="p-4">{product.stock_quantity}</td>
              <td className="p-4">
                <Link href={`/admin/products/${product.id}/edit`} className="text-blue-600">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
