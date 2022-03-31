import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import data from "../data/services.json";

const Deference = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div
            className="col-md-5 text-center"
            style={{
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-aos="fade-down-right"
          >
            <h2
              style={{
                color: "#B8B9AA",
                fontWeight: "400",
                letterSpacing: "0.07em",
                lineHeight: "0.5em",
              }}
            >
              We Ranked Within <br />{" "}
              <span
                style={{
                  paddingLeft: "0.5em",
                  color: "#141414",
                  backgroundColor: "#B8B9AA",
                  fontSize: "2em",
                  paddingRight: "0.5em",
                  fontWeight: "600",
                  letterSpacing: "0.07em",
                  lineHeight: "1.7em",
                }}
              >
                TOP 15
              </span>{" "}
              <br />
              Exporters in Sri Lanka.
            </h2>
          </div>
          <div
            className="col-md-7 py-2 text-center"
            style={{
              backgroundColor: "#999B85",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-aos="fade-down-left"
          >
            <h2
              style={{
                color: "#141414",
                fontWeight: "400",
                letterSpacing: "0.07em",
                lineHeight: "0.5em",
              }}
            >
              We are partnered with <br />{" "}
              <span
                style={{
                  color: "#141414",
                  fontSize: "1.5em",
                  fontWeight: "600",
                  letterSpacing: "0.07em",
                  paddingRight: "0.5em",
                  lineHeight: "1.7em",
                }}
              >
                Middle East
              </span>
              &
              <span
                style={{
                  paddingLeft: "0.5em",
                  color: "#141414",
                  fontSize: "1.5em",
                  fontWeight: "600",
                  letterSpacing: "0.07em",
                  lineHeight: "1.7em",
                }}
              >
                East Europe
              </span>
              <br />
            </h2>
          </div>

          <div
            className="col-md-12 py-5 p-0"
            style={{
              height: "auto",
              display: "flex",
              backgroundColor: "#4D4E43",
              color: "whitesmoke",
              flexDirection: "column",
            }}
            data-aos="fade-up"
          >
            <div
              className="container p-2"
              style={{
                width: "auto",
                border: "solid 1px #B8B9AA",
                borderRadius: "20px",
              }}
            >
              {data.map((post) => {
                return (
                  <div
                    className="container py-2"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                    key={post.id}
                  >
                    <FaCheckCircle style={{ marginRight: "20px" }} />
                    <p style={{ lineHeight: "1em", textAlign: "left" }}>
                      {post.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row p-5" data-aos="fade-up">
          <h2
            style={{
              color: "#B8B9AA",
              fontWeight: "400",
              letterSpacing: "0.07em",
              lineHeight: "0.5em",
            }}
          >
            We Value <br />{" "}
            <span
              style={{
                color: "#141414",
                fontSize: "1.5em",
                fontWeight: "600",
                letterSpacing: "0.07em",
                lineHeight: "1.7em",
              }}
            >
              <span
                style={{
                  color: "#141414",
                  backgroundColor: "#B8B9AA",
                }}
              >
                Quality
              </span>
              <span> before </span>
              <span
                style={{
                  color: "#141414",
                  backgroundColor: "#B8B9AA",
                }}
              >
                Quantity
              </span>
            </span>{" "}
            <br />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Deference;
