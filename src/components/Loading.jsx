import React from "react";

const Loading = () => {
    return (
    <div className="justify-content-center text-center">
        <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  );
};

export default Loading;