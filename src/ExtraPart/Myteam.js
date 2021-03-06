
import './Myteam.css'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import p1 from '../employee/p1.jpg'
import p2 from '../employee/p2.jpg'
import p3 from '../employee/p3.jpg'
import p4 from '../employee/p4.jpg'


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Myteam = () => {
    return (
        <div className='container'>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
         <SwiperSlide>
       <div class="card bg-dark text-white">
  <img src={p1} class="card-img" alt="..."/>
  <div class="card-img-overlay d-flex flex-column justify-content-end">
    <h5 class="card-title fw-bold ">Selena Domes</h5>
    <p class="card-text fw-bold">Chief Product Officer</p>
    
  </div>
</div>
       </SwiperSlide>
       <SwiperSlide>
       <div class="card bg-dark text-white">
  <img src={p2} class="card-img" alt="..."/>
  <div class="card-img-overlay  d-flex flex-column justify-content-end">
    <h5 class="card-title fw-bold ">Arafat Sarker</h5>
    <p class="card-text fw-bold ">Chief Executive Officer</p>
   
  </div>
</div>
       </SwiperSlide>
       <SwiperSlide>
       <div class="card bg-dark text-white">
  <img src={p3} class="card-img" alt="..."/>
  <div class="card-img-overlay  d-flex flex-column justify-content-end">
    <h5 class="card-title fw-bold">Christen Homes</h5>
    <p class="card-text text-info fw-bold">Chief Customer and Sales Officer</p>
   
  </div>
</div>
       </SwiperSlide>
       <SwiperSlide>
       <div class="card bg-dark text-white">
  <img src={p4} class="card-img" alt="..."/>
  <div class="card-img-overlay d-flex flex-column justify-content-end">
    <h5 class="card-title fw-bold">Edwin Gear</h5>
    <p class="card-text fw-bold">Chief Information Officer</p>
  
  </div>
</div>
       </SwiperSlide>

          
      </Swiper>
            
        </div>
    );
};

export default Myteam;