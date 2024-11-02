import React, { useRef, useState } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'
const VideoPlayer = ({isPlaying, setIsPlaying}) => {
    const player = useRef(null)
    const closePlayer = (e) => {
        if(e.target === player.current){
            setIsPlaying(false)
        }
    }
  return (
    <div className={`videoPlayer ${isPlaying?'':'hide'} `} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
    
  )
}

export default VideoPlayer