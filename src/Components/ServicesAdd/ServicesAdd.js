import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/service/s1.webp";
import img2 from "../../assets/service/s2.webp";
import img3 from "../../assets/service/s3.webp";
import img4 from "../../assets/service/s4.webp";
import img5 from "../../assets/service/s5.webp";
import img6 from "../../assets/service/s6.webp";
import img7 from "../../assets/service/all-services.svg";

import "./ServicesAdd.css";
const ServicesAdd = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className=" container-full">
      <div className="container ">
        {/* <h2> Single Item</h2> */}
        {/* <div className="slick-slider-content"> */}
        <Slider {...settings}>
          <div>
            <img src={img1} alt="img" />
            <p>AC Repair Service</p>
          </div>
          <div>
            <img src={img2} alt="img" />
            <p>AC Repair Service</p>
          </div>
          <div>
            <img src={img3} alt="img" />
            <p>AC Repair Service</p>
          </div>
          <div>
            <img src={img4} alt="img" />
            <p>AC Repair Service</p>
          </div>

          <div>
            <img src={img5} alt="img" />
            <p>AC Repair Service</p>
          </div>
          <div>
            <img src={img6} alt="img" />
            <p>AC Repair Service</p>
          </div>
          <div>
            <img src={img7} alt="img" />
            <p>AC Repair Service</p>
          </div>
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ServicesAdd;
