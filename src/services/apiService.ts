import { Product } from "../pages/HomePage";

const productUrl ='http://localhost:3001/'
export async function getProducts():Promise<Product[]> {
    const res = await fetch(`${productUrl}products`);
    return res.json();
}