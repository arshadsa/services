import React, { useState } from "react";

import "./FaqCartComponent.css"




const FaqCartComponent = ({cardHeader, cardText}) => {

    const[isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    



  return (
      <div  className=" mb-1">
        <header   className=" p-1">
            <h3  onClick={()=>setIsOpen(prev=>!prev)} className="faq-btn   fw-bold">  
            {
                isOpen ?<div  className="when-opened fw-bold">-</div>:<div  className="when-closed fw-bold">+</div>
            }          
                 
                
                {cardHeader}
            </h3>
        </header> 
        {
            isOpen && <div  className="faq-ans ">
            <div  className="card-body">
                <p  className="card-text">{cardText}
                </p>
            </div>
        </div>
        }
        
    </div>
  )
};

export default FaqCartComponent;
