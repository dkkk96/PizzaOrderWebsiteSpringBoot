import { URL } from "../../config";
import { useState,useEffect } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import moment from "moment-timezone";

const COrder = ({order}) =>{
    const navigate = useNavigate();

  const trackOrder = () =>{
      navigate('/tracking',{state : {orderId:order.orderId}});
  }

    return (
        <div style={{marginBottom:"40px"}}>
        <div className="row">
            <div className="col-3">
                <div className="row">
                  <h5 style={{color:"black"}}>Order Id:- {order.orderId}</h5>
                    
                </div>
                <div className="row">

                    {order.orderDetailList.map((orderDetail) => {
                        if(orderDetail.product !== null){ return <p style={{color:"black",marginBottom:"5px"}} key={orderDetail.orderDetailId} >- {orderDetail.product.productName} - {orderDetail.quantity} qty.</p>;}
                        else{}
                     return <p style={{color:"black"}} key={orderDetail.orderDetailId} >- {orderDetail.combo.comboName} - {orderDetail.quantity} qty.</p>;             
                   })}
                </div>
            </div>
        
        <div className="col">
        <h5 style={{color:"black"}}>{order.user.firstName} {order.user.lastName} </h5>

        </div>
        
            <div className="col">
            <h5 style={{color:"black"}}>{order.user.address.city}</h5>
            </div>
            
            
            <div className="col">
            <h5 style={{color:"black"}}>
            {moment(order.orderDateTime).format('MM/DD/YYYY h:mm a')}
            </h5>

            {order.statusType === "Delivered" && (
                        <h5 style={{color:"green",marginTop:"10%"}}>Delivered...</h5>
                    )}
            </div>

            <div className="col">
                   { order.statusType === "Delivered" && ( <button 
                        style={{margin:"10px"}}
                    onClick={()=>{
                        navigate('/add-feedback', {state:{orderId:order.orderId}})
                    }}
                    className="btn btn-outline-primary">Feedback</button>)}
                       
             
              
                    {/* {order.statusType === "Delivered" && (
                        <h5 style={{color:"green",marginTop:"10%"}}>Delivered...</h5>
                    )} */}

                
                        <button 
                         style={{margin:"10px"}}
                    onClick={trackOrder}
                    className="btn btn-outline-primary">Track Order</button>
          
             
            </div>

        </div> 
        <hr/>
    </div>
    )
}

export default COrder