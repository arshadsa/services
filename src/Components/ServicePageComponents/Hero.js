import React from "react";
import { Link } from "react-router-dom";

import './HeroStyle.css'




const Hero = ( props) => {
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
    <div  id="category-service-banner " className=" mb-4">

<div className=" banner-padding"
    style={{
      background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) center center / cover no-repeat, url(https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/banners/1619428659_plumbingsanitaryservices.jpg), url(https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/live/img/55541bd.png)'
    }}
    
    >
    
    <div   
    style={{display: 'none'}}
    >
      <p> AC Repair Services </p> 
    </div> 
    <div className="service-badge  pb-2">
    <div className="banner-container container">
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
      <div   style={{marginTop: '0px'}}>
        <div   className="badge-section">
          <h1 className=" d-flex pt-3 text-white mb-4 service-title">
          AC Servicing
        
            {/*{myData.name}*/}
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
        </div> 
        
        <div  id="reviewRating">
          <div  className="rating-review">
            <div  className="rating" style={{position: 'relative'}}>
              <img  src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/star-white.svg" 
              alt={myData.name} 
              style={{width: "24px", height: '24px'}} /> 
              <span  className="average-rating text-white fw-bold">4.67</span> 
              <span  className="total-rating text-white fw-semibold">out of 5</span>
            </div> 
            </div> 
          <div  className="review fw-bold"><p >(25015 ratings on 5 services)</p></div>
            </div>
         <ul className="service-list mb-4">          
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
  </div>
</div>
    </div>

   
   
  );
};

export default Hero;
