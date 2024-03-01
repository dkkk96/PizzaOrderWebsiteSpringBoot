
import * as React from 'react';
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";

const Combo = ({item}) => {
    //const [price, setPrice] = useState('');
    const navigate = useNavigate()


    const editCombo = () => {
        navigate("/edit-combo", {state:{combo:item}})
    }
 

    const deleteCombo = () => {
        const url = `${URL}/product/delete-combo/${item.comboId}`;

        axios.delete(url).then((response)=>{
            const result = response.data
            if(result['status'] == 'success')
            {
                //navigate("/home")
                toast.success("combo deleted.....")
                window.location = "/admin-home"
                //location = "/home"
                
            }
            else
            {
                toast.error("error....")
            }
        })
        //navigate("/home")
        
        
    }




    return (
        <div className="col-sm-6 col-md-5 col-lg-4 item">
            <div className="box">
                <img className="rounded img-fluid pizza-img" src={item.comboImage} alt={item.comboName}/>
                <h3 className="name">{item.comboName}</h3>
                <p className="name">({item.comboCategory})</p>
                <p className="description">{item.description}</p>

                <div className="d-flex justify-content-around align-items-center">
                    <button onClick={() => editCombo(item)} className="btn btn-success" type="button">
                        Edit
                    </button>
                    <button onClick={deleteCombo} className="btn btn-success" type="button">
                        Delete
                    </button>
                    
                    <span className="badge rounded-pill bg-danger price">₹{item.comboPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Combo;
