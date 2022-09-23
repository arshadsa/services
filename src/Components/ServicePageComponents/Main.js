import React, { useState } from "react";

import AllServicesAside from "../AllServiceBodyComponents/AllServicesAside";
import ServicePageBody from "./ServicePageBody";

const Main = ({overviewData, asideData, faqData}) => {
  
  


  return (
    <div className=" container all-services-wrapper mt-6">
    <div className="row ">
        <div className=" col-3 d-none d-lg-block">
          <div className="aside-wrapper">
            <AllServicesAside  asideData={asideData}  />
          </div>
        </div>
        <div className=" col-12 col-lg-9 ps-5" >
           <main   id="service-info">
           <h2 className="mb-4">{overviewData?.service}</h2>
            <section  className="service-landing__section">
              <div  className="container service">
                <ServicePageBody  overviewData = {overviewData} faqData={faqData} />
              </div>
            </section>
           
          </main>
          
        </div>
      </div>
    </div>
    //<AllServicesAside />
  //  <>jifjjef</>
  //
  
  
  )
};



export default Main;
