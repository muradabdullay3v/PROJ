import "../../assets/css/EmployeesTable.css";
import React,{useState,useEffect,useContext} from "react";
import {connect} from "react-redux";
import { Link, NavLink ,  Navigate} from "react-router-dom";
import axios from 'axios';
import ReactPaginate from "react-paginate";


function FilterEmployees() {
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


function EmployeesTable(props) {

    const [apiData , setApiData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:56709/api/Employees')
      .then((getData) => {
        setApiData(getData.data);
      })
    } , [])

    const setFields = (id,name,surname,age,phone,address,position) => {
      localStorage.setItem('EmployeeID', id);
      localStorage.setItem('EmployeeName', name);
      localStorage.setItem('EmployeeSurname', surname);
      localStorage.setItem('EmployeeAge', age);
      localStorage.setItem('EmployeePhone', phone);
      localStorage.setItem('EmployeeAddress', address);
      localStorage.setItem('EmployeePosition', position);
    }

    const getData = () => {
      axios.get('http://localhost:56709/api/Employees')
      .then((getData) => {
        setApiData(getData.data);
      })
    }

    const onDelete = (id) =>{
      axios.delete(`http://localhost:56709/api/Employees/${id}`)
      .then(() => {
          getData();
      })
    }

    getData();

    return(
        <div>
            <div className="patient_buttons">
                <NavLink to="/System/EmployeesCreate" className="create_patient">Create Employee</NavLink>
                <button className="filter_patient">Filter</button>
            </div>
            <input type="text" id="myInput" onKeyUp={FilterEmployees} placeholder="Search for names.." title="Type in a name"></input>
            <table id="myTable">
                <tr class="header">
                    <th>#</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Position</th>
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
                                    <td>{data.age}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.address}</td>
                                    <td>{data.position}</td>
                                    <td><button className="patient_button"><i className="fa-solid fa-circle-info patient_info"></i></button></td>
                                    <td><button className="patient_button" onClick={() => onDelete(data.id)}><i className="fa-solid fa-trash patient_delete"></i></button>
                                    <Link to={`/system/EmployeesUpdate/`}><button className="patient_button" onClick={() => setFields(data.id,data.name,data.surname,data.age,
                                      data.phone,data.address,data.position)}><i className="fa-solid fa-pen patient_edit"></i></button></Link></td>
                                    </tr>
                        )
                      })
                    }
                </tbody>
    </table>
        </div>
    );
}


export default EmployeesTable;