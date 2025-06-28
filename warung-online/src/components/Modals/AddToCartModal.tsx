import { useState } from "react";
import Product from "@/types/Product";
import CartItem from "@/types/CartItem";



type AddToCartModalProps = {
  product: Product;
  onClose: () => void;
  onAddToCart: (item: CartItem, quantity: number) => void;
};

export default function AddToCartModal({ product, onClose, onAddToCart }: AddToCartModalProps) {
  const [quantity, setQuantity] = useState(1);


  if (!product) return null;




  const displayPrice = product.currentPrice.toString() ?
    parseFloat(product.currentPrice.toString()).toLocaleString('id-ID') : 'N/A';


  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {

    setQuantity((prev) => Math.min(product.stock, prev + 1));
  };

  const handleAdd = () => {
    const itemPrice = parseFloat(product.currentPrice.toString() || '0');

    const newProductToCart: CartItem = {
      id: product.id,
      name: product.name,
      price: itemPrice,
      imageUrl: product.imageUrl,
      quantity: quantity,
      stock: product.stock,
    };
    onAddToCart(newProductToCart, quantity);
    onClose();
  };

  return (
    <div className="w-70 md:p-4 md:w-[800px] md:flex gap-3 bg-white">
      <div className="w-full md:w-[400px] flex justify-center">
        <img
          src={product.imageUrl || '/placeholder-image.jpg'}
          alt={product.name}
          className="w-full object-cover rounded-lg shadow-sm"
        />
      </div >
      <div className="md:w-[400px] flex flex-col justify-between">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h2>
        <p className="text-sm md:text-md font-semibold text-gray-600 mb-4">
          {product.description} {/* Tampilkan deskripsi jika ada */}
        </p>

        <div className="flex items-center justify-between mb-6">
          <p className="text-xl md:text-xl font-extrabold text-green-600">
            Rp{displayPrice}
          </p>

          <div className="flex items-center space-x-2 border border-gray-300 rounded-full overflow-hidden">
            <button
              disabled={quantity <= 1}
              onClick={handleDecrease}
              className={`
              p-2 w-10 h-10 flex items-center justify-center text-xl font-bold
              transition-colors duration-200
              ${quantity <= 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                }
            `}
              aria-label="Kurangi kuantitas"
            >
              −
            </button>
            <span className="text-xl font-semibold text-gray-800 w-12 text-center select-none">
              {quantity}
            </span>
            <button
              disabled={quantity >= product.stock}
              onClick={handleIncrease}
              className={`
              p-2 w-10 h-10 flex items-center justify-center text-lg font-bold
              transition-colors duration-200
              ${quantity >= product.stock
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                }
            `}
              aria-label="Tambah kuantitas"
            >
              +
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-right mb-6">
          Stok tersedia: {product.stock}
        </p>

        <button
          onClick={handleAdd}
          disabled={quantity === 0}
          className={`
          w-full py-3 rounded-lg text-white font-semibold text-md
          transition duration-200
          ${quantity === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 cursor-pointer"
            }
        `}
        >
          Tambahkan ke Keranjang
        </button>
      </div>
    </div >
  );
}
