import { ArrowRight, ArrowLeft } from "lucide-react";

type SliderArrowsProps = {
  onNext: () => void;
  onPrev: () => void;
};

const SliderArrows = ({ onNext, onPrev }: SliderArrowsProps) => {
  return (
    <div className="buttons">
      <ArrowLeft
        size={32}
        onClick={onPrev}
      />
      <ArrowRight
        size={32}
        onClick={onNext}
      />
    </div>
  );
};

export default SliderArrows;
