import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientUpdateForm.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router";


function EmployeesUpdate(props) {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [position, setPosition] = useState('');
    const [ID , setID] = useState(null);

    

    const sendDataToAPI = () => {
        axios.put(`http://localhost:56709/api/Employees/${ID}`, {
            name,
            surname,
            age,
            phone,
            address,
            position
        });
        navigate("/system/employeestable");
    }

    useEffect(() => {
        setName(localStorage.getItem('EmployeeName'));
        setSurname(localStorage.getItem('EmployeeSurname'));
        setAge(parseInt(localStorage.getItem('EmployeeAge')));
        setPhone(localStorage.getItem('EmployeePhone'));
        setAddress(localStorage.getItem('EmployeeAddress'));
        setPosition(localStorage.getItem('EmployeePosition'));
        setID(localStorage.getItem('EmployeeID'));
    } , [])

    return(
        <form autoComplete="off" className="patient_create_form" noValidate>
            <h2 className="update_patient_title">Edit Employee</h2>
            <input type="text" placeholder="Name" className="create_patient_input" onChange={(e) => setName(e.target.value)} value ={name}/>
        
            <input type="text" placeholder="Surname" className="create_patient_input" onChange={(e) => setSurname(e.target.value)} value ={surname}/>
            
            <input type="number" placeholder="Age" className="create_patient_input" onChange={(e) => setAge(parseInt(e.target.value))} value={age}/>
            
            <input type="text" placeholder="Phone" className="create_patient_input" onChange={(e) => setPhone(e.target.value)} value={phone}/>
            
            <input type="text" placeholder="Address" className="create_patient_input" onChange={(e) => setAddress(e.target.value)} value ={address}/>

            <input type="text" placeholder="Position" className="create_patient_input" onChange={(e) => setPosition(e.target.value)} value ={position}/>
            
            <div className="patient_create_button">
                <button className="update_patient_button" type="submit" onClick={sendDataToAPI}>Update</button>
                <Link to="/System/EmployeesTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default EmployeesUpdate;