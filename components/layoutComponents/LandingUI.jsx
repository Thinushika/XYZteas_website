import Image from "next/image";
import React from "react";

const LandingUI = () => {
  return (
    <>
      <div
        className="container-fluid text-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(0, 0, 0, 0.55),rgba(0, 0, 0, 0.55)),url(/images/XYZteasBackground1.jpg)",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          className="container"
          style={{
            width: "60%",
            height: "40%",
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
          <h1 style={{ fontSize: "4.5em", color: "whitesmoke" }}>
            EXITING ADVENTURE
          </h1>
          <p style={{ fontWeight: "300", color: "whitesmoke" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit omnis
            asperiores aliquid minus labore accusamus natus, quos velit
            exercitationem aut?
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingUI;
