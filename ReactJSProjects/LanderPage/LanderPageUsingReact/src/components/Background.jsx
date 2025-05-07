import carVideo from "../assets/videos/CarEditedVideo.mp4"
import image1 from "../assets/images/Car1.jpg"
import image2 from "../assets/images/Car2.jpg"
import image3 from "../assets/images/Car3.jpg"


const Background = ({heroCount,playStatus}) => {
  if(playStatus){
    return(
      <video className="w-screen h-screen object-cover" autoPlay muted loop>
        <source src={carVideo} type="video/mp4"/>
      </video>
    )
  }
  else if(heroCount==0){
    return(
      <img src={image1} alt="Car1" className="w-full max-h-screen block mx-auto" />
    )
  }
  else if(heroCount==1){
    return(
      <img src={image2} alt="Car2" className="w-full max-h-screen block mx-auto"/>
    )
  }
  else if(heroCount==2){
    return(
      <img src={image3} alt="Car3" className="w-full max-h-screen block mx-auto"/>
    )
  }
}

export default Background
