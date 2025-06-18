import { useState } from "react";
import Product from "../types/Product";
import { CartItem } from "../types/CartItem";

type props = {
  product: any,
  onClose: () => void,
  onAddToCart: (product: CartItem, quantity: number) => void
}
export default function AddToCartModal({ product, onClose, onAddToCart }: props) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => Math.max(1, prev - 1));
    }
  };

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleAdd = () => {
    const { id, name, imageUrl, stock } = product;
    const price = product.priceHistory[0].price;
    const newProductToCart: any = { id, name, price, imageUrl, quantity, stock };
    onAddToCart(newProductToCart, quantity);
    onClose();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w md:max-w-md lg:max-w-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
      />

      <p className="text-xl md:text-2xl font-bold text-green-600 mb-4">Rp{product.priceHistory[0].price.toLocaleString()}</p>
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          disabled={quantity <= 1}
          className={`px-4 py-2 rounded-full text-lg md:text-xl font-bold transition-colors duration-200 ${quantity <= 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
            }`}
          onClick={handleDecrease}
        >
          −
        </button>
        <span className="text-2xl font-bold text-gray-800 w-12 text-center">{quantity}</span>
        <button
          disabled={quantity >= product.stock}
          className={`px-4 py-2 rounded-full text-lg md:text-xl font-bold transition-colors duration-200 ${quantity >= product.stock
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
            }`}
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAdd}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 text-lg font-semibold"
      >
        Tambahkan ke Keranjang
      </button>
    </div>
  );
}
