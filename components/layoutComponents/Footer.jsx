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
      <div class="container-fluid p-0">
        <div class="row text-left">
          <div class="col-md-5 col-sm-12">
            <h1 class="text-light">About us</h1>
            <p class="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
              nisi debitis. Explicabo nesciunt aliquam a!
            </p>
            <p class="pt-4 text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
              nisi debitis. Explicabo nesciunt aliquam a!
            </p>
          </div>
          <div class="col-md-5 col-sm-12">
            <h4 class="text-light">About us</h4>
            <p class="text-muted">Tea Leaves</p>
          </div>
          <div class="col-md-2 col-sm-12">
            <h4 class="text-light">Follow us</h4>
            <p class="text-muted">See us on social</p>
            <div class="column">
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
