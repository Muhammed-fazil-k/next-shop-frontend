import { fetchJson } from "./api";

export interface Product {
  id: number;
  title: string;
  description: string;
  price:string;
}

const CMS_URL = process.env.CMS_URL;

export async function getProducts(): Promise<Product[]> {
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
} 

export async function getProduct(id: any): Promise<Product> {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
}

function stripProduct(product: any): Product {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price:'$'+product.price.toFixed(2),
  };
}
