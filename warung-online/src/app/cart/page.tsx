'use client';

import CartItem from '@/types/CartItem';
import { useEffect, useState } from "react";
import { localStorageHelper } from "@/helper/localStorageHelper";
import dynamic from "next/dynamic";
import ConfirmationModal from "@/components/Modals/ConfirmationModal";
import { createOrderMessage } from "../utils/createOrderMessage";
import { confirmOrderAndSendWhatsApp } from "../utils/confirmOrderAndSendWhatsApp";
import CartNavbar from "@/components/Navbars/CartNavbar";
import CartItemList from '@/components/Lists/CartItemList';

const Modal = dynamic(() => import('@/components/Modals/Modal'))

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const total = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [isConfirmationOrderModalOpen, setIsConfirmationOrderModalOpen] = useState(false);

  useEffect(() => {
    loadCartItemsFromLocalStorage();
  }, [])

  const loadCartItemsFromLocalStorage = () => {
    const cartItems = localStorageHelper.get<CartItem[]>("Cart_item_data_warung_kinandaru") || []
    setCartItems(cartItems);
  }

  const saveCartItemsToLocalStorage = (cartItems: CartItem[]) => {
    localStorageHelper.set<CartItem[]>("Cart_item_data_warung_kinandaru", cartItems);
  }

  const handleRemoveCartItemsSelected = (cartItemsSelected: CartItem[]) => {
    const ids = cartItemsSelected.map(item => item.id);
    const newCartItems = cartItems.filter(item => {
      return !ids.includes(item.id);
    })

    setCartItems(newCartItems);
    saveCartItemsToLocalStorage(newCartItems);
  }

  const handleConfirmOrderAndSendWhatsApp = ({ name, address, phoneNumber }: { name: string; address: string; phoneNumber: string }) => {
    const message = createOrderMessage({ name, address, phoneNumber, total, cartItems });
    confirmOrderAndSendWhatsApp(message);
    localStorageHelper.remove("Cart_item_data_warung_kinandaru");
    setCartItems([]);
    setIsConfirmationOrderModalOpen(false);
  };


  const handleCloseConfirmationOrderModal = () => {
    setIsConfirmationOrderModalOpen(false)
  }

  const handleOpenConfirmationOrderModal = () => {
    setIsConfirmationOrderModalOpen(true)
  }

  return (
    <div className='flex flex-col'>
      <CartNavbar />
      <CartItemList cartItems={cartItems} onRemoveCartItemsSelected={handleRemoveCartItemsSelected} />

      {cartItems.length > 0 && (<div className="fixed inset-x-0 bottom-0 flex items-center justify-between gap-2 mt-6 bg-white p-4 shadow text-right">
        <p className="text-lg font-bold text-black">Rp. {total.toLocaleString()}</p>
        <button onClick={handleOpenConfirmationOrderModal} className="cursor-pointer flex justify-center items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Beli
        </button>
      </div>)}

      <Modal title={"Konfirmasi Pembelian"} onClose={handleCloseConfirmationOrderModal} isOpen={isConfirmationOrderModalOpen} >
        <ConfirmationModal onConfirm={handleConfirmOrderAndSendWhatsApp} cartItems={cartItems} totalPrice={total} onClose={handleCloseConfirmationOrderModal} />
      </Modal >


    </div >

  );

};


export default CartPage;


