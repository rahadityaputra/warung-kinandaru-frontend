'use client';

import { useEffect, useMemo, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Product from '@/types/Product';
import ProductList from '@/components/ProductList';
import LoadingProduct from '@/components/LoadingProduct';
import ErrorMessage from '@/components/ErrorMessage';
import EmptyProductState from '@/components/EmpryProductState';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const productPerPage = 10;
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])

  const filteredProducts = useMemo(() => products?.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  ), [products, search]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const fetchResult = await fetch("https://kinandaru-backend.vercel.app/api/products");
      const result = await fetchResult.json();
      const product = result.data
      setProducts(product);
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
      ) : !fetchError ? products.length == 0 ?
        <EmptyProductState /> :
        (<ProductList products={search ? filteredProducts : featuredProducts} onLoadMore={handleLoadMore} showLoadMoreButton={shouldShowLoadMoreButton} />
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
