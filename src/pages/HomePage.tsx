import React, { useEffect, useState } from 'react'
import '../styles/homePage.css';
import { getProducts } from '../services/apiService';
import ProductCard from '../components/ProductCard';
export interface Product{
  _id: string;
  productName: string;
  size: string;
  color: string;
  img: string;
  alt: string;
  category: string;
  subCategory: string;
  price: number;
}

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((json: Product[]) => {
      setProducts(json);
    });
  }, []);
  return (
    <section className='shopCards'>
      <div className='productCards'>
        {products.map((product)=>(
          <ProductCard product={product}/>
        ))}
        </div>
      </section>
  )
}

export default HomePage