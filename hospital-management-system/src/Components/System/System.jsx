import Sidebar from "../Sidebar/Sidebar";
import "../../assets/css/System.css";
import { Route, Routes} from 'react-router'
import PatientsTable from "../PatientsTable/PatientsTable";
import PatientCreateForm from "../PatientCreateForm/PatientCreateForm";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function SystemsidebarOpen() {
    var x = document.getElementById("system_sidebar");
    if (x.className === "system_sidebar close") {
      x.className = "system_sidebar opened";
    } else {
      x.className = "system_sidebar close";
    }
  }

function System() {
  const [currentId,setCurrentId] = useState(0)

    return(
      <div>
            <div className="custom_container">
              <div className="system_content">
                <Sidebar/>
                  <Routes>
                    <Route path="/patientstable/*" element = {<PatientsTable />}/>
                    <Route path="/patientcreateform/*" element = {<PatientCreateForm {...({currentId , setCurrentId})}/>}/>
                  </Routes>
                <a href="javascript:void(0);" class="systemicon" onClick={SystemsidebarOpen}>&#9776;</a>
              </div>
            </div>
          </div>
    );
}

export default System;