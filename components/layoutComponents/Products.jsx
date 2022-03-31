import React from "react";

const Cards = () => {
  return (
    <>
      <div className="cover">
        <div className="container text-center m-4 ">
          <h1>Our Collection of Products</h1>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
          <div
            className="card mt-3 mb-5"
            style={{
              width: "18rem",
              marginInline: "1em",
              borderRadius: "10px",
              borderStyle: "none",
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            }}
            data-aos="fade-right"
          >
            <img
              className="card-img-top"
              src="/images/black.jpg"
              alt="Card image cap"
              height="350px"
            />
            <div className="card-body">
              <h4>Black Tea</h4>
              <p
                className="card-text"
                style={{ fontWeight: "300", color: "#888" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit Sit
                omnis asperiores aliquid
              </p>
            </div>
          </div>
          <div
            className="card mt-3 mb-5"
            style={{
              width: "18rem",
              marginInline: "1em",
              borderRadius: "10px",
              borderStyle: "none",
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            }}
            data-aos="fade-down"
          >
            <img
              className="card-img-top"
              src="/images/green.jpg"
              alt="Card image cap"
              height="350px"
            />
            <div className="card-body">
              <h4 style={{}}>Green Tea</h4>
              <p
                className="card-text"
                style={{ fontWeight: "300", color: "#888" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit Sit
                omnis asperiores aliquid
              </p>
            </div>
          </div>
          <div
            className="card mt-3 mb-5"
            style={{
              width: "18rem",
              marginInline: "1em",
              borderRadius: "10px",
              borderStyle: "none",
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            }}
            data-aos="fade-left"
          >
            <img
              className="card-img-top"
              src="/images/white.jpg"
              alt="Card image cap"
              height="350px"
            />
            <div className="card-body">
              <h4>White Tea</h4>
              <p
                className="card-text"
                style={{ fontWeight: "300", color: "#888" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit Sit
                omnis asperiores aliquid
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
