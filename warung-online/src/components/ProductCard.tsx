import { ShoppingCartIcon } from "lucide-react";
import Product from "../types/Product";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
  product: Product,
  onOpenAddToCartModal: (product: Product) => void
}

const ProductCard = ({ product, onOpenAddToCartModal }: Props) => {
  return (
    <div
      className="bg-white rounded-md shadow-md p-0 flex flex-col items-center justify-between h-full transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
    >

      <div className="w-full h-40 flex-shrink-0 relative overflow-hidden"> {/* Ditambahkan w-full, h-40, relative, dan overflow-hidden */}
        <LazyLoadImage
          src={product.image}
          alt={product.name}
          className="absolute inset-0 object-cover w-full h-full" // Gambar mengisi penuh container
        />
      </div>

      <div className="flex-1 w-full px-4 py-3"> {/* Ditambahkan padding di sini */}
        <h2 className="text-base text-gray-800 mb-1 leading-tight line-clamp-2"> {/* Sesuaikan text-sm menjadi text-base, line-clamp-2 */}
          {product.name}
        </h2>
        <p className="font-extrabold text-lg mb-2"> {/* Sesuaikan text-sm menjadi text-lg */}
          Rp. {product.price.toLocaleString('id-ID')} {/* Format harga ke IDR */}
        </p>
        <p className="text-gray-500 text-sm mb-3">Stok: {product.stock}</p>
      </div>

      <button
        onClick={() => onOpenAddToCartModal(product)}
        className="w-full bg-blue-400 text-white px-5 py-2 rounded-b-sm text-base font-medium flex items-center justify-center gap-2 hover:bg-green-700 active:bg-green-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 cursor-pointer" // rounded-lg diubah menjadi rounded-b-sm
      >
        Tambah
        <ShoppingCartIcon size={18} />
      </button>
    </div>
  );
};

export default ProductCard;
