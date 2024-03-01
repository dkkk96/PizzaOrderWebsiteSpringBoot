import "./index.css";

import { useLocation, useNavigate } from "react-router";
import { useEffect,useState } from 'react';
import { Scrollbars } from "react-custom-scrollbars-2";     
import { URL } from "../../../config";
import { toast } from "react-toastify";
import axios from "axios";
import AdminCommonNavb from "../../../components/Navbr/AdminNavbar/AdminCommonNavb"
import Footer from "../../../components/Footer/Footer"

const GetFeedback = () => {

  const [employee, setEmployee] = useState([]);
 

 

  const getallfeedback = () => {
    const url = `${URL}/order/getall-feedback`;

    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setEmployee(result["data"]);
        
       // console.log(result);
        console.log(employee);
      } 
    });
  };

  useEffect(() => {
    getallfeedback()
    console.log('getting called')
  }, [])


  return (
    <div className="background-img">
      <AdminCommonNavb/>
      <div style={{marginTop:"40px"}} className="container">
      <h1 className="title1" style={{fontFamily:"sans-serif",color:"white"}}>FeedBack</h1>

      <div className="row ">
        <div className="col"></div>
        <div className="col">
         
        </div>
        <div className="col"></div>
      </div>
      <div className="container-feedback"> 
        <Scrollbars>
        <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Food Quality</th>
                    <th scope="col">Delivery Service</th>
                    <th scope="col">Order Accuracy</th>
                    <th scope="col">Overall Experience</th>
                    <th scope="col">Comment</th>
                  </tr>
                </thead>
              

                <tbody>
                {employee.map((val, key) => {
                    return (
                        <tr key={key}>
                    <td>{val.orderId}</td>
                    <td>{val.foodQuality}</td>
                    <td>{val.deliveryService}</td>
                    <td>{val.orderAccuracy}</td>
                    <td>{val.overallExperience}</td>
                    <td>{val.comment}</td>

                  </tr>
                    )
                   })}
                </tbody>
              </table>
            </div>
       

        </Scrollbars>
           
          
          {/* <button
            onClick={getallfeedback}
            className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
          >
            GetallFeedback
          </button> */}
        </div>
        <div className="col"></div>
      
      </div>
      <Footer/>
    </div>
  );
};

export default GetFeedback;
