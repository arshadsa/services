import React from "react";
import FaqCartComponent from "../ServicePageBodyComponent/FaqCartComponent/FaqCartComponent";
import ServiceOverviewComponent from "../ServicePageBodyComponent/ServiceOverviewComponent/ServiceOverviewComponent";

const ServicePageBody = ({overviewData, faqData}) => {
  const {overviewComponent} = overviewData

  
  return (
    <>
    <div className="service-overview mb-5  " id="section0">
      {
        overviewComponent.map((item, i) =>(
           <ServiceOverviewComponent key={i}
        className="service-overview-component  "
        title = {item?.title}
        listItems = {item?.listItems}        
          />
        ) )
      }
    </div>
    <div   id="section1"  className="faq-section left faq">
      <h3   className="section-heading">FAQ</h3>
      {
        faqData.map((item, i) =>(         
          <FaqCartComponent  
          key={i}
          className="service-overview-component  "
          cardText = {item?.cardText}
          cardHeader = {item?.cardHeader}  
      
      />))
      }
      
      
      
      
    </div>
    
    </>
      

        )
};

export default ServicePageBody;
