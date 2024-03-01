import "./index.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { URL } from "../../../config";
import { toast } from "react-toastify";
import axios from "axios";
import AdminCommonNavb from "../../../components/Navbr/AdminNavbar/AdminCommonNavb";
import Footer from "../../../components/Footer/Footer"

const SearchEmp = () => {
 
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [employee, setEmployee] = useState([]);

  const navigate = useNavigate();

  const searchEmployee = () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else {
      const url = `${URL}/user/search-employee/${email}`;

      axios.get(url).then((response) => {
        const result = response.data;

        if (result["status"] == "success") {
          setEmployee(result["data"]);
          setCheck(true);
          console.log(result);
        } else {
          toast.error("email does not exist");
        }
      });
    }
  };

  return (
    <div className="background-img">
      <AdminCommonNavb  />
      <div style={{marginTop:"40px"}}>

      <h1 className="title1" style={{color:"white"}}>Search Employee</h1>

      <div className="row ">
        <div className="col"></div>
        <div className="col">
          <div className="container-search">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <button
          style={{backgroundColor:"#0080ff"}}
            onClick={searchEmployee}
            className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
          >
            Search
          </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
      {check && (
      <div className="container-aftersearch">
        <div className="row">

          
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{employee.userId}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate("/update-employee", {
                            state: { employee: employee },
                          });
                        }}
                        className="btn btn-info"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
         
       
       </div>
      </div>

)}

      </div>
      <Footer/>
    </div>
  );
};

export default SearchEmp;
