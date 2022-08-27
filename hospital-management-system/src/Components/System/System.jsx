import Sidebar from "../Sidebar/Sidebar";
import "../../assets/css/System.css";
import { Route, Routes} from 'react-router'
import PatientsTable from "../PatientsTable/PatientsTable";
import PatientCreateForm from "../PatientCreateForm/PatientCreateForm";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import PatientUpdateForm from "../PatientUpdateForm/PatientUpdateForm";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import EmployeesCreate from "../EmployeesCreate/EmployeesCreate";
import EmployeesUpdate from "../EmployeesUpdate/EmployeesUpdate";
import ReservationTable from "../ReservationTable/ReservationTable";
import ReservationCreate from "../ReservationCreate/ReservationCreate";
import ReservationUpdate from "../ReservationUpdate/ReservationUpdate";
import DrugsTable from "../DrugsTable/DrugsTable";
import DrugsCreate from "../DrugsCreate/DrugsCreate";
import DrugsUpdate from "../DrugsUpdate/DrugsUpdate";
import WardsTable from "../WardsTable/WardsTable";
import WardsCreate from "../WardsCreate/WardsCreate";
import WardsUpdate from "../WardsUpdate/WardsUpdate";

function SystemsidebarOpen() {
    // var x = document.getElementById("system_sidebar");
    // if (x.className === "system_sidebar close") {
    //   x.className = "system_sidebar opened";
    // } else {
    //   x.className = "system_sidebar close";
    // }
  }

function System() {

    return(
      <div>
            <div className="custom_container">
              <div className="system_content">
                <Sidebar/>
                <h2 className="danger_sign">Content is not available at this resolution</h2>
                  <Routes>
                    <Route path="/patientstable/*" element = {<PatientsTable />}/>
                    <Route path="/employeestable/*" element = {<EmployeesTable />}/>
                    <Route path="/employeescreate/*" element = {<EmployeesCreate />}/>
                    <Route path="/employeesupdate/*" element = {<EmployeesUpdate />}/>
                    <Route path="/patientcreateform" element = {<PatientCreateForm />}/>
                    <Route path="/patientupdateform/*" element = {<PatientUpdateForm />}/>
                    <Route path="/reservationtable/*" element = {<ReservationTable />}/>
                    <Route path="/reservationcreate/*" element = {<ReservationCreate />}/>
                    <Route path="/reservationupdate/*" element = {<ReservationUpdate />}/>
                    <Route path="/drugstable/*" element = {<DrugsTable />}/>
                    <Route path="/drugscreate/*" element = {<DrugsCreate />}/>
                    <Route path="/drugsupdate/*" element = {<DrugsUpdate />}/>
                    <Route path="/wardstable/*" element = {<WardsTable />}/>
                    <Route path="/wardscreate/*" element = {<WardsCreate />}/>
                    <Route path="/wardsupdate/*" element = {<WardsUpdate />}/>
                  </Routes>
                <a href="javascript:void(0);" class="systemicon" onClick={SystemsidebarOpen}>&#9776;</a>
              </div>
            </div>
          </div>
    );
}

export default System;