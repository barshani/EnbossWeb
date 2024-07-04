import React from 'react'

function ProductCard({product}) {
  return (
    <div className="productCard" key={product._id}>
            <div className='card'>
              <img src={product.img} alt={product.alt} />
              <div className='cardInfo'>
                <h3>{product.productName}</h3>
                <p>{product.subCategory}</p>
                <p className='price'>{product.price} ₪</p>
              </div>
            </div>
          </div>
    
  )
}

export default ProductCard

