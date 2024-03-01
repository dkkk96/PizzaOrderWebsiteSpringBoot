import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import "./index.css"
import { URL } from '../../../config'
import Navb from "../../../components/Navbr/CustomerNavbar/Navb";
import Footer from "../../../components/Footer/Footer";


const UpdateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();

  useEffect(() => {
    getUserDetails()
  }, [])



  const cancelUpdate = ()=>{
    navigate('/customer-home')
}

const getUserDetails = () => {
    
    const url = `${URL}/user/user-details/${sessionStorage["userId"]}`;
    axios.get(url).then((response) => {
      // get the data from the response
      const result = response.data;
      //console.log(result);
      if (result["status"] == "success") {
        console.log(result["data"])
        setFirstName(result["data"].firstName)
        setLastName(result["data"].lastName)
        setMobileNo(result["data"].mobileNo)
        // navigate to the signin page
        // navigate("/customer-home");
      } else {
        toast.error(result["error"]);
      }
    });
  }


  const updateCustomer = () => {
    const namePattern = /^[a-zA-Z]+$/;
    const mobilePattern = /^\d{10}$/; 

    if (!namePattern.test(firstName)) {
      toast.warning("Please enter a valid first name");
    } else if (!namePattern.test(lastName)) {
      toast.warning("Please enter a valid last name");
    } else if (!mobilePattern.test(mobileNo)) {
      toast.warning("Please enter a valid 10-digit mobile number");
    } else if (password.length < 6) {
      toast.warning("Password should be at least 6 characters long");
    } else if (password !== confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        firstName,
        lastName,
        password,     
        mobileNo
        
      };

      
      // url to call the api
      const url = `${URL}/user/update-profile/${sessionStorage["userId"]}`;

      // http method: post
      // body: contains the data to be sent to the API
      axios.put(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully updated the profile");

          // navigate to the signin page
          navigate("/customer-home");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };
  

  return (
    <div className="background-img">
      <Navb/>
      

      <div className="row">
        <div className="col"></div>
        <div className="col border-update">
        <h1 className="title" style={{color:"white"}}>Update Profile</h1>
        <hr/>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input value={firstName}
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
              <input value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
                
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Mobile No.
              </label>
              <input value={mobileNo}
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
              <div className='row' style={{marginTop:"20px"}}>
                    <div className='col'>           
                      <button 
                      style={{width:"100%"}}
                      onClick={updateCustomer} className="btn btn-primary">
                        Update
                      </button>
                    </div>
                    <div className='col'></div>
                    <div className='col'>
                      <button style={{width:"100%"}} onClick={cancelUpdate} className="btn btn-danger">
                            Cancel
                      </button>
                    </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <Footer/>
    </div>
  );
};

export default UpdateProfile;
