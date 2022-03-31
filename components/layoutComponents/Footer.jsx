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
          <div className="col-md-4 col-sm-12 p-5">
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
          <div className="col-md-4 col-sm-12 p-5">
            <h4 className="text-light">Location</h4>
            <p className="text-muted">
              Head office and facilities:
              <br /> XYZteas (Pvt)Ltd
              <br /> Sri Lanka
            </p>
            <p className="text-muted">Tel: +9400 000 0000</p>
            <p className="text-muted">E-mail: info@xyzteas.lk</p>
          </div>
          <div className="col-md-4 col-sm-12 p-5">
            <h4 className="text-light">Contact us</h4>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            ></input>
            <button
              type="submit"
              className="btn"
              style={{
                margin: "10px",
                marginLeft: "0px",
                backgroundColor: "#999B85",
                color: "#141414",
              }}
            >
              Submit
            </button>
            <br />
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
              <button
                type="button"
                className="btn btn-icon m-1 "
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
                data-toggle="tooltip"
                data-placement="top"
                title="FaceBook"
              >
                <FaFacebookF />
              </button>
              <button
                type="button"
                className="btn btn-icon m-1 "
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
              >
                <FaInstagramSquare />
              </button>
              <button
                type="button"
                className="btn btn-icon m-1 "
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <FaTwitter />
              </button>
              <button
                type="button"
                className="btn btn-icon m-1 "
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
                data-toggle="tooltip"
                data-placement="top"
                title="YouTube"
              >
                <FaYoutube />
              </button>
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
            <hr />
            &copy; 2022 | XYZteas (Pvt) Ltd
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
