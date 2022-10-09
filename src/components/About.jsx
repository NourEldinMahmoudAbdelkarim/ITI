import React from "react";
import Products from "./Products";

export default function About() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="./images/about.jpg"
          className="card-img"
          alt="Background-Image"
        />
        <div className=" d-flex flex-column justify-content-center py-5">
          <div className="container flex-column justify-content-center align-items-center">
            <h6 className="display-4 text-center">About Us</h6>
            <h5 className="card-title display-2 my-3 fw-bolder text-center">
             <span style={{color: '#5929c4'}}>FRESH</span> | <span style={{color: '#33b2ea'}}>NEW</span> | <span style={{color: '#d65c7a'}}>AVAILABLE</span>
            </h5>
          <p className="card-title lead text-center">Fresh Food. New Brands. Available 24 Hours</p>
          <p className="card-title lead text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum exercitationem accusamus vel asperiores corrupti at repellat similique, enim temporibus qui adipisci quod explicabo praesentium atque placeat voluptatem mollitia iusto!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
