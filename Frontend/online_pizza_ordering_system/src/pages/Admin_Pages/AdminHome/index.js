import Header from "../../../components/Admin/Header";
import Menu from "../../../components/Admin/Menu";
import "../../../assets/css/styles.css";
import "../../../assets/css/box.css";
import { URL } from "../../../config";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import NavbAdmin from '../../../components/Navbr/AdminNavbar/NavbAdmin'
import Navb2 from '../../../components/Navbr/AdminNavbar/Navb2'


const AdminHome = () => {
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
      {/* <h1 className="title" style={{color:"black"}}>Home</h1>  */}
      {/* <Header name="City Pizzeria" /> */}
      <NavbAdmin/>
      <Navb2/>
      <Menu
        name="Veg"
        check = "product"
        menu={vegProductList}
      />
      <Menu
        name="Non-Veg"
        menu={nonVegProductList}
        check = "product"
      />
      <Menu
        name="Combo"
        check='combo'
        menu={comboList}
      />
    </div>
  );
};

export default AdminHome;
