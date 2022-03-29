import React from "react";
import styles from "../../styles/LandingUI.module.css";

const LandingUI = () => {
  return (
    <>
      <div className="container text-center" classNameName={styles.container}>
        <div className="row" classNameName={styles.row}>
          <div
            className="col-md-7 col-sm-12 justify-content-center"
            classNameName={styles.colText}
          >
            <h6>AUTHOR: DAILY TUITION</h6>
            <h1>EXITING ADVENTURE</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              omnis asperiores aliquid minus labore accusamus natus, quos velit
              exercitationem aut?
            </p>
            <button className="btn btn-light px-5 py-2"> Buy Now</button>
          </div>
          <div
            className="col-md-5 col-sm-12 h-25"
            classNameName={styles.colImage}
          >
            <img
              src="../../images/teaLeaves.png"
              alt="tea"
              classNameName={styles.Image}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingUI;
