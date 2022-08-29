import "../../assets/css/PatientsTable.css";
import "../../assets/css/PatientsItem.css";
import React,{useState,useEffect,useContext} from "react";
import {connect} from "react-redux";
import { Link, NavLink ,  Navigate} from "react-router-dom";
import axios from 'axios';
import ReactPaginate from "react-paginate";


function DoctorsFilter() {
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


function DoctorsTable(props) {

    const [apiData , setApiData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:56709/api/Doctors')
      .then((getData) => {
        setApiData(getData.data);
      })
    } , [])

    const setFields = (id,name,surname,doctorSalary,specialization,position) => {
      localStorage.setItem('DoctorID', id);
      localStorage.setItem('DoctorName', name);
      localStorage.setItem('DoctorSurname', surname);
      localStorage.setItem('DoctorSalary', doctorSalary);
      localStorage.setItem('DoctorSpecialization', specialization);
      localStorage.setItem('DoctorPosition', position);
    }

    const getData = () => {
      axios.get('http://localhost:56709/api/Doctors')
      .then((getData) => {
        setApiData(getData.data);
      })
    }

    const onDelete = (id) =>{
      axios.delete(`http://localhost:56709/api/Doctors/${id}`)
      .then(() => {
          getData();
      })
    }

    getData();

    return(
        <div>
            <div className="patient_buttons">
                <NavLink to="/System/DoctorsCreate" className="create_patient">Create Doctor</NavLink>
                <button className="filter_patient">Filter</button>
            </div>
            <input type="text" id="myInput" onKeyUp={DoctorsFilter} placeholder="Search for names.." title="Type in a name"></input>
            <table id="myTable">
                <tr class="header">
                    <th>#</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th className="responsive_cell">Salary</th>
                    <th className="responsive_cell">Specialization</th>
                    <th className="responsive_cell">Position</th>
                    <th>Info</th>
                    <th>Settings</th>
                </tr>
                <tbody>
                    {
                      apiData.map((data) => {
                        return (
                          <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.surname}</td>
                                    <td className="responsive_cell">{data.salary +"$"}</td>
                                    <td className="responsive_cell">{data.specialization}</td>
                                    <td className="responsive_cell">{data.position}</td>
                                    <td><button className="patient_button"><i className="fa-solid fa-circle-info patient_info"></i></button></td>
                                    <td><button className="patient_button" onClick={() => onDelete(data.id)}><i className="fa-solid fa-trash patient_delete"></i></button>
                                    <Link to={`/system/DoctorsUpdate/`}><button className="patient_button" onClick={() => setFields(data.id,data.name,data.surname,data.salary,
                                      data.specialization,data.position)}><i className="fa-solid fa-pen patient_edit"></i></button></Link></td>
                                    </tr>
                        )
                      })
                    }
                </tbody>
    </table>
        </div>
    );
}


export default DoctorsTable;