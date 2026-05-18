'use client';
import { useWishlist } from '@/hooks/useWishlist';

export function WishlistButton({ productId }: { productId: string }) {
  const { addToWishlist } = useWishlist();

  return (
    <button 
      onClick={() => addToWishlist(productId)}
      className="text-stone-500 hover:text-red-500 transition"
    >
      ❤ Add to Wishlist
    </button>
  );
}
