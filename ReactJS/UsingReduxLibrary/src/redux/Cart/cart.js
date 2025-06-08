import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
    name: 'cart',
    initialState: {
        value: 0
    },
    reducers: {
        addToCart: state => {
            if(state.value<10) state.value += 1
        },
        removeFromCart: state => {
            if(state.value>0) state.value -= 1
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cart.actions

export default cart.reducer