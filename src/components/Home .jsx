import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="/src/img/PSX_20221223_172358 (1).png"
          className="card-img"
          alt="background"
          height="600"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h1 className="card-title fw-bold text-dark">
              WELCOME TO GROKART
            </h1>
            <p className="card-text  text-black text-justify">
              The easiest way to shop for groceries online! <br/>With GroKart, you
              can shop from the comfort of your home.<br/> Simply add
              items to your cart, and choose a delivery <br/>or pickup time
              that works for you.<br/> Start shopping with GroKart today and discover
              the future <br/> of grocery shopping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
