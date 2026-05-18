'use client';
import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/WishlistContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();
  
  const inWishlist = isProductInWishlist(product.id);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-64 w-full">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-500">No Image</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-stone-800">{product.name}</h3>
        <p className="text-sm text-stone-600 mb-2">{product.category}</p>
        <p className="text-xl font-semibold text-stone-900 mb-4">${product.price}</p>
        <div className="flex gap-2">
            <Link 
            href={`/products/${product.id}`}
            className="flex-1 text-center bg-stone-200 text-stone-800 py-2 rounded hover:bg-stone-300 transition"
            >
            Details
            </Link>
            <button 
                onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id)}
                className={`px-3 py-2 rounded transition ${inWishlist ? 'bg-red-200 text-red-800' : 'bg-stone-200 text-stone-800 hover:bg-stone-300'}`}
            >
                {inWishlist ? '❤️' : '🤍'}
            </button>
            <button 
                onClick={() => addToCart(product)}
                className="bg-stone-800 text-stone-50 px-3 py-2 rounded hover:bg-stone-700 transition"
            >
                Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
}
