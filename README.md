
# 🛒 Kinandaru - Warung Online

**Kinandaru Warung Online** adalah fitur dari sistem POS Kinandaru yang memungkinkan pelanggan memesan produk secara daring melalui katalog berbasis web. Pesanan kemudian dikirim langsung ke WhatsApp admin kasir menggunakan format otomatis.

## 🚀 Fitur Utama
- 📦 **Katalog Produk Online**  
  Pelanggan dapat mengakses daftar produk dan harga melalui tautan atau QR Code.

- 🛍️ **Keranjang Belanja**  
  Pengguna dapat menambahkan barang ke keranjang sebelum checkout.

- 📤 **Checkout via WhatsApp**  
  Sistem akan mengirim format pesanan otomatis ke WhatsApp admin.

- 🔔 **Notifikasi Admin**  
  Admin/kasir akan menerima pesan masuk di WhatsApp dan memprosesnya secara manual.

## 🔧 Teknologi yang Digunakan
- **Frontend:** Laravel Blade / Vue (opsional)
- **Backend:** Laravel 11
- **Database:** MariaDB
- **Integrasi WA:** Link API WhatsApp (tanpa pihak ketiga)

## 📝 Cara Kerja
1. Pelanggan scan QR / buka link katalog online.
2. Memilih produk & mengisi form checkout.
3. Sistem redirect ke WhatsApp dengan format siap kirim.
4. Admin memverifikasi pesanan dan memprosesnya di POS offline.

## 🗂️ Struktur Folder
```
/resources/views/warung-online/    --> UI katalog online
/routes/web.php                     --> Routing ke halaman warung online
/app/Http/Controllers/OnlineController.php  --> Logic tampilan katalog
/public/qrcode/                     --> Folder QR Code link katalog
```

## 📎 Catatan Pengembangan
- Tidak menggunakan integrasi payment gateway.
- Dapat digunakan di browser HP pelanggan.
- WA yang digunakan harus aktif dan bisa menerima pesan.

---