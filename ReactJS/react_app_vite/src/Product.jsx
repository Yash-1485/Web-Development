import React from 'react'

const Product = (props) => {
  return (
    <>
        <div className="product card w-48">
            <div className="image">
                <img src={props.image} className='w-[15rem] h-[10rem] rounded-xl border-2 border-emerald-500' />
            </div>
            <h1>Name: {props.title}</h1>
            <h2>Price: {props.price}</h2>
            <h3>Rating: {props.rating}</h3>
        </div>
    </>
  )
}

export default Product
