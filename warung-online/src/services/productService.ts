import Product from "@/types/Product";

const getAllProducts = async (): Promise<Product[]> => {
  try {
    const API_URL = process.env.BACKEND_API;
    const response = await fetch(API_URL + '/api/products');
    const products = response.json();
    return products;
  } catch (error) {
    throw error;
  }
}

export {
  getAllProducts
}
