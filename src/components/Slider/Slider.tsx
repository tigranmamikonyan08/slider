import { useEffect, useState } from 'react'
import './Slider.css'
import { ArrowRight, ArrowLeft, CircleSmall, Play, Pause } from 'lucide-react';

import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'

const images = [img1,img2,img3,img4,img5,img6,img7]

const Slider = () =>{
    const [index,setIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=>{
        if (isPlaying) {
            const intervalId = setInterval(() => {
                setIndex((prev)=>prev > 5 ? 0 : prev+1)
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
                    {
                        images.map((img,idx)=>{
                            return (
                                <CircleSmall
                                    
                                    key={idx}
                                    className={idx === index ? 'active' : ''}
                                    onClick={()=>setIndex(idx)}
                                />
                            )
                        })
                    }

                    {
                        isPlaying ? <Pause 
                            onClick={()=>setIsPlaying(!isPlaying)}
                            style={{
                            marginLeft: '20px',
                        }}
                        /> 
                        : <Play
                        onClick={()=>setIsPlaying(!isPlaying)}
                        style={{
                            marginLeft: '20px',
                        }}
                        />
                    }
                    
                </div>
            <div className='buttons'>
                <ArrowLeft onClick={()=>setIndex(index < 1 ? 6 : index - 1)} size={31} />
                <ArrowRight onClick={()=>setIndex(index > 5  ? 0 : index+1)} size={31} />
            </div>
        </div>
    )
}

export default Slider