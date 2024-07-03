import { Product } from "../pages/HomePage";

const serverUrl = 'http://localhost:3001/';
const productsUrl = `${serverUrl}products/`;

export async function getProducts(): Promise<Product[]> {
    fetch(`${process.env.REACT_APP_SERVER_URL}dishes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
}
