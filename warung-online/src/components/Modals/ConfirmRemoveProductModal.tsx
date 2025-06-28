
import CartItem from '@/types/CartItem';
import React from 'react';

type ConfirmRemoveProductModalProps = {
  onConfirm: () => void;
  onClose: () => void;
  selectedItems: CartItem[];
}

const ConfirmRemoveProductModal = ({
  onConfirm,
  onClose,
  selectedItems,
}: ConfirmRemoveProductModalProps) => {
  return (
    <div
      className="w-80"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col space-x-4 mb-6">
        <p className="text-gray-700">Apakah Anda yakin ingin menghapus ?</p>
        {selectedItems.length > 0 && (
          selectedItems.map(item => (
            <div className='flex gap-3' key={item.id}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md flex-shrink-0"
              />
              <p className="md:text-lg font-semibold text-red-600">
                "{item.name}" {item.quantity ? `(${item.quantity} item)` : ''}
              </p>
            </div>
          )))}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Batal
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Hapus
        </button>
      </div>
    </div >
  );
};

export default ConfirmRemoveProductModal;
