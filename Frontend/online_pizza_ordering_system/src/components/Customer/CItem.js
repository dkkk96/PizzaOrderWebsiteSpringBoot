
import * as React from 'react';
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";

const CItem = ({item}) => {
    const [crustType, setCrustType] = useState('New Hand Tossed');
    const [size, setSize] = useState('Regular');
    const [sizes, setSizes] = useState([]);
    const [crusts, setCrusts] = useState([]);
    //const [price, setPrice] = useState('');
    const [subCategory,setSubCategory] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        getProductDefaultPrice()
        // setProducts(product)
        populateProductSizes()
        console.log("Inside useEffect product size")
      }, [])

      
    useEffect(() => {
     
        getProductPrice();
        console.log("Inside useEffect")
    }, [size,crustType])

   

    const populateProductSizes= () =>{
       
        item.subCategoryList.map(sub => {
            if (sizes.indexOf(sub.size) === -1) {
                sizes.push(sub.size)
            }
        });
    } 
    

    const populateProductCrusts = (cr) =>{
       
        let array = []
        item.subCategoryList.map(sub => {
           if(sub.size === cr)
           {
               array.push(sub.crustType)
           }
        });
        setCrusts(array)
    } 

    const addToCart = () => {
        const url = `${URL}/order/addtocart`;
        
        const body = {
            userId: sessionStorage['userId'],
            cartDetail :{
                productId:item.productId,
                subCategoryId:subCategory.subCategoryId,
                price:subCategory.price,
                productName:item.productName,
                size:subCategory.size,
                crustType:subCategory.crustType,
                image:item.productImage,
            }
        }
            axios.post(url,body).then((response) => {
               
                const result = response.data;
                //console.log(result);
                if (result["status"] == "success") {
                    toast.success('added to cart');
                    console.log('added to cart');
    
                } else {
                  toast.error(result["error"]);
                }
              });

        }
    


    const getProductDefaultPrice = ()=>{

        
        const url = `${URL}/product/get-defaultPrice/${item.productId}`;
        axios.get(url).then((response) => {
            // get the data from the response
            const result = response.data;
            console.log(result);
            if (result["status"] == "success") {
                setSubCategory(result['data'])
                //setPrice(result['data'].price)
                console.log(subCategory);

            } else {
              toast.error(result["error"]);
            }
          });

    }

    // const getProductSize = () =>{
    //     const url = `${URL}/product/get-productsizes/${item.productId}`;
    //     //const productId = item.productId;
       
    //     axios.get(url).then((response)=>{
    //         const result = response.data
    //         console.log(result);
    //         if(result['status'] === 'success')
    //         {
    //             setSizes(result['data'])
            
    //             console.log("inside product size")
    //             console.log(sizes)
               
    //         }
    //         else{
    //             console.log(result['error'])
    //         }
           
            
    //     })
       
    // }


    // const getProductCrust = () =>{
    //     const url = `${URL}/product/get-productcrust/${item.productId}/${size}`;
    //     //const productId = item.productId;
       
    //     axios.get(url).then((response)=>{
    //         const result = response.data
    //         console.log(result);
    //         if(result['status'] === 'success')
    //         {
    //             setSizes(result['data'])
    //         }
    //         else{
    //             console.log(result['error'])
    //         }
    //     })
       
    // }
    

    const getProductPrice = () =>{
        const url = `${URL}/product/get-ProductPrice`;
        const productId = item.productId;
        
        const body = {
            productId,
            crustType,
            size
        }
        console.log(body);
        axios.post(url,body).then((response)=>{
            const result = response.data
            console.log(result);
            setSubCategory(result['data'])
            console.log(result['data'].price);
        })
       
    }


    // useEffect(() => {
     
    //     getProductPrice();
    //     console.log("Inside useEffect")
    // }, [])

    const CrustPriceHandler = (e) =>{
        console.log(e.target.value);
        setCrustType(e.target.value);
        //getProductPrice();
    }

    const sizePriceHandler = (e) =>{
        console.log(e.target.value);
        setSize(e.target.value);
        // getProductPrice();
        populateProductCrusts(e.target.value)
    }


    return (
        <div className="col-sm-6 col-md-5 col-lg-4 item">
            <div className="box">
                <img className="rounded img-fluid pizza-img" src={item.productImage} alt={item.productName}/>
                <h3 className="name">{item.productName}</h3>
                <p className="description">{item.description}</p>
                <div className='row'>
                    
                    <div className='col'>
                    <div className="mb-3">
                    <label htmlFor="" className="label-control float-start" style={{marginBottom : "10px", color: "black"}}>
                        Size
                    </label>
                    {/* <select
                        className = "form-select"
                        onChange={sizePriceHandler}>
                        <option className="text-dark" value="Regular" > Regular </option>
                        <option className="text-dark" value="Medium">Medium</option>
                        <option className="text-dark" value="Large">Large</option>
                    </select> */}
                    <select name="size" className="form-select" onChange={sizePriceHandler}>
                   <option className="text-dark">--Select size type--</option>
                     {
                     sizes.map((sub)=>(
                         
                   <option className="text-dark" key={sub.subCategoryId} value={sub}> {sub}</option>
                     ))
                    } 
                 
                 </select>  
                
                </div>
                    </div>

                    <div className='col'>
                    <div className="mb-3">
                    <label htmlFor="" className="label-control float-start" style={{marginBottom : "10px", color: "black"}}>
                        Crust Type
                    </label>
                    {/* <select
                        className = "form-select"
                        onChange={CrustPriceHandler}>
                        <option className="text-dark" value="New Hand Tossed" selected> New Hand Tossed </option>
                        <option className="text-dark" value="Wheat Crust">Wheat Crust</option>
                        <option className="text-dark" value="Classic Hand Tossed">Classic Hand Tossed</option>
                        <option className="text-dark" value="Cheese Burst">Cheese Burst</option>
                    </select> */}

                     <select name="crust" className="form-select" onChange={CrustPriceHandler}>
                   <option className="text-dark">--Select crust type--</option>
                     {
                     crusts.map( (sub)=>(
                   <option className="text-dark" key={sub.subCategoryId} value={sub}> {sub}</option>
                     ))
                    } 
                 
                 </select> 
                </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-around align-items-center">
                    <button onClick={addToCart} className="btn btn-success" type="button">
                        Add to Cart
                    </button>
                   
                    
                    <span className="badge rounded-pill bg-danger price">₹{subCategory.price}</span>
                </div>
            </div>
        </div>
    );
};

export default CItem;
