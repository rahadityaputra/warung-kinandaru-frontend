import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CartNavbar = () => {
  return (
    <nav className="sticky z-20 bg-white top-0 p-4 h-[70px] flex flex-row justify-between sm:items-center sm:justify-between gap-3 shadow-md">


      <div className='flex gap-2 items-center'>
        <Link href={'/'}>
          <button className='flex justify-center items-center cursor-pointer'>
            <ArrowLeft />
          </button>
        </Link>
        <h1 className='font-bold'>Keranjang</h1>

      </div>

    </nav >)
};


export default CartNavbar;
