import React from "react";
import data from "../data/cards.json";

const Cards = () => {
  return (
    <>
      <div className="cover">
        <div className="container text-center">
          <h1 style={{ margin: "0.5em" }}>Our Products</h1>
          <p style={{ margin: "0.5em" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit omnis
            asperiores aliquid minus labore accusamus natus, quos velit
            exercitationem aut?
          </p>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
          {data.map((post) => {
            return (
              <div
                className="card"
                style={{ width: "18rem", margin: "1em" }}
                key={post.id}
              >
                <img
                  className="card-img-top"
                  src="../../images/logo.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4>{post.title}</h4>
                  <p className="card-text">{post.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
