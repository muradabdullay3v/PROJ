import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/Header.css";
import auth from "../../auth";

function sidebarOpen() {
  // var x = document.getElementById("sidebar");
  // if (x.className === "sidebar close") {
  //   x.className = "sidebar opened";
  // } else {
  //   x.className = "sidebar close";
  // }
}

function closeSide() {
  // var x = document.getElementById("sidebar");
  // if (x.className === "sidebar opened") {
  //   x.className = "sidebar close";
  // } else{
  //   x.className = "sidebar opened";
  // }
}

// const navbar = document.querySelector('.topnav_context');
// window.onscroll = () => {
//     if (window.scrollY > 100) {
//         navbar.className += (' nav-scrolled');
//     } else {
//         navbar.className = ('topnav_context');
//     }
// };


function Header (){
  const [username , setUsername] = useState('');
  const [rootPath , setRootPath] = useState('/Login');
  useEffect(() => {
    setUsername(localStorage.getItem('username'));
} , [])


    return(
      <header>
     <div className="topnav_context">
        <div class="custom_container">
            <nav className="topnav">
              <div className="topnav_logo">
                <a href="#"><img src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png" alt="logo" className="logo"/></a>
              </div>
              <div className="topnav_links" id="topnav_links">
                <NavLink to="/Welcome" className="topnav_links-item" onClick={() => {
                    if(auth.isAuthenticated()){
                      setRootPath("/System/PatientsTable");
                    } 
                    else{
                      setRootPath("/Login");
                    }                
                }}>HOME</NavLink>
                <NavLink to={rootPath} className="topnav_links-item">JOIN</NavLink>
                <a href="#" className="topnav_links-item" onClick={() => {
                  alert(auth.isAuthenticated());
                  alert(rootPath.toString());
                }}>{username}</a>
                <button className="topnav_links-item" onClick={() => {
                  auth.logout();
                }}>Logout</button>
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
            </nav>
        </div>
  </header>
    );
}

export default Header;