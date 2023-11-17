import React from "react";
import './adminDash.css'
import {Link} from 'react-router-dom'
import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import ProtectedOutlet from '../../Protected';
import AdminDashboard from "../AdminDashboard/adminDashboard"
import WebDashboard from "../WebDashboard/webdashboard"
import VideoDashboard from "../VideoDashboard/videodashboard"
const Sidebar = () => {
  const [showSidebarNames, setShowSidebarNames] = useState(true);

  const toggleSidebarNames = () => {
    setShowSidebarNames(!showSidebarNames);
  };

  return (
    <div>
      <div className="sidebar">
        <button className="toggle-button" onClick={toggleSidebarNames}>
          Menu
        </button>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <Link className="nav-link" to={"#"}>
          <i className="fa-solid fa-dashboard"></i>
          {showSidebarNames && <span>Web Form</span>}
        </Link>
        <Link className="nav-link" to={"#"}>
          <i className="fa-solid fa-person"></i>
          {showSidebarNames && <span>Video Form</span>}
        </Link>
        
        {/* Add a button to toggle between web and video data on AdminDashboard */}
        {/* {showSidebarNames && (
          <button onClick={toggleData}>
            {showWebData ? "Toggle to Video Data" : "Toggle to Web Data"}
          </button>
        )} */}
      </div>
      <div class="content">
        <Routes>
          <Route element={<ProtectedOutlet/>}>
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/webdashboard" element={<WebDashboard />} />
            <Route path="/videodashboard" element={<VideoDashboard />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;

