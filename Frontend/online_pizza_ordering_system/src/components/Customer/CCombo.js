
import * as React from 'react';
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";

const CCombo = ({item}) => {
    //const [price, setPrice] = useState('');
    const navigate = useNavigate()


 
    const addToCart = () => {
        const url = `${URL}/order/addtocart`;
        
        const body = {
            userId: sessionStorage['userId'],
            cartDetail :{
                comboId:item.comboId,
                price:item.comboPrice,
                comboName:item.comboName,
                image:item.comboImage,
                
            }
        }
            axios.post(url,body).then((response) => {
               
                const result = response.data;
                //console.log(result);
                if (result["status"] == "success") {
                    toast.success('added to cart');
                    console.log('added to cart');
    
                } else {
                  toast.error(result["error"]);
                }
              });

        }

    



    return (
        <div className="col-sm-6 col-md-5 col-lg-4 item">
            <div className="box">
                <img className="rounded img-fluid pizza-img" src={item.comboImage} alt={item.comboName}/>
                <h3 className="name">{item.comboName}</h3>
                <p className="name">({item.comboCategory})</p>
                <p className="description">{item.description}</p>

                <div className="d-flex justify-content-around align-items-center">
                    <button onClick={addToCart} className="btn btn-success" type="button">
                        Add to Cart
                    </button>
                    
                    
                    <span className="badge rounded-pill bg-danger price">₹{item.comboPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default CCombo;
