import React, {useState} from 'react';
import {Movie} from "../models";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade} from 'swiper';

import "swiper/css";
import 'swiper/css/effect-fade'

import BannerSingleSlide from "./BannerSingleSlide";
import VideoTrailerModal from "./VideoTrailerModal";

interface BannerProps {
  netflixOriginals: Movie[]
}

const Banner = ({netflixOriginals}: BannerProps) => {

  SwiperCore.use(([Autoplay]))

  const [videoId, setVideoId] = useState<number>(0)
  const [openedModal, setOpenedModal] = useState(false)

  return (
    <>
      {openedModal && <VideoTrailerModal id={videoId} onClose={() => setOpenedModal(false)}/>}
      <Swiper
        loop={true}
        modules={[EffectFade]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        effect={'fade'}
        className='w-100% h-screen'
      >
        {netflixOriginals.map(movie => (
          <SwiperSlide key={movie.id}>
            <BannerSingleSlide movie={movie} onOpen={() => setOpenedModal(true)} setVideoId={setVideoId}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>


  );
};

export default Banner;