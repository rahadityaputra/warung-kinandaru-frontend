import Product from "../types/Product";

const dummyProducts: Product[] = [
  {
    "id": 1,
    "name": "BERAS CAP AYAM JAGO 5 KG",
    "price": 65000,
    "stock": 25,
    "image": "https://placehold.co/160x160?text=Beras",
    "description": "Beras berkualitas tinggi untuk hidangan keluarga.",
    "category": "barang"
  },
  {
    "id": 2,
    "name": "GULAKU KUNING KEMASAN 1 KG",
    "price": 20000,
    "stock": 18,
    "image": "https://placehold.co/160x160?text=Gula+Pasir",
    "description": "Gula pasir kuning murni, cocok untuk berbagai keperluan.",
    "category": "barang"
  },
  {
    "id": 3,
    "name": "MINYAK GORENG SANIA 2 LITER",
    "price": 35000,
    "stock": 12,
    "image": "https://placehold.co/160x160?text=Minyak+Goreng",
    "description": "Minyak goreng pilihan, menghasilkan masakan renyah dan lezat.",
    "category": "barang"
  },
  {
    "id": 4,
    "name": "TEPUNG TERIGU SEGITIGA BIRU 1 KG",
    "price": 13000,
    "stock": 30,
    "image": "https://placehold.co/160x160?text=Tepung+Terigu",
    "description": "Tepung serbaguna untuk aneka kue dan masakan.",
    "category": "barang"
  },
  {
    "id": 5,
    "name": "KOPI KAPAL API SPECIAL MIX 10 SACHET",
    "price": 15000,
    "stock": 20,
    "image": "https://placehold.co/160x160?text=Kopi+Kapal+Api",
    "description": "Kopi instan nikmat untuk memulai hari Anda.",
    "category": "barang"
  },
  {
    "id": 6,
    "name": "INDOMIE GORENG ORIGINAL (KARTON ISI 40)",
    "price": 110000,
    "stock": 5,
    "image": "https://placehold.co/160x160?text=Indomie+Goreng",
    "description": "Mi instan goreng favorit sepanjang masa.",
    "category": "barang"
  },
  {
    "id": 7,
    "name": "GARAM HALUS CAP LAUT 500 GR",
    "price": 4000,
    "stock": 40,
    "image": "https://placehold.co/160x160?text=Garam",
    "description": "Garam dapur beryodium, penting untuk setiap masakan.",
    "category": "barang"
  },
  {
    "id": 8,
    "name": "KECAP MANIS ABC 520 ML",
    "price": 18000,
    "stock": 15,
    "image": "https://placehold.co/160x160?text=Kecap+Manis",
    "description": "Kecap manis pilihan, penyempurna rasa masakan.",
    "category": "barang"
  },
  {
    "id": 9,
    "name": "SAMBAL SAUS ABC EXTRA PEDAS 335 ML",
    "price": 12000,
    "stock": 22,
    "image": "https://placehold.co/160x160?text=Sambal",
    "description": "Saus sambal extra pedas untuk Anda pecinta rasa pedas.",
    "category": "barang"
  },
  {
    "id": 10,
    "name": "SARDEN ABC SAUS TOMAT 155 GR",
    "price": 10000,
    "stock": 10,
    "image": "https://placehold.co/160x160?text=Sarden",
    "description": "Sarden siap saji dalam saus tomat yang lezat.",
    "category": "barang"
  },
  {
    "id": 11,
    "name": "SUSU KENTAL MANIS FRISIAN FLAG 370 GR",
    "price": 14000,
    "stock": 17,
    "image": "https://placehold.co/160x160?text=Susu+Kental+Manis",
    "description": "Susu kental manis serbaguna untuk minuman dan makanan.",
    "category": "barang"
  },
  {
    "id": 12,
    "name": "TEH PUCUK HARUM 350 ML (PACK ISI 12)",
    "price": 40000,
    "stock": 8,
    "image": "https://placehold.co/160x160?text=Teh+Pucuk+Harum",
    "description": "Minuman teh segar dengan aroma melati.",
    "category": "minuman"
  },
  {
    "id": 13,
    "name": "BISKUIT ROMA KELAPA 300 GR",
    "price": 9000,
    "stock": 25,
    "image": "https://placehold.co/160x160?text=Biskuit+Roma+Kelapa",
    "description": "Biskuit renyah rasa kelapa, cocok untuk teman minum teh.",
    "category": "makanan ringan"
  },
  {
    "id": 14,
    "name": "MIE SEDAAP GORENG SALERO PADANG (KARTON ISI 40)",
    "price": 115000,
    "stock": 4,
    "image": "https://placehold.co/160x160?text=Mie+Sedaap+Padang",
    "description": "Mi instan goreng dengan bumbu khas Padang.",
    "category": "barang"
  },
  {
    "id": 15,
    "name": "PASTA GIGI PEPSODENT 190 GR",
    "price": 10000,
    "stock": 28,
    "image": "https://placehold.co/160x160?text=Pasta+Gigi",
    "description": "Pasta gigi untuk gigi bersih dan nafas segar.",
    "category": "kebersihan"
  },
  {
    "id": 16,
    "name": "SABUN MANDI LIFEBUOY 85 GR",
    "price": 5000,
    "stock": 35,
    "image": "https://placehold.co/160x160?text=Sabun+Mandi",
    "description": "Sabun mandi anti bakteri untuk perlindungan keluarga.",
    "category": "kebersihan"
  },
  {
    "id": 17,
    "name": "SHAMPOO SUNSILK HIJAB REFRESH 170 ML",
    "price": 20000,
    "stock": 15,
    "image": "https://placehold.co/160x160?text=Shampoo",
    "description": "Shampoo khusus hijab untuk rambut segar sepanjang hari.",
    "category": "kebersihan"
  },
  {
    "id": 18,
    "name": "PEMBERSIH LANTAI SUPER PELL 800 ML",
    "price": 16000,
    "stock": 10,
    "image": "https://placehold.co/160x160?text=Pembersih+Lantai",
    "description": "Pembersih lantai dengan keharuman yang tahan lama.",
    "category": "pembersih"
  },
  {
    "id": 19,
    "name": "PENCUCI PIRING SUNLIGHT LIME 700 ML",
    "price": 13000,
    "stock": 18,
    "image": "https://placehold.co/160x160?text=Pencuci+Piring",
    "description": "Sabun cuci piring efektif menghilangkan lemak.",
    "category": "pembersih"
  },
  {
    "id": 20,
    "name": "DETERJEN RINSO ANTI NODA 770 GR",
    "price": 25000,
    "stock": 14,
    "image": "https://placehold.co/160x160?text=Deterjen",
    "description": "Deterjen ampuh menghilangkan noda membandel.",
    "category": "pembersih"
  },
  {
    "id": 21,
    "name": "BISKUIT OREO ORIGINAL 133 GR",
    "price": 8000,
    "stock": 28,
    "image": "https://placehold.co/160x160?text=Oreo",
    "description": "Biskuit cokelat favorit dengan krim vanila.",
    "category": "makanan ringan"
  },
  {
    "id": 22,
    "name": "ROTI TAWAR SARI ROTI REGULER",
    "price": 14000,
    "stock": 8,
    "image": "https://placehold.co/160x160?text=Roti+Tawar",
    "description": "Roti tawar lembut untuk sarapan praktis.",
    "category": "makanan"
  },
  {
    "id": 23,
    "name": "TEH CELUP SOSRO KOTAK ISI 25",
    "price": 7000,
    "stock": 30,
    "image": "https://placehold.co/160x160?text=Teh+Celup",
    "description": "Teh celup asli dari daun teh pilihan.",
    "category": "minuman"
  },
  {
    "id": 24,
    "name": "SUSU UHT ULTRA MILK COKLAT 250 ML",
    "price": 6000,
    "stock": 20,
    "image": "https://placehold.co/160x160?text=Susu+UHT",
    "description": "Susu UHT cokelat siap minum.",
    "category": "minuman"
  },
  {
    "id": 25,
    "name": "SNACK CHIKI RING 60 GR",
    "price": 7500,
    "stock": 25,
    "image": "https://placehold.co/160x160?text=Chiki+Ring",
    "description": "Camilan renyah dengan rasa ayam bawang.",
    "category": "makanan ringan"
  },
  {
    "id": 26,
    "name": "TELUR AYAM NEGERI (PER KG)",
    "price": 28000,
    "stock": 10,
    "image": "https://placehold.co/160x160?text=Telur+Ayam",
    "description": "Telur ayam segar pilihan untuk kebutuhan dapur Anda.",
    "category": "bahan pokok"
  },
  {
    "id": 27,
    "name": "BAWANG MERAH (PER 250 GR)",
    "price": 8000,
    "stock": 15,
    "image": "https://placehold.co/160x160?text=Bawang+Merah",
    "description": "Bawang merah segar, bumbu dasar masakan.",
    "category": "bahan pokok"
  },
  {
    "id": 28,
    "name": "BAWANG PUTIH (PER 250 GR)",
    "price": 9000,
    "stock": 15,
    "image": "https://placehold.co/160x160?text=Bawang+Putih",
    "description": "Bawang putih segar, bumbu utama masakan.",
    "category": "bahan pokok"
  },
  {
    "id": 29,
    "name": "CABAI MERAH BESAR (PER 250 GR)",
    "price": 15000,
    "stock": 10,
    "image": "https://placehold.co/160x160?text=Cabai+Merah",
    "description": "Cabai merah segar untuk sensasi pedas.",
    "category": "bahan pokok"
  },
  {
    "id": 30,
    "name": "TOMAT SEGAR (PER 500 GR)",
    "price": 10000,
    "stock": 12,
    "image": "https://placehold.co/160x160?text=Tomat",
    "description": "Tomat segar kaya vitamin, cocok untuk masakan dan jus.",
    "category": "bahan pokok"
  },
  {
    "id": 31,
    "name": "SAYUR KANGKUNG IKAT",
    "price": 5000,
    "stock": 20,
    "image": "https://placehold.co/160x160?text=Kangkung",
    "description": "Sayur kangkung segar, siap dimasak.",
    "category": "sayuran"
  },
  {
    "id": 32,
    "name": "WORTEL SEGAR (PER 500 GR)",
    "price": 7000,
    "stock": 18,
    "image": "https://placehold.co/160x160?text=Wortel",
    "description": "Wortel segar kaya vitamin A.",
    "category": "sayuran"
  },
  {
    "id": 33,
    "name": "SABUN CUCI MUKA GARNIER MEN 100 ML",
    "price": 25000,
    "stock": 10,
    "image": "https://placehold.co/160x160?text=Sabun+Muka",
    "description": "Pembersih wajah khusus pria.",
    "category": "kebersihan"
  },
  {
    "id": 34,
    "name": "PEWANGI PAKAIAN MOLTO SACHET",
    "price": 3000,
    "stock": 50,
    "image": "https://placehold.co/160x160?text=Pewangi+Pakaian",
    "description": "Pewangi pakaian konsentrat dengan aroma segar.",
    "category": "pembersih"
  },
  {
    "id": 35,
    "name": "PEMBALUT CHARM EXTRA MAXI 26 CM",
    "price": 18000,
    "stock": 12,
    "image": "https://placehold.co/160x160?text=Pembalut",
    "description": "Pembalut wanita dengan daya serap maksimal.",
    "category": "kebersihan"
  },
  {
    "id": 36,
    "name": "POP MIE CUP RASA AYAM BAWANG",
    "price": 5000,
    "stock": 30,
    "image": "https://placehold.co/160x160?text=Pop+Mie",
    "description": "Mi instan cup praktis rasa ayam bawang.",
    "category": "makanan instan"
  },
  {
    "id": 37,
    "name": "COCA-COLA PET 1 LITER",
    "price": 13000,
    "stock": 15,
    "image": "https://placehold.co/160x160?text=Coca+Cola",
    "description": "Minuman soda menyegarkan.",
    "category": "minuman"
  },
  {
    "id": 38,
    "name": "AIR MINERAL AQUA 600 ML (KARTON ISI 24)",
    "price": 45000,
    "stock": 7,
    "image": "https://placehold.co/160x160?text=Air+Mineral",
    "description": "Air mineral murni untuk hidrasi Anda.",
    "category": "minuman"
  },
  {
    "id": 39,
    "name": "KECAP ASIN ABC 135 ML",
    "price": 8000,
    "stock": 20,
    "image": "https://placehold.co/160x160?text=Kecap+Asin",
    "description": "Kecap asin untuk berbagai masakan.",
    "category": "barang"
  },
  {
    "id": 40,
    "name": "SAUS TOMAT ABC 275 ML",
    "price": 9000,
    "stock": 18,
    "image": "https://placehold.co/160x160?text=Saus+Tomat",
    "description": "Saus tomat dengan rasa otentik.",
    "category": "barang"
  },
  {
    "id": 41,
    "name": "KENTAL MANIS INDOMILK 370 GR",
    "price": 13500,
    "stock": 15,
    "image": "https://placehold.co/160x160?text=Susu+Kental+Manis",
    "description": "Susu kental manis dari Indomilk.",
    "category": "barang"
  },
  {
    "id": 42,
    "name": "ROMA SARI GANDUM 120 GR",
    "price": 6000,
    "stock": 22,
    "image": "https://placehold.co/160x160?text=Roma+Sari+Gandum",
    "description": "Biskuit gandum sehat penuh serat.",
    "category": "makanan ringan"
  },
  {
    "id": 43,
    "name": "QUAKER OATMEAL INSTANT 200 GR",
    "price": 18000,
    "stock": 10,
    "image": "https://placehold.co/160x160?text=Quaker+Oatmeal",
    "description": "Oatmeal instan untuk sarapan cepat dan sehat.",
    "category": "makanan"
  },
  {
    "id": 44,
    "name": "KOPI LUWAK WHITE KOFFIE 5 SACHET",
    "price": 13000,
    "stock": 16,
    "image": "https://placehold.co/160x160?text=Kopi+White+Koffie",
    "description": "Kopi putih instan dengan rasa lembut.",
    "category": "minuman"
  },
  {
    "id": 45,
    "name": "TEH SOSRO BOTOL 350 ML (PACK ISI 12)",
    "price": 42000,
    "stock": 9,
    "image": "https://placehold.co/160x160?text=Teh+Sosro+Botol",
    "description": "Teh botol siap minum yang menyegarkan.",
    "category": "minuman"
  },
  {
    "id": 46,
    "name": "BISKUIT KHONG GUAN KECIL",
    "price": 25000,
    "stock": 7,
    "image": "https://placehold.co/160x160?text=Khong+Guan",
    "description": "Aneka biskuit legendaris dalam kemasan kecil.",
    "category": "makanan ringan"
  },
  {
    "id": 47,
    "name": "PEPSI COLA 330 ML (KALENG)",
    "price": 7000,
    "stock": 20,
    "image": "https://placehold.co/160x160?text=Pepsi",
    "description": "Minuman soda kalengan yang menyegarkan.",
    "category": "minuman"
  },
  {
    "id": 48,
    "name": "SNACK TARO NETT 60 GR",
    "price": 7000,
    "stock": 28,
    "image": "https://placehold.co/160x160?text=Taro",
    "description": "Camilan renyah berbentuk jaring.",
    "category": "makanan ringan"
  },
  {
    "id": 49,
    "name": "ROYCO KALDU AYAM SACHET",
    "price": 2000,
    "stock": 50,
    "image": "https://placehold.co/160x160?text=Royco",
    "description": "Bumbu penyedap rasa ayam.",
    "category": "barang"
  },
  {
    "id": 50,
    "name": "MASAKO KALDU SAPI SACHET",
    "price": 2000,
    "stock": 50,
    "image": "https://placehold.co/160x160?text=Masako",
    "description": "Bumbu penyedap rasa sapi.",
    "category": "barang"
  }
];

export { dummyProducts };
