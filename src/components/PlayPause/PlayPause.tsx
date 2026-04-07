import { Play, Pause } from 'lucide-react'

type PlayPauseProps = {
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const PlayPause = ({isPlaying,setIsPlaying}:PlayPauseProps) => {
    return isPlaying ? (
        <Pause
            onClick={()=>setIsPlaying(!isPlaying)}
            style={{
                marginLeft: '20px'
            }}
        />
    ) : (
         <Play
            onClick={() => setIsPlaying(true)}
            style={{ marginLeft: '20px' }}
        />
    )
}

export default PlayPause