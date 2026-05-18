'use client';
import { supabase } from '@/lib/supabaseClient';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/lib/types';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';

interface WishlistItem {
  products: Product[] | Product;
}

export default function WishlistPage() {
  const { user, loading } = useAuth();
  const [wishlist, setWishlist] = useState<WishlistItem[] | null>(null);

  useEffect(() => {
    async function fetchWishlist() {
      if (!user) return;
      const { data } = await supabase
        .from('wishlists')
        .select('products(*)')
        .eq('user_id', user.id);
      setWishlist(data as WishlistItem[]);
    }
    fetchWishlist();
  }, [user]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!user) {
    return <div className="p-8 text-center">Please login to view your wishlist.</div>;
  }

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
        {wishlist && wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => {
              const product = Array.isArray(item.products) ? item.products[0] : item.products;
              return product ? (
                <ProductCard key={product.id} product={product} />
              ) : null;
            })}
          </div>
        ) : (
          <p className="text-stone-600">Your wishlist is empty.</p>
        )}
      </div>
    </main>
  );
}
