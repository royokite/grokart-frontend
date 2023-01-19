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
            <h1 className="card-title fw-bold" style={{color: "#4d7e3e"}}>
              WELCOME TO GROKART
            </h1>
            <hr className="w-25 text-dark"/>
            <p className="card-text text-justify" style={{color: "#f97316"}}>
              <strong>
                The easiest way to shop for groceries online! <br/>With GroKart, you
                can shop from the comfort of your home.<br/> Start shopping with GroKart today and discover
                the  <br/> future of grocery shopping.
              </strong>
            </p>
            <hr className="w-25 text-dark"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
