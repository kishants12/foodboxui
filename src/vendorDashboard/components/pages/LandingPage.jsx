import React, {useState} from 'react'
import { NavBar } from '../NavBar'
import Login from '../forms/Login';
import Register from '../forms/Register';
import AddFirm from '../forms/AddFirm';
import AddProduct from '../forms/AddProduct'; 
import SideBar from '../SideBar';

const DefaultFoodView = ({ showAddFirmHandler }) => {
  return (
    <div className="defaultFoodView">
      <div className="welcomePanel">
        <p className="eyebrowText">Vendor dashboard</p>
        <h1>Manage your Food Box orders, menu, and restaurant profile.</h1>
        <p>
          Track today's kitchen activity, add new dishes, and keep your food
          listings ready for customers.
        </p>

      </div>

      <div className="foodStats">
        <div className="foodStatCard">
          <span>Today's Orders</span>
          <strong>24</strong>
        </div>
        <div className="foodStatCard">
          <span>Active Products</span>
          <strong>18</strong>
        </div>
        <div className="foodStatCard">
          <span>Pending Updates</span>
          <strong>3</strong>
        </div>
      </div>

      <div className="quickFoodSection">
        <h2>Kitchen checklist</h2>
        <ul>
          <li>Review incoming orders before peak hours.</li>
          <li>Update unavailable items from the product list.</li>
          <li>Add today's special offer for your restaurant.</li>
        </ul>
      </div>
    </div>
  )
}

export const LandingPage = () => {
  const [activeForm, setActiveForm] = useState('');

  const showDefaultHandler=()=>{
    setActiveForm('');
  }

  const showLoginHandler=()=>{
    setActiveForm('login');
  }

  const showRegisterHandler=()=>{
    setActiveForm('register');
  }

  const showAddFirmHandler=()=>{
    setActiveForm('addfirm');
  }


   const showAddProductHandler=()=>{
    setActiveForm('addproduct');
  }
  const showSideBar = activeForm !== 'login' && activeForm !== 'register';

  return (
    <section className="landingSection">
      <NavBar
        showDefaultHandler={showDefaultHandler}
        showLoginHandler={showLoginHandler}
        showRegisterHandler={showRegisterHandler}
        
      />
   <div className="collectionSection">
      {showSideBar && <SideBar showAddFirmHandler={showAddFirmHandler}
                               showAddProductHandler={showAddProductHandler}/>}
        {activeForm === '' && <DefaultFoodView showAddFirmHandler={showAddFirmHandler} />}
        {activeForm === 'login' && <Login showRegisterHandler={showRegisterHandler} />}  
        {activeForm === 'register' && <Register />}  
        {activeForm === 'addfirm' && <AddFirm />}  
        {activeForm === 'addproduct' && <AddProduct />}
         </div>
    </section>
  )
}
