import React, {useEffect, useState} from "react";
import {MovieWithVideos} from "../models";
import YouTube from "react-youtube";
import {useGetSingleMovieQuery} from "../store/singleMovie/singleMovie.api";

interface VideoTrailerModalProps {
    id: number,
    onClose: () => void
}

const VideoTrailerModal = ({id, onClose}: VideoTrailerModalProps) => {

  const {data} = useGetSingleMovieQuery(id)

    return (
        <>
          <div className='fixed z-[1000] t-0 l-0 w-[100%] h-screen bg-black/90' onClick={onClose}/>
            <YouTube
              videoId={data?.videos.results.find(vid => vid?.type === 'Trailer')?.key}
              className='fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[1000]'
            />
        </>
    )
}

export default VideoTrailerModal;