import React from "react";
import Typewriter from "typewriter-effect";

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
            backgroundImage:
              "linear-gradient(90deg,rgba(255, 255, 255, 0.55),rgba(255, 255, 255, 0.55))",
            borderRadius: "20px",
          }}
        >
          <h6 style={{ fontWeight: "600", color: "#141414" }}>
            Over 60 years in the tea industry
          </h6>
          <div
            className="container py-3"
            style={{
              fontSize: "3rem",
              fontWeight: "600",
              height: "3em",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              color: "#141414",
              lineHeight: "0.9em",
            }}
          >
            <Typewriter
              options={{
                strings: ["Best Quality Tea", "Over 18+ Years"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </div>
          <p
            style={{
              fontWeight: "500",
              color: "#141414",
              fontSize: "0.9em",
            }}
          >
            We export the best qaility tea for over 18+ years by maintaining the
            standard expected <br /> of authentic Ceylon Tea and local
            ingredients, and taking Sri Lanka to the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingUI;
