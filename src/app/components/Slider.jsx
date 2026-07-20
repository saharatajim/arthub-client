"use client"
import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner from './Banner';

const Slider = () => {
  return (
    <div>
      <Swiper
        direction="horizontal"
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
         <Banner/>
        </SwiperSlide>
        <SwiperSlide>
         <Banner/>
        </SwiperSlide>
 
      </Swiper>
    </div>
  );
};

export default Slider;
