import React from "react";
import Footer from "./layoutComponents/Footer";
import Navbar from "./layoutComponents/Navbar";

const Structure = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Structure;
