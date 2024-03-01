import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./customerOrderNav.css"


const CustomerOrderNav = ({getAllCustomerOrders, getCustomerPendingOrders}) => {
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
      <nav className="order-nav-customer">
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
          <div className="order-link-customer">
            <ul >
                <li>
                <button onClick={getAllCustomerOrders} className="btn btn-warning">
              All Orders
            </button>
                </li>
                <li>
                <button onClick={getCustomerPendingOrders} className="btn btn-warning">
              Active Orders
            </button>
                </li>
                <li>
                  <button onClick={() => {
                          navigate("/customer-home");
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

export default CustomerOrderNav;
