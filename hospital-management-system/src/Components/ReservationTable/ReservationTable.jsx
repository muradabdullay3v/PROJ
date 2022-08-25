import "../../assets/css/EmployeesTable.css";
import React,{useState,useEffect,useContext} from "react";
import {connect} from "react-redux";
import { Link, NavLink ,  Navigate} from "react-router-dom";
import axios from 'axios';
import ReactPaginate from "react-paginate";


function FilterPatientReservation() {
    let input, filter, table, tr, td, i, txtValue;
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

  function FilterDoctorReservation() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
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


function ReservationTable(props) {

    const [apiData , setApiData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:56709/api/Reservations')
      .then((getData) => {
        setApiData(getData.data);
      })
    } , [])

    const setFields = (id,patientname,doctorname,day,month,year,hour) => {
      localStorage.setItem('ReservationID', id);
      localStorage.setItem('ReservationPatientName', patientname);
      localStorage.setItem('ReservationDoctorName', doctorname);
      localStorage.setItem('ReservationDay', day);
      localStorage.setItem('ReservationMonth', month);
      localStorage.setItem('ReservationYear', year);
      localStorage.setItem('ReservationHour', hour);
    }

    const getData = () => {
      axios.get('http://localhost:56709/api/Reservations')
      .then((getData) => {
        setApiData(getData.data);
      })
    }

    const onDelete = (id) =>{
      axios.delete(`http://localhost:56709/api/Reservations/${id}`)
      .then(() => {
          getData();
      })
    }

    getData();

    var current = new Date();

    var year = current.getFullYear();
    var month = current.getMonth();

    

    return(
        <div>
            <div className="patient_buttons">
                <NavLink to="/System/ReservationCreate" className="create_patient">Create Reservation</NavLink>
                <button className="filter_patient">Filter</button>
            </div>
            <input type="text" id="myInput" onKeyUp={FilterPatientReservation} placeholder="Search for Patients.." title="Type in a name"></input>
            <input type="text" id="myInput2" onKeyUp={FilterDoctorReservation} placeholder="Search for Doctors.." title="Type in a name"></input>
            <table id="myTable">
                <tr class="header">
                    <th>#</th>
                    <th>Patient Name</th>
                    <th>Doctor Name</th>
                    <th>Date</th>
                    <th>Hour</th>
                    <th>Info</th>
                    <th>Settings</th>
                </tr>
                <tbody>
                    {
                      apiData.map((data) => {
                        return (
                          <tr>
                                    <td>{data.id}</td>
                                    <td>{data.patientName}</td>
                                    <td>{data.doctorName}</td>
                                    <td>{data.time}</td>
                                    <td>{data.hour + ":00"}</td>
                                    <td><button className="patient_button"><i className="fa-solid fa-circle-info patient_info"></i></button></td>
                                    <td><button className="patient_button" onClick={() => onDelete(data.id)}><i className="fa-solid fa-trash patient_delete"></i></button>
                                    <Link to={`/system/ReservationUpdate/`}><button className="patient_button" onClick={() => setFields(data.id,data.patientName,data.doctorName,data.date,data.time,data.hour)}><i className="fa-solid fa-pen patient_edit"></i></button></Link></td>
                                    </tr>
                        )
                      })
                    }
                </tbody>
    </table>
        </div>
    );
}


export default ReservationTable;