import { useEffect, useState } from 'react'
import './Slider.css'

import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import SliderDots from '../SliderDots/SliderDots';
import PlayPause from '../PlayPause/PlayPause';
import SliderArrows from '../SliderArrows/SliderArrows';

const images = [img1,img2,img3,img4,img5,img6,img7]

const Slider = () =>{
    const [index,setIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=>{
        if (isPlaying) {
            const intervalId = setInterval(() => {
                setIndex((prev)=>prev > images.length - 2 ? 0 : prev+1)
            }, 1000);

            return () => {
                clearInterval(intervalId)
            }
        }
        
    },[isPlaying])
    
    return (
        <div className='sliderWrapper'>
            <img src={images[index]} alt="" />
                <div className="circleBtns">
                    <SliderDots 
                        images = {images}
                        index = {index}
                        setIndex = {setIndex}
                    />
                    <PlayPause 
                        isPlaying = {isPlaying}
                        setIsPlaying ={setIsPlaying}
                    />
                </div>
            <div className='buttons'>
                <SliderArrows
                    index={index}
                    setIndex={setIndex}
                    images={images}
                />
            </div>
        </div>
    )
}

export default Slider