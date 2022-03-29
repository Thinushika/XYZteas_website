import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid p-4"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="row text-left">
          <div className="col-md-5 col-sm-12 p-5">
            <h1 className="text-light">About us</h1>
            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
              nisi debitis. Explicabo nesciunt aliquam a!
            </p>
            <p className="pt-4 text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
              nisi debitis. Explicabo nesciunt aliquam a!
            </p>
          </div>
          <div className="col-md-5 col-sm-12 p-5">
            <h4 className="text-light">About us</h4>
            <p className="text-muted">Tea Leaves</p>
          </div>
          <div className="col-md-2 col-sm-12 py-5 px-0">
            <h4 className="text-light">Follow us</h4>
            <p className="text-muted">See us on social</p>
            <div
              className="column"
              style={{
                color: "whitesmoke",
                fontSize: "1.25em",
                justifyContent: "space-between",
              }}
            >
              <FaFacebookF style={{ marginRight: "0.5em" }} />
              <FaInstagramSquare style={{ marginRight: "0.5em" }} />
              <FaTwitter style={{ marginRight: "0.5em" }} />
              <FaYoutube style={{ marginRight: "0.5em" }} />
            </div>
          </div>
        </div>
        <div className="row text-left">
          <div
            className="container-fluid text-center"
            style={{
              color: "#ababab",
              fontSize: "0.9em",
            }}
          >
            copyright 2022
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
