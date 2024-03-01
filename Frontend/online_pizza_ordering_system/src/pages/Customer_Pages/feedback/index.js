import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import "./index.css";
import { URL } from "../../../config";
import Navb from "../../../components/Navbr/CustomerNavbar/Navb"
import Footer from '../../../components/Footer/Footer'
import { Scrollbars } from "react-custom-scrollbars-2";

const Addfeedback = () => {
  const {state} = useLocation();
  const [foodQuality, setFoodQuality] = useState("");
  const [deliveryService, setDeliveryService] = useState("");
  const [orderAccuracy, setOrderAccuracy] = useState("");
  const [overallExperience, setOverallExperience] = useState("");
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState("");
  const [orderId, setOrderId] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();

  useEffect(()=>{
    const {orderId} = state;
    setOrderId(orderId)
    console.log(orderId)
  },[])


  const addtheFeedback = () => {
    
    const body = {
      foodQuality,
      deliveryService,
      orderAccuracy,
      overallExperience,
      comment,
      userId:sessionStorage['userId'],
      orderId
    };

    // url to call the api
    const url = `${URL}/order/add-feedback`;

    // http method: post
    // body: contains the data to be sent to the API
    axios.post(url, body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully added feedback");

        // navigate to order page
        navigate("/customer-home");
      } else {
        toast.error(result["error"]);
      }
    });
  };

  return (
    <div className="background-img">
      <Navb/>
      <Scrollbars>
      <div style={{marginTop:'50px'}}>
      
       
      <div className="row">
        <div className="col"></div>
        <div className="col border3">
       
        <h1 className="title" style={{color:"white"}}>Feedback </h1>
        <hr/>
          
          <div className="form">
            <form>
              <div id="group1">
                <div>
                  <div className="row bottom-margin1">
                    <label className="bottom-margin1">Food Quality :-</label>
                    <div className="col">
                      <div class="form-check">
                        <input
                          value="Excellent"
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onChange={(e) => {
                            setFoodQuality(e.target.value);
                          }}
                        />
                        <label className="form-check-label" for="flexRadioDefault1">
                          Excellent
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="form-check">
                        <input
                          value="Good"
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          onChange={(e) => {
                            setFoodQuality(e.target.value);
                          }}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Good
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="form-check">
                        <input
                          value="Average"
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onChange={(e) => {
                            setFoodQuality(e.target.value);
                          }}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Average
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="form-check">
                        <input
                          value="Dissatisfied"
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          onChange={(e) => {
                            setFoodQuality(e.target.value);
                          }}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Dissatisfied
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <label>
              *************************************************************************************
            </label>

            <form>
              <div id="group1" className="bottom-margin1">
                <div className="row">
                  <label className="bottom-margin1"> Delivery Service :-</label>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Excellent"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => {
                          setDeliveryService(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Excellent
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Good"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={(e) => {
                          setDeliveryService(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Good
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Average"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => {
                          setDeliveryService(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Average
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Dissatisfied"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={(e) => {
                          setDeliveryService(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Dissatisfied
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <label>
              *************************************************************************************
            </label>
           
            <form>
              <div id="group1">
                <div className="row bottom-margin1">
                  <label className="bottom-margin1">Order Accuracy :-</label>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Excellent"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => {
                          setOrderAccuracy(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Excellent
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Good"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={(e) => {
                          setOrderAccuracy(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Good
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Average"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => {
                          setOrderAccuracy(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Average
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Dissatisfied"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={(e) => {
                          setOrderAccuracy(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Dissatisfied
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <label>
              *************************************************************************************
            </label>

            <form>
              <div id="group1">
                <div className="row bottom-margin1">
                  <label className="bottom-margin1"> Overall Experience :-</label>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Excellent"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => {
                          setOverallExperience(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Excellent
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Good"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={(e) => {
                          setOverallExperience(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Good
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Average"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => {
                          setOverallExperience(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Average
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        value="Dissatisfied"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={(e) => {
                          setOverallExperience(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Dissatisfied
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <label>
              *************************************************************************************
            </label>

            <div className="mb-3">
              <label htmlFor="" className="label-control bottom-margin1">
                Comment
              </label>
              {/* <input
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                type="text"
                className="form-control"
                
              /> */}
              <textarea
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                type="text"
                className="form-control"
                name="Text1"
                cols="40"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <button
                    onClick={addtheFeedback}
                    className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after top-margin1"
                  >
                    Add Feedback
                  </button>
                </div>
                <div className="col"></div>
                <div className="col">
                  <button
                    onClick={()=>{navigate("/customer-order");}}
                    className="css-button-arrow--sky1 css-button-arrow--sky1:hover css-button-arrow--sky1:hover:after css-button-arrow--sky1:after top-margin1 float-end"
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
    <Footer/>
    </div>
  );
};

export default Addfeedback;
