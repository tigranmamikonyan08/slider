import { CircleSmall} from 'lucide-react';
import './SliderDots.css'

type SliderDotsProps = {
    images: string[]
    index: number
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

const SliderDots = ({images,index,setIndex}:SliderDotsProps) =>{
    return (
        images.map((img,idx)=>{
            return(
                <CircleSmall 
                    key={idx}
                    className={idx === index ? 'active' : ''}
                    onClick={()=>setIndex(idx)}
                />
            )
        })
    )
}

export default SliderDots