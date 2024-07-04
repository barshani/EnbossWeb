import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/apiService'

function SearchModal({search}) {
const [products,setProducts] = useState([])
const [guides,setGuides] = useState([])
const [parks,setParks] = useState([])
useEffect(()=>{
    getProducts().then((json)=>setProducts(json))
})
  return (
        <>
        
            {products.length>0&&<div>
             <img src={products[0].img} alt={products[0].alt} />
              <div className='cardInfo'>
                <h3>{products[0].productName}</h3>
                <p>{products[0].subCategory}</p>
            </div>
            </div>
}
            {products.length>1&&<div>
             <img src={products[1].img} alt={products[0].alt} />
              <div className='cardInfo'>
                <h3>{products[1].productName}</h3>
                <p>{products[1].subCategory}</p>
            </div>
            </div>}
            <div>
             <img src={products[0].img} alt={products[0].alt} />
              <div className='cardInfo'>
                <h3>{products[0].productName}</h3>
                <p>{products[0].subCategory}</p>
            </div>
            </div>
            <div>
             <img src={products[0].img} alt={products[0].alt} />
              <div className='cardInfo'>
                <h3>{products[0].productName}</h3>
                <p>{products[0].subCategory}</p>
            </div>
            </div>
            <div>
             <img src={products[0].img} alt={products[0].alt} />
              <div className='cardInfo'>
                <h3>{products[0].productName}</h3>
                <p>{products[0].subCategory}</p>
            </div>
            </div>
            <div>
             <img src={products[0].img} alt={products[0].alt} />
              <div className='cardInfo'>
                <h3>{products[0].productName}</h3>
                <p>{products[0].subCategory}</p>
            </div>
            </div>
        </>
  )
}

export default SearchModal