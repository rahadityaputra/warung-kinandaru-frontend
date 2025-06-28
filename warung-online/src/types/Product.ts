import Category from "./Category";

type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: Category;
  stock: number;
  currentPrice: number
}



export default Product;
