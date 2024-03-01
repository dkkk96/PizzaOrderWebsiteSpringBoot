import React, { useState, useEffect } from "react";
import "./navb.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";



const Navb = () => {
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
      <nav className="main-nav">
          {/* 1st part */}
              <div className="pizza-logo">
                <ul className="nav nav-pills">
                    <li>
                    <img src="./images/icons8-pizza-64.png" alt="img"/>
                    </li>
                    <li>
                    <h1 style={{color:'white',cursor:"pointer"}} onClick={()=>{navigate('/customer-home')}}>Pizzeria</h1>
                    </li>
                </ul>
              </div>
            
          {/* 2nd part */}
          <div className="menu-link">
            <ul className="nav nav-pills">
                <li>
                <button onClick={() => {
                          navigate("/customer-home");
                        }} className="btn btn-warning btn-lg">Home</button>
                </li>
                <li>
                <button onClick={logout} className="btn btn-warning btn-lg">Logout</button>
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

export default Navb;
