import { useRef } from "react"
import nextImage from "../assets/images/NextIcon.png"
import playIcon from "../assets/images/playIcon.png"
import pauseIcon from "../assets/images/pauseIcon.png"

const Hero = ({ heroCount, setHeroCount, playStatus, setPlayStatus, heroText, textColors }) => {
  const handlePlayPause = () => {
    console.log(`Current playStatus: ${playStatus}, changing to: ${!playStatus}`);
    setPlayStatus(!playStatus);
  };

  const playpauseImage = () => {
    if (playStatus) {
      return <img
        src={pauseIcon}
        className="w-10 cursor-pointer"
        onClick={handlePlayPause}
        alt={playStatus ? "Pause Video" : "Play Video"}
      />
    }
    return <img
      src={playIcon}
      className="w-10 cursor-pointer"
      onClick={handlePlayPause}
      alt={playStatus ? "Pause Video" : "Play Video"}
    />
  }

  heroText = heroText[heroCount];
  return (
    <div className={"hero w-full min-h-screen overflow-hidden absolute flex justify-between items-end px-20 py-10 bg-gradient-to-r from-zinc-600 via-transparent to-transparent"}>
      <div className="hero-text w-1/2">
        <p className="text-6xl font-bold">{heroText.text1}</p>
        <p className="text-4xl font-semibold">{heroText.text2}</p>
        <div className="hero-explore flex gap-3 items-center font-semibold border-2 rounded-full px-4 py-2 bg-zinc-300 w-fit mt-2">
          <p>Explore More</p>
          <img src={nextImage} className="w-10" />
        </div>
      </div>
      <div className="hero-play flex gap-3 items-center font-semibold">
        <p>Play the video</p>
        {playpauseImage()}
      </div>
    </div>
  )
}

export default Hero
