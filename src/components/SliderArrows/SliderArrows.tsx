import { ArrowRight, ArrowLeft} from 'lucide-react';

type SliderArrowsProps = {
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
    images: string[]
}

const SliderArrows = ({index,setIndex,images}:SliderArrowsProps) =>{
    return  (
        <>
            <ArrowLeft onClick={()=>setIndex(index < 1 ? images.length - 1 : index - 1)} size={31} />
            <ArrowRight onClick={()=>setIndex(index > images.length - 2 ? 0 : index+1)} size={31} />
        </>
    )
}

export default SliderArrows