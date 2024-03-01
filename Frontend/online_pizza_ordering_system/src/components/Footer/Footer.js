import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()}  | All rights reserved |
            Terms Of Service | Privacy
          </p>
          <p className="col-sm">
            Contact us : 18004009898
          </p>
          <p className="col-sm">
            Email : tastypizza@pizzeria.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
