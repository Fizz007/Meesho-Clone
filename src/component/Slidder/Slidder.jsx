import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../component/Slidder/Slidder.css'
import { sliderItems } from "../../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slidder() {
  return (
    <>
      <Swiper
         slidesPerView={1}
         spaceBetween={2}
        //  slidesPerGroup={1}
         loop={true}  
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {

          sliderItems.map((item)=> {
            return  <SwiperSlide>
              <div className="slide">
                <div className="img_container">
                  <img src={item.img} alt="images" />
             
                </div>
                <div className="info_container">
                  <div className="title">

                  {item.title}
                  </div>

                  <div className="description">
                  {item.desc}
                  </div>

                  <div className="button">
                    <button>SHOP NOW</button>
                  </div>
                </div>
              </div>
              </SwiperSlide>
          })
        }
       
      
      </Swiper>
    </>
  );
}
