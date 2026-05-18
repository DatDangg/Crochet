'use client';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { supabase } from '@/lib/supabaseClient';

export default function CheckoutPage() {
  const { cart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal * (1 - discount / 100);

  const applyCoupon = async () => {
    const { data } = await supabase.from('coupons').select('discount_percentage').eq('code', couponCode).single();
    if (data) setDiscount(data.discount_percentage);
    else alert('Invalid coupon');
  };

  const handleCheckout = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert('Please login first');

    const { error } = await supabase.from('orders').insert({
      user_id: user.id,
      total_amount: total
    });

    if (error) {
      alert('Error placing order: ' + error.message);
    } else {
      alert('Order placed successfully!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="space-y-4 mb-8">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between border-b p-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        <input placeholder="Coupon Code" value={couponCode} onChange={e => setCouponCode(e.target.value)} className="p-2 border" />
        <button onClick={applyCoupon} className="bg-stone-200 p-2">Apply</button>
      </div>
      <p className="text-xl font-bold mb-6">Total: ${total.toFixed(2)}</p>
      <button onClick={handleCheckout} className="bg-stone-800 text-white p-3 rounded">Place Order</button>
    </div>
  );
}
