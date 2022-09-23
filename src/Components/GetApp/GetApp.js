import React from "react";
import HomeSectionHeader from "../../Pages/Shared/HomeSectionHeader/HomeSectionHeader";

//import HomeHeader from "../globalComponents/homeheader/HomeHeader";
import "./GetApp.css";
const GetApp = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://cdn-shebaxyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/app-download.webp"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 mt-5">
          <HomeSectionHeader
            regularParagraph="DOWNLOAD OUR APP"
            title="Any Service, Any Time, Anywhere."
          />
          <p>
            Give us your mobile number. You’ll get an SMS with the app download
            link.
          </p>
          <div  className="input-group mb-3 w-75 my-4">
            <input
              type="text"
               className="form-control py-1"
              placeholder="Type Your Mobile Number"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
               className="btn btn-lg app-btn fw-bold text-white px-2 rounded-end rounded-4"
              type="button"
              id="button-addon2"
            >
              Get the app
            </button>
            <div className="mt-4 d-flex app-logo">
              <img src="./Images/play-store .png" alt="" />
              <img src="./Images/app-store.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
