import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "../../assets/css/Header.css";

function sidebarOpen() {
  var x = document.getElementById("sidebar");
  if (x.className === "sidebar close") {
    x.className = "sidebar opened";
  } else {
    x.className = "sidebar close";
  }
}

function closeSide() {
  var x = document.getElementById("sidebar");
  if (x.className === "sidebar opened") {
    x.className = "sidebar close";
  } else{
    x.className = "sidebar opened";
  }
}

const navbar = document.querySelector('.topnav_context');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
};


function Header (){
    return(
      <header>
     <div className="topnav_context">
        <div class="custom_container">
            <nav className="topnav">
              <div className="topnav_logo">
                <a href="#"><img src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png" alt="logo" className="logo"/></a>
              </div>
              <div className="topnav_links" id="topnav_links">
                <NavLink to="/Welcome" className="topnav_links-item">HOME</NavLink>
                <NavLink to="/System/PatientsTable" className="topnav_links-item">JOIN</NavLink>
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