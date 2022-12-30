import React from 'react';
import {Movie} from "../models";
import Image from "next/image";
import {baseUrl} from "../constants/movie";
import Link from "next/link";
import {PlayIcon, HeartIcon} from "@heroicons/react/20/solid";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface RowSingleMovieProps {
  movie: Movie
}

const RowSingleMovie = ({movie}: RowSingleMovieProps) => {

  const {addMovie} = useActions()

  const {myList} = useTypedSelector(state => state)

  const isExistingInCart = myList.some(m => m.id === movie.id)

  return (
    <div className='h-[200px] relative before:absolute before:bg-black/30 before:w-full before:h-full before:z-10'>
      <Image
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.name || movie?.title}
        layout="fill"
        objectFit='cover'
        sizes="100% 100%"
      />
      <div className='absolute w-full h-full z-20 p-5 flex flex-col items-start justify-center'>
        <h3 className='mb-4 text-white text-[18px]'>{movie?.title || movie?.name}</h3>
        <div className='mb-5'>
          <Link href='/' className='playNowLink'>
            <PlayIcon className='h-5 w-5 mr-2 -m-2 text-white'/>Play now
          </Link>
        </div>
        {!isExistingInCart && (
          <button onClick={() => addMovie(movie)}>
            <HeartIcon className='h-7 w-7 text-white transition duration-[.3s] hover:text-red-600'/>
          </button>
        )}
      </div>
    </div>
  );
};

export default RowSingleMovie;