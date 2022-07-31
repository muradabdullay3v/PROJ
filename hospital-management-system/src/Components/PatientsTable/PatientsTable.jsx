import "../../assets/css/PatientsTable.css";
import "../../assets/css/PatientsItem.css";
import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import  * as actions from "../../actions/Patient";
import { NavLink } from "react-router-dom";


function Filter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


function PatientsTable(props) {
    const [currentId,setCurrentId] = useState(0)
      useEffect(()=>{
        props.fetchAllPatients()
    },[])

    return(
        <div>
            <div className="patient_buttons">
                <NavLink to="/System/PatientCreateForm" className="create_patient">Create Patient</NavLink>
                <button className="filter_patient">Filter</button>
            </div>
            <input type="text" id="myInput" onKeyUp={Filter} placeholder="Search for names.." title="Type in a name"></input>
            <table id="myTable">
                <tr class="header">
                    <th>#</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Blood Group</th>
                    <th>Address</th>
                    <th>Illness</th>
                    <th>Info</th>
                    <th>Settings</th>
                </tr>
                <tbody>
                    {
                        props.PatientList.map((record,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{record.id}</td>
                                    <td>{record.name}</td>
                                    <td>{record.surname}</td>
                                    <td>{record.age}</td>
                                    <td>{record.phone}</td>
                                    <td>{record.bloodGroup}</td>
                                    <td>{record.address}</td>
                                    <td>{record.illness}</td>
                                    <td><a onClick={() => {setCurrentId(record.id)}}><i className="fa-solid fa-circle-info patient_info"></i></a></td>
                                    <td><a><i className="fa-solid fa-trash patient_delete"></i></a>
                                    <a><i className="fa-solid fa-pen patient_edit"></i></a></td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
    </table>
        </div>
    );
}

const mapStateToProps = state => ({
  PatientList : state.Patient.list
})

const mapActionToProps = {
fetchAllPatients : actions.fetchAll
}

export default connect(mapStateToProps,mapActionToProps)(PatientsTable);