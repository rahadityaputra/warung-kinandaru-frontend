import Product from "@/types/Product";
import ProductCard from "@/components/Cards/ProductCard";
import { useState } from "react";
import dynamic from "next/dynamic";
import CartItem from "@/types/CartItem";
import { localStorageHelper } from "@/helper/localStorageHelper";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import CheckmarkCircleIcon from "@/components/Icons/CheckmarkCircleIcon";

const Modal = dynamic(() => import('@/components/Modals/Modal'))
const AddToCartModal = dynamic(() => import("@/components/Modals/AddToCartModal"))

function ProductList({ products, onLoadMore, showLoadMoreButton }: { products: Product[], onLoadMore: () => void, showLoadMoreButton: boolean }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false);

  const handleAddToCartModal = (product: Product) => {
    setIsAddToCartModalOpen(true);
    setSelectedProduct(product);
    document.body.classList.add("overflow-hidden")
  }
  const handleAddToCartClick = (product: any) => {
    addProductToCartDatabase(product);
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    document.body.classList.remove("overflow-hidden")
    setIsSuccessModalOpen(false)

  }

  const addProductToCartDatabase = (newProduct: any) => {
    const cartData = localStorageHelper.get<any[]>("Cart_item_data_warung_kinandaru") || [];
    const existingIndex = cartData.findIndex(item => item.id === newProduct.id);

    if (existingIndex !== -1) {
      const existingItem = cartData[existingIndex];
      const maxQuantity = Math.min(existingItem.quantity + newProduct.quantity, newProduct.stock);

      const updatedCart = [...cartData];
      updatedCart[existingIndex] = {
        ...existingItem,
        quantity: maxQuantity
      };
      localStorageHelper.set<CartItem[]>("Cart_item_data_warung_kinandaru", updatedCart)
    } else {
      const quantity = Math.min(newProduct.quantity, newProduct.stock);
      newProduct.quantity = quantity;
      cartData.push(newProduct)
      localStorageHelper.set<CartItem[]>("Cart_item_data_warung_kinandaru", cartData)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 p-6 min-h-screen">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} onOpenAddToCartModal={handleAddToCartModal} />
        ))}

        <Modal
          isOpen={isSuccessModalOpen}
          onClose={handleCloseSuccessModal}
          title="Berhasil Ditambahkan"
        >
          <div className='p-5 flex flex-col text-white bg-white justify-center items-center'>
            <CheckmarkCircleIcon size={70} />
            <div className="flex items-end gap-3">
              <button className='bg-gray-300 p-3 mt-3 rounded-sm cursor-pointer hover:bg-gray-400' onClick={handleCloseSuccessModal}>Kembali</button>
              <Link href={'/cart'}>
                <button className='bg-green-500 p-3 mt-3 rounded-sm cursor-pointer hover:bg-green-700'>Cek Keranjang</button>
              </Link>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={isAddToCartModalOpen}
          onClose={() => {
            document.body.classList.remove("overflow-hidden")
            setIsAddToCartModalOpen(false)
          }}
        >
          {selectedProduct && <AddToCartModal product={selectedProduct} onAddToCart={handleAddToCartClick} onClose={() => { setIsAddToCartModalOpen(false) }} />}
        </Modal>


      </div >

      {
        showLoadMoreButton &&
        (<div className="flex justify-center w-full p-5 cursor-pointer">
          <button className="flex items-center bg-green-500 text-white px-3 py-2 rounded-sm" onClick={onLoadMore} >
            <ArrowDown />
          </button>
        </div>)
      }

    </>
  )
}


export default ProductList;
