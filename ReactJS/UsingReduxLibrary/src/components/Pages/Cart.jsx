import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/Cart/cart'

const Cart = () => {
  const cart=useSelector(state=>state.cart.value);
  const dispatch=useDispatch();
      
  return (
    <section className="min-h-screen bg-black text-gray-300 py-20 flex justify-center items-center w-full flex-col">
        <h1 className="text-5xl text-center mb-8 font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Cart</h1>
        <div className="container max-w-3xl flex justify-center items-center flex-col">
          <h1 className="text-2xl text-gray-300 font-bold">
              Cart Quantity: {cart}
          </h1>
          <div className="btns my-6 flex justify-center items-center gap-4 text-3xl">
              <button type="button" onClick={()=>{dispatch(addToCart());}} className='w-14 h-14 rounded bg-blue-500'><span>+</span></button>
              <button type="button" onClick={()=>{dispatch(removeFromCart());}} className='w-14 h-14 rounded bg-blue-500'><span>-</span></button>
          </div>
      </div>
    </section>
  )
}

export default Cart
