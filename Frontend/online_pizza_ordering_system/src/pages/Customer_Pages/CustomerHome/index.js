import CMenu from "../../../components/Customer/CMenu";
import "../../../assets/css/styles.css";
import "../../../assets/css/box.css";
import { URL } from "../../../config";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navb2 from "../../../components/Navbr/CustomerNavbar/Navb2";
import Navb1 from "../../../components/Navbr/CustomerNavbar/Navb1";

import Footer from "../../../components/Footer/Footer";

const CustomerHome = () => {
  const [vegProductList, setVegProductList] = useState([]);
  const [nonVegProductList, setNonVegProductList] = useState([]);
  const [comboList, setComboList] = useState([]);

  useEffect(() => {
    getAllVegProduct();
    getAllNonVegProduct();
    getAllCombo();
  }, []);

  const getAllVegProduct = () => {
    const url = `${URL}/product/getall-vegproducts`;

    axios.get(url).then((response) => {
      const result = response.data;

      if (result["status"] == "success") {
        //toast.success("Successful");
        setVegProductList(result["data"]);
        console.log(response.data);
        
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const getAllNonVegProduct = () => {
    const url = `${URL}/product/getall-nonvegproducts`;

    axios.get(url).then((response) => {
      const result = response.data;

      if (result["status"] == "success") {
        //toast.success("Successful");
        setNonVegProductList(result["data"]);
        console.log(response.data);
        
      } else {
        toast.error(result["error"]);
      }
    });
  };


  const getAllCombo = () => {
    const url = `${URL}/product/getall-combo`;

    axios.get(url).then((response) => {
      const result = response.data;

      if (result["status"] == "success") {
        //toast.success("Successful");
        setComboList(result["data"]);
        console.log(response.data);
        
      } else {
        toast.error(result["error"]);
      }
    });
  };


  return (
    <div>
      <Navb1/>
      <Navb2/>
      {/* <Navb3/> */}
      

      <div className="features-boxed">
        {/* <h1 className="title" style={{color:"black"}}>Home</h1>  */}
        
        <CMenu
          name="Veg"
          check = "product"
          menu={vegProductList}
        />
        <CMenu
          name="Non-Veg"
          menu={nonVegProductList}
          check = "product"
        />
        <CMenu
          name="Combo"
          check='combo'
          menu={comboList}
        />
      </div>
     <Footer/>
    </div>
  );
};

export default CustomerHome;
