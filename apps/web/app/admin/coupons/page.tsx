'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Coupon {
  id: string;
  code: string;
  discount_percentage: number;
}

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');

  const fetchCoupons = async () => {
    const { data } = await supabase.from('coupons').select('*');
    if (data) setCoupons(data as Coupon[]);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCoupons();
  }, []);

  const addCoupon = async () => {
    await supabase.from('coupons').insert({ code, discount_percentage: parseFloat(discount) });
    setCode(''); setDiscount('');
    fetchCoupons();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Coupons</h1>
      <div className="flex gap-4 mb-4">
        <input placeholder="Code" value={code} onChange={e => setCode(e.target.value)} className="p-2 border" />
        <input placeholder="Discount %" value={discount} onChange={e => setDiscount(e.target.value)} className="p-2 border" />
        <button onClick={addCoupon} className="bg-stone-800 text-white p-2 rounded">Add</button>
      </div>
      <table className="w-full border">
        {coupons.map(c => <tr key={c.id} className="border-b"><td className="p-2">{c.code}</td><td className="p-2">{c.discount_percentage}%</td></tr>)}
      </table>
    </div>
  );
}
