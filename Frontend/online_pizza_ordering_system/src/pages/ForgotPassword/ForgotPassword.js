import { useState } from 'react'
import './index.css'
import { toast } from 'react-toastify'
import React ,{Component} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'


const ForgotPassword = () =>{

  //const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const navigate = useNavigate()

  const cancelReset = ()=>{
      navigate('/signin')
  }

  const resetPassword = () => {
      if(localStorage.getItem('email').length === 0)
      {
          toast.warning('Please login first..')
      }
      if (password.length == 0) {
        toast.warning("Please enter password");
      } 
      else if (confirmPassword.length == 0) {
        toast.warning("Please confirm your password");
      } 
      else if (password != confirmPassword) {
        toast.warning("Password does not match");
      }
     else {
      const body = {
        email:localStorage.getItem('email'),
        password
      }

      console.log(body)

      // url to make signin api call
      const url = `${URL}/user/forgot-password`

      // make api call using axios
      axios.put(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Password updated successfully...')
          localStorage.removeItem("email")
          // navigate to login 
          navigate('/signin')
        } else {
          localStorage.removeItem("email")
          //toast.error('Invalid user name or mobile no.')
        }
      })
    }
  }



    return (
        <div className='background-img' style={{overflowX:"hidden"}}>
          <div className='row'></div> 
          
    
          <div className="row">
            <div className="col"></div>
    
            <div className="col container-forgot-pass">
            <div className='row'>
                <div className='col'></div>
                <div className='col'><img src="./images/lock.png" alt="" /></div>
                <div className='col'></div>                 
             </div>
        
                  <div className='row'>
                    <h1 className="title" style={{color:"white"}} >Reset Password?</h1>
                  </div>
                  <div className='row'>
                  <p className="title" style={{textAlign:"center",fontFamily:"cursive"}} >Let's get you a new one.</p>
                  </div>
              <div className="form">
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    type="password"
                    className="form-control"
                  />
                </div>
                    
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Confirm Password
                  </label>
                  <input
                    onChange={(e) => {
                      setConfirmPassword(e.target.value)
                    }}
                    type="password"
                    className="form-control"
                  />
                </div>

                <div className="mt-4">
                  
                  <div className='row'>
                  <div className='col'>
                  <button  onClick={resetPassword} style={{backgroundColor:"#0080ff"}} className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after">
                    Reset Password
                  </button>
                  </div>
                   <div className='col'></div>
                   <div className='col'>
                   <button onClick={cancelReset} className="css-button-arrow--sky1 css-button-arrow--sky1:hover css-button-arrow--sky1:hover:after css-button-arrow--sky1:after">
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
      )

}

export default ForgotPassword