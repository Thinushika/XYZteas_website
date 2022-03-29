import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="../../images/logo.png"
              alt="XYZ teas logo"
              width={80}
              height={80}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  PRODUCTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  OUR SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
