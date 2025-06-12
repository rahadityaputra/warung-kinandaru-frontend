import { CartItem } from '@/types/CartItem';
import React, { useState } from 'react';

type Props = {
  onConfirm: ({ name, address, phoneNumber }: { name: string, address: string, phoneNumber: string }) => void;
  cartItems: CartItem[];
  totalPrice: number;
  onClose: () => void; // Prop untuk menutup modal
};

const ConfirmationModal = ({ onConfirm, cartItems, totalPrice, onClose }: Props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // State untuk error, termasuk nama sekarang
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleConfirm = () => {
    let hasError = false;

    // Reset error messages
    setNameError('');
    setAddressError('');
    setPhoneError('');

    // Validasi Nama
    if (name.trim() === '') {
      setNameError('Nama tidak boleh kosong.');
      hasError = true;
    }

    // Validasi Alamat
    if (address.trim() === '') {
      setAddressError('Alamat tidak boleh kosong.');
      hasError = true;
    }

    // Validasi Nomor Telepon
    if (phoneNumber.trim() === '' || !/^\d+$/.test(phoneNumber) || phoneNumber.length < 8) {
      setPhoneError('Nomor telepon tidak valid (hanya angka, min. 8 digit).');
      hasError = true;
    }

    // Jika tidak ada error, panggil onConfirm dan tutup modal
    if (!hasError) {
      onConfirm({ name, address, phoneNumber });
      // Setelah konfirmasi berhasil, modal seharusnya ditutup oleh parent (CartPage)
      // melalui pemanggilan onClose yang sudah ada di sana.
    }
  };

  return (
    <div className="flex flex-col bg-white w-[500px] justify-between items-start mb-4 p-5 rounded-md relative shadow-lg">
      <div className="w-full mb-6">
        <p className="text-gray-700 mb-4">
          Mohon lengkapi data Anda untuk pengiriman pesanan.
        </p>

        <div className="mb-6 bg-gray-50 p-4 rounded-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Ringkasan Belanja:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.quantity}) - Rp{(item.price * item.quantity).toLocaleString('id-ID')}
              </li>
            ))}
          </ul>
          <p className="font-bold text-lg text-gray-900 mt-4 text-right">
            Total: Rp{totalPrice.toLocaleString('id-ID')}
          </p>
        </div>

        {/* Input Nama Lengkap */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Nama Lengkap:
          </label>
          <input
            type="text"
            id="name"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${nameError ? 'border-red-500' : ''}`}
            placeholder="Masukkan nama lengkap Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="text-red-500 text-xs italic mt-1">{nameError}</p>}
        </div>

        {/* Input Alamat Lengkap */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
            Alamat Lengkap:
          </label>
          <textarea
            id="address"
            rows={3}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addressError ? 'border-red-500' : ''}`}
            placeholder="Contoh: Jl. Merdeka No. 10, RT 05 RW 03, Kel. Sukamaju, Kec. Jatiasih, Kota Bekasi, 17147"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          {addressError && <p className="text-red-500 text-xs italic mt-1">{addressError}</p>}
        </div>

        {/* Input Nomor Telepon */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Nomor Telepon (WhatsApp Aktif):
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${phoneError ? 'border-red-500' : ''}`}
            placeholder="Contoh: 081234567890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {phoneError && <p className="text-red-500 text-xs italic mt-1">{phoneError}</p>}
        </div>
      </div>

      {/* Footer Modal (Tombol Aksi) */}
      <div className="flex justify-end w-full gap-4">
        <button
          onClick={onClose} // Menggunakan onClose untuk tombol Batal
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Batal
        </button>
        <button
          onClick={handleConfirm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Konfirmasi Pesanan
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
