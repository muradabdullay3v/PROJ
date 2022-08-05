import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientCreateForm.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router';



function PatientCreateForm(props) {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [address, setAddress] = useState('');
    const [illness, setIllness] = useState('');

    const sendDataToAPI = () => {
        axios.post('http://localhost:56709/api/Patients', {
            name,
            surname,
            age,
            phone,
            bloodGroup,
            address,
            illness
        });
            navigate("/system/patientstable");
    }


    return(
        <form autoComplete="off" className="patient_create_form" noValidate>
            <h2 className="create_patient_title">Add Patient</h2>
            <input type="text" placeholder="Name" className="create_patient_input" onChange={(e) => setName(e.target.value)}/>
            
            <input type="text" placeholder="Surname" className="create_patient_input" onChange={(e) => setSurname(e.target.value)}/>
            
            <input placeholder="Age" className="create_patient_input" onChange={(e) => setAge(parseInt(e.target.value))}/>
            
            <input type="text" placeholder="Phone" className="create_patient_input" onChange={(e) => setPhone(e.target.value)}/>
           
            <input type="text" placeholder="Blood Group" className="create_patient_input" onChange={(e) => setBloodGroup(e.target.value)}/>
            
            <input type="text" placeholder="Address" className="create_patient_input" onChange={(e) => setAddress(e.target.value)}/>
            
            <input type="text" placeholder="Illness" className="create_patient_input" onChange={(e) => setIllness(e.target.value)}/>
            
            <div className="patient_create_button">
                <button className="create_patient_button" type="submit" onClick={sendDataToAPI}>Create</button>
                <Link to="/System/PatientsTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default PatientCreateForm;