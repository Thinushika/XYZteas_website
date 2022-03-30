import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-4 col-sm-12 text-left p-5"
            style={{
              backgroundColor: "#141414",
              color: "#bbb",
              fontWeight: "200",
            }}
          >
            <h1
              style={{
                fontWeight: "600",
                letterSpacing: "0.07em",
              }}
            >
              We've Been Exporting For Over
              <span
                style={{
                  paddingLeft: "0.5em",
                  color: "#00ff00",
                }}
              >
                18 Years
              </span>
            </h1>
            <p
              className="pt-4"
              style={{
                fontWeight: "200",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam earum quidem assumenda ab, voluptatem perferendis
              pariatur reiciendis?
            </p>
            <p
              className="pt-4"
              style={{
                fontWeight: "200",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam earum quidem assumenda ab, voluptatem perferendis
              pariatur reiciendis?
            </p>
          </div>
          <div
            className="col-md-8 col-sm-12 p-0"
            style={{ backgroundColor: "#141414" }}
          >
            <div
              className="overlay"
              style={{
                position: "relative",
                width: "100%",
                backgroundColor: "#000",
                opacity: "0.5",
                zIndex: "1",
              }}
            >
              <video autoPlay muted loop width="100%">
                <source src="/videos/teaPlantation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
