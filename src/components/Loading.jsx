import React from "react";

const Loading = () => {
    return (
      <div className="justify-content-center text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className=" text-success">
          Due to slow speeds of render free tier please hold on while the server
          spins up
        </span>
      </div>
    );
};

export default Loading;