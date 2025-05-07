import nextImage from "../assets/images/NextIcon.png"
import playIcon from "../assets/images/playIcon.png"
import pauseIcon from "../assets/images/pauseIcon.png"

const Hero = ({ heroCount, setHeroCount, playStatus, setPlayStatus, heroText }) => {
  heroText = heroText[heroCount];
  return (
    <div className="hero w-full h-full absolute px-20 py-2 overflow-hidden">
      <div className="hero-text absolute w-1/2 h-full top-[80%] text-white">
        <p className="hero-text-1 text-6xl font-semibold">{heroText.text1}</p>
        <p className="hero-text-2 text-4xl font-semibold">{heroText.text2}</p>
      </div>
      <div className="hero-explore absolute left-[80%] top-[85%] flex items-center flex-col">
        <div className="hero-videoplay flex gap-3 items-center text-left">
          <p className="text-lg text-white">Play the video</p>
          <img onClick={() => { setPlayStatus(!playStatus) }} src={playStatus ? pauseIcon : playIcon} alt="play/pause" className="w-8 cursor-pointer" />
        </div>
        <div className="explore-part flex gap-5 items-center">
          <p className="text-xl text-white">Explore More Features</p>
          <img src={nextImage} alt="" className="w-10" />
        </div>
        <ul className="hero-dots w-full flex gap-3 text-white">
          <li onClick={() => { setHeroCount(0) }} className={(heroCount === 0) ? "hero-dot green cursor-pointer" : "hero-dot cursor-pointer"}>1</li>
          <li onClick={() => { setHeroCount(1) }} className={(heroCount === 1) ? "hero-dot green cursor-pointer" : "hero-dot cursor-pointer"}>2</li>
          <li onClick={() => { setHeroCount(2) }} className={(heroCount === 2) ? "hero-dot green cursor-pointer" : "hero-dot cursor-pointer"}>3</li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
