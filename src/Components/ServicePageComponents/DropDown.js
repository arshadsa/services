import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DropDown = ({ navigate, Reflect, jsonData }) => {
  //   let navigate = useNavigate();
  let SData = [];
  const [ulData, setUlData] = useState([]);
  useEffect(() => {
    fetch("/allservices.json")
      .then((data) => data.json())
      .then((data) => {
        let MyData = data.map((item, index) => {
          return {
            id: index,
            name: item.name,
            show: false,
            children: item.children.map((item) => {
              return { name: item.name, slug: item.slug };
            }),
          };
        });
        setUlData(MyData.slice(0, 4));
      });
  }, []);
  return (
    <div
      className=" d-none d-md-block "
      style={{ position: "relative", zIndex: "100" }}
    >
      <div className="container" style={{ height: "60px" }}>
        <div className=" d-flex justify-content-between h-100 w-100  align-items-center dropdown-wrapper">
          <Link
            to="/all-services"
            className=" position-relative bg-light h-100 d-flex align-items-center text-decoration-none dropdown-item-1"
            style={{ width: "150px" }}
          >
            All Services
          </Link>

          {ulData.map((item, index) => {
            let { name, children, show } = item;
            return (
              <div
                className=" position-relative  h-100 d-flex align-items-center text-decoration-none dropdown-item-1"
                style={{ width: "150px" }}
                key={index}
                onMouseLeave={(e) => {
                  let myKey = index;
                  let newCached = ulData.map((item, index) => {
                    if (myKey === index) {
                      return { ...item, show: !item.show };
                    } else {
                      return { ...item };
                    }
                  });
                  setUlData(newCached);
                }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onMouseOver={(e) => {
                    let myKey = index;
                    let newCached = ulData.map((item, index) => {
                      if (myKey === index) {
                        return { ...item, show: !item.show };
                      } else {
                        return { ...item, show: false };
                      }
                    });
                    setUlData(newCached);
                  }}
                >
                  {name}
                </div>
                {show && (
                  <div
                    className=" dropdown-content-1 card"
                    style={{
                      minHeight: "100px",
                      width: "280px",
                      backgroundColor: "red",
                      position: "absolute",
                      bottom: "0px",
                      transform: "translate(-50%, 100%)",
                      backgroundColor: "white",
                    }}
                  >
                    <div className="card-body">
                      {children.map((item, index) => {
                        let { name, slug } = item;
                        return (
                          <div
                            key={index}
                            style={{ cursor: "pointer" }}
                            className=" text-decoration-none pt-2 pb-2"
                            onClick={() => {
                              navigate(`/service-route/${slug}`);
                              Reflect(slug); //navigate not working
                            }}
                          >
                            {name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
