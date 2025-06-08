import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount, multiply, divide, setToZero } from './redux/counter/counterSlice'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Cart from './components/Pages/Cart'

const App = () => {
  // const count = useSelector(state => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className='min-h-screen bg-black text-gray-300 flex justify-center items-center flex-col gap-4'>
      {/* <h1 className="text-5xl">
        Count: {count}
      </h1>

      <div className="btns my-6 flex justify-center items-center gap-4 text-3xl">
        <button type="button" onClick={()=>{dispatch(increment());}} className='w-14 h-14 rounded bg-blue-500'><span>+</span></button>
        <button type="button" onClick={()=>{dispatch(incrementByAmount(90));}} className='w-14 h-14 rounded bg-blue-500'><span>+</span></button>
        <button type="button" onClick={()=>{dispatch(decrement());}} className='w-14 h-14 rounded bg-blue-500'><span>-</span></button>
        <button type="button" onClick={()=>{dispatch(multiply(10));}} className='w-14 h-14 rounded bg-blue-500'><span>*</span></button>
        <button type="button" onClick={()=>{dispatch(divide(20));}} className='w-14 h-14 rounded bg-blue-500'><span>/</span></button>
        <button type="button" onClick={()=>{dispatch(setToZero());}} className='w-14 h-14 rounded bg-blue-500'><span>0</span></button>
      </div> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>  
  )
}

export default App

