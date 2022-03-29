import React from "react";
import data from "../data/cards.json";

const Cards = () => {
  return (
    <>
      <div className="cover">
        <div className="container text-center">
          <h1>Tea Leaves</h1>
          <p>
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
              <div className="rect">
                <h1>{post.number}</h1>
                <p>{post.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
