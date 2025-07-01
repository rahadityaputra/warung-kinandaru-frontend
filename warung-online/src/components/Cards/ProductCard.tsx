import Product from "@/types/Product";
import React from "react";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from "next/image";

type Props = {
  product: Product,
  onOpenAddToCartModal: (product: Product) => void
}

const ProductCard = ({ product, onOpenAddToCartModal }: Props) => {
  return (
    <div
      className="bg-white rounded-sm shadow-sm p-0 flex flex-col items-center justify-between  transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
    >

      <div className="w-full h-40 flex-shrink-0 relative overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="w-full px-4 flex flex-col"> {/* Ditambahkan padding vertikal (py-2) dan flex-col justify-between */}
        <div> {/* Wrapper untuk nama dan harga */}
          <h2 className="text-base font-semibold text-gray-800 leading-snug line-clamp-2"> {/* font-semibold, leading-snug */}
            {product.name}
          </h2>
          <p className="font-extrabold text-md text-green-700"> {/* Warna harga lebih menonjol */}
            Rp. {product.currentPrice} {/* Format harga ke IDR dengan toLocaleString */}
          </p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500"> {/* Flex untuk stok dan kategori */}
          <p>Stok: <span className="font-medium text-gray-700">{product.stock}</span></p> {/* Stock lebih jelas */}
        </div>
      </div>

      <div className="w-full">
        <button
          onClick={() => onOpenAddToCartModal(product)}
          className="w-full bg-green-400 text-white px-3 py-1 rounded-b-md text-base font-medium flex items-center justify-center gap-2 hover:bg-green-700 active:bg-green-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 cursor-pointer"
        >

          + Keranjang
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
