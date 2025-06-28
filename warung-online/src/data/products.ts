import Product from "../types/Product";

const dummyProducts: Product[] = [
  {
    "id": 1,
    "name": "Beras Cap Ayam Jago 5 KG",
    "description": "Beras pulen berkualitas tinggi dari padi pilihan, cocok untuk hidangan keluarga sehari-hari. Kaya akan karbohidrat, sumber energi utama Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=beras-ayam-jago.jpg",
    "category": {
      "id": 101,
      "name": "Bahan Pokok"
    },
    "stock": 25,
    "currentPrice": 65000
  },
  {
    "id": 2,
    "name": "Gulaku Premium Kuning 1 KG",
    "description": "Gula pasir kuning murni, diproses higienis, ideal untuk pemanis minuman, bahan kue, dan masakan. Menambah cita rasa manis alami pada setiap sajian Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=gulaku-kuning.jpg",
    "category": {
      "id": 101,
      "name": "Bahan Pokok"
    },
    "stock": 18,
    "currentPrice": 20000
  },
  {
    "id": 3,
    "name": "Minyak Goreng Sania Pouch 2 Liter",
    "description": "Minyak goreng kelapa sawit berkualitas tinggi, jernih, dan kaya vitamin E. Sangat cocok untuk menggoreng dan menumis, menghasilkan masakan yang renyah dan sehat.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=minyak-sania.jpg",
    "category": {
      "id": 101,
      "name": "Bahan Pokok"
    },
    "stock": 12,
    "currentPrice": 35000
  },
  {
    "id": 4,
    "name": "Tepung Terigu Segitiga Biru 1 KG",
    "description": "Tepung terigu serbaguna dengan kualitas terbaik, cocok untuk membuat aneka kue, roti, gorengan, dan masakan lainnya. Hasilnya pasti mengembang sempurna.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=tepung-segitiga-biru.jpg",
    "category": {
      "id": 101,
      "name": "Bahan Pokok"
    },
    "stock": 30,
    "currentPrice": 13000
  },
  {
    "id": 5,
    "name": "Kopi Kapal Api Special Mix 10 Sachet",
    "description": "Perpaduan kopi robusta dan arabika pilihan dengan gula dan krimer. Nikmati sensasi kopi instan yang kuat dan menyegarkan setiap hari.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=kopi-kapal-api-mix.jpg",
    "category": {
      "id": 102,
      "name": "Minuman Instan"
    },
    "stock": 20,
    "currentPrice": 15000
  },
  {
    "id": 6,
    "name": "Indomie Goreng Original (Karton Isi 40)",
    "description": "Mi instan goreng legendaris dengan bumbu khas yang menggoda selera. Cocok untuk stok di rumah atau kebutuhan usaha kuliner.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=indomie-goreng-karton.jpg",
    "category": {
      "id": 103,
      "name": "Mi Instan"
    },
    "stock": 5,
    "currentPrice": 110000
  },
  {
    "id": 7,
    "name": "Garam Halus Cap Laut 500 GR",
    "description": "Garam dapur beryodium, penting untuk setiap masakan Anda. Kualitas terjamin untuk rasa masakan yang sempurna.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=garam-cap-laut.jpg",
    "category": {
      "id": 101,
      "name": "Bahan Pokok"
    },
    "stock": 40,
    "currentPrice": 4000
  },
  {
    "id": 8,
    "name": "Kecap Manis ABC 520 ML",
    "description": "Kecap manis dengan perpaduan rasa manis dan gurih, dibuat dari kedelai pilihan. Penyempurna rasa untuk berbagai hidangan favorit keluarga.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=kecap-manis-abc.jpg",
    "category": {
      "id": 104,
      "name": "Bumbu Dapur"
    },
    "stock": 15,
    "currentPrice": 18000
  },
  {
    "id": 9,
    "name": "Sambal Saus ABC Extra Pedas 335 ML",
    "description": "Saus sambal pedas nampol, cocok untuk Anda pecinta tantangan rasa pedas. Cocok untuk cocolan atau pelengkap masakan.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=sambal-abc-pedas.jpg",
    "category": {
      "id": 104,
      "name": "Bumbu Dapur"
    },
    "stock": 22,
    "currentPrice": 12000
  },
  {
    "id": 10,
    "name": "Sarden ABC Saus Tomat 155 GR",
    "description": "Sarden siap saji dalam saus tomat yang kaya rasa. Praktis dan lezat untuk lauk pauk di rumah, sumber protein yang baik.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=sarden-abc.jpg",
    "category": {
      "id": 105,
      "name": "Makanan Kaleng"
    },
    "stock": 10,
    "currentPrice": 10000
  },
  {
    "id": 11,
    "name": "Susu Kental Manis Frisian Flag 370 GR",
    "description": "Susu kental manis serbaguna untuk berbagai kreasi minuman dan makanan. Tambahkan ke kopi, teh, atau sebagai toping dessert favorit Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=skm-frisian-flag.jpg",
    "category": {
      "id": 106,
      "name": "Produk Susu"
    },
    "stock": 17,
    "currentPrice": 14000
  },
  {
    "id": 12,
    "name": "Teh Pucuk Harum 350 ML (Pack Isi 12)",
    "description": "Minuman teh melati dalam kemasan botol, praktis dibawa ke mana saja. Nikmati kesegaran teh pucuk dengan aroma melati alami.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=teh-pucuk-karton.jpg",
    "category": {
      "id": 107,
      "name": "Minuman Kemasan"
    },
    "stock": 8,
    "currentPrice": 40000
  },
  {
    "id": 13,
    "name": "Biskuit Roma Kelapa 300 GR",
    "description": "Biskuit renyah dengan taburan kelapa, cocok untuk teman minum teh atau kopi. Nikmati kelezatan rasa kelapa dalam setiap gigitan.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=roma-kelapa.jpg",
    "category": {
      "id": 108,
      "name": "Makanan Ringan"
    },
    "stock": 25,
    "currentPrice": 9000
  },
  {
    "id": 14,
    "name": "Mi Sedaap Goreng Salero Padang (Karton Isi 40)",
    "description": "Mi instan goreng dengan bumbu khas Padang yang kaya rempah. Hadirkan cita rasa otentik masakan Padang di rumah Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=mie-sedaap-padang.jpg",
    "category": {
      "id": 103,
      "name": "Mi Instan"
    },
    "stock": 4,
    "currentPrice": 115000
  },
  {
    "id": 15,
    "name": "Pasta Gigi Pepsodent Fresh Mint 190 GR",
    "description": "Pasta gigi dengan formula fresh mint untuk napas segar sepanjang hari dan gigi bersih terlindungi dari gigi berlubang.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=pepsodent-mint.jpg",
    "category": {
      "id": 109,
      "name": "Perawatan Diri"
    },
    "stock": 28,
    "currentPrice": 10000
  },
  {
    "id": 16,
    "name": "Sabun Mandi Lifebuoy Total 10 85 GR",
    "description": "Sabun mandi anti bakteri yang melindungi keluarga dari 10 jenis kuman penyebab penyakit. Memberikan kesegaran dan kebersihan maksimal.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=sabun-lifebuoy.jpg",
    "category": {
      "id": 109,
      "name": "Perawatan Diri"
    },
    "stock": 35,
    "currentPrice": 5000
  },
  {
    "id": 17,
    "name": "Shampoo Sunsilk Hijab Refresh & Anti Dandruff 170 ML",
    "description": "Shampoo khusus untuk wanita berhijab, menjaga rambut tetap segar, tidak lepek, dan bebas ketombe sepanjang hari.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=shampoo-sunsilk-hijab.jpg",
    "category": {
      "id": 109,
      "name": "Perawatan Diri"
    },
    "stock": 15,
    "currentPrice": 20000
  },
  {
    "id": 18,
    "name": "Pembersih Lantai Super Pell Lemon 800 ML",
    "description": "Cairan pembersih lantai dengan aroma lemon segar, efektif membunuh kuman dan menghilangkan bau tidak sedap. Membuat lantai bersih mengkilap.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=super-pell-lemon.jpg",
    "category": {
      "id": 110,
      "name": "Pembersih Rumah"
    },
    "stock": 10,
    "currentPrice": 16000
  },
  {
    "id": 19,
    "name": "Pencuci Piring Sunlight Lime 700 ML",
    "description": "Sabun cuci piring dengan ekstrak jeruk nipis, ampuh menghilangkan lemak membandel dan bau amis pada peralatan makan Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=sunlight-lime.jpg",
    "category": {
      "id": 110,
      "name": "Pembersih Rumah"
    },
    "stock": 18,
    "currentPrice": 13000
  },
  {
    "id": 20,
    "name": "Deterjen Rinso Anti Noda Matic 770 GR",
    "description": "Deterjen bubuk dengan formula anti noda, efektif membersihkan pakaian dari noda membandel dan menjaga warna tetap cerah.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=rinso-antinoda.jpg",
    "category": {
      "id": 110,
      "name": "Pembersih Rumah"
    },
    "stock": 14,
    "currentPrice": 25000
  },
  {
    "id": 21,
    "name": "Biskuit Oreo Original 133 GR",
    "description": "Biskuit cokelat favorit dengan krim vanila manis di tengahnya. Cocok untuk camilan atau pelengkap minuman.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=oreo-original.jpg",
    "category": {
      "id": 108,
      "name": "Makanan Ringan"
    },
    "stock": 28,
    "currentPrice": 8000
  },
  {
    "id": 22,
    "name": "Roti Tawar Sari Roti Reguler",
    "description": "Roti tawar lembut dan empuk, ideal untuk sarapan atau bekal. Cocok dipadukan dengan selai, meses, atau isian lainnya.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=sari-roti-tawar.jpg",
    "category": {
      "id": 111,
      "name": "Roti & Pastry"
    },
    "stock": 8,
    "currentPrice": 14000
  },
  {
    "id": 23,
    "name": "Teh Celup Sosro Kotak Isi 25",
    "description": "Teh celup asli dari daun teh pilihan, menghasilkan aroma dan rasa teh yang nikmat. Praktis untuk disajikan kapan saja.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=teh-sosro-celup.jpg",
    "category": {
      "id": 107,
      "name": "Minuman Kemasan"
    },
    "stock": 30,
    "currentPrice": 7000
  },
  {
    "id": 24,
    "name": "Susu UHT Ultra Milk Coklat 250 ML",
    "description": "Susu UHT siap minum rasa cokelat, kaya akan nutrisi dan vitamin. Sumber energi yang baik untuk aktivitas sehari-hari.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=ultra-milk-coklat.jpg",
    "category": {
      "id": 106,
      "name": "Produk Susu"
    },
    "stock": 20,
    "currentPrice": 6000
  },
  {
    "id": 25,
    "name": "Snack Chiki Ring Rasa Ayam Bawang 60 GR",
    "description": "Camilan renyah berbentuk ring dengan rasa ayam bawang yang gurih. Cocok untuk menemani waktu santai Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=chiki-ring.jpg",
    "category": {
      "id": 108,
      "name": "Makanan Ringan"
    },
    "stock": 25,
    "currentPrice": 7500
  },
  {
    "id": 26,
    "name": "Telur Ayam Negeri (Per KG)",
    "description": "Telur ayam segar dengan kualitas terbaik, sumber protein hewani yang penting untuk gizi keluarga. Ideal untuk berbagai olahan masakan.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=telur-ayam.jpg",
    "category": {
      "id": 101,
      "name": "Bahan Pokok"
    },
    "stock": 10,
    "currentPrice": 28000
  },
  {
    "id": 27,
    "name": "Bawang Merah Segar (Per 250 GR)",
    "description": "Bawang merah segar pilihan, bumbu dasar masakan Indonesia. Memberikan aroma dan rasa khas pada setiap hidangan.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=bawang-merah.jpg",
    "category": {
      "id": 112,
      "name": "Sayuran Segar"
    },
    "stock": 15,
    "currentPrice": 8000
  },
  {
    "id": 28,
    "name": "Bawang Putih Segar (Per 250 GR)",
    "description": "Bawang putih segar, bumbu utama yang wajib ada di dapur. Cocok untuk menumis, marinasi, atau membuat sambal.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=bawang-putih.jpg",
    "category": {
      "id": 112,
      "name": "Sayuran Segar"
    },
    "stock": 15,
    "currentPrice": 9000
  },
  {
    "id": 29,
    "name": "Cabai Merah Besar Segar (Per 250 GR)",
    "description": "Cabai merah besar segar, memberikan sensasi pedas alami pada masakan Anda. Ideal untuk sambal, tumisan, atau sup.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=cabai-merah.jpg",
    "category": {
      "id": 112,
      "name": "Sayuran Segar"
    },
    "stock": 10,
    "currentPrice": 15000
  },
  {
    "id": 30,
    "name": "Tomat Segar (Per 500 GR)",
    "description": "Tomat segar pilihan, kaya vitamin C dan antioksidan. Cocok untuk salad, jus, saus, atau pelengkap masakan.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=tomat-segar.jpg",
    "category": {
      "id": 112,
      "name": "Sayuran Segar"
    },
    "stock": 12,
    "currentPrice": 10000
  },
  {
    "id": 31,
    "name": "Sayur Kangkung (Per Ikat)",
    "description": "Sayur kangkung segar, siap diolah menjadi tumisan atau sup. Sumber serat yang baik untuk pencernaan sehat.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=kangkung-segar.jpg",
    "category": {
      "id": 112,
      "name": "Sayuran Segar"
    },
    "stock": 20,
    "currentPrice": 5000
  },
  {
    "id": 32,
    "name": "Wortel Segar (Per 500 GR)",
    "description": "Wortel segar pilihan, kaya vitamin A untuk kesehatan mata. Cocok untuk sup, jus, atau salad.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=wortel-segar.jpg",
    "category": {
      "id": 112,
      "name": "Sayuran Segar"
    },
    "stock": 18,
    "currentPrice": 7000
  },
  {
    "id": 33,
    "name": "Sabun Cuci Muka Garnier Men Acno Fight 100 ML",
    "description": "Pembersih wajah khusus pria untuk melawan 6 masalah jerawat dan minyak berlebih. Kulit bersih dan tampak cerah.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=garnier-men.jpg",
    "category": {
      "id": 109,
      "name": "Perawatan Diri"
    },
    "stock": 10,
    "currentPrice": 25000
  },
  {
    "id": 34,
    "name": "Pewangi Pakaian Molto Korean Strawberry Sachet",
    "description": "Pewangi pakaian konsentrat dengan aroma strawberry Korea yang menyegarkan. Pakaian harum dan lembut lebih lama.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=molto-strawberry.jpg",
    "category": {
      "id": 110,
      "name": "Pembersih Rumah"
    },
    "stock": 50,
    "currentPrice": 3000
  },
  {
    "id": 35,
    "name": "Pembalut Charm Extra Maxi Wing 26 CM",
    "description": "Pembalut wanita dengan lapisan penyerap ekstra dan sayap pelindung, memberikan perlindungan maksimal dari kebocoran.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=pembalut-charm.jpg",
    "category": {
      "id": 109,
      "name": "Perawatan Diri"
    },
    "stock": 12,
    "currentPrice": 18000
  },
  {
    "id": 36,
    "name": "Pop Mie Cup Rasa Ayam Bawang",
    "description": "Mi instan cup praktis dengan rasa ayam bawang yang gurih. Cocok untuk teman perjalanan atau saat lapar mendadak.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=pop-mie-ayam-bawang.jpg",
    "category": {
      "id": 103,
      "name": "Mi Instan"
    },
    "stock": 30,
    "currentPrice": 5000
  },
  {
    "id": 37,
    "name": "Coca-Cola PET 1 Liter",
    "description": "Minuman soda menyegarkan dengan rasa cola klasik. Nikmati sensasi dinginnya untuk menghilangkan dahaga.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=coca-cola-1l.jpg",
    "category": {
      "id": 107,
      "name": "Minuman Kemasan"
    },
    "stock": 15,
    "currentPrice": 13000
  },
  {
    "id": 38,
    "name": "Air Mineral Aqua 600 ML (Karton Isi 24)",
    "description": "Air mineral murni dari sumber pegunungan terpilih, menjaga tubuh tetap terhidrasi. Kualitas terjamin untuk keluarga Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=aqua-karton.jpg",
    "category": {
      "id": 107,
      "name": "Minuman Kemasan"
    },
    "stock": 7,
    "currentPrice": 45000
  },
  {
    "id": 39,
    "name": "Kecap Asin ABC 135 ML",
    "description": "Kecap asin pilihan untuk berbagai masakan. Memberikan sentuhan rasa gurih dan asin yang pas.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=kecap-asin-abc.jpg",
    "category": {
      "id": 104,
      "name": "Bumbu Dapur"
    },
    "stock": 20,
    "currentPrice": 8000
  },
  {
    "id": 40,
    "name": "Saus Tomat ABC 275 ML",
    "description": "Saus tomat dengan rasa otentik, terbuat dari tomat segar pilihan. Cocok untuk pelengkap bakso, mi, atau gorengan.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=saus-tomat-abc.jpg",
    "category": {
      "id": 104,
      "name": "Bumbu Dapur"
    },
    "stock": 18,
    "currentPrice": 9000
  },
  {
    "id": 41,
    "name": "Susu Kental Manis Indomilk 370 GR",
    "description": "Susu kental manis dari Indomilk, cocok untuk menambah rasa manis dan gurih pada hidangan penutup atau minuman favorit Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=skm-indomilk.jpg",
    "category": {
      "id": 106,
      "name": "Produk Susu"
    },
    "stock": 15,
    "currentPrice": 13500
  },
  {
    "id": 42,
    "name": "Biskuit Roma Sari Gandum 120 GR",
    "description": "Biskuit gandum sehat penuh serat, cocok untuk camilan sehat di sela-sela aktivitas Anda. Rasa gandum asli yang lezat.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=roma-sari-gandum.jpg",
    "category": {
      "id": 108,
      "name": "Makanan Ringan"
    },
    "stock": 22,
    "currentPrice": 6000
  },
  {
    "id": 43,
    "name": "Quaker Oatmeal Instan Merah 200 GR",
    "description": "Oatmeal instan untuk sarapan cepat dan sehat, kaya serat. Membantu menjaga kadar kolesterol dan memberikan energi tahan lama.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=quaker-oatmeal.jpg",
    "category": {
      "id": 111,
      "name": "Roti & Pastry"
    },
    "stock": 10,
    "currentPrice": 18000
  },
  {
    "id": 44,
    "name": "Kopi Luwak White Koffie Original 5 Sachet",
    "description": "Kopi putih instan dengan rasa lembut dan aroma khas, tanpa ampas. Nikmati sensasi kopi yang ringan namun tetap berkarakter.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=kopi-luwak-white.jpg",
    "category": {
      "id": 102,
      "name": "Minuman Instan"
    },
    "stock": 16,
    "currentPrice": 13000
  },
  {
    "id": 45,
    "name": "Teh Sosro Botol Original 350 ML (Pack Isi 12)",
    "description": "Teh botol siap minum yang menyegarkan, dengan rasa teh asli yang sudah dikenal. Cocok untuk menemani aktivitas Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=teh-sosro-botol.jpg",
    "category": {
      "id": 107,
      "name": "Minuman Kemasan"
    },
    "stock": 9,
    "currentPrice": 42000
  },
  {
    "id": 46,
    "name": "Biskuit Khong Guan Kaleng Merah Kecil",
    "description": "Aneka biskuit legendaris dalam kemasan kaleng kecil, cocok untuk suguhan di rumah atau hadiah. Selalu ada untuk momen kebersamaan.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=khong-guan-kecil.jpg",
    "category": {
      "id": 108,
      "name": "Makanan Ringan"
    },
    "stock": 7,
    "currentPrice": 25000
  },
  {
    "id": 47,
    "name": "Pepsi Cola Kaleng 330 ML",
    "description": "Minuman soda kalengan dengan rasa cola yang kuat dan menyegarkan. Nikmati dinginnya Pepsi untuk memeriahkan suasana.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=pepsi-kaleng.jpg",
    "category": {
      "id": 107,
      "name": "Minuman Kemasan"
    },
    "stock": 20,
    "currentPrice": 7000
  },
  {
    "id": 48,
    "name": "Snack Taro Net Rasa Rumput Laut 60 GR",
    "description": "Camilan renyah berbentuk jaring dengan rasa rumput laut yang unik dan gurih. Cocok untuk kamu yang suka camilan inovatif.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=taro-rumput-laut.jpg",
    "category": {
      "id": 108,
      "name": "Makanan Ringan"
    },
    "stock": 28,
    "currentPrice": 7000
  },
  {
    "id": 49,
    "name": "Royco Kaldu Ayam Sachet",
    "description": "Bumbu penyedap rasa ayam untuk memperkaya cita rasa masakan Anda. Praktis digunakan untuk berbagai jenis hidangan.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=royco-ayam.jpg",
    "category": {
      "id": 104,
      "name": "Bumbu Dapur"
    },
    "stock": 50,
    "currentPrice": 2000
  },
  {
    "id": 50,
    "name": "Masako Kaldu Sapi Sachet",
    "description": "Bumbu penyedap rasa sapi untuk memberikan aroma dan rasa sapi yang kuat pada masakan. Tingkatkan kelezatan hidangan Anda.",
    "imageUrl": "https://placehold.co/160x160/F0F0F0/000000?text=masako-sapi.jpg",
    "category": {
      "id": 104,
      "name": "Bumbu Dapur"
    },
    "stock": 50,
    "currentPrice": 2000
  }
];

export { dummyProducts };
