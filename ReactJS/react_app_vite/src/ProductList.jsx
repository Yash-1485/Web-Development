import React from 'react'
import Product from './Product'

const ProductList = ({products}) => {
  return (
    <>
        <div className="container products flex gap-5 flex-wrap p-8">
            {
                products.map((product,idx)=>{
                    return <>
                        <Product title={product.title} price={product.price} rating={product.rating} image={product.image} key={idx}/>
                    </>
                })
            }
        </div>
    </>
  )
}

export default ProductList
