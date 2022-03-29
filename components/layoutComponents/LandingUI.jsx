import Image from "next/image";
import React from "react";

const LandingUI = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-7 col-sm-12 justify-content-center">
            <h6 style={{ fontWeight: "300" }}>
              Over 60 years in the tea industry
            </h6>
            <h1 style={{ fontSize: "4.5em" }}>EXITING ADVENTURE</h1>
            <p style={{ fontWeight: "300" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              omnis asperiores aliquid minus labore accusamus natus, quos velit
              exercitationem aut?
            </p>
          </div>
          <div className="col-md-5 col-sm-12 h-25">
            <Image
              src="/images/teaLeaves.png"
              alt="tea"
              width={400}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingUI;
