import React from "react";

const LandingUI = () => {
  return (
    <>
      <div
        className="container-fluid text-center px-2 py-6"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(153, 155, 133, 0.55),rgba(153, 155, 13, 0.55)),url(/images/XYZteasBackground1.jpg)",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          className="container p-4 m-2 my-5"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            backgroundImage:
              "linear-gradient(90deg,rgba(0, 0, 0, 0.55),rgba(0, 0, 0, 0.55))",
          }}
        >
          <h6 style={{ fontWeight: "300", color: "whitesmoke" }}>
            Over 60 years in the tea industry
          </h6>
          <h1
            style={{
              fontSize: "4em",
              color: "whitesmoke",
              lineHeight: "0.9em",
            }}
          >
            THE BEST <br /> QUALITY TEA
          </h1>
          <p
            style={{
              fontWeight: "300",
              color: "whitesmoke",
              fontSize: "0.9em",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            <br /> omnis asperiores aliquid minus labore accusamus natus,
            <br /> quos velit exercitationem aut?
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingUI;
