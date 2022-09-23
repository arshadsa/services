import React from "react";

const ServiceOverviewComponent = ({title, listItems}) => { 


   
    
  return (
    <>
        <h4 className="service-overview-component__title mt-5 ">{title}</h4>
       
        <div >
        <ul className="list-ordered">
        {
            listItems.map((item,i)=>(
                <li key={i} className="list-ordered__item"><p >{item}</p></li>

            ))
        }
        </ul>
        </div>

        
        
      
    </>
  )
};

export default ServiceOverviewComponent;
