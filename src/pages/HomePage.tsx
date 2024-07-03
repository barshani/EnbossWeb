import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/apiService';
import { json } from 'stream/consumers';
export interface Product{
  _id:String;
  productName:string;
  size:string;
  color:string;
  img:string;
  alt:string;
  category:string;
  subCategory:string;
  price:Number;
  
}
function HomePage() {
  const [products,setProducts] = useState<Array<Product>>([])
  useEffect(()=>{
    getProducts().then(json=>{
      setProducts(json)
      console.log(json)
  })
    
  })
  console.log(products)
  return (
    <div>
      {products.map(product=><div>{product.productName}</div>)}
      </div>
  )
}

export default HomePage