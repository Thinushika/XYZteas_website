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
      <div className="container-fluid p-0">
        <div className="row text-left">
          <div className="col-md-5 col-sm-12">
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
          <div className="col-md-5 col-sm-12">
            <h4 className="text-light">About us</h4>
            <p className="text-muted">Tea Leaves</p>
          </div>
          <div className="col-md-2 col-sm-12">
            <h4 className="text-light">Follow us</h4>
            <p className="text-muted">See us on social</p>
            <div className="column">
              <FaFacebookF />
              <FaInstagramSquare />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
