import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import Service from "../Service/Service";
import './Services.css'

const Services = ({ category, services }) => {
  return (
    <div className="home-services">
      <h3>{category}</h3>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="d-flex">
            {services.slice(0, 4).sort(() => Math.random() - 0.5).map((service) => (
              <Service
              category = {category}
                key={service.id}
                img={service?.img}
                text={service?.title}
              ></Service>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex">
            {services.slice(0, 4).sort(() => Math.random() - 0.5).map((service) => (
              <Service
                key={service.id}
                img={service?.img}
                text={service?.title}
              ></Service>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;
