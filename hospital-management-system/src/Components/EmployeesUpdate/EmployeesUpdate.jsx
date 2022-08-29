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
    const [salary, setSalary] = useState(0);
    const [ID , setID] = useState(null);

    const[error, setError] = useState(false);

    const sendDataToAPI = () => {
        if (name.trim() != "" && surname.trim() != "" && age > 0 && phone.trim() != "" && salary > 0 && address.trim() != "") {
        axios.put(`http://localhost:56709/api/Employees/${ID}`, {
            name,
            surname,
            age,
            phone,
            address,
            position,
            salary
        });
        navigate("/system/employeestable");
    }
    else{
        setError(true);
    }
    }

    useEffect(() => {
        setName(localStorage.getItem('EmployeeName'));
        setSurname(localStorage.getItem('EmployeeSurname'));
        setAge(parseInt(localStorage.getItem('EmployeeAge')));
        setPhone(localStorage.getItem('EmployeePhone'));
        setAddress(localStorage.getItem('EmployeeAddress'));
        setPosition(localStorage.getItem('EmployeePosition'));
        setSalary(parseFloat(localStorage.getItem('EmployeeSalary')));
        setID(localStorage.getItem('EmployeeID'));
    } , [])

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form autoComplete="off" className="patient_create_form" noValidate onSubmit={handleSubmit}>
            <h2 className="update_patient_title">Edit Employee</h2>
            <input type="text" placeholder="Name" className="create_patient_input" onChange={(e) => setName(e.target.value)} value ={name}/>
            {error && name.length<=0 ? <label>Name can't be empty</label> :"" }
        
            <input type="text" placeholder="Surname" className="create_patient_input" onChange={(e) => setSurname(e.target.value)} value ={surname}/>
            {error && surname.length<=0 ? <label>Surname can't be empty</label> :"" }
            
            <input type="number" placeholder="Age" className="create_patient_input" onChange={(e) => setAge(parseInt(e.target.value))} value={age}/>
            {error && age<=0 ? <label>Age can't be 0 or less than 0</label> :"" }
            
            <input type="text" placeholder="Phone" className="create_patient_input" onChange={(e) => setPhone(e.target.value)} value={phone}/>
            {error && phone.length<=5 ? <label>Phone can't be empty or less 8</label> :"" }
            
            <input type="text" placeholder="Address" className="create_patient_input" onChange={(e) => setAddress(e.target.value)} value ={address}/>
            {error && address.length<=0 ? <label>Address can't be empty</label> :"" }

            <input type="text" placeholder="Position" className="create_patient_input" onChange={(e) => setPosition(e.target.value)} value ={position}/>
            {error && position.length<=0 ? <label>Position can't be empty</label> :"" }

            <input type="number" placeholder="Salary" className="create_patient_input" onChange={(e) => setSalary(parseFloat(e.target.value))} value ={salary}/>
            {error && salary<=0 ? <label>Salary can't be 0 or less than 0</label> :"" }
            
            <div className="patient_create_button">
                <button className="update_patient_button" type="submit" onClick={sendDataToAPI}>Update</button>
                <Link to="/System/EmployeesTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default EmployeesUpdate;