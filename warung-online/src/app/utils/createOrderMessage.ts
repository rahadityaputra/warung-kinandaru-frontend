import CartItem from "@/types/CartItem";

type createOrderMessageProps = {
  name: string,
  address: string,
  phoneNumber: string,
  total: number,
  cartItems: CartItem[]
}

export const createOrderMessage = ({ name, address, phoneNumber, total, cartItems }: createOrderMessageProps): string => {
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
  return message;
}
