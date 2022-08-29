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
                    <NavLink to="/System/Info" className="sidebar_link">Info</NavLink>
                    <NavLink to="/System/PatientsTable" className="sidebar_link">Patients</NavLink>
                    <NavLink to="/System/DoctorsTable" className="sidebar_link">Doctors</NavLink>
                    <NavLink to="/System/EmployeesTable" className="sidebar_link">Employees</NavLink>
                    <NavLink to="/System/ReservationTable" className="sidebar_link">Reservations</NavLink>
                    <NavLink to="/System/DrugsTable" className="sidebar_link">Pharmacy</NavLink>
                    <NavLink to="/System/WardsTable" className="sidebar_link">Wards</NavLink>
                </div>
            </nav>
    );
}

export default Sidebar;