import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import "./index.css"
import { URL } from '../../config'


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();
  const isValidEmail = (email) => {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassword = (value) => {
    
    return value.length >= 8;
  };

  const isValidMobileNo = (value) => {
   
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(value);
  };
  const signupUser = () => {

    
    if (firstName.trim() === "") {
      toast.warning("Please enter first name");
    } else if (lastName.trim() === "") {
      toast.warning("Please enter last name");
    } else if (email.trim() === "" || !isValidEmail(email)) {
      toast.warning("Please enter a valid email");
    } else if (mobileNo.trim() === "" || !isValidMobileNo(mobileNo)) {
      toast.warning("Please enter a valid mobile number");
    } else if (password.trim() === "" || !isValidPassword(password)) {
      toast.warning("Please enter a valid password (minimum 8 characters)");
    } else if (confirmPassword.trim() === "" || password !== confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password,     
        mobileNo
        
      };
      // url to call the api
      const url = `${URL}/user/register`;

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully signed up new user");

          // navigate to the signin page
          navigate("/signin");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  // url to call the api
  // url to call the api
  // url to call the api
  

  return (
    <div className="background-img ">
      <div style={{marginBottom:"15px"}}></div>
      

      <div className="row">
        <div className="col"></div>
        <div className="col border-register">
        <h1 className="title"style={{fontFamily:"sans-serif",color:"white"}}>Register</h1>
        <hr/>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
              />
            </div>
                
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Mobile No.
              </label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div className="btn-margin">
                Already have an account? <Link to="/signin" style={{textDecoration:"none"}}>Signin here.</Link>
              </div>
              
              <button onClick={signupUser} className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after">
                Signup
              </button>
              
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Register;
