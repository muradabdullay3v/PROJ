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
                <div className="sidebar_content">
                    <NavLink to="/Info" className="sidebar_link">Info</NavLink>
                    <NavLink to="/System/PatientsTable" className="sidebar_link">Patientos</NavLink>
                    <NavLink to="/System/EmployeesTable" className="sidebar_link">Employees</NavLink>
                    <NavLink to="/System/ReservationTable" className="sidebar_link">Reservations</NavLink>
                    <NavLink to="/Drugs" className="sidebar_link">Drugs</NavLink>
                    <NavLink to="/Ward" className="sidebar_link">SquidWards</NavLink>
                </div>
            </nav>
    );
}

export default Sidebar;