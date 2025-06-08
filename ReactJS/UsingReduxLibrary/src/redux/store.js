import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import cart  from './Cart/cart';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cart
  }
});