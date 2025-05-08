import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Background from "./components/Background"
import Hero from "./components/Hero"

const App = () => {

  const textColors={
    color0:"text-green-700",
    color1:"text-orange-900",
    color2:"text-emerald-900",
  }

  const gradientTextColors={
    color0:{
      color00:"bg-gradient-to-r from-blue-950 via-emerald-800 to-purple-950 text-transparent bg-clip-text",
      color01:"bg-gradient-to-l from-blue-950 via-emerald-900 to-purple-950 text-transparent bg-clip-text"
    },
    color1:"",
    color2:"",
  }

  const heroText = [
    {
      "text1": "Unleash the Power",
      "text2": "Experience next-gen performance with our latest sports lineup."
    },
    {
      "text1": "Drive with Confidence",
      "text2": "Advanced safety and comfort features built for every journey."
    },
    {
      "text1": "Electric Meets Excellence",
      "text2": "Discover the future of driving with our all-electric models."
    }
  ]


  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <>
      <Hero
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroText={heroText}
        textColors={textColors}
      />
      <Navbar />
      <Background heroCount={heroCount} playStatus={playStatus} />
    </>
  )
}

export default App

