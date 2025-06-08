import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    multiply: (state,action) => {
      if(!action.payload) action.payload=1
      state.value *= action.payload
    },
    divide: (state,action) => {
      if(!action.payload) action.payload=1
      state.value /= action.payload
    },
    incrementByAmount: (state, action) => {
      if(!action.payload) action.payload=1
      state.value += action.payload
    },
    setToZero: state=>{
      state.value=0;
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiply, divide, setToZero } = counterSlice.actions

export default counterSlice.reducer