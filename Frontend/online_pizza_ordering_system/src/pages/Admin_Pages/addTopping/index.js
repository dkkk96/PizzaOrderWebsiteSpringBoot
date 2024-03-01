

import { useState } from 'react'

import { toast } from 'react-toastify'
import React ,{Component} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../../config'
import AdminCommonNavb from "../../../components/Navbr/AdminNavbar/AdminCommonNavb"
import Footer from "../../../components/Footer/Footer"
import './index.css'

const AddTopping = () => {
  const [toppingName, setToppingName] = useState('')
  const [toppingPrice, setToppingPrice] = useState('')

  const navigate = useNavigate()

  const cancelAddProduct = () => {
    navigate("/admin-home");
  };



  const addDetails = () => {
    if (toppingName.length == 0) {
      toast.warning('please enter topping name')
    } else if (toppingPrice == 0) {
      toast.warning('please enter price')
    } else {
      const body = {
        toppingName,
        toppingPrice
      }

      // url to make signin api call
      const url = `${URL}/product/add-topping`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('topping added successfully')

          // navigate to home component
          navigate('/admin-home')
        } else {
          toast.error('Invalid details')
        }
      })
    }
  }

  return (
    <div className='background-img'>
      <AdminCommonNavb/>
      <div style={{marginTop:"70px"}}>
      

      <div className="row ">
        <div className="col"></div>

        <div className="col border-topping">
        <h1 className="title">Add Topping</h1>
        <hr/>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Topping Name
              </label>
              <input
                onChange={(e) => {
                  setToppingName(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Price
              </label>
              <input
                onChange={(e) => {
                  setToppingPrice(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              
              <div className='row'>
              <div className='col'>
              <button onClick={addDetails} className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after">
                Add
              </button>
             
              </div>
              
                <div className='col'></div>
              <div className='col'>
              <button
                onClick={cancelAddProduct}
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
  )
}

export default AddTopping
