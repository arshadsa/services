import React from "react";
import ProcessStepsComponent from "./ProcessStepsComponent";

const ProcessSection = () => {
    


  return (
      <div className="row process-section">
      {/*....video.....*/}
            <div className="col-sm-12 col-md-6">
              <span src="https://www.youtube.com/watch?v=OMW0BfVYSOI&amp;feature=youtu.be" className="silentbox-single">
                <div className="process-section__video-img d-flex justify-content-center align-items-center round-border" data-src="https://cdn-shebaxyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/process-thumbnail.webp" lazy="loaded" style={{backgroundImage: "url(https://cdn-shebaxyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/process-thumbnail.webp)"}} >
                
                  <img src="https://cdn-marketplacedev.s3.ap-south-1.amazonaws.com/play-btn.svg" alt="how sheba works" className="img-fluid" />
                
                </div>
                 {/*<!---->*/}
              </span>
            </div> 
       {/*.........*/} 
       {/*....content.....*/} 
            <div className="col-sm-12 offset-md-1 col-md-5 process-column">
              <ProcessStepsComponent
              sl="1" 
              stpHeader="Select the Service" 
              stpText = 'Pick the service you are looking for- from the website or the app.'
              
               />
            <ProcessStepsComponent
              sl="2" 
              stpHeader="Pick your schedule" 
              stpText = 'Pick your convenient date and time to avail the service. Pick the service provider based on their rating.'
              
               />
            <ProcessStepsComponent
              sl="3" 
              stpHeader="Place Your Order &#38; Relax" 
              stpText = 'Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.'
              
               />
            
            
            </div>
    </div>
  );
};

export default ProcessSection;
