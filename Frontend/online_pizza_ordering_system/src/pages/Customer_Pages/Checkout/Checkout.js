import "./Checkout.css";
import Navb from "../../../components/Navbr/CustomerNavbar/Navb";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { URL } from '../../../config'
import Footer from "../../../components/Footer/Footer";

const Checkout = (props) => {
    const {state} = useLocation()
  const [check, setCheck] = useState(false);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [State, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [amount, setAmount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const { amount } = state
  
    setAmount(amount)
    // setUserId(employee.userId)
  
  }, [])

  const addAddress = () => {
    const pinCodePattern = /^\d{6}$/; 

    if (line1.length === 0) {
      toast.warning("Please enter Address Line 1");
    } else if (line2.length === 0) {
      toast.warning("Please enter Address Line 2");
    } else if (city.length === 0) {
      toast.warning("Please enter City");
    } else if (district.length === 0) {
      toast.warning("Please enter District");
    } else if (State.length === 0) {
      toast.warning("Please enter State");
    } else if (!pinCodePattern.test(pinCode)) {
      toast.warning("Please enter a valid 6-digit Pin Code");
    } else {
      const body = {
        line1,
        line2,
        city,
        district,
        state : State,
        pinCode,
      };
      // url to call the api
      const url = `${URL}/user/add-address/${sessionStorage['userId'] }`;

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully submitted the address");
            setCheck(true)
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  const placeOrder = () => {
      navigate('/payment',{state:{amount :amount}})
  };

  return (
    <div className="checkout-bg">
      <Navb />
      <div className="checkout">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-4 ">
              <div className="border-add" >
                <h1>Add Address</h1>
                <hr/>
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
                  <label htmlFor="" className="label-control" >
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
                  <label htmlFor="" className="label-control" >
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
                  <label htmlFor="" className="label-control" >
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
                  <label htmlFor="" className="label-control" >
                    PinCode
                  </label>
                  <input
                    onChange={(e) => {
                      setPinCode(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
                <button
                  onClick={addAddress}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* column for Total amount */}
            <div className="col-4 checkout1">
              <div
                className="row border-add1"
                style={{ backgroundColor: "#f2ffe5" }}
              >
                <div >
                  <div className="row ">
                    <div className="mb-3">
                      <label htmlFor="" className="label-control" >
                        <h2 style={{ color: "black" }}>Amount : ₹ {amount}</h2>
                      </label>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="label-control">
                        <h2 style={{ color: "black" }}>Tax : ₹ {(amount * 0.18).toFixed(2)}</h2>
                      </label>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="label-control">
                        <h2 style={{ color: "black" }}>Total Amount : ₹ {(amount + (amount * 0.18)).toFixed(2)}</h2>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {check && (<div className="row placeorder-button">
                <button
                
                  onClick={placeOrder}
                  className="btn btn-primary"
                >
                  Place Order
                </button>
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Checkout;
