import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import "./index.css";
import { URL } from "../../../config";
import { Scrollbars } from "react-custom-scrollbars-2";
import Footer from "../../../components/Footer/Footer";
import AdminCommonNavb from "../../../components/Navbr/AdminNavbar/AdminCommonNavb";

const UpdateEmployee = () => {
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("employee");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [State, setState] = useState("");
  const [pinCode, setPinCode] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();

  const cancelReset = () => {
    navigate("/search-emp");
  };

  useEffect(() => {
    const { employee } = state;

    setEmail(employee.email);
    setUserId(employee.userId);
  }, []);

  const updateEmp = () => {
    if (role.length == 0) {
      toast.warning("Please enter role");
    } else if (gender.length == 0) {
      toast.warning("Please enter gender");
    } else if (dateOfBirth.length == 0) {
      toast.warning("Please enter date of birth");
    } else if (line1.length == 0) {
      toast.warning("Please enter your address");
    } else if (city.length == 0) {
      toast.warning("Please enter city");
    } else if (district.length == 0) {
      toast.warning("Please enter district");
    } else if (state.length == 0) {
      toast.warning("Please enter state");
    } else if (pinCode.length == 0) {
      toast.warning("Please enter your address");
    } else {
      const body = {
        role,
        gender,
        dateOfBirth,
        address: {
          line1,
          line2,
          city,
          district,
          state: State,
          pinCode,
        },
      };

      // url to call the api
      const url = `${URL}/user/update-employee/${userId}`;

      axios.put(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully updated employee details");

          // navigate to the search employee page
          navigate("/search-emp");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div className="background-img">
      <AdminCommonNavb />
      <Scrollbars>
        <div style={{ marginTop: "70px" }}>
          <div className="row ">
            <div className="col"></div>
            <div className="col border-updateemp">
              <h1 className="title5 " style={{color:"white"}}>Update Employee Details</h1>
              <hr />

              <div className="form">
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Email
                  </label>
                  <input
                    value={email}
                    type="email"
                    className="form-control"
                    readOnly="true"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Role
                  </label>
                  <input
                    // onChange={(e) => {
                    //   setRole(e.target.value);
                    // }}
                    //type="text"
                    value={role}
                    readOnly="true"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Gender
                  </label>
                  <select
                    className="form-select"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option className="text-dark" selected>
                      {" "}
                      Select Gender{" "}
                    </option>
                    <option className="text-dark" value="Male">
                      Male
                    </option>
                    <option className="text-dark" value="Female">
                      Female
                    </option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Date Of Birth
                  </label>
                  <input
                    onChange={(e) => {
                      setDateOfBirth(e.target.value);
                    }}
                    type="Date"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Address Line 1
                  </label>
                  <input
                    onChange={(e) => {
                      setLine1(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Address Line 2
                  </label>
                  <input
                    onChange={(e) => {
                      setLine2(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    City
                  </label>
                  <input
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    District
                  </label>
                  <input
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    State
                  </label>
                  <input
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Pin Code
                  </label>
                  <input
                    onChange={(e) => {
                      setPinCode(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <div className="row">
                    <div className="col">
                      <button
                        onClick={updateEmp}
                        className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
                      >
                        Update
                      </button>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                      <button
                        onClick={cancelReset}
                        className="css-button-arrow--sky1 css-button-arrow--sky1:hover css-button-arrow--sky1:hover:after css-button-arrow--sky1:after"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col"></div>
          </div>
        </div>
      </Scrollbars>
      <Footer />
    </div>
  );
};

export default UpdateEmployee;
