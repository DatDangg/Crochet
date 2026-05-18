'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function CustomRequestPage() {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert('Please login');
    
    await supabase.from('custom_orders').insert({ user_id: user.id, description });
    alert('Request submitted!');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Custom Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="w-full p-2 border" />
        <button type="submit" className="bg-stone-800 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
