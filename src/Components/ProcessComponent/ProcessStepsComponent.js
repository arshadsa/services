import React from "react";

const ProcessStepsComponent = ({sl, stpHeader, stpText }) => {
  return (
       <div className="process-steps">
            <h4 className="process-steps__header"><span>{sl}</span>{stpHeader}
            </h4> 
            <p className="process-steps__text regular-paragraph">
             {stpText}
            </p>
        </div>
  )
};

export default ProcessStepsComponent;
