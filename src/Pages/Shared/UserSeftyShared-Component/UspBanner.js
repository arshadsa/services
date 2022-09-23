import React from "react";

const UspBanner = ({src}) => {
  return (
       <div className="col-sm-12 col-md-7 usp-banner">
                <img alt="why choose us" className="round-border" data-src={src} src={src} lazy="loaded" style={{width: '635px', height: '256px'}} />
            </div>
  );
};

export default UspBanner;
