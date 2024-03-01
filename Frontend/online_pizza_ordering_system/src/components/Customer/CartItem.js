import {useEffect,useState} from "react";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";

const CartItem = ({item}) => {
    //const [quantity,setQuantity] = useState(0);
  

  // useEffect(()=>{
  //   console.log("in useeffect")
  // },[qty])


  
  const increment = () =>{
    console.log('increment count')
  
    const url = `${URL}/order/increment-quantity/${item.cartDetailId}`;

    axios.put(url).then((response) => {
        // get the data from the response
        const result = response.data;
  
        if (result["status"] == "success") {
            console.log('added to cart');
   
            window.location.reload();
            
        } else {
          toast.error(result["error"]);
        }
      });
      
  }



  const decrement = () =>{
    console.log('decrement count')
   
    const url = `${URL}/order/decrement-quantity/${item.cartDetailId}`;

    axios.put(url).then((response) => {
        // get the data from the response
        const result = response.data;
  
        if (result["status"] == "success") {
            console.log('remove from cart');
        
            window.location.reload();
           
        } else {
          toast.error(result["error"]);
        }
      });
  }

   const updateQuantity = (quantity) =>{
    console.log('decrement count')
   
    const url = `${URL}/order/update-quantity/${item.cartDetailId}/${quantity}`;

    axios.put(url).then((response) => {
        // get the data from the response
        const result = response.data;
  
        if (result["status"] == "success") {
            console.log('remove from cart');
            
            console.log("in axios update qty method")
            window.location.reload();
           
        } else {
          toast.error(result["error"]);
        }
      });
  }

  const removeItem = () =>{
   
    console.log('remove count')
    const url = `${URL}/order/delete-item/${item.cartDetailId}`;

    axios.delete(url).then((response) => {
        // get the data from the response
        const result = response.data;
  
        if (result["status"] == "success") {
            console.log('deleted from cart');
            window.location.reload();
           
        } else {
          toast.error(result["error"]);
        }
      });

  }

  // const incrementHandler =  () =>{
  //        //setQuantity(quantity + 1)
  //      updateQuantity(quantity)
  // } 

  // const decrementHandler = (quantity) =>{
  //    //setQuantity(quantity - 1)
  //    updateQuantity(quantity)
  // } 

  return (
    <div>
         <div className="row mb-3">
            <div className="col-2">
              <img
                src={item.image}
                alt="pizza"
                className="img-size"
              />
            </div>
            
              {item.productName != null && (<div className="col-4">
              <h4 style={{ color: "black",marginTop:"20px" }}>{item.productName}</h4>
              <p style={{ color: "black" }}>({item.size})</p>
            </div>)}
            {item.comboName != null && (<div className="col-4">
              <h4 style={{ color: "black",marginTop:"20px" }}>{item.comboName}</h4>
              
            </div>)}
            <div className="col-4">
              <div className="row ">
    
                      <div className="col-2">
                    <img 
                    src="./images/decr.svg" 
                    alt=""
                    className="img-size-decr"
                    onClick={decrement}
                    />
                  </div>
                  <div className="col-1">
                    
                    <input type="number"
                    className="qty-box"
                        disabled
                        value={item.quantity}
                    />
                  </div>
              
                  <div className="col-2">
                    <img 
                    src="./images/incr.svg" 
                    alt=""
                    className="img-size-incr"
                    value="Increase"
                    onClick={increment}
                    />
                   
                  </div>
                  <div className="col-2">
                    <img 
                    src="./images/trash.svg" 
                    alt=""
                    className="img-size-decr trash"
                    onClick={removeItem}
                    />
                  </div>
            
              </div>

              
            </div>
            <div className="col-2">
              <h4 className="item-price">₹ {item.price}</h4>
            </div>   
          </div>
          <hr />
    </div>
  )
};

export default CartItem;
