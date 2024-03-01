import React, { useState, useEffect } from "react";
import "./navb2.css";


const Navb2 = () => {

  return (
    <>
      <nav className="main-nav2">
          {/* 1st part */}
          
          <div className="pizza-category">
            <ul>
                <li><a href="#Veg" style={{color:'white', textDecoration : 'none'}}>Veg</a></li>
                <li><a href="#Non-Veg" style={{color:'white', textDecoration : 'none'}}>Non Veg</a></li>
                <li><a href="#Combo" style={{color:'white', textDecoration : 'none'}}>Combo</a></li>
            </ul>
            
          </div>
          
      </nav>
    </>
  );
};

export default Navb2;
