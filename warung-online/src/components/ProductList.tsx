import Product from "@/types/Product";
import ProductCard from "./ProductCard";
import { useState } from "react";
import dynamic from "next/dynamic";
import { CartItem } from "@/types/CartItem";
import { localStorageHelper } from "@/helper/localStorageHelper";
import CheckIcon from "./CheckIcon";
import { ArrowDown } from "lucide-react";

const Modal = dynamic(() => import('@/components/Modal'))
const AddToCartModal = dynamic(() => import("@/components/AddToCartModal"))

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
      localStorageHelper.set<any[]>("Cart_item_data_warung_kinandaru", updatedCart)
    } else {
      const quantity = Math.min(newProduct.quantity, newProduct.stock);
      newProduct.quantity = quantity;
      cartData.push(newProduct)
      localStorageHelper.set<any[]>("Cart_item_data_warung_kinandaru", cartData)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 p-6 min-h-screen">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} onOpenAddToCartModal={handleAddToCartModal} />
        ))}

        <Modal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          title="Berhasil Ditambahkan"
        >
          <div className='p-5 flex flex-col bg-white justify-center items-center'>
            <CheckIcon />
            <button className='bg-green-500 p-3 mt-3 rounded-sm'>Cek Keranjang</button>
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


      </div>
      {showLoadMoreButton && (<div className="flex justify-center w-full p-5 cursor-pointer">
        <button className="flex items-center bg-green-500 text-white px-3 py-2 rounded-sm" onClick={onLoadMore} >
          <ArrowDown />
        </button>
      </div>)}

    </div >
  )
}


export default ProductList;
