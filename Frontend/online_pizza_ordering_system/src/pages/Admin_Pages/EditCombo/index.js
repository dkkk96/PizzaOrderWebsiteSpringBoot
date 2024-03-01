import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate,useLocation } from "react-router";
import { URL } from "../../../config";
import AdminCommonNavb from "../../../components/Navbr/AdminNavbar/AdminCommonNavb"
import Footer from "../../../components/Footer/Footer"




const EditCombo= () => {
  const [comboId, setComboId] = useState("");
  const [comboName, setComboName] = useState("");
  const [comboImage, setComboImage] = useState("");
  const [comboPrice, setComboPrice] = useState("");
  const [description, setDescription] = useState("");
  const [comboCategory, setComboCategory] = useState("");
  const {state} = useLocation();

  // used to navigate from one component to another
  const navigate = useNavigate();

  useEffect(() => {
    const { combo } = state
    setComboId(combo.comboId)
    setComboName(combo.comboName)
    setComboImage(combo.comboImage)
    setDescription(combo.description)
    setComboCategory(combo.comboCategory)
    setComboPrice(combo.comboPrice)
  
  }, [])

  const cancelEditCombo = () => {
    navigate("/home");
  };


  
  const updateCombo = () => {

    if (comboName.length == 0) {
      toast.warning("Please enter combo name");
    }
     else if (comboCategory.length == 0) {
      toast.warning("Please enter category");
    }
    else if (description.length == 0) {
      toast.warning("Please enter description");
    }
      else if (comboPrice == 0) {
        toast.warning("Please enter price");
      }
      else if (comboImage.length == 0) {
        toast.warning("Please select combo image");
      }
      else{
        const data = {
          comboName,
          comboCategory,
           description,
           comboPrice,
           comboImage
        }
   

      
    // url to call the api
    const url = `${URL}/product/edit-combo/${comboId}`;

    // http method: post
    // body: contains the data to be sent to the API
    axios.put(url, data).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully update combo");

        // navigate to the signin page
        navigate("/home");
      } else {
        toast.error(result["error"]);
      }
    });
  }
  };



  return (
    <div className="background-img">
      <AdminCommonNavb/>
    <div style={{marginTop:"70px"}}>
      
      <div className="row">
        <div className="col"></div>
        <div className="col border-combo">
        <h1 className="title">Edit Combo</h1>
        <hr/>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Combo Name
              </label>
              <input
              value={comboName}
                onChange={(e) => {
                  setComboName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Combo Image URL</label>
              <input
              value={comboImage}
                onChange={(e) => {
                  setComboImage(e.target.value);
                }}              
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Combo Price
              </label>
              <input
              value={comboPrice}
                onChange={(e) => {
                  setComboPrice(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div className="form">
                <label htmlFor="" className="label-control">
                  Combo Category
                </label>
              </div>
              <select  type="radio"
                className="form-select"
                onChange={(e) => {
                  setComboCategory(e.target.value);
                }}
              >
                <option className="text-dark" selected> Select Category </option>
                <option className="text-dark" value="Veg">Veg</option>
                <option className="text-dark" value="NonVeg">Non-Veg</option>
               
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
                rows="3"
              ></textarea>
            </div>

            <div>
                <div className="row">
                  <div className="col"> <button
                onClick={updateCombo}
                className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
              >
                Update Combo
              </button>
</div>
                  <div className="col"></div>
                  <div className="col">
                  <button
                onClick={cancelEditCombo}
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

export default EditCombo;
