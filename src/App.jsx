import { Navigate, Route, Routes } from 'react-router-dom';
// import Register from './vendorDashboard/components/forms/Register';
// import AddFirm from './vendorDashboard/components/forms/AddFirm';
// import AddProduct from './vendorDashboard/components/forms/AddProduct';
import { LandingPage } from './vendorDashboard/components/pages/LandingPage';
import './App.css';

const App = () => {
  // const renderContent = () => {
  //   switch(activeTab) {
  //     case 'login':
  //       return <Login />;
  //     case 'register':
  //       return <Register />;
  //     case 'addfirm':
  //       return <AddFirm />;
  //     case 'addproduct':
  //       return <AddProduct />;
      
  //     default:
  //       return <Login />;
  //   }
  // };

  return (

    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<LandingPage />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addfirm" element={<AddFirm />} />
        <Route path="/addproduct" element={<AddProduct />} /> */}
      </Routes>
    </div>    

    // <div className="appContainer">
    //   <LandingPage />
    //   <div className="mainContainer">
    //     <SideBar />
    //     <div className="collectionSection">
    //       <div className="authContainer">
    //         <div className="authTabs">
    //           <button 
    //             className={`tab ${activeTab === 'login' ? 'active' : ''}`}
    //             onClick={() => setActiveTab('login')}
    //           >
    //             Login
    //           </button>
    //           <button 
    //             className={`tab ${activeTab === 'register' ? 'active' : ''}`}
    //             onClick={() => setActiveTab('register')}
    //           >
    //             Register
    //           </button>
    //           <button 
    //             className={`tab ${activeTab === 'addfirm' ? 'active' : ''}`}
    //             onClick={() => setActiveTab('addfirm')}
    //           >
    //             Add Firm
    //           </button>
    //           <button 
    //             className={`tab ${activeTab === 'addproduct' ? 'active' : ''}`}
    //             onClick={() => setActiveTab('addproduct')}
    //           >
    //             Add Product
    //           </button>
    //         </div>
    //         {renderContent()}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App;
