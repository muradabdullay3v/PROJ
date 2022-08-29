import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/Header.css";
import {useNavigate} from  "react-router"

function sidebarOpen() {
  var x = document.querySelector("#sidebar");
  if (x.className === "sidebar close") {
    x.className = "sidebar opened";
  } else {
    x.className = "sidebar close";
  }
}

function closeSide() {
  var x = document.querySelector("#sidebar");
  if (x.className === "sidebar opened") {
    x.className = "sidebar close";
  } else{
    x.className = "sidebar opened";
  }
}

const navbar = document.querySelector('#topnav_context');
window.onscroll = () => {
    if (window.scrollY > 120) {
        navbar.className += (' nav-scrolled');
    } else {
        navbar.className = ('topnav_context');
    }
};


function Header (){
  const navigate = useNavigate();
  const [username , setUsername] = useState('');
  useEffect(() => {
    setUsername(localStorage.getItem('username'));
} , [])


    return(
      <header>
     <div className="topnav_context" id="topnav_context">
        <div class="custom_container">
            <nav className="topnav">
              <div className="topnav_logo">
                <a href="#"><img src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png" alt="logo" className="logo"/></a>
              </div>
              <div className="topnav_links" id="topnav_links">
                <NavLink to="/Welcome" className="topnav_links-item">HOME</NavLink>
                <NavLink to="/system/patientstable" className="topnav_links-item">JOIN</NavLink>
                {localStorage.getItem("auth") ? <button className="topnav_links-item topnav_links-button" onClick={() => {
                  localStorage.removeItem("auth");
                  navigate("/Welcome");
                }}>Logout</button> : <NavLink to="/login" className="topnav_links-item topnav_links-button">Login</NavLink>}
                {!localStorage.getItem("auth") ? <NavLink to="/register" className="topnav_links-item topnav_links-button">Register</NavLink> : ""}
                <a href="javascript:void(0);" class="icon" onClick={sidebarOpen}>&#9776;</a>
              </div>
            </nav>
          </div>
          <nav class="sidebar close" id="sidebar">
                <div class="close_button">
                    <a href="javascript:void(0);" onClick={closeSide} class="close_linker"><i class="fa-solid fa-xmark"></i></a>
                </div>
                <NavLink to="/Welcome" className="sidebar_links-item">HOME</NavLink>
              <NavLink to="/System/PatientsTable" className="sidebar_links-item">JOIN</NavLink>
              {localStorage.getItem("auth") ? <button className="sidebar_links-item topnav_links-button" onClick={() => {
                  localStorage.removeItem("auth");
                  navigate("/Welcome");
                }}>Logout</button> : <NavLink to="/login" className="sidebar_links-item topnav_links-button">Login</NavLink>}
                {!localStorage.getItem("auth") ? <NavLink to="/register" className="sidebar_links-item topnav_links-button">Register</NavLink> : ""}
            </nav>
        </div>
  </header>
    );
}

export default Header;