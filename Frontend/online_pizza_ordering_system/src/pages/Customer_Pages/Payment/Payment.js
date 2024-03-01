import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import "./payment.css";
import { URL } from "../../../config";
import Footer from "../../../components/Footer/Footer";
import Navb from "../../../components/Navbr/CustomerNavbar/Navb"


const Payment = () => {
  const [paymentMode, setPaymentMode] = useState("");
  const [cart, setCart] = useState("");
  const [amount,setAmount] = useState(0);
   const { state } = useLocation();
  let list = [];
  // const [list,setList] = useState([]);
  const navigate = useNavigate();


   useEffect(()=>{
     setAmount(state.amount)
      //getCartItems()
   },[])


  

  const mystyle = {
    
    fontFamily: "Arial, Helvetica, sans-serif",

  };


  const cancelAddpayment = () => {
    navigate("/customer-home");
  };

  
//   const getCartItems = () => {

//     const url = `${URL}/order/getallcartitem/${sessionStorage['userId']}`;

//     axios.get(url).then((response) => {
//         // get the data from the response
//         const result = response.data;
//         //console.log(result);
//         if (result["status"] == "success") {
//             setCart(result['data'])
//             //console.log(cart)
//             console.log(result['data'])

//           //   cart.cartDetailList.forEach(item => {
//               // const orderDetail = {
//               //   quantity: item.quantity,
//               //     amount: item.price * item.quantity,
//               //     product:{
//               //       productId:item.productId
//               //     },
//               //     combo:{
//               //       comboId:item.comboId
//               //     }
//               // }  
//           //     orderDetailList.push(orderDetail);
//           // });
          
//           list = result['data'].cartDetailList.map((item)=>{
//             const orderDetail = {
//               quantity: item.quantity,
//                 amount: item.price * item.quantity,
//                 product:{
//                   productId:item.productId
//                 },
//                 combo:{
//                   comboId:item.comboId
//                 }
//             }  
//               return orderDetail
//           })

           
//             console.log(list);
//         } else {
//           toast.error(result["error"]);
//         }
//       });
// }



  const addthepayment = () => {
    if(paymentMode.length === 0)
    {
      toast.warning('please select payment mode')
    }
    else
    {
    const body = {
      totalAmount:amount + (amount * 0.18),
      paymentMode,
      user:{
        userId:sessionStorage['userId']
      },
      
    };

    console.log(body)
    // url to call the api
    const url = `${URL}/order/save-order`;

    toast.success("Please wait...");
    axios.post(url, body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      
      if (result["status"] == "success") {
        toast.success("Your order is placed");

        // navigate to the signin page
        navigate("/customer-order");
      } else {
        toast.error(result["error"]);
      }
    });
  }
  };

  return (
    <div className="payment-bg">
      <Navb/>
      <div >
      {/* <h1 style={{color:"black" ,marginLeft: "10%" }}>PAYMENT GATEWAY</h1> */}
      <h4 style={{color:"black" ,marginLeft: "10%" }}>How would you like to pay?</h4>
      <div className="row">
        <div  className="col container-payment">
          <div className="form">
            <form>
              <div id="group1">
                <div>
                  <div className="row">
                    <label style={mystyle} className="mb-3">
                      CARD PAYMENT :-
                    </label>
                    <div className="col">
                      <div className="form-check">
                        <input
                          value="Online"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onChange={(e) => {
                            setPaymentMode(e.target.value);
                          }}
                        />
                        
                          <img src="./images/payment/visa.png" width="100" />
                       
                      </div>

                    </div>

                    <div className="col">
                      <div className="form-check">
                        <input
                          value="Online"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onChange={(e) => {
                            setPaymentMode(e.target.value);
                          }}
                        />
                        
                          <img src="./images/payment/rupay.png" width="100" />
                       
                      </div>
                      
                    </div>


                    <div className="col mb-3">
                      <div className="form-check">
                        <input
                          value="Online"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          onChange={(e) => {
                            setPaymentMode(e.target.value);
                          }}
                        />
                        <label>
                          <img
                            src="./images/payment/mastercard.png"
                            width="100"
                          />
                        </label>
                      </div>
                     
                    </div>
                         
                    <hr />
                   

                    <label style={mystyle} className="bottom-margin1">
                      UPI PAYMENT :-
                    </label>
                    <div className="col">
                      <div className="form-check">
                        <input
                          value="Online"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onChange={(e) => {
                            setPaymentMode(e.target.value);
                          }}
                        />
                        <label>
                          <img src="./images/payment/paytm.png" width="100" />
                        </label>
                      </div>
                    </div>

                    <div className="col">
                      <div className="form-check">
                        <input
                          value="Online"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onChange={(e) => {
                            setPaymentMode(e.target.value);
                          }}
                        />
                        <label>
                          <img src="./images/payment/gpay.png" width="100" />
                        </label>
                      </div>
                    </div>

                    <div className="col mb-3">
                      <div className="form-check">
                        <input
                          value="Online"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onChange={(e) => {
                            setPaymentMode(e.target.value);
                          }}
                        />
                        <label>
                          <img
                            src="./images/payment/phonepay.png"
                            width="100"
                          />
                        </label>
                      </div>
                    </div>

                    <hr />
                    <label style={mystyle} className="bottom-margin1">
                      CASH ON DELIVERY :-
                    </label>
                    <div className="col">
                      <div className="form-check">
                        <input
                          value="Cash On Delivery"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          onChange={(e) => {
                            setPaymentMode(e.target.value);
                          }}
                        />
                        <label>
                          <img src="./images/payment/cash.png" width="80" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

          

          </div>
        </div>
       
        <div className="col-sm-4">
          <div  className="pay-amt">
                  <h4 >Amount : ₹ {amount}</h4> 
                  <br />
                  <h4 >Tax : ₹ {(amount * 0.18).toFixed(2)}</h4> 
                  <br />
                  <h4 >Total Amount : ₹ {(amount + (amount * 0.18)).toFixed(2)}</h4>  
          </div>
          <div className="mt-3">
              <div className="row">
                <div className="col">
                  <button
                  style={{width:"100%"}} 
                  onClick={addthepayment} className="btn btn-primary">
                    PAY
                  </button>
                </div>
                <div className="col"></div>
                <div className="col" style={{marginRight:"95px"}}>
                  <div >
                  <button
                    onClick={cancelAddpayment}
                    className="btn btn-danger"
                    style={{width:"100%"}}
                  >
                    Cancel
                  </button>
                  </div>
                 
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Payment;
