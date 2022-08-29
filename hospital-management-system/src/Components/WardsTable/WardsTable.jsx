import "../../assets/css/EmployeesTable.css";
import React,{useState,useEffect,useContext} from "react";
import {connect} from "react-redux";
import { Link, NavLink ,  Navigate} from "react-router-dom";
import axios from 'axios';
import ReactPaginate from "react-paginate";


function FilterWards() {
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


function WardsTable(props) {

    const [apiData , setApiData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:56709/api/Wards')
      .then((getData) => {
        setApiData(getData.data);
      })
    } , [])

    const setFields = (id,number,type,empty) => {
      localStorage.setItem('WardID', id);
      localStorage.setItem('WardNumber', number);
      localStorage.setItem('WardType', type);
      localStorage.setItem('WardEmpty', empty);
    }

    const getData = () => {
      axios.get('http://localhost:56709/api/Wards')
      .then((getData) => {
        setApiData(getData.data);
      })
    }

    const onDelete = (id) =>{
      axios.delete(`http://localhost:56709/api/Wards/${id}`)
      .then(() => {
          getData();
      })
    }

    getData();

    return(
        <div>
            <div className="patient_buttons">
                <NavLink to="/System/WardsCreate" className="create_patient">Create Ward</NavLink>
                <button className="filter_patient">Filter</button>
            </div>
            <input type="text" id="myInput" onKeyUp={FilterWards} placeholder="Search for names.." title="Type in a name"></input>
            <table id="myTable">
                <tr class="header">
                    <th>#</th>
                    <th>Number</th>
                    <th className="responsive_cell">Type</th>
                    <th>Empty</th>
                    <th>Info</th>
                    <th>Settings</th>
                </tr>
                <tbody>
                    {
                      apiData.map((data) => {
                        return (
                          <tr>
                                    <td>{data.id}</td>
                                    <td>{data.number}</td>
                                    <td className="responsive_cell">{data.type}</td>
                                    <td>{data.isEmpty.toString()}</td>
                                    <td><button className="patient_button"><i className="fa-solid fa-circle-info patient_info"></i></button></td>
                                    <td><button className="patient_button" onClick={() => onDelete(data.id)}><i className="fa-solid fa-trash patient_delete"></i></button>
                                    <Link to={`/system/WardsUpdate/`}><button className="patient_button" onClick={() => setFields(data.id,data.number,data.type,data.isEmpty)}><i className="fa-solid fa-pen patient_edit"></i></button></Link></td>
                                    </tr>
                        )
                      })
                    }
                </tbody>
    </table>
        </div>
    );
}


export default WardsTable;