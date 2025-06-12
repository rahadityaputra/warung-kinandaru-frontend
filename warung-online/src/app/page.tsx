'use client';

import { useEffect, useMemo, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { dummyProducts } from '@/data/products';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Product from '@/types/Product';
import ProductList from '@/components/ProductList';
import LoadingProduct from '@/components/LoadingProduct';
import ErrorMessage from '@/components/ErrorMessage';

const getProducts = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    throw new Error();
  } catch (error) {
    throw new Error("Produk tidak dapat dimuat ! ");
  }
}


export default function HomePage() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const productPerPage = 10;
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])

  const filteredProducts = useMemo(() => products?.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  ), [products, search]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const results = await getProducts();
      setProducts(results);
    } catch (error: any) {
      setFetchError(error.message)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const initialFeatured = search ? filteredProducts.slice(0, productPerPage) : products.slice(0, productPerPage);
    setFeaturedProducts(initialFeatured);
  }, [products, productPerPage]);

  const retryFetchProducts = () => {
    setProducts([]); // Kosongkan produk
    setFetchError(null); // Hapus pesan error
    // Panggil kembali fungsi fetch utama
    fetchProducts();
  };
  const handleSearch = (text: string) => {
    setSearch(text);
  }

  const handleLoadMore = () => {
    const sourceProducts = search ? filteredProducts : products;

    setFeaturedProducts((prevFeatured) => {
      const currentLength = prevFeatured.length;
      const nextSlice = sourceProducts.slice(0, currentLength + productPerPage);
      return nextSlice;
    });
  };

  const shouldShowLoadMoreButton = featuredProducts.length < (search ? filteredProducts.length : products.length);

  return (
    <div className="bg-gray-100 flex flex-col">
      <Navbar onSearch={handleSearch} placeholderOnInputSearch={"Cari Kebutuhanmu"} />
      {loading ? (
        <LoadingProduct />
      ) : !fetchError ? (<ProductList products={search ? filteredProducts : featuredProducts} onLoadMore={handleLoadMore} showLoadMoreButton={shouldShowLoadMoreButton} />
      ) :
        <ErrorMessage message={fetchError} showRetryButton={true} onRetry={retryFetchProducts} />
      }

      <div className="fixed bottom-6 right-6">
        <Link href={'/cart'}>
          <button className="bg-purple-600 p-4 rounded-full shadow-xl text-white cursor-pointer">
            <ShoppingCart />
          </button>
        </Link>
      </div>
    </div>
  );
}
