// const App = () => {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   )
// }

import axios from "axios";
import { useContext, useState } from "react";

// import { useState } from "react";
// import Navbar from './Components/Navbar.jsx';
// import Footer from './Components/Footer.jsx';
// import { useState } from "react"


// const App = () => {

//   const [a, setA] = useState(0);

//   return (
//     <div>
//       <h1>Number is: {a}</h1>
//       <button type="button" onClick={()=>setA(a+10)}>Increase</button>
//       <button type="button" onClick={()=>setA(a-10)}>Decrease</button>
//     </div>
//   )

// }

// Applying Tailwind CSS
// function App() {
//   return (
//     <div className="w-full h-screen bg-zinc-900 text-white">
//       <h1>Hello World!</h1>
//     </div>
//   )
// }

// Two way binding
// function App(){

//   const [a,setA]=useState("Hello World!");

//   const func=(e)=>{
//     e.preventDefault();
//     console.log(a);
//     setA('');
//   }

//   return(
//     <>
//       <div className="container w-full h-screen text-white bg-zinc-900 px-4 py-2">
//         <form action="" onSubmit={(e)=>func(e)}>
//           <input type="text" name="kuchbhi" id="kuchbhi" value={a} onChange={(e)=>setA(e.target.value)} className="border-2 border-zinc-500 rounded px-4 py-2 mx-2" placeholder="Enter Anything"/>
//           <button type="submit" className="px-4 py-2 bg-blue-500 rounded">Submit</button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default App

// Components
// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-screen bg-zinc-900 text-white">
//         <h1 className="text-xl">Hello World!</h1>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App

// Using Props
// import PropsEx from "./Components/PropsEx"

// const App = () => {
//   const email="yash@gmail.com"
//   return (
//     <div>
//       <PropsEx username="Yash" age={19} email={email}/>
//     </div>
//   )
// }

// export default App


// Creating Dynamic Cards
// import Navbar from './Components/Navbar.jsx';
// import Footer from './Components/Footer.jsx';
// import Card from './Components/Card.jsx';
// const App = () => {

//   const cardArray = [
//     {
//       "profile_photo_path": "/src/assets/images/pf1.png",
//       "username": "john_doe",
//       "profession": "Software Engineer",
//       "email": "john.doe@example.com",
//       "age": 28
//     },
//     {
//       "profile_photo_path": "src/assets/images/pf2.png",
//       "username": "jane_smith",
//       "profession": "Graphic Designer",
//       "email": "jane.smith@example.com",
//       "age": 32
//     },
//     {
//       "profile_photo_path": "src/assets/images/pf3.png",
//       "username": "michael_lee",
//       "profession": "Data Analyst",
//       "email": "michael.lee@example.com",
//       "age": 26
//     },
//     {
//       "profile_photo_path": "src/assets/images/pf4.png",
//       "username": "emma_wilson",
//       "profession": "Marketing Manager",
//       "email": "emma.wilson@example.com",
//       "age": 35
//     },
//     {
//       "profile_photo_path": "src/assets/images/pf5.png",
//       "username": "alex_turner",
//       "profession": "UX Designer",
//       "email": "alex.turner@example.com",
//       "age": 30
//     }
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="w-full h-screen bg-zinc-900 text-white px-6 py-4">
//         <h1 className="text-5xl">Cards</h1>
//         <div className="cards flex flex-wrap gap-5 my-4">
//           {cardArray.map((card,idx)=>{
//             return <Card key={idx} photu={card.profile_photo_path} username={card.username} age={card.age} email={card.email} profession={card.profession}/>
//           })}
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App;

// API(axios) -> fetching data from API
// const App = () => {

//   // Empty Array
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");
//     if (response) setData(response.data);
//     console.log(data);
//   }

//   return (
//     <div className="container w-full min-h-screen bg-zinc-900 px-10 py-6 mx-auto">
//       <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded" onClick={getData}>Get Data</button>

//       <div className="container px-10 py-6 border-2 border-zinc-500 my-2 rounded-md flex flex-wrap w-full gap-3 items-center justify-center">
//         {data.map((ele, idx) => {
//           return <div key={idx} className="container px-4 py-2 border-2 border-zinc-500 bg-white flex justify-between flex-col max-w-60">
//             <img src={ele.download_url} className="w-50 h-50 mx-auto" />
//             <h1>{ele.author}</h1>
//           </div>
//         })}
//       </div>
//     </div>
//   )
// }

// export default App;

// Another API Calling
// const App = () => {

//   const [data, setData] = useState([]);

//   const getWhetherData = async () => {
//     const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=3371459b3cd745adb0291638250701&q=Ahmedabad&aqi=yes");
//     console.log(response);
//     setData(response.data);
//   }

//   // getWhetherData()

//   return (
//     <div className="container bg-zinc-900 text-white w-full min-h-screen px-10 py-4">
//       <h1 className="text-3xl my-8">Wheather Data</h1>
//       <div className="flex justify-center items-center border-1 border-gray-500">
//         <div className="location_data">

//         </div>
//         <div className="current_data">

//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

// React Router DOM
// import Navbar from "./Components/Navbar"
// import Footer from "./Components/Footer"
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// const App = () => {
//   return (
//     <>
//       <Navbar />

//       <Routes >
//         <Route path="/" element={<Home username="Yash" />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </>
//   )
// }

// export default App

// Context API - To centralize the data so that we can use it from anywhere
import React from 'react'
import { DataContext } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {

  const data = useContext(DataContext);

  return (
    <>
      <Navbar />
      <div className="container w-full min-h-screen bg-zinc-900 text-white flex justify-center items-center">
        Hello from App,<br /> 
        Username: {data.username} <br />
        Age: {data.age} <br />
        Marks: {data.marks}
      </div>
      <Footer />
    </>
  )
}

export default App
