import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Footer() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <footer className="navbar navbar-expand-lg bg-dark py-3 shadow-sm pt-5 mt-5 d-block">
        <div className="container">
         <div className="row w-100">
         <div className="col-md-4">
         <h3 className="text-white">About Us</h3>
         <img src="/images/logo.png" height='120px' alt="" />
         <p className="text-white lead mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sed voluptas, numquam nisi alias illo deserunt quaerat nobis voluptatem temporibus officiis hic illum, sapiente in nesciunt eaque minus exercitationem. Veritatis.</p>
          </div>
          <div className="col-md-4">
            <h3 className="text-white">Quick Links</h3>
            <ul className="d-flex flex-column mb-2 mb-lg-0 ps-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="text-white">Find Us</h3>
            <ul className="d-flex mb-2 mb-lg-0 ps-0">
              <li className="nav-item me-3">
              <i className="fa fa-facebook-f text-white"></i>
              </li>
              <li className="nav-item">
              <i className="fa fa-twitter text-white"></i>
              </li>
              <li className="nav-item mx-3">
              <i className="fa fa-instagram text-white"></i>
              </li>
              <li className="nav-item">
              <i className="fa fa-youtube text-white"></i>
              </li>
            </ul>
            <div className="mt-5">
            <h3 className="text-white">Contact Us</h3>
            <ul className="d-flex flex-column mb-2 mb-lg-0 ps-0">
              <li className="nav-item">
                <span className="nav-link text-white" aria-current="page" to="/">
                  <i className="fa fa-map-marker me-3"></i>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita consequatur id dolorum at.
                </span>
              </li>
              <li className="nav-item mt-5">
                <span className="nav-link text-white" aria-current="page" to="/">
                  <i className="fa fa fa-phone me-3"></i>
                 (+02) 0111 555 777 65
                </span>
              </li>
            </ul>
            </div>
          </div>
         </div>
         <hr />
        </div>
         <p className="text-white text-center py-3 mb-0 lead" style={{background: '#000000'}}>Copy right received for Nour-Eldin Mahmoud 2022 &copy;</p>
      </footer>
    </div>
  );
}
