import Image from "next/image";
import LandingUI from "../components/layoutComponents/LandingUI";
import About from "../components/layoutComponents/About";
import Products from "../components/layoutComponents/Products";
import Footer from "../components/layoutComponents/Footer";
import Deference from "../components/layoutComponents/Deference";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap"
        rel="stylesheet"
      ></link>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-light bg-light"
        style={{ backgroundColor: "#FFF", height: "80px", zIndex: "1" }}
      >
        <div
          className="container-fluid"
          style={{ backgroundColor: "whitesmoke" }}
        >
          <Link className="navbar-brand" href="/" passHref>
            <Image
              src="/images/XYZlogo.png"
              alt="XYZ teas logo"
              width={120}
              height={60}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav p-3">
              <li className="nav-item">
                <Link aria-current="page" href="#section-1" passHref>
                  <a className="nav-link active">HOME</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#section-3" passHref>
                  <a className="nav-link ">ABOUT</a>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PRODUCTS
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#section-2">
                    BLACK TEA RANGE
                  </a>
                  <a class="dropdown-item" href="#section-2">
                    GREEN TEA RANGE
                  </a>
                  <a class="dropdown-item" href="#section-2">
                    WHITE TEA RANGE
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <Link href="#section-4" passHref>
                  <a className="nav-link ">OUR SERVICES</a>
                </Link>
              </li>
              <li className="nav-item" passHref>
                <Link href="#section-5">
                  <a className="nav-link ">CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sections scrolling */}
      <section id="section-1">
        <LandingUI />
      </section>
      <section id="section-2">
        <Products />
      </section>
      <section id="section-3">
        <About />
      </section>
      <section id="section-4">
        <Deference />
      </section>
      <section id="section-5">
        <Footer />
      </section>
    </div>
  );
}
