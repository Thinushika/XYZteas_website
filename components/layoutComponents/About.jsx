import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-5 col-sm-12 text-left p-5"
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
              We've Been{" "}
              <span
                style={{
                  lineHeight: "1.7em",
                }}
              >
                Exporting For Over
              </span>{" "}
              <br />
              <span
                style={{
                  paddingLeft: "0.5em",
                  color: "#141414",
                  backgroundColor: "#B8B9AA",
                  fontSize: "1.5em",
                  paddingRight: "0.5em",
                }}
              >
                18+ YEARS
              </span>
            </h1>
            <p
              className="pt-4"
              style={{
                fontWeight: "200",
              }}
            >
              Established in February 2003, XYZ Teas is one of the fastest
              growing tea exporting companies in Sri Lanka today ranked within
              the top 15 exporters. We are made of a healthy mix of passionate
              energy and hard-won experience and pride ourselves in having won
              industrial respect and recognition and absolute commitment to
              quality.
            </p>
            <p
              className="pt-4"
              style={{
                fontWeight: "200",
              }}
            >
              With a collective knowledge and experience totaling over 60 years
              in the tea industry, the company’s able to seamlessly adapt
              themselves to the needs of the expanding list of international
              clienteles.
            </p>
          </div>
          <div
            className="col-md-7 col-sm-12 p-0"
            style={{ backgroundColor: "#141414", overflow: "hidden" }}
          >
            <div
              className="overlay"
              style={{
                position: "relative",
                width: "140%",
                backgroundColor: "#000",
                opacity: "0.5",
                overflow: "hidden",
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
