import { Play, Pause } from "lucide-react";

type TAutoPlayControls = {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
};

const AutoPlayControls = ({ isPlaying, onPlay, onPause }: TAutoPlayControls) => {
  return (
    <div style={{ marginLeft: 20 }}>
      {isPlaying ? (
        <Pause onClick={onPause} />
      ) : (
        <Play onClick={onPlay} />
      )}
    </div>
  );
};

export default AutoPlayControls;
