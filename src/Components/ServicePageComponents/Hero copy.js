import React from "react";
import { Link } from "react-router-dom";

import './HeroStyle.css'




const Hero = (props) => {
  let { myData } = props;  
  
  

  const getLastWord = () => {
    let selectedWord = myData.name;
    // console.log(selectedWord)
    let isContain = selectedWord?.includes("ervice");
    if (isContain) {
      return "";
    } else {
      return "Service";
    }
  };
  return (
    <div className="service-badge" style={{ position: "relative", height: "50vh", zIndex: 1 }}>
      <img className=""
        src='service-image.webp'
        alt=" "
        style={{
          height: "50vh",
          width: "100%",
          position: "absolute",
          top: "0px",
          objectFit: "cover",
          zIndex: -2,
        }}
      />
      <div
        style={{
          height: "50vh",
          width: "100%",
          position: "absolute",
          top: "0px",
          objectFit: "cover",
          zIndex: -1,
          backgroundColor: "black",
          opacity: "0.3",
        }}
      ></div>
      <div className=" container"  >
      <ol  className="breadcrumb">
        <li  className="breadcrumb-item">
          <Link  to="/"  target="_self">Home</Link>
        </li>
        <li  className="breadcrumb-item">
          <Link  to="/service-route/:service-category" className="" target="_self">AC Repair Services</Link>
        </li>
        <li  className="breadcrumb-item active">
          <span  aria-current="location">AC Servicing</span>
        </li>
      </ol>


        <h1 className=" d-flex pt-5 text-white mb-4 service-title">
        
            {myData.name}
             {/*{getLastWord()
             }*/}
          
          <span >
            <img 
              src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/png/badge.png"
              alt=""
              style={{ height: "2rem", width: "auto",marginLeft:"15px", display: "inline-block" }}
            />
          </span>
        </h1>
       

        <div  id="reviewRating">
          <div  className="rating-review"><div  className="rating" style={{position: 'relative'}}>
            <img  src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/star-white.svg" 
            alt={myData.name} 
            style={{width: "24px", height: '24px'}} /> 
            <p  className="average-rating">4.67</p> 
            <p  className="total-rating">out of 5</p>
            </div> 
            </div> <div  className="review"><p >(25015 ratings on 5 services)</p></div></div>




        
        <ul className="service-list">          
          <li className="service-list__item">
            <span className="check">
              <img src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/check.svg" alt="Check"/>
            </span>
            <span  className="info">Trusted &amp; Reliable AC Technicians</span>
          </li>
          <li className="service-list__item">
            <span className="check">
              <img src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/check.svg" alt="Check"/>
            </span>
            <span  className="info">7 Days Post Service Warranty</span>
          </li>
          <li className="service-list__item">
            <span className="check">
              <img src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/check.svg" alt="Check"/>
            </span>
            <span  className="info">Well-equipped  &amp; Well-prepared Specialists to Prevent COVID-19</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
