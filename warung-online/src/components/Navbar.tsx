import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import Category from '@/types/Category';

type NavbarProps = {
  isSearchInputAvailable?: boolean,
  isCategoryBoxAvailable?: boolean,
  onSearch?: (text: string) => void,
  placeholderOnInputSearch?: string
}

const Navbar = ({ isSearchInputAvailable = true, isCategoryBoxAvailable = true, onSearch, placeholderOnInputSearch }: NavbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([])
  const [isShowSearchInputForMobile, setIsShowSearchInputMobile] = useState(false)


  const fetchCategories = async () => {
    try {
      const fetchResult = await fetch("https://kinandaru-backend.vercel.app/api/categories");
      const result = await fetchResult.json();
      const categories = result.data
      setCategories(categories);
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    if (onSearch) {
      onSearch(text);
    }
  }

  const handleClickSearchIcon = () => {
    setIsShowSearchInputMobile((prev) => {
      return !prev;
    })
  }

  if (isShowSearchInputForMobile) {
    return (

      <nav className="sticky z-20 bg-white top-0 p-4 flex flex-row justify-between sm:items-center sm:justify-between gap-3 shadow-md">

        <div className="flex gap-2 w-full sm:w-80 sm:mx-0">
          <input
            type="text"
            placeholder={placeholderOnInputSearch}
            onChange={handleInputSearch}
            className="rounded-sm pl-10 pr-4 w-full text-sm text-gray-800 bg-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition duration-200 shadow-sm"
          />
          <button
            onClick={() => { setIsShowSearchInputMobile(false) }}
            className="text-gray-500 hover:text-red-600 text-3xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      </nav >)
  }

  return (
    <nav className="sticky z-20 bg-white top-0 p-4 flex flex-row justify-between sm:items-center sm:justify-between gap-3 shadow-md">
      <h1 className={`font-quicksand text-green-700 text-2xl font-semibold sm:text-left tracking-wide`}>
        Kinandaru
      </h1>

      <div className='flex gap-2 items-center'>
        {isCategoryBoxAvailable && (
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)} // Tampilkan dropdown saat mouse masuk
            onMouseLeave={() => setIsDropdownOpen(false)} // Sembunyikan dropdown saat mouse keluar
          >

            <button
              className="hidden md:flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              Kategori
              <svg
                className={`ml-2 -mr-1 h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Isi Dropdown */}
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-3 w-80 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none max-h-80 overflow-y-auto" // max-h dan overflow untuk scroll jika terlalu banyak
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                onMouseEnter={() => { setIsDropdownOpen(true) }}
                onMouseLeave={() => { setIsDropdownOpen(false) }}
              >
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href={`/kategori/${encodeURIComponent(category.name.toLowerCase().replace(/\s+/g, '-'))}`} // Contoh URL kategori
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    role="menuitem"
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            )}
          </div>


        )}
        <div className='md:hidden'>
          <button className='flex justify-center items-center' onClick={handleClickSearchIcon}>
            <Search
              className="text-gray-500 pointer-events-none"
              size={20}
            />
          </button>

        </div>
        {isSearchInputAvailable && (
          <div className="relative hidden md:block w-full sm:w-80 mx-auto sm:mx-0">
            <input
              type="text"
              placeholder={placeholderOnInputSearch}
              onChange={handleInputSearch}
              className="rounded-sm pl-10 pr-4 py-2 w-full text-sm text-gray-800 bg-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition duration-200 shadow-sm"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              size={20}
            />
          </div>
        )}

      </div>

    </nav >)
};


export default Navbar;
