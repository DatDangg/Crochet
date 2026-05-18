'use client';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabaseClient';

export function Navbar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <nav className="border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-stone-900">
          Crochet Shop
        </Link>
        <div className="flex items-center gap-6 text-stone-600">
          <Link href="/products" className="hover:text-stone-900">Products</Link>
          <Link href="/cart" className="hover:text-stone-900">Cart</Link>
          <Link href="/wholesale" className="hover:text-stone-900">Wholesale</Link>
          <Link href="/custom-request" className="hover:text-stone-900">Custom Request</Link>
          <Link href="/wishlist" className="hover:text-stone-900">Wishlist</Link>
          {user ? (
            <button onClick={handleLogout} className="rounded-full bg-stone-900 px-4 py-2 text-white hover:bg-stone-700">Logout</button>
          ) : (
            <Link href="/auth" className="rounded-full bg-stone-900 px-4 py-2 text-white hover:bg-stone-700">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
