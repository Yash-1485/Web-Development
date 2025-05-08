import { useEffect, useRef } from "react"
import carVideo from "../assets/videos/CarEditedVideo.mp4"
import image1 from "../assets/images/Car1.jpg"
import image2 from "../assets/images/Car2.jpg"
import image3 from "../assets/images/Car3.jpg"

const Background = ({ heroCount, playStatus }) => {
  const videoRef = useRef(null);
  
  // Create a persistent reference to the video element that won't be lost
  // between re-renders due to conditional rendering
  const persistentVideoRef = useRef(null);

  useEffect(() => {
    // When video is rendered, store a reference to it in the persistent ref
    if (videoRef.current) {
      persistentVideoRef.current = videoRef.current;
    }
    
    // Use the persistent reference to control video playback
    if (persistentVideoRef.current) {
      if (playStatus) {
        console.log("Playing video...");
        persistentVideoRef.current.play().catch(err => {
          console.error("Error playing video:", err);
        });
      } else {
        console.log("Pausing video...");
        persistentVideoRef.current.pause();
      }
    }
  }, [playStatus]);

  if (playStatus) {
    return (
      <video ref={videoRef} className="w-screen h-screen object-cover bg-fixed bg-cover bg-center" muted loop playsInline>
        <source src={carVideo} type="video/mp4" />
      </video>
    )
  }
  else {
    const images = [image1, image2, image3];
    return (
      <img src={images[heroCount]} alt={`Car${heroCount + 1}`} className="w-screen max-h-screen block mx-auto bg-fixed bg-cover bg-center" />
    )
  }
}

export default Background
