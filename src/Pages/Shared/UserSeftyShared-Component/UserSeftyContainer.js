import React from "react";
import UspBanner from "./UspBanner";
import UspSection from "./UspSection";



const UserSeftyContainer = () => {
  return (
      <div className="usp-section container">            
              <div className="row d-flex">
                <div className="col-sm-12 col-md-5 pl-0 align-self-center">
                  <div className="row ml-0">
                 
                  <UspSection 
                  iconSrc = 'https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_mask.png'
                  iconPunch1 = "Ensuring"
                  iconPunch2 = "Masks"

                   />
                    <UspSection 
                  iconSrc = 'https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_24_7.png'
                  iconPunch1 = "24/7"
                  iconPunch2 = "Support"

                   />                  
                  </div> 
                  
                  <div className="row ml-0 mt-4">
                     <UspSection 
                  iconSrc = 'https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_sanitized.png'
                  iconPunch1 = "Sanitising"
                  iconPunch2 = "Hands &amp;"
                   iconPunch3 = "Equipment"

                   />
                     <UspSection 
                  iconSrc = 'https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_gloves.png'
                  iconPunch1 = "Ensuring"
                  iconPunch2 = "Gloves"

                   />
                </div>
              </div>
              <UspBanner
              src='https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp'
              
              
               />
          </div>
        </div>
  );
};

export default UserSeftyContainer;
