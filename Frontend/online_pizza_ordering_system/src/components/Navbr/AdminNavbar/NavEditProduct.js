import React, { useState, useEffect } from "react";
import "./NavEditProduct.css";
import { useNavigate } from "react-router";


const NavEditProduct = ({product}) => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('loginStatus')
    navigate("/signin");
  }

  return (
    <>
      <nav className="edit-product-nav">
          {/* 1st part */}
              <div className="pizza-logo">
                <ul className="nav nav-pills">
                    <li>
                    <img src="./images/icons8-pizza-64.png" alt="img"/>
                    </li>
                    <li>
                    <h1 style={{color:'white',cursor:"pointer"}} onClick={()=>{navigate('/admin-home')}}>Pizzeria</h1>
                    </li>
                </ul>
              </div>
            
          {/* 2nd part */}
          <div className="common-link-admin">
            <ul>
                <li>
                  <button onClick={() => {
                          navigate('/edit-subcategory',{ state : {product : product}})
                        }} className="btn btn-warning">Update SubCategory</button>
                </li>
                <li>
                <button onClick={() => {
                          navigate("/admin-home");
                        }} className="btn btn-warning">Home</button>
                </li>
                <li>
                <button onClick={logout} className="btn btn-warning">Logout</button>
                </li>
            </ul>
          </div>

          {/* 3rd button */}
          <div>

        
          </div>
      </nav>
    </>
  );
};

export default NavEditProduct;
