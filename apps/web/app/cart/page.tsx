'use client';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-stone-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-stone-600">${item.price} x {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
              </div>
            ))}
            <div className="pt-6">
              <Link href="/checkout" className="bg-stone-900 text-white px-6 py-3 rounded">Proceed to Checkout</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
