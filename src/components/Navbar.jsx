import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fs-4" to="/">
           <img src="/images/logo.png" className="logo" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
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
            <div className="buttons">
            <NavLink to="/cart" className="btn ms-2 text-uppercase">
                <i className="fa fa-shopping-cart me-2"></i>
                Your Cart ({state.length})
              </NavLink>
              <NavLink to="/login" className="btn text-uppercase">
                <i className="fa fa-sign-in me-2"></i>
                Sign in
              </NavLink>
              <NavLink to="/register" className="btn ms-2 text-uppercase">
                <i className="fa fa-user-plus me-2"></i>
                New Account
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
