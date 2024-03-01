import "./cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartItem from "../../../components/Customer/CartItem";
import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router'
import { toast } from "react-toastify";
import { URL } from "../../../config";
import Navb from "../../../components/Navbr/CustomerNavbar/Navb"
import Footer from "../../../components/Footer/Footer"

const Cart1 = () => {
  const [ cart,setCart] = useState('');
  // const [ qty,setqty] = useState(0);
  const navigate = useNavigate()

useEffect(()=>{
  getCartItems()
  console.log('in effect')
}  
,[])

// const changeQuantity = (item) => {
//     setqty(item)
//     console.log('in chnage qty')
// }





const getCartItems = () => {

    const url = `${URL}/order/getallcartitem/${sessionStorage['userId']}`;

    axios.get(url).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
            setCart(result['data'])
            console.log(cart);
            console.log("in axios get cart item method")
        } else {
          //toast.error(result["error"]);
          console.log('cart is empty');
        }
      });
}
if(cart.length !== 0)
{
  return (
    <div >
      <Navb/>
    <div className="container-md">
    
        <h1 className="heading" style={{marginTop:"80px"}}>Order Summary</h1>
        <p style={{ color: "grey" }}>There are {cart.totalQuantity} items in your cart.</p>

        <hr />
     
      <div className="container-cart row">
        <Scrollbars>
          {cart.cartDetailList.map((curItem) => {
                return <CartItem key={curItem.cartDetailId} item ={curItem}  />;
              })}
   
        </Scrollbars>
      </div>
            <div className="row" style={{marginBottom:"70px"}}>
            <div className="col"></div>
            <div className="col"></div>
                <div className="col">
                <div className="amount-pos">
                  <h3 style={{ color: "black" }}>Amount : ₹ {cart.totalAmount}</h3>
                </div>
                </div>
                <div className="col">
                <div className="btn-proceed">
                  <button onClick={()=>{
                    navigate('/checkout',{ state: { amount:cart.totalAmount}})
                  }} className="btn btn-warning">Proceed</button>
                  </div>
                </div>

            </div>
     
      
    </div>
    <Footer/>
    </div>
  );
}
else{
  return (
    <div>
      <Navb/>
   
    <div className="container-md">
         <div className="row">
        <h1 className="heading" style={{marginTop:"80px"}}>Order Summary</h1>
        <p style={{ color: "grey" }}>There are {cart.totalQuantity} items in your cart.</p>
        <hr />
        <h2 style={{ color: "black" }}>Cart is Empty..</h2>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
}
export default Cart1;
