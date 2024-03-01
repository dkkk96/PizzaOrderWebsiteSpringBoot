import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import React ,{Component} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser =  () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password
      }

      // url to make signin api call
      const url = `${URL}/user/signin`

      // make api call using axios
      axios.post(url, body).then((response) =>{
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')
            sessionStorage['loginStatus'] = 1;
          // get the data sent by server
          const { userId, firstName, lastName,role } = result['data']
            console.log(role)
          // persist the logged in user's information for future use
          sessionStorage['userId'] = userId
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName
          sessionStorage['role'] = role
          sessionStorage['loginStatus'] = 1

          
          
          if(role == "employee")
          {
            navigate('/employee-order')
            window.location.reload('/employee-order')
          }
          else if(role == "admin")
          {
            navigate('/admin-home')
            window.location.reload('/admin-home')
          }
          else{

            navigate('/customer-home')
            window.location.reload('/customer-home')
          }

      } 
      else 
      {
          toast.error('Invalid user name or password')
      }
      })
    }
  }





  return (
    <div className='background-img'>
      <div className='row' style={{marginBottom:"30px"}}></div>
      {/* <h1 className="title" style={{fontFamily:"sans-serif"}}>LogIn</h1> */}

      <div className="row ">
        <div className="col"></div>

        <div className="col border6">

        <div className='row'>
                <div className='col'></div>
                <div className='col'><img style={{marginLeft:"25%"}} src="./images/login.png" alt="" /></div>
                <div className='col'></div>                 
             </div>
        
                   <div className='row'>
                    <h6 style={{fontFamily:"sans-serif",textAlign:"center",marginTop:"5px"}}>Have an account?</h6>
                  </div>
         

          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control" >
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control" >
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
              <div className='btn-margin' >
                No account yet? <Link to="/register" style={{textDecoration:"none"}}>Signup here</Link>
              </div>
              <div className='row'>
              <div className='col'>
              <button onClick={signinUser} className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after">
                Signin
              </button>
             
              </div>
              <div className='col' >
                 <Link style={{textDecoration:"none"}} to="/forgot">Forgot Password?</Link>
              
              </div>
            
              <div className='col-6'></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      
      </div>
    </div>
  )
}

export default Signin
