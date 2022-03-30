import React from "react";
import data from "../data/cards.json";

const Cards = () => {
  return (
    <>
      <div className="cover">
        <div className="container text-center">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
          {data.map((post) => {
            return (
              <div
                className="card mt-3 mb-5"
                style={{
                  width: "18rem",
                  marginInline: "1em",
                  borderRadius: "10px",
                  borderStyle: "none",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                }}
                key={post.id}
              >
                <img
                  className="card-img-top"
                  src={post.image}
                  alt="Card image cap"
                  height="350px"
                />
                <div className="card-body">
                  <h4>{post.title}</h4>
                  <p
                    className="card-text"
                    style={{ fontWeight: "300", color: "#888" }}
                  >
                    {post.desc}
                  </p>
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
