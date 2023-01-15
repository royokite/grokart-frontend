import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="./images/welcome-bg.png"
          className="card-img"
          alt="background"
          height="660"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h1 className="card-title fw-bold text-success">
              WELCOME TO GROKART
            </h1>
            <hr className="w-25 text-dark"/>
            <p className="card-text text-justify" style={{color: "#f97316"}}>
              The easiest way to shop for groceries online! <br/>With GroKart, you
              can shop from the comfort of your home.<br/> Simply add
              items to your cart, and choose a delivery <br/>or pickup time
              that works for you.<br/> Start shopping with GroKart today and discover
              the  <br/> future of grocery shopping.
            </p>
            <hr className="w-25 text-dark"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
