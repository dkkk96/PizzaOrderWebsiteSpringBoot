import { useState } from 'react'
import './index.css'
import { toast } from 'react-toastify'
import React ,{Component} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import emailjs from "emailjs-com";

const Forgot = () =>{

  const [email,setEmail] = useState('');


  function sendEmail(e) {
    e.preventDefault();
    const email = e.target.email.value;
    //console.log(e.target.email)
    console.log(email)
    if (email.length == 0) {
      toast.warning("please enter email");
    } else {
      const url = `${URL}/user/search-employee/${email}`;
  
      axios.get(url).then((response) => {
        const result = response.data;
  
        if (result["status"] == "success") {
           //sendEmail(e);
          console.log(result);
          localStorage.setItem('email',email)
          emailjs.sendForm('pizza', 'template_4tp0guq', e.target, 'SeDj30cbCcHpYzhB1')
          .then((result) => {
              console.log(result.text);
              toast.success("email sent to your emailId");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()


        } else {
          toast.error("email does not exist");
        }
      });
    }

   

} 


// const searchUser = (e) => {
//   e.preventDefault();
//   let email = e.target.email.value
//   if (email.length == 0) {
//     toast.warning("please enter email");
//   } else {
//     const url = `${URL}/user/search-employee/${email}`;

//     axios.get(url).then((response) => {
//       const result = response.data;

//       if (result["status"] == "success") {
//         toast.success("success");
//         sessionStorage['emailId'] = email;
//          //sendEmail(e);
//         console.log(result);
//       } else {
//         toast.error("email does not exist");
//       }
//     });
//   }
// };



  const navigate = useNavigate()

  const cancelReset = ()=>{
      navigate('/signin')
  }

 



    return (
        <div className='background-img'>
          
         <div className='row'></div>

          <div >
          
          
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className='col'></div> 
                        <div className="col">
                          <div className='container-forgot'>
                             
                            <div className='row'>
                              <div className='col'></div>
                              <div className='col'><img src="./images/lock.png" alt="" /></div>
                              <div className='col'></div>
                            
                          </div>
                            <div className='row'>
                              <h1 className="title" style={{marginTop:"10px",color:"white"}}>Forgot Password?</h1>
                            </div>
                            <div className='row'>
                            <p className="title" style={{textAlign:"center",fontFamily:"cursive"}} >You can reset your password here.</p>
                            </div>
                          <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                            <div style={{marginTop:"30px"}}>
                            <input style={{width:"100%"}} type="submit" className="btn btn-primary" value="Send password reset email"></input>
                          </div>
                        </div>
                        </div>
                        <div className='col'></div> 
                       
                        
                    </div>
                </form>
            </div>
        </div>
      )

}

export default Forgot