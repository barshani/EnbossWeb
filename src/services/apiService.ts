import { Guide, Park, Product } from "../pages/HebrewPages/HomePage";

const databaseUrl ='http://localhost:3001/'
export async function getProducts():Promise<Product[]> {
    const res = await fetch(`${databaseUrl}products`);
    return res.json();
}
export async function getParks():Promise<Park[]> {
    const res = await fetch(`${databaseUrl}parks`);
    return res.json();
}
export async function getGuides():Promise<Guide[]> {
    const res = await fetch(`${databaseUrl}guides`);
    return res.json();
}