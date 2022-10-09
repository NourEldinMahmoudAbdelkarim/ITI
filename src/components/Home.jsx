import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="./images/online-shopping.jpg"
          className="card-img"
          alt="Background-Image"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container flex-column justify-content-start align-items-start">
            <h5 className="card-title display-2 fw-bolder col-md-6">
             <span style={{color: '#5929c4'}}>FRESH</span> | <span style={{color: '#33b2ea'}}>NEW</span> | <span style={{color: '#d65c7a'}}>AVAILABLE</span>
            </h5>
          <p className="card-title lead">Fresh Food. New Brands. Available 24 Hours</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
