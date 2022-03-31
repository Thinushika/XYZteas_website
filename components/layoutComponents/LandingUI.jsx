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
              "linear-gradient(90deg,rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75))",
          }}
        >
          <h6 style={{ fontWeight: "300", color: "whitesmoke" }}>
            Over 60 years in the tea industry
          </h6>
          <div className="container py-3">
            <h1
              style={{
                fontSize: "4em",
                fontWeight: "600",
                color: "whitesmoke",
                lineHeight: "0.9em",
                fontFamily: "sans-serif",
              }}
            >
              THE BEST QUALITY TEA
            </h1>
          </div>
          <p
            style={{
              fontWeight: "300",
              color: "whitesmoke",
              fontSize: "0.9em",
            }}
          >
            We export the best qaility tea for over 18+ years
            <br />
            by maintaining the standard expected of authentic
            <br />
            Ceylon Tea and local ingredients, and taking Sri Lanka to the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingUI;
