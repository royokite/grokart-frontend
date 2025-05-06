import React from "react";

const Home = () => {
  return (
    <section className="hero position-relative">
      <div className="card bg-dark text-white border-0">
        <img
          src="./images/welcome-bg.png"
          className="card-img object-fit-cover"
          alt="Fresh groceries background"
          height="660"
          style={{ objectFit: "cover", filter: "brightness(60%)" }}
        />

        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <div className="container text-center">
            <h1
              className="display-4 fw-bold mb-3"
              style={{ color: "#4d7e3e", textShadow: "1px 1px 2px #000" }}
            >
              Welcome to GroKart
            </h1>

            <hr
              className="mx-auto mb-4"
              style={{ width: "80px", borderColor: "#f97316" }}
            />

            <p
              className="lead fw-medium mx-auto mb-4"
              style={{
                color: "#f97316",
                maxWidth: "600px",
                textShadow: "1px 1px 2px #000",
              }}
            >
              The easiest way to shop for groceries online.
              <br />
              Shop comfortably from your home with GroKart.
              <br />
              Discover the future of grocery shopping today.
            </p>

            <hr
              className="mx-auto"
              style={{ width: "80px", borderColor: "#f97316" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
