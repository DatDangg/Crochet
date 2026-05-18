'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useAuth } from './useAuth';
import { useToast } from '@/components/Toast';

interface WishlistContextType {
  wishlistIds: string[];
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  isProductInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  useEffect(() => {
    async function fetchWishlist() {
      if (!user) {
        setWishlistIds([]);
        return;
      }
      const { data } = await supabase
        .from('wishlists')
        .select('product_id')
        .eq('user_id', user.id);
      
      if (data) {
        setWishlistIds(data.map(item => item.product_id));
      }
    }
    fetchWishlist();
  }, [user]);

  const addToWishlist = async (productId: string) => {
    if (!user) {
        showToast("Please login to add to wishlist.", "error");
        return;
    }
    
    const { error } = await supabase
        .from('wishlists')
        .insert({ user_id: user.id, product_id: productId });
    
    if (error) {
        showToast("Failed to add to wishlist.", "error");
    } else {
        setWishlistIds(prev => [...prev, productId]);
        showToast("Added to wishlist!", "success");
    }
  };

  const removeFromWishlist = async (productId: string) => {
    if (!user) return;
    
    const { error } = await supabase
        .from('wishlists')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);
    
    if (error) {
        showToast("Failed to remove from wishlist.", "error");
    } else {
        setWishlistIds(prev => prev.filter(id => id !== productId));
        showToast("Removed from wishlist!", "success");
    }
  };

  const isProductInWishlist = (productId: string) => wishlistIds.includes(productId);

  return (
    <WishlistContext.Provider value={{ wishlistIds, addToWishlist, removeFromWishlist, isProductInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
};
