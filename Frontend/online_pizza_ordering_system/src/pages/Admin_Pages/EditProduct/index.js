import { useState , useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate,useLocation } from "react-router";

import { URL } from "../../../config";
import NavEditProduct from "../../../components/Navbr/AdminNavbar/NavEditProduct"
import Footer from "../../../components/Footer/Footer"

const Editproduct = () => {
  const {state} = useLocation();
  const [products,setProducts] = useState([]);
  const [productId,setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  

  // used to navigate from one component to another
  const navigate = useNavigate();

  const cancelUpdateProduct = () => {
    navigate("/admin-home");
  };

  useEffect(() => {
    const { product } = state
       setProducts(product)
    setProductId(product.productId)
    setProductName(product.productName)
    setProductImage(product.productImage)
    setDescription(product.description)
  
  }, [])

  
  const updateProduct = () => {

    if (productName.length == 0) {
      toast.warning("Please enter product name");
    }
     else if (category.length == 0) {
      toast.warning("Please enter category");
    }
    else if (description.length == 0) {
      toast.warning("Please enter description");
    }    
      else if (productImage.length == 0) {
        toast.warning("Please enter image url");
      }
      else{
        const data = {
          productName,
          category,
          description,
          productImage
    
        }
       
    

    // url to call the api
    const url = `${URL}/product/edit-product/${productId}`;
    //const id = 34;
    //const url = `${URL}/product/edit-product/${id}`;

    // http method: post
    // body: contains the data to be sent to the API
    axios.put(url, data).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully added product");
        
        console.log(result['data'])
        // navigate to the signin page
       navigate("/edit-product",{
        state: { product: result['data'] },
      })
     
         
      } else {
        toast.error(result["error"]);
      }
    });
  };

}
 

  return (
    <div className="background-img">
      <NavEditProduct product={products}/>
      <div style={{marginTop : "80px"}}>
      

      <div className="row">
        <div className="col"></div>
        <div className="col border-product">
        <h1 className="title">Edit Product</h1>
        <hr/>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Product Name
              </label>
              <input
              value={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Image URL</label>
              <input
              value={productImage}
                onChange={(e) => {
                  setProductImage(e.target.value);
                }}
                
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div className="form">
                <label htmlFor="" className="label-control">
                  Product Category
                </label>
              </div>
              <select
                type="radio"
                class="form-select"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option className="text-dark" selected> Select Category </option>
                <option class="text-dark" value="Veg">
                  Veg
                </option>
                <option class="text-dark" value="NonVeg">
                  Non-Veg
                </option>
              </select>
            </div>
            
            
            
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Description
              </label>

              <textarea
              value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                className="form-control"
                cols="40"
                rows="4"
              ></textarea>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <button
                    onClick={updateProduct}
                    className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
                  >
                    Update
                  </button>
                </div>
                <div className="col"></div>
                <div className="col">
                  <div className="col"></div>
                  <button
                    onClick={cancelUpdateProduct}
                    className="css-button-arrow--sky1 css-button-arrow--sky1:hover css-button-arrow--sky1:hover:after css-button-arrow--sky1:after"
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
      <Footer/>
    </div>
  );
};

export default Editproduct
