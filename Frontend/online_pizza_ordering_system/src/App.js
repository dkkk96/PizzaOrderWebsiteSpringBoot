import Signin from './pages/Signin'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import './App.css';
import SearchEmp from './pages/Admin_Pages/SearchEmp'
import UpdateEmployee from './pages/Admin_Pages/updateEmp'
import Addcombo from './pages/Admin_Pages/addCombo'
import EditCombo from './pages/Admin_Pages/EditCombo'
import Addproduct from './pages/Admin_Pages/addproduct'
import Addfeedback from './pages/Customer_Pages/feedback'
import AddTopping from './pages/Admin_Pages/addTopping'
import AddSubCategory from './pages/Admin_Pages/addSubCategory'
import EditSubCategory from './pages/Admin_Pages/EditSubCategory'
import Editproduct from './pages/Admin_Pages/EditProduct'
import AdminHome from './pages/Admin_Pages/AdminHome'
import CustomerHome from './pages/Customer_Pages/CustomerHome'
import GetFeedback from './pages/Admin_Pages/Getallfeedback'
import Checkout from './pages/Customer_Pages/Checkout/Checkout'
import Cart1 from './pages/Customer_Pages/Cart/Cart1'
import AdminOrder from './pages/Admin_Pages/AllOrders/AdminOrder'
import CustomerOrder from './pages/Customer_Pages/Orders/CustomerOrder'
import Payment from './pages/Customer_Pages/Payment/Payment'
import EmpOrder from './pages/Employee_Pages/EmpOrders/EmpOrders'
import Tracking from './pages/Customer_Pages/Tracking/Tracking'
import UpdateProfile from './pages/Customer_Pages/UpdateProfile'
import Forgot from './pages/ForgotPassword/Forgot'
// import CustomerFeedback from './pages/Admin_Pages/CustomerFeedback'

function App() {

  // const AuthorizeUser = () => {
  //   const loginStatus = sessionStorage['loginStatus']
  //   if(loginStatus == 1)
  //   {
  //       if(sessionStorage)
  //   }
  //   else{
  //     return <Signin />
  //   }
   
  // }



  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path = "/forgot" element = {<Forgot/>}/>

            {/* Admin routes */}
        { sessionStorage.loginStatus == 1  && sessionStorage.role == 'admin'? <Route>
        <Route path="/search-emp" element={<SearchEmp />} />
          <Route path="/update-employee" element={<UpdateEmployee />} />
          <Route path = "/add-product" element = {<Addproduct/>}/>
          <Route path = "/add-combo" element = {<Addcombo/>}/>
          <Route path = "/add-topping" element = {<AddTopping/>}/>
          <Route path = "/add-subcategory" element = {<AddSubCategory/>}/>
          <Route path = "/edit-product" element = {<Editproduct/>}/>
          <Route path = "/admin-home" element = {<AdminHome/>}/>
          <Route path = "/edit-subcategory" element = {<EditSubCategory/>}/>
          <Route path = "/edit-combo" element = {<EditCombo/>}/>
          <Route path = "/get-feedbacks" element = {<GetFeedback/>}/>
          <Route path = "/admin-order" element = {<AdminOrder/>}/>
        </Route> : <Route path="/" element={<Signin />} />} 

                {/* Customer routes */}
        { sessionStorage.loginStatus == 1  && sessionStorage.role == 'null' ? <Route>  
        <Route path = "/customer-home" element = {<CustomerHome/>}/>
          <Route path = "/checkout" element = {<Checkout/>}/>
          <Route path = "/cart" element = {<Cart1/>}/>
          <Route path = "/customer-order" element = {<CustomerOrder/>}/>
          <Route path = "/payment" element = {<Payment/>}/>
          <Route path = "/tracking" element = {<Tracking/>}/>
          <Route path = "/update-profile" element = {<UpdateProfile/>}/>
          <Route path = "/add-feedback" element = {<Addfeedback/>}/>
        </Route> : <Route path="/" element={<Signin />} />} 

           {/* employee routes */}
        { sessionStorage.loginStatus == 1  && sessionStorage.role == 'employee' ? <Route>
            <Route path = "/employee-order" element = {<EmpOrder/>}/>
        </Route>: <Route path="/" element={<Signin />} />} 

        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
