import React from 'react';
import {Movie} from "../models";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation} from 'swiper';

import "swiper/css/navigation";
import "swiper/css";

import RowSingleMovie from "./RowSingleMovie";

interface RowProps {
  movieCategoryTitle: string,
  movieCategory: Movie[],
}

const Row = ({movieCategoryTitle, movieCategory}: RowProps) => {

  SwiperCore.use(([Autoplay]))

  return (
    <section className='pt-20 pr-20 pb-0 pl-20 last:pb-20'>
      <div className='mb-3'>
        <h2 className='text-white text-3xl'>{movieCategoryTitle}</h2>
      </div>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={30}
        modules={[Navigation]}
      >
        {movieCategory.map(movie => (
          <SwiperSlide key={movie.id}>
            <RowSingleMovie movie={movie}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Row;