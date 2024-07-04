import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/apiService';

export interface Product {
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

  console.log(products);

  return (
    <div>
    
      {products.map((product) => (
        <div key={product._id}>{product.productName}</div>
      ))}
    </div>
  );
}

export default HomePage;
