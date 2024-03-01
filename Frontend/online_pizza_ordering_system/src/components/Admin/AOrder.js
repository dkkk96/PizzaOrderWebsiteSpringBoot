import { URL } from "../../config";
import { useState,useEffect } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment-timezone";

const AOrder = ({order,deliveryBoy}) =>{

    const [empId,setEmpId] = useState("")
    const [status,setStatus] = useState("")
    
  

    const assignDeliveryBoy =()=>{

  const url = `${URL}/order/assign-deliveryboy`;

  const body = {
    userId:empId,
    orderId:order.orderId
  }
  axios.post(url,body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {

         toast.success('delivery boy assigned...')
         document.location.reload();

      } else {
        toast.error(result["error"]);
      }
    });


}

const updateStatus = () =>{

    const url = `${URL}/order/update-status/${order.orderId}`;

  const body = {
    statusType:status
  }
  axios.put(url,body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {

         toast.success('order status updated')
         document.location.reload();
      } else {
        toast.warning(result["error"]);
      }
    });

}

    return (
        <div style={{marginBottom:"50px"}}>
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
            
            <div className="mb-3">
       
                <select
                    className="form-select"
                    onChange={(e) => {
                   setEmpId(e.target.value);
                    }}
                >
                    <option className="text-dark" value="" selected>
                    
                    select delivery boy
                    </option>
   
                    {deliveryBoy.map((delBoy) => {
                return <option style={{color:"black"}} key={delBoy.userId} value={delBoy.userId}>{delBoy.firstName} {delBoy.lastName}</option>;

              })}

                </select>
                <div style={{marginTop:"20px"}}>
                <button className="btn btn-outline-primary"
                onClick={assignDeliveryBoy}
                >Assign</button>
                </div>
            </div>

            </div>
            
            <div className="col">
            

            <div className="mb-3">
            
                <select
                    className="form-select"
                    onChange={(e) => {
                    setStatus(e.target.value);
                    }}
                >
                    <option className="text-dark" value="Wheat Crust" selected>
                    
                    select status
                    </option>
                    <option className="text-dark" value="Confirmed">
                    Confirmed
                    </option>
                    <option className="text-dark" value="Prepared">
                    Prepared
                    </option>
                    <option className="text-dark" value="Out For Delivery">
                    Out For Delivery
                    </option>
                </select>
                <div style={{marginTop:"20px"}}>
                <button 
                onClick={updateStatus}
                className="btn btn-outline-primary">Update Status</button>
                </div>
                </div>
            </div>
            
            <div className="col">
            <h5 style={{color:"black"}}>
            {moment(order.orderDateTime).format('MM/DD/YYYY h:mm a')}
            </h5>
            </div>

        </div> 
        <hr/>
    </div>
    )
}

export default AOrder