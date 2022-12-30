import {useTypedSelector} from "../hooks/useTypedSelector";
import Image from "next/image";
import {baseUrl} from "../constants/movie";
import React from "react";
import Link from "next/link";
import {PlayIcon, XMarkIcon} from "@heroicons/react/20/solid";
import {useActions} from "../hooks/useActions";

interface MyListProps {
  onClose: () => void
}

const MyList = ({onClose}: MyListProps) => {

  const {myList} = useTypedSelector(state => state)

  const {removeMovie} = useActions()

    return (
      <>
        <div className='fixed z-[1000] t-0 l-0 w-[100%] h-screen bg-black/90' onClick={onClose}/>
        <div
          className='fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[1000] w-[85%] h-[360px] overflow-y-scroll px-5 pt-5 bg-white'
        >
          {myList.length === 0 ? (
            <div className='text-center text-2xl mb-6'>Your list of movies is empty...</div>
          ) : (
            <>
              <h3 className='text-center text-2xl mb-6'>Here is your list of movies</h3>
              <div className='flex justify-around flex-wrap'>
                {myList.map(movie => (
                  <div className='relative flex w-[185px] items-center mb-5' key={movie.id}>
                    <div className='w-[100%] h-[210px] relative'>
                      <Image
                        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                        alt={movie?.name || movie?.title}
                        layout="fill"
                        objectFit='cover'
                        className='absolute w-[100%] h-[100%]'
                      />
                    </div>
                    <div className='absolute t-0 l-0 w-full h-full bg-black/30 p-5 flex flex-col justify-end'>
                      <span className='block text-white mb-2'>{movie?.name || movie?.title}</span>
                      <Link href='/' className='playNowLink'>
                        <PlayIcon className='h-5 w-5 mr-2 -m-2 text-white'/>Play now
                      </Link>
                    </div>
                    <button
                      onClick={() => removeMovie(movie)}
                      className='absolute top-0 right-0 bg-black/50 transition duration-[.3s] hover:bg-black/70 cursor-pointer'
                    >
                      <XMarkIcon className='h-8 w-8 text-white'/>
                    </button>
                  </div>
                ))}
              </div>
            </>

          )}
        </div>
      </>
    )
}

export default MyList;