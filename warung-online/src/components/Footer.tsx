import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolom 1: Informasi Toko */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Warung Kinandaru</h3>
            <p className="text-sm">
              Menyediakan kebutuhan harian Anda dengan kualitas terbaik dan harga terjangkau. Belanja mudah dari rumah!
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Ikuti media sosial Anda */}
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Icon Facebook */}
                  <path d="M14 10h-2v4h2v-4zM22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-6 0c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Icon Instagram */}
                  <path d="M7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"></path>
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM17.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* <div> */}
          {/*   <h3 className="text-white text-lg font-semibold mb-4">Navigasi</h3> */}
          {/*   <ul className="space-y-2 text-sm"> */}
          {/*     <li><a href="/" className="hover:text-white transition-colors duration-200">Beranda</a></li> */}
          {/*     <li><a href="/kategori" className="hover:text-white transition-colors duration-200">Kategori Produk</a></li> */}
          {/*     <li><a href="/produk" className="hover:text-white transition-colors duration-200">Semua Produk</a></li> */}
          {/*     <li><a href="/promo" className="hover:text-white transition-colors duration-200">Promo & Diskon</a></li> */}
          {/*     <li><a href="/tentang-kami" className="hover:text-white transition-colors duration-200">Tentang Kami</a></li> */}
          {/*   </ul> */}
          {/* </div> */}
          {/**/}
          {/* <div> */}
          {/*   <h3 className="text-white text-lg font-semibold mb-4">Bantuan</h3> */}
          {/*   <ul className="space-y-2 text-sm"> */}
          {/*     <li><a href="/faq" className="hover:text-white transition-colors duration-200">FAQ</a></li> */}
          {/*     <li><a href="/kontak" className="hover:text-white transition-colors duration-200">Hubungi Kami</a></li> */}
          {/*     <li><a href="/kebijakan-privasi" className="hover:text-white transition-colors duration-200">Kebijakan Privasi</a></li> */}
          {/*     <li><a href="/syarat-ketentuan" className="hover:text-white transition-colors duration-200">Syarat & Ketentuan</a></li> */}
          {/*     <li><a href="/pengembalian" className="hover:text-white transition-colors duration-200">Kebijakan Pengembalian</a></li> */}
          {/*   </ul> */}
          {/* </div> */}

          {/* Kolom 4: Kontak & Jam Operasional */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontak Kami</h3>
            <p className="text-sm mb-2">
              <span className="font-semibold">Alamat:</span> Jl. Contoh No. 123, Kota Contoh, 12345
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Telepon:</span> (021) 123-4567
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Email:</span> warungkinandaru@gmail.com
            </p>
            <p className="text-sm">
              <span className="font-semibold">Jam Operasional:</span> <br />
              Senin - Sabtu: 08:00 - 20:00 WIB <br />
              Minggu: Tutup
            </p>
          </div>
        </div>

        {/* Bagian Hak Cipta */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Warung Kinandaru. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
