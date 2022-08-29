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

    const[error, setError] = useState(false);



    const sendDataToAPI = () => {
        if (name.trim() != "" && surname.trim() != "" && age > 0 && phone.trim() != "" && bloodGroup.trim() != "" && address.trim() != "" && illness.trim() != "") {
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
        else{
            setError(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form autoComplete="off" className="patient_create_form" onSubmit={handleSubmit}>
            <h2 className="create_patient_title">Add Patient</h2>
            <input type="text" placeholder="Name" className="create_patient_input" onChange={(e) => setName(e.target.value)} value = {name}/>
            {error && name.length<=0 ? <label>Name can't be empty</label> :"" }
            
            <input type="text" placeholder="Surname" className="create_patient_input" onChange={(e) => setSurname(e.target.value)} value = {surname} />
            {error && surname.length<=0 ? <label>Surname can't be empty</label> :"" }
            
            <input type="number" placeholder="Age" className="create_patient_input" onChange={(e) => setAge(parseInt(e.target.value))} value = {parseInt(age)} />
            {error && age<=0 ? <label>Age can't be 0 or less than 0</label> :"" }
            
            <input type="text" placeholder="Phone" className="create_patient_input" onChange={(e) => setPhone(e.target.value)} value = {phone} />
            {error && phone.length<=5 ? <label>Phone can't be empty or less 8</label> :"" }
           
            <input type="text" placeholder="Blood Group" className="create_patient_input" onChange={(e) => setBloodGroup(e.target.value)} value = {bloodGroup}/>
            {error && bloodGroup.length<=0 ? <label>Blood Group can't be empty</label> :"" }
            
            <input type="text" placeholder="Address" className="create_patient_input" onChange={(e) => setAddress(e.target.value)} value = {address} />
            {error && address.length<=0 ? <label>Address can't be empty</label> :"" }
            
            <input type="text" placeholder="Illness" className="create_patient_input" onChange={(e) => setIllness(e.target.value)} value = {illness} />
            {error && illness.length<=0 ? <label>Illness can't be empty</label> :"" }
            
            <div className="patient_create_button">
                <button className="create_patient_button" type="submit" onClick={sendDataToAPI}>Create</button>
                <Link to="/System/PatientsTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default PatientCreateForm;