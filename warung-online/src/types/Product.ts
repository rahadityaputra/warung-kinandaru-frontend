type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: Category;
  stock: number;
  priceHistory: PriceHistory[]
}

interface PriceHistory {
  id: number,
  price: number
}

interface Category {
  id: number,
  name: string
}

export default Product;
