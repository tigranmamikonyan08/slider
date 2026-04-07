import { CircleSmall } from "lucide-react";

type TSliderDotsProps = {
  count: number;
  currentIndex: number;
  onIndexChange: (index: number) => void;
};

const SliderDots = ({ count, currentIndex, onIndexChange }: TSliderDotsProps) => {
  const arr = new Array(count).fill(null);
  
  return (
    <>
      {arr.map((_, idx) => {
        return (
          <CircleSmall
            key={idx}
            className={idx === currentIndex ? 'active': ''}
            onClick={() => onIndexChange(idx)}
          />
        )
      })}
    </>
  );
};

export default SliderDots;
