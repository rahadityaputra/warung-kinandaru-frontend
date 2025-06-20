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
import dynamic from 'next/dynamic';
import { dummyProducts } from '@/data/products';

const Footer = dynamic(() => import("@/components/Footer"));
export default function HomePage() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isEmptyProduts, setIsEmptyProducts] = useState(false);
  const productPerPage = 10;
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])

  const filteredProducts = useMemo(() => {
    setIsEmptyProducts(false);
    const searchResults = products?.filter(product => {
      return product.name.toLowerCase().includes(search.toLowerCase())
    }
    )
    if (searchResults.length == 0) {
      setIsEmptyProducts(true);
    }

    return searchResults;
  }, [products, search]);

  const fetchProducts = async () => {
    setLoading(true);
    setTimeout(() => {
      try {
        if (dummyProducts.length == 0) {
          setIsEmptyProducts(true)
        } else {
          setProducts(dummyProducts);
        }
      } catch (error: any) {
        setFetchError(error.message)
      } finally {
        setLoading(false);
      }
    }, 1500)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const initialFeatured = search ? filteredProducts.slice(0, productPerPage) : products.slice(0, productPerPage);
    setFeaturedProducts(initialFeatured);
  }, [products, productPerPage]);

  const retryFetchProducts = () => {
    setProducts([]);
    setFetchError(null);

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
      ) : !fetchError ? isEmptyProduts ?
        <EmptyProductState /> :
        (<ProductList products={search ? filteredProducts : featuredProducts} onLoadMore={handleLoadMore} showLoadMoreButton={shouldShowLoadMoreButton} />
        ) :
        <ErrorMessage message={fetchError} showRetryButton={true} onRetry={retryFetchProducts} />
      }

      <Footer />
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
