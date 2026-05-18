'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function WholesalePage() {
  const [formData, setFormData] = useState({ company_name: '', contact_email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from('wholesale_inquiries').insert(formData);
    alert('Inquiry submitted!');
    setFormData({ company_name: '', contact_email: '', message: '' });
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Wholesale Inquiry</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Company Name" value={formData.company_name} onChange={e => setFormData({...formData, company_name: e.target.value})} className="w-full p-2 border" />
        <input placeholder="Contact Email" type="email" value={formData.contact_email} onChange={e => setFormData({...formData, contact_email: e.target.value})} className="w-full p-2 border" />
        <textarea placeholder="Message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-2 border" />
        <button type="submit" className="bg-stone-800 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
