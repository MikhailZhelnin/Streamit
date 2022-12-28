import React, {useEffect, useState} from "react";
import {MovieWithVideos} from "../models";
import YouTube from "react-youtube";

interface VideoTrailerModalProps {
    id: number,
    onClose: () => void
}

const VideoTrailerModal = ({id, onClose}: VideoTrailerModalProps) => {

  const [movie, setMovie] = useState<MovieWithVideos>()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`)
      .then(res => res.json())
      .then(data => setMovie(data))
  }, [id])

    return (
        <>
          <div className='fixed z-[1000] t-0 l-0 w-[100%] h-screen bg-black/90' onClick={onClose}/>
            <YouTube
              videoId={movie?.videos.results.find(vid => vid?.type === 'Trailer')?.key}
              className='fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[1000]'
            />
        </>
    )
}

export default VideoTrailerModal;