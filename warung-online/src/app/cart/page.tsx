'use client';

import Navbar from "@/components/Navbar";
import { CartItem } from '@/types/CartItem';
import { useEffect, useState } from "react";
import { localStorageHelper } from "@/helper/localStorageHelper";
import ProductCartCard from "@/components/ProductCartCard";
import { TrashIcon } from "lucide-react";
import dynamic from "next/dynamic";
import ConfirmationModal from "@/components/ConfirmationModal";

// type props = {
//   onDeleteSelected: (itemSelected: number[]) => void,
// }

const Modal = dynamic(() => import('@/components/Modal'))

const CartPage = ({ onDeleteSelected }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const total = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isConfirmationOrderModalOpen, setIsConfirmationOrderModalOpen] = useState(false);
  const ownerPhoneNumber = '6282226138704';


  useEffect(() => {
    const cartItems = localStorageHelper.get<CartItem[]>("Cart_item_data_warung_kinandaru") || []
    setCartItems(cartItems)
  }, [])

  const toggleSelectItem = (itemId: number) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );

  };

  const selectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const handleDeleteSelected = () => {
    if (selectedItems.length > 0) {
      onDeleteSelected(selectedItems);
      setSelectedItems([]);
    }
  };

  const handleCloseConfirmationOrderModal = () => {
    setIsConfirmationOrderModalOpen(false)
  }

  const handleOpenConfirmationOrderModal = () => {
    setIsConfirmationOrderModalOpen(true)
  }

  const handleConfirmOrderAndSendWhatsApp = ({ name, address, phoneNumber }: { name: string; address: string; phoneNumber: string }) => {
    let message = `*DETAIL PESANAN BARU*\n\n`;
    message += `*Nama Pelanggan:* ${name}\n`;
    message += `*No. Telepon:* ${phoneNumber}\n`;
    message += `*Alamat Pengiriman:* ${address}\n\n`;

    message += `*Daftar Produk:*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (x${item.quantity}) - Rp${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
    });

    message += `\n*Total Belanja:* Rp${total.toLocaleString('id-ID')}\n\n`;
    message += `Mohon konfirmasi pesanan ini. Terima kasih!`;

    const whatsappMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${ownerPhoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');

    // Opsional: Hapus item dari keranjang setelah pesanan dikirim
    localStorageHelper.remove("Cart_item_data_warung_kinandaru");
    setCartItems([]); // Kosongkan state keranjang
    setSelectedItems([]); // Kosongkan seleksi
    setIsConfirmationOrderModalOpen(false); // Tutup modal konfirmasi
    alert('Pesanan Anda akan dikirim ke WhatsApp pemilik warung. Mohon konfirmasi di sana!');
  };

  return (

    <div>
      <Navbar isSearchInputAvailable={false} isCategoryBoxAvailable={false} />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="font-extrabold text-2xl text-black">Keranjang</h1>
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
              onClick={handleDeleteSelected}
              disabled={selectedItems.length === 0}
              className={`px-2 py-2 rounded ${selectedItems.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
                }`}
            >
              <TrashIcon width={20} height={20} />
            </button>
          </div>) : <div>keranjang kosong</div>
        }

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelectItem(item.id)}
                className="mt-2"
              />
              <ProductCartCard item={item} />
            </div>
          ))}
        </div>

        <div className="fixed inset-x-0 bottom-0 flex items-center justify-between gap-2 mt-6 bg-white p-4 shadow text-right">
          <p className="text-lg font-bold text-black">Rp. {total.toLocaleString()}</p>
          <button onClick={handleOpenConfirmationOrderModal} className="cursor-pointer flex justify-center items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Beli
            <svg
              height="24px"
              version="1.1"
              viewBox="0 0 512 512"
              width="24px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >

              <g id="_x31_3-whatsapp">
                <g>
                  <g>
                    <path
                      d="M256.063,16.75h-0.125C124.379,16.75,17.397,124.051,17.397,256     c0,52.336,16.819,100.848,45.422,140.232l-29.732,88.873l91.716-29.394c37.725,25.063,82.731,39.538,131.26,39.538     c131.559,0,238.541-107.335,238.541-239.25C494.604,124.083,387.621,16.75,256.063,16.75L256.063,16.75z M256.063,16.75"
                      style={{ fill: "#5ACF5F" }}
                    />
                    <path
                      d="M394.896,354.596c-5.758,16.304-28.604,29.817-46.824,33.771     c-12.473,2.657-28.754,4.785-83.568-18.006c-70.125-29.127-115.28-100.575-118.795-105.21     c-3.375-4.637-28.336-37.827-28.336-72.165c0-34.331,17.386-51.052,24.398-58.223c5.751-5.897,15.267-8.583,24.394-8.583     c2.954,0,5.606,0.146,7.997,0.267c7.008,0.302,10.524,0.717,15.151,11.813c5.756,13.909,19.77,48.239,21.445,51.771     c1.701,3.53,3.396,8.311,1.012,12.945c-2.24,4.788-4.205,6.91-7.725,10.975c-3.521,4.073-6.865,7.182-10.381,11.544     c-3.219,3.798-6.859,7.867-2.801,14.896c4.055,6.879,18.07,29.812,38.707,48.235c26.641,23.775,48.229,31.372,55.957,34.604     c5.756,2.395,12.615,1.822,16.816-2.663c5.34-5.774,11.938-15.342,18.645-24.759c4.771-6.76,10.795-7.599,17.119-5.208     c6.441,2.244,40.531,19.143,47.541,22.641c7.006,3.529,11.635,5.203,13.334,8.165     C400.652,324.361,400.652,338.271,394.896,354.596L394.896,354.596z M394.896,354.596"
                      style={{ fill: "#FCFCFC" }}
                    />
                  </g>
                </g>
              </g>
              <g id="Layer_1" />
            </svg>
          </button>
        </div>
      </div>

      {isConfirmationOrderModalOpen && (
        <Modal title={"Konfirmasi Pembelian"} onClose={handleCloseConfirmationOrderModal} isOpen={isConfirmationOrderModalOpen} >
          <ConfirmationModal onConfirm={handleConfirmOrderAndSendWhatsApp} cartItems={cartItems} totalPrice={total} onClose={handleCloseConfirmationOrderModal} />
        </Modal >

      )
      }

    </div >

  );

};


export default CartPage;


