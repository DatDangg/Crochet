'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true);
    setMessage('');
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Check your email for confirmation!');
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    setMessage('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      router.push('/');
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm border border-stone-200 space-y-6">
        <h1 className="text-3xl font-bold text-center text-stone-900">Login / Sign Up</h1>
        
        {message && (
          <div className={`p-4 rounded text-sm ${message.includes('Check') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {message}
          </div>
        )}
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-stone-900 outline-none" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-stone-900 outline-none" 
          />
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={handleLogin} 
            disabled={loading} 
            className="flex-1 bg-stone-900 text-white p-3 rounded hover:bg-stone-700 transition disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Login'}
          </button>
          <button 
            onClick={handleSignUp} 
            disabled={loading} 
            className="flex-1 bg-stone-600 text-white p-3 rounded hover:bg-stone-500 transition disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Sign Up'}
          </button>
        </div>
      </div>
    </main>
  );
}
