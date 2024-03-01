import { Scrollbars } from "react-custom-scrollbars-2";
import { URL } from "../../../config";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";

const EmpOrder = () => {
  const [order, setOrder] = useState("");

  // const [check,setCheck] =useState(true)

  useEffect(() => {
      console.log('in use effect')
    getAssignedOrder()
    }, [])


    const updateStatus = () =>{

      const url = `${URL}/order/update-status/${order.orderId}`;
  
    const body = {
      statusType: "Delivered"
    }
    axios.put(url,body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {

           document.location.reload();
        } else {
          toast.warning(result["error"]);
        }
      });
  
  }


  const getAssignedOrder = () => {
    const url = `${URL}/order/get-assignedorder/${sessionStorage["userId"]}`;
    axios.get(url).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        console.log("success");
        setOrder(result["data"]);
        // setCheck(false)
      } else {
        // toast.error(result["error"]);
      }
    });
  };

  return (
    <div className="tracking-bg">
    <div className="container-md">
      <div className="row">
        <div className="col">
          <h1 style={{ color: "white" }}> Orders</h1>
        </div>
      </div>

      {order.length !== 0 && ( <div className="container-order">
        <Scrollbars>
          <div className="row">
            <div className="col-3">
              <h3 style={{ color: "black" }}>Order</h3>
            </div>

            <div className="col">
              <h3 style={{ color: "black" }}>Customer</h3>
            </div>

            <div className="col">
              <h3 style={{ color: "black" }}>Address</h3>
            </div>

            <div className="col">
              <h3 style={{ color: "black" }}>Update Status</h3>
            </div>

            <div className="col">
              <h3 style={{ color: "black" }}>Payment Mode</h3>
            </div>

            <div className="col">
              <h3 style={{ color: "black" }}>Placed At</h3>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-3">
              <div className="row">
                <h4 style={{ color: "black" }}>Order Id:- {order.orderId}</h4>
              </div>
              <div className="row">
                {order.orderDetailList.map((orderDetail) => {
                  if (orderDetail.product !== null) {
                    return (
                      <p
                        style={{ color: "black" ,marginBottom:"5px"}}
                        key={orderDetail.orderDetailId}
                      >
                        - {orderDetail.product.productName} -
                        {orderDetail.quantity} qty.
                      </p>
                    );
                  } else {
                  }
                  return (
                    <p
                      style={{ color: "black" }}
                      key={orderDetail.orderDetailId}
                    >
                      - {orderDetail.combo.comboName} - {orderDetail.quantity}
                      qty.
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="col">
              <h5 style={{ color: "black" }}>
                {order.user.firstName} {order.user.lastName}
              </h5>
            </div>

            <div className="col">
              <div className="row">
                <h5 style={{ color: "black" }}>{order.user.address.line1}</h5>
              </div>
              <div className="row">
                <h5 style={{ color: "black" }}>{order.user.address.line2}</h5>
              </div>
              <div className="row">
                <h5 style={{ color: "black" }}>{order.user.address.city}</h5>
              </div>
              <div className="row">
                <h5 style={{ color: "black" }}>
                  ({order.user.address.pinCode})
                </h5>
              </div>
            </div>

            <div className="col">
              <button
                onClick={updateStatus}
                className="btn btn-outline-primary"
              >
                Delivered
              </button>
            </div>

            <div className="col">
              <div className="row">
                <p style={{ color: "black" }}> {order.paymentMode}</p>
              </div>
              <div className="row">
                <p style={{ color: "black" }}>Amount : {order.totalAmount}</p>
              </div>
              <div className="row">
                {order.paymentMode === "Online" && (
                  <p style={{ color: "green" }}>Payment Received...</p>
                )}
                {order.paymentMode === "Cash On Delivery" && (
                  <p style={{ color: "red" }}>Payment not yet received</p>
                )}
              </div>
            </div>

            <div className="col">
              {/* <h5 style={{ color: "black" }}>{order.orderDateTime}</h5> */}
              <h5 style={{ color: "black" }}>{moment(order.orderDateTime).format('MM/DD/YYYY h:mm a')}</h5>
            </div>
          </div>
          <hr />
        </Scrollbars>
      </div>) }
              {order.length == 0 && (
                <h4 style={{ color: "white" }}>you have no order assigned...... </h4>
              )}    

    </div>
    </div>
  );
};
export default EmpOrder;
