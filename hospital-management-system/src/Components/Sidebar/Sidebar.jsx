import { NavLink } from "react-router-dom";
import "../../assets/css/Sidebar.css";


function closeSystemSide() {
    // var x = document.getElementById("system_sidebar");
    // if (x.className === "system_sidebar opened") {
    //   x.className = "system_sidebar close";
    // } else{
    //   x.className = "system_sidebar opened";
    // }
  }

function Sidebar(){
    return(
            <nav className="system_sidebar opened" id="system_sidebar">
                <a href="javascript:void(0);" onClick={closeSystemSide} class="sidebar_close"><i class="fa-solid fa-xmark"></i></a>
                <NavLink to="/Info" className="sidebar_link">Info</NavLink>
                <NavLink to="/System/PatientsTable" className="sidebar_link">Patientos</NavLink>
                <NavLink to="/Employees" className="sidebar_link">Employees</NavLink>
                <NavLink to="/Reservations" className="sidebar_link">Reservations</NavLink>
                <NavLink to="/Drugs" className="sidebar_link">Drugs</NavLink>
                <NavLink to="/Ward" className="sidebar_link">SquidWards</NavLink>
            </nav>
    );
}

export default Sidebar;