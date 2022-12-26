import React from 'react';
import {Movie} from "../models";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

import "swiper/css";

import BannerSingleSlide from "./BannerSingleSlide";

interface BannerProps {
  netflixOriginals: Movie[]
}

const Banner = ({netflixOriginals}: BannerProps) => {

  SwiperCore.use(([Autoplay]))

  return (
    <Swiper navigation={true} loop={true} autoplay={{delay: 5000}} className='w-100% h-screen'>
      {netflixOriginals.map(movie => (
        <SwiperSlide key={movie.id}>
          <BannerSingleSlide movie={movie}/>
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default Banner;