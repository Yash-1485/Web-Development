import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ProductList from './ProductList';
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.jpg'
import img5 from './assets/images/img5.jpg'
import img6 from './assets/images/img6.jpg'
import img7 from './assets/images/img7.jpg'
import img8 from './assets/images/img8.jpg'
import img9 from './assets/images/img9.jpg'
import img10 from './assets/images/img10.jpg'
function App() {
  const products = [
    {
      id: 1,
      title: 'Arduino Uno R3',
      price: 22.99,
      rating: 4.8,
      image: img1,
    },
    {
      id: 2,
      title: 'Raspberry Pi 4 Model B',
      price: 59.99,
      rating: 4.9,
      image: img2,
    },
    {
      id: 3,
      title: 'ESP32 Development Board',
      price: 12.49,
      rating: 4.7,
      image: img3,
    },
    {
      id: 4,
      title: '74HC595 Shift Register',
      price: 1.29,
      rating: 4.4,
      image: img4,
    },
    {
      id: 5,
      title: 'Breadboard 830 Tie Points',
      price: 4.99,
      rating: 4.6,
      image: img5,
    },
    {
      id: 6,
      title: 'Jumper Wire Set (Male to Male)',
      price: 3.49,
      rating: 4.5,
      image: img6,
    },
    {
      id: 7,
      title: 'LM7805 Voltage Regulator',
      price: 0.99,
      rating: 4.3,
      image: img7,
    },
    {
      id: 8,
      title: '10K Ohm Resistor Pack (100 pcs)',
      price: 1.99,
      rating: 4.6,
      image: img8,
    },
    {
      id: 9,
      title: 'LED Pack (Red, Green, Blue)',
      price: 2.49,
      rating: 4.5,
      image: img9,
    },
    {
      id: 10,
      title: '16x2 LCD Display (I2C)',
      price: 6.99,
      rating: 4.7,
      image: img10,
    },
  ];

  return (
    <>
      <div className="container mh-screen w-full bg-zinc-900 text-white">
        <h1 className='text-3xl p-8'>Product List</h1>
        <ProductList products={products} />
      </div>
    </>
  )
}

export default App
