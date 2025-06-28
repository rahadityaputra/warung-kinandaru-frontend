import CartItem from "@/types/CartItem";
import { TrashIcon } from "lucide-react";
import { useState } from "react";
import ProductCartCard from "../Cards/ProductCartCard";
import EmptyProductState from "../Cards/EmptyProductState";
import Modal from "../Modals/Modal";
import ConfirmRemoveProductModal from "../Modals/ConfirmRemoveProductModal";

type CartItemListProps = {
  cartItems: CartItem[],
  onRemoveCartItemsSelected: (CartItemsSelected: CartItem[]) => void
}

const CartItemList = ({ cartItems, onRemoveCartItemsSelected }: CartItemListProps) => {
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);
  const [isConfimationRemoveProductModalOpen, setIsConfirmationRemoveModalModalOpen] = useState(false);

  const toggleSelectItem = (item: CartItem) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((prevItem) => prevItem.id !== item.id) : [...prev, item]
    );
  };

  const selectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems);
    }
  };

  const handleClickRemoveCartItems = () => {
    setIsConfirmationRemoveModalModalOpen(true)
  }

  const handleConfirmRemoveSelectedItems = () => {
    onRemoveCartItemsSelected(selectedItems);
    setSelectedItems([]);
    setIsConfirmationRemoveModalModalOpen(false);
  }

  return (
    <div className="bg-gray-100 p-6 min-h-[calc(100vh-100px)]">
      {cartItems.length > 0 ? (
        <div className="mb-4 bg-white px-2 rounded-md py-3 flex justify-between items-center mt-1">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedItems.length === cartItems.length && cartItems.length > 0}
              onChange={selectAll}
            />
            <span>Pilih Semua</span>
          </label>
          <button
            onClick={handleClickRemoveCartItems}
            disabled={selectedItems.length === 0}
            className={`px-2 py-2 rounded ${selectedItems.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
              }`}
          >
            <TrashIcon width={20} height={20} />
          </button>
        </div>) : < EmptyProductState message="Keranjang Kosong" icon="🛒" ctaText='Mulai Belanja' ctaHref='/' />
      }

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => toggleSelectItem(item)}
              className="mt-2"
            />
            <ProductCartCard item={item} />
          </div>
        ))}
      </div>

      <Modal title={"Konfirmasi Penghapusan"} onClose={() => { setIsConfirmationRemoveModalModalOpen(false) }} isOpen={isConfimationRemoveProductModalOpen}>
        <ConfirmRemoveProductModal selectedItems={selectedItems} onClose={() => { setIsConfirmationRemoveModalModalOpen(false) }} onConfirm={handleConfirmRemoveSelectedItems} />
      </Modal>
    </div>
  )
}


export default CartItemList;
