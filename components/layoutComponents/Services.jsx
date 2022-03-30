import React from "react";
import data from "../data/services.json";
import { FaHandPointRight } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="container py-4 px-5 text-center" data-aos="zoom-in-down">
        <h2>
          We Ranked Within <br />{" "}
          <span
            style={{
              color: "gold",
              fontWeight: "500",
              fontSize: "1.5em",
            }}
          >
            TOP 15
          </span>{" "}
          <br />
          Exporters in Sri Lanka.
        </h2>
      </div>
    </>
  );
};

export default Services;
