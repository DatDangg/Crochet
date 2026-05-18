'use client';
import { supabase } from '@/lib/supabaseClient';

export const useWishlist = () => {
  const addToWishlist = async (productId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    await supabase.from('wishlists').insert({ user_id: user.id, product_id: productId });
    return true;
  };

  const removeFromWishlist = async (productId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    await supabase.from('wishlists').delete().eq('user_id', user.id).eq('product_id', productId);
    return true;
  };

  return { addToWishlist, removeFromWishlist };
};
