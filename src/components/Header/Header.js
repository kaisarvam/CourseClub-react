import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = (props) => {
    return (
        <div className="fixed-top">
              <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         <img src="" alt="" />
        </NavLink>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="/home"  activeClassName="active"  className="nav-link px-2 text-white">Home</NavLink></li>
          <li><NavLink to="/courses"  className="nav-link px-2 text-white">Our Courses</NavLink></li>
          <li><NavLink to="/gallery" className="nav-link px-2 text-white"> Gallery</NavLink></li>
          <li><NavLink to="/about" className="nav-link px-2 text-white">About Us</NavLink></li>
          <li><NavLink to="/faq" className="nav-link px-2 text-white">FAQ</NavLink></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
         <NavLink to="/login" activeClassName="inactive"> <button type="button" className="btn btn-outline-light me-2">Login</button> </NavLink>
         <NavLink to="signup" activeClassName="inactive" > <button type="button" className="btn btn-warning">Sign-up</button> </NavLink>
         <NavLink to="/cart" activeClassName="inactive" > <button type="button" className="btn bg-warning mx-2"> <i className="fas fa-shopping-cart"></i> Cart <strong className="badge badge-pill badge-dark bg-dark badge-shadow">{props.cart.length} </strong> </button> </NavLink>
        </div>
      </div>
    </div>
  </header>
        </div>
    );
};

export default Header;