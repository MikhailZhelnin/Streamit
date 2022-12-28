import React, {SetStateAction} from 'react';
import Image from "next/image";
import {baseUrl} from "../constants/movie";
import {Movie} from "../models";
import {PlayCircleIcon} from "@heroicons/react/20/solid";

interface BannerSingleSlideProps {
  movie: Movie,
  onOpen: () => void,
  setVideoId: React.Dispatch<SetStateAction<number>>
}

const BannerSingleSlide = ({movie, onOpen, setVideoId}: BannerSingleSlideProps) => {

  const handleClick = (id: number) => {
    setVideoId(id);
    onOpen();
  }

  return (
    <>
      <Image
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.title || movie?.name}
        layout="fill"
        objectFit='cover'
        className='-z-10'
      />
      <div className='absolute top-[50%] left-[5%] right-[5%] transform: translate-y-[-50%] p-3 bg-black/50 flex items-center'>
        <div className='w-[80%]'>
          <h2 className='text-6xl text-white mb-2 font-["Skranji"]'>{movie?.title || movie?.name}</h2>
          <div className='mb-2'>
            <span className='text-lg font-bold text-red-600 mr-3'>
              Rating:
            </span>
            <span className='text-white'>
              {movie?.vote_average}(TMDB)
            </span>
          </div>
          <div className='max-w-[50%] mb-2'>
            <p className='text-gray-300'>{movie?.overview}</p>
          </div>
          <div>
            <span className='text-lg font-bold text-red-600 mr-3'>
              Release date:
            </span>
            <span className='text-white'>
              {movie?.release_date}
            </span>
          </div>
        </div>
        <button className='flex items-center text-white w-[20%] transition duration-[.3s] hover:text-red-600' onClick={() => handleClick(movie.id)}>
          <PlayCircleIcon className='w-14 h-14 mr-1'/>
          <span className='uppercase'>watch trailer</span>
        </button>
      </div>
    </>
  )
};

export default BannerSingleSlide;