import "../../assets/css/PatientsTable.css";
import "../../assets/css/PatientsItem.css";
import React,{useState,useEffect,useContext} from "react";
import {connect} from "react-redux";
import { Link, NavLink ,  Navigate} from "react-router-dom";
import axios from 'axios';
import ReactPaginate from "react-paginate";


function DrugsFilter() {
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


function DrugsTable(props) {

    const [apiData , setApiData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:56709/api/Drugs')
      .then((getData) => {
        setApiData(getData.data);
      })
    } , [])

    const setFields = (id,name,type,productionDate,expirationDate,price,count) => {
      localStorage.setItem('DrugID', id);
      localStorage.setItem('DrugName', name);
      localStorage.setItem('DrugType', type);
      localStorage.setItem('ProductionDate', productionDate);
      localStorage.setItem('ExpirationDate', expirationDate);
      localStorage.setItem('DrugPrice', price);
      localStorage.setItem('DrugCount', count);
    }

    const getData = () => {
      axios.get('http://localhost:56709/api/Drugs')
      .then((getData) => {
        setApiData(getData.data);
      })
    }

    const onDelete = (id) =>{
      axios.delete(`http://localhost:56709/api/Drugs/${id}`)
      .then(() => {
          getData();
      })
    }

    getData();

    return(
        <div>
            <div className="patient_buttons">
                <NavLink to="/System/DrugsCreate" className="create_patient">Create Drug</NavLink>
                <button className="filter_patient">Filter</button>
            </div>
            <input type="text" id="myInput" onKeyUp={DrugsFilter} placeholder="Search for names.." title="Type in a name"></input>
            <table id="myTable">
                <tr class="header">
                    <th>#</th>
                    <th>Name</th>
                    <th className="responsive_cell">Type</th>
                    <th className="responsive_cell">Production Date</th>
                    <th className="responsive_cell">Expiration Date</th>
                    <th className="responsive_cell">Price</th>
                    <th>Count</th>
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
                                    <td className="responsive_cell">{data.type}</td>
                                    <td className="responsive_cell">{data.productionTime}</td>
                                    <td className="responsive_cell">{data.expirationTime}</td>
                                    <td className="responsive_cell">{data.price + "$"}</td>
                                    <td>{data.count}</td>
                                    <td><button className="patient_button"><i className="fa-solid fa-circle-info patient_info"></i></button></td>
                                    <td><button className="patient_button" onClick={() => onDelete(data.id)}><i className="fa-solid fa-trash patient_delete"></i></button>
                                    <Link to={`/system/DrugsUpdate/`}><button className="patient_button" onClick={() => setFields(data.id,data.name,data.type,data.productionDate,
                                      data.expirationDate,data.price,data.count)}><i className="fa-solid fa-pen patient_edit"></i></button></Link></td>
                                    </tr>
                        )
                      })
                    }
                </tbody>
    </table>
        </div>
    );
}


export default DrugsTable;