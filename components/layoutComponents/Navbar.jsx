import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" className={styles.navbarBrand}>
            <img
              src="../../images/logo.png"
              alt="XYZ teas logo"
              className={styles.logo}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mx-auto"></div>
            <ul class="navbar-nav">
              <li class="nav-item" className={styles.navItem}>
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  className={styles.navbarLink}
                >
                  HOME
                </a>
              </li>
              <li class="nav-item" className={styles.navItem}>
                <a class="nav-link" href="#" className={styles.navbarLink}>
                  PRODUCTS
                </a>
              </li>
              <li class="nav-item" className={styles.navItem}>
                <a class="nav-link" href="#" className={styles.navbarLink}>
                  OUR SERVICES
                </a>
              </li>
              <li class="nav-item" className={styles.navItem}>
                <a class="nav-link" href="#" className={styles.navbarLink}>
                  ABOUT
                </a>
              </li>
              <li class="nav-item" className={styles.navItem}>
                <a class="nav-link" href="#" className={styles.navbarLink}>
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
