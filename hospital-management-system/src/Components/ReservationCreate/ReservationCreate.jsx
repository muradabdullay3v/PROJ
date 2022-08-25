import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientCreateForm.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router';



function ReservationCreate(props) {
    let navigate = useNavigate();
    const [patientName, setPatientName] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [date, setDate] = useState();
    const [hour, setHour] = useState(0);

    const sendDataToAPI = () => {
        axios.post('http://localhost:56709/api/Reservations', {
            patientName,
            doctorName,
            date,
            hour
        });
            navigate("/system/reservationtable");
    }


    return(
        <form autoComplete="off" className="patient_create_form" noValidate>
            <h2 className="create_patient_title">Add Reservation</h2>
            <input type="text" placeholder="Patient's Name" className="create_patient_input" onChange={(e) => setPatientName(e.target.value)}/>
            
            <input type="text" placeholder="Doctor's Name" className="create_patient_input" onChange={(e) => setDoctorName(e.target.value)}/>

            <input type="date" name="begin"
                placeholder="dd-mm-yyyy"
                min="2022-07-24" max="2023-12-31" className="create_patient_input" onChange={(e) => setDate((e.target.value))}/>
            
            
            <input placeholder="Hour" className="create_patient_input" onChange={(e) => setHour(parseInt(e.target.value))}/>
            
            <div className="patient_create_button">
                <button className="create_patient_button" type="submit" onClick={sendDataToAPI}>Create</button>
                <Link to="/System/ReservationTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default ReservationCreate;