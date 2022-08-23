import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientCreateForm.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router';



function EmployeesCreate(props) {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [position, setPosition] = useState('');

    const sendDataToAPI = () => {
        axios.post('http://localhost:56709/api/Employees', {
            name,
            surname,
            age,
            phone,
            address,
            position
        });
            navigate("/system/employeestable");
    }


    return(
        <form autoComplete="off" className="patient_create_form" noValidate>
            <h2 className="create_patient_title">Add Employee</h2>
            <input type="text" placeholder="Name" className="create_patient_input" onChange={(e) => setName(e.target.value)}/>
            
            <input type="text" placeholder="Surname" className="create_patient_input" onChange={(e) => setSurname(e.target.value)}/>
            
            <input placeholder="Age" className="create_patient_input" onChange={(e) => setAge(parseInt(e.target.value))}/>
            
            <input type="text" placeholder="Phone" className="create_patient_input" onChange={(e) => setPhone(e.target.value)}/>
            
            <input type="text" placeholder="Address" className="create_patient_input" onChange={(e) => setAddress(e.target.value)}/>

            <input type="text" placeholder="Position" className="create_patient_input" onChange={(e) => setPosition(e.target.value)}/>
            
            <div className="patient_create_button">
                <button className="create_patient_button" type="submit" onClick={sendDataToAPI}>Create</button>
                <Link to="/System/EmployeesTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default EmployeesCreate;