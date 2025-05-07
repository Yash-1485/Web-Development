import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Background from "./components/Background"
import Hero from "./components/Hero"

const App = () => {

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
      <Navbar />
      <Hero
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroText={heroText}
      />
      <Background heroCount={heroCount} playStatus={playStatus} />
    </>
  )
}

export default App

