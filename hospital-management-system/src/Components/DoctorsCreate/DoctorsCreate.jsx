import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientCreateForm.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router';



function DoctorsCreate(props) {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [salary, setSalary] = useState(0);
    const [specialization, setSpecialization] = useState('');
    const [position, setPosition] = useState('');

    const[error, setError] = useState(false);

    const sendDataToAPI = () => {
        if (name.trim() != "" && surname.trim() != "" && position.trim() != ""  && salary > 0 && specialization.trim() != "") {
        axios.post('http://localhost:56709/api/Doctors', {
            name,
            surname,
            salary,
            specialization,
            position
        });
            navigate("/system/doctorstable");
    }
    else{
        setError(true);
    }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return(
        <form autoComplete="off" className="patient_create_form" noValidate onSubmit={handleSubmit}>
            <h2 className="create_patient_title">Add Doctor</h2>
            <input type="text" placeholder="Name" className="create_patient_input" onChange={(e) => setName(e.target.value)} value={name}/>
            {error && name.length<=0 ? <label>Name can't be empty</label> :"" }
            
            <input type="text" placeholder="Surname" className="create_patient_input" onChange={(e) => setSurname(e.target.value)} value={surname} />
            {error && surname.length<=0 ? <label>Surname can't be empty</label> :"" }
            
            <input placeholder="Salary" type="number" className="create_patient_input" onChange={(e) => setSalary(parseFloat(e.target.value))} value={salary}/>
            {error && salary<=0 ? <label>Salary can't be 0 or less than 0</label> :"" }
            
            <input type="text" placeholder="Specialization" className="create_patient_input" onChange={(e) => setSpecialization(e.target.value)} value={specialization}/>
            {error && specialization.length<=0 ? <label>Specialization can't be empty</label> :"" }
           
            <input type="text" placeholder="Position" className="create_patient_input" onChange={(e) => setPosition(e.target.value)} value={position}/>
            {error && position.length<=0 ? <label>Position can't be empty</label> :"" }
            
            <div className="patient_create_button">
                <button className="create_patient_button" type="submit" onClick={sendDataToAPI}>Create</button>
                <Link to="/System/DoctorsTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default DoctorsCreate;