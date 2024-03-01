import {useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import AdminCommonNavb from '../../../components/Navbr/AdminNavbar/AdminCommonNavb'
import Footer from '../../../components/Footer/Footer'
import { URL } from "../../../config";
import './index.css'

const AddSubCategory = () => {
  const {state} = useLocation()
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [size, setSize] = useState("");
  const [crustType, setCrustType] = useState("");
  const [price , setPrice] = useState("")
  const [products,setProducts] = useState([])

  // used to navigate from one component to another
  const navigate = useNavigate();

  useEffect(() => {
    const { product } = state
    
    setProductName(product.productName)
    setProductId(product.productId)
    setProducts(product)
  
  }, [])

  const addCategory = () => {
    const body = {
      productId,
      size,
      crustType,
      price,
      product:products
    };

    
    // url to call the api
    const url = `${URL}/product/add-subcategory`;

    // http method: post
    // body: contains the data to be sent to the API
    axios.post(url, body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully added sub category details");

        // navigate to the signin page
        navigate("/add-subcategory");
      } else {
        toast.error(result["error"]);
      }
    });
  };




  return (
    <div className="background-img">
      <AdminCommonNavb/>
    <div style={{overflowX:"hidden",overflowY:"hidden"}}>
      <div style={{marginBottom:"20px"}}></div>

      <div className="row">
        <div className="col"></div>
        <div className="col border-sub">
        <h1 className="title" style={{color:"white"}}>Add Sub-Category</h1>
        <hr/>
          <div className="form">
            

          <div className="mb-3">
              <label htmlFor="" className="label-control">
                Product Name
              </label>
              <input
                value={productName}
                readOnly="true"
                className="form-control"
              />
            </div>


          

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Pizza Size
              </label>
              <select
                className = "form-select"
                onChange={(e) => {
                  setSize(e.target.value);
                }}>
                  <option className="text-dark" selected> Select Size </option>
                  <option className="text-dark" value="Regular">Regular</option>
                  <option className="text-dark" value="Medium">Medium</option>
                  <option className="text-dark" value="Large">Large</option>
                </select>
            </div>
            
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Crust Type
              </label>
              <select
                className = "form-select"
                onChange={(e) => {
                  setCrustType(e.target.value);
                }}>
                  <option className="text-dark" selected> Select Crust </option>
                  <option className="text-dark" value="New Hand Tossed">New Hand Tossed</option>
                  <option className="text-dark" value="Wheat Crust">Wheat Crust</option>
                  <option className="text-dark" value="Cheese Burst">Cheese Burst</option>
                  <option className="text-dark" value="Classic Hand Tossed">Classic Hand Tossed</option>
                </select>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Price
              </label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>

            

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <button
                    onClick={addCategory}
                    className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
                  >
                    Add
                  </button>
                </div>
                <div className="col"></div>
                <div className="col">
                  <div className="col"></div>
            
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col"></div>
      </div>
      
    </div>
              <Footer/>
    </div>
  );
};

export default AddSubCategory;
