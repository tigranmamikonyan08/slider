import { useEffect, useState } from "react";
import "./Slider.css";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";

import SliderDots from "../SliderDots/SliderDots";
import SliderArrows from "../SliderArrows/SliderArrows";
import AutoPlayControls from '../AutoPlayControls/AutoPlayControls';

const images = [img1, img2, img3, img4, img5, img6, img7];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const onIndexChange = (newIndex: number) => {
    if (newIndex > images.length - 1 || newIndex < 0 || newIndex === index) return;

    setIndex(newIndex);
  };

  const onPlay = () => {
    if (isPlaying) return;

    setIsPlaying(true);
  };

  const onPause = () => {
    if (!isPlaying) return;

    setIsPlaying(false);
  };

  const onNextFlip = () => {
    setIndex(prevIndex => prevIndex > images.length - 2 ? 0 : prevIndex + 1);
  };

  const onPrevFlip = () => {
    setIndex(prevIndex => prevIndex < 1 ? images.length - 1 : prevIndex - 1);
  };

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        onNextFlip();
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isPlaying]);

  console.log(images[1]);
  

  return (
    <>
      <div className="sliderWrapper">
        <div className="slider-track"
          style={{transform: `translateX(-${index * 100}%)`}}
        >
          {
            images.map((img,i)=>{
              return (
                <div style={{flexShrink: '0'}} key={i}>
                  <img src={img}/>
                </div>
              )
            })
          }
        </div>  
      </div>
        
      <div className="slider-controls">
        <SliderDots count={images.length} currentIndex={index} onIndexChange={onIndexChange} />
        <AutoPlayControls isPlaying={isPlaying} onPlay={onPlay} onPause={onPause}  />
      </div>  
      <SliderArrows onNext={onNextFlip} onPrev={onPrevFlip} />
    </>
    
  );
};

export default Slider;
