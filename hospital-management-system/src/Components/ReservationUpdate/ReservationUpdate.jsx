
import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientUpdateForm.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router";


function ReservationUpdate(props) {
    let navigate = useNavigate();
    const [patientName, setPatientName] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [date, setDate] = useState();
    const [hour, setHour] = useState(0);
    const [ID , setID] = useState(null);

    const[error, setError] = useState(false);

    const sendDataToAPI = () => {
        if (patientName.trim() != "" && doctorName.trim() != ""  && hour > 0 ) {
        axios.put(`http://localhost:56709/api/Reservations/${ID}`, {
            patientName,
            doctorName,
            date,
            hour
        });
        navigate("/system/reservationTable");
    }
    else{
        setError(true);
    }
    }

    useEffect(() => {
        setPatientName(localStorage.getItem('ReservationPatientName'));
        setDoctorName(localStorage.getItem('ReservationDoctorName'));
        setHour(parseInt(localStorage.getItem('ReservationHour')));
        setDate(localStorage.getItem('ReservationDate'));
        setID(localStorage.getItem('ReservationID'));
    } , [])

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form autoComplete="off" className="patient_create_form" noValidate onSubmit={handleSubmit}>
            <h2 className="update_patient_title">Edit Reservation</h2>
            <input type="text" placeholder="Name" className="create_patient_input" onChange={(e) => setPatientName(e.target.value)} value ={patientName}/>
            {error && patientName.length<=0 ? <label>Patient's Name can't be empty</label> :"" }
        
            <input type="text" placeholder="Surname" className="create_patient_input" onChange={(e) => setDoctorName(e.target.value)} value ={doctorName}/>
            {error && doctorName.length<=0 ? <label>Doctor's Name can't be empty</label> :"" }
            
            <input type="date" placeholder="Date" className="create_patient_input" onChange={(e) => setDate(e.target.value)} value={date}/>

            <input type="number" placeholder="Hour" className="create_patient_input" onChange={(e) => setHour(parseInt(e.target.value))} value={hour}/>
            {error && hour<=0 ? <label>Hour can't be 0 or less than 0</label> :"" }

            <div className="patient_create_button">
                <button className="update_patient_button" type="submit" onClick={sendDataToAPI}>Update</button>
                <Link to="/System/ReservationTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default ReservationUpdate;