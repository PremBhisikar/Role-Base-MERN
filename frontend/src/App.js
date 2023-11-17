import "./App.css";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useLocation, createBrowserRouter, RouterProvider } from "react-router-dom"; // Import useLocation from react-router-dom
import Form from "./Components/Pages/form";
import Video from "./Components/Video/video";
import Thankyou from "./Components/Thankyou/thankyou";
import Login from "./Components/Login/login";
import AdminDashboard from "./Components/AdminDashboard/adminDashboard";
import WebDashboard from "./Components/WebDashboard/webdashboard";
import VideoDashboard from "./Components/VideoDashboard/videodashboard";
import Sidebar from "./Components/AdminDashboard/sidebar";
import { useSelector } from 'react-redux';
// import EditCustomer from "./Components/AdminDashboard/editCustomer";
import Adminroute from "./Route/adminroute";
import Webroute from "./Route/webroute";
import Videoroute from "./Route/videoroute";
import CommanRoutes from "./Route/commanRoutes";
function App() {
  const role =useSelector((state)=>state.auth?.data?.data?.user?.role)
  const routesRouter = {
     "admin": [...Adminroute],
     'web': [...Webroute],
     'video': [...Videoroute], 
    undefined:[...CommanRoutes]
  }

console.log("roleee===>",routesRouter[role])
   const router =createBrowserRouter(routesRouter[role])


  // const location = useLocation(); // Get the current location

  // Define a function to check if the current location is the AdminDashboard page
  // const isOnAdminDashboard = location.pathname === "/admindashboard";

  return (

    
    <div className="App">
    <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
        />

      <RouterProvider router={router }/>
      {/* Conditionally render the Sidebar on the AdminDashboard page */}
      {/* {isOnAdminDashboard && <Sidebar />} */}

      {/* <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/webdashboard" element={<WebDashboard />} />
        <Route path="/videodashboard" element={<VideoDashboard />} />
        <Route path="/editcustomer" element={<EditCustomer />} />
      </Routes> */}
    </div>
  );
}

export default App;

 {/* <Navbar/>
          {
            user.isLoggedIn ? (<div><Sidebar /> <Routes>
              <Route path="/login" element={<Login />} ></Route>
              </Routes></div>) : (<div><Routes>
              
            </Routes></div>)
          } */}