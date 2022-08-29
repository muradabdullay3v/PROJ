import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientCreateForm.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router';
import "../../assets/css/WardsCreate.css";



function WardsCreate(props) {
    let navigate = useNavigate();
    const [number, setNumber] = useState(0);
    const [type, setType] = useState('');
    const [isEmpty, setIsEmpty] = useState();
    
    const[error, setError] = useState(false);

    const sendDataToAPI = () => {
        if (type.trim() != ""  && number >= 0) {
        axios.post('http://localhost:56709/api/Wards', {
            number,
            type,
            isEmpty
        });
            navigate("/system/wardstable");
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
            <h2 className="create_patient_title">Add Ward</h2>
            <input type="number" placeholder="Number" className="create_patient_input" onChange={(e) => setNumber(parseInt(e.target.value))} value={number}/>
            {error && number <= 0 ? <label>Number can't be 0 or less than 0</label> :"" }
            
            <input type="text" placeholder="Type" className="create_patient_input" onChange={(e) => setType(e.target.value)} value={type}/>
            {error && type.length<=0 ? <label>Type can't be empty</label> :"" }

            <input type="radio" id="true" name="isEmpty" value="true" onChange={(e) => setIsEmpty(e.target.value === 'true')} className="wards_ratio"/>
            <label for="true" className="wards_ratio_label true">True</label>

            <input type="radio" id="false" name="isEmpty" value="false" onChange={(e) => setIsEmpty(e.target.value === 'true')} className="wards_ratio"/>
            <label for="false" className="wards_ratio_label false">False</label>

            
            <div className="patient_create_button">
                <button className="create_patient_button" type="submit" onClick={sendDataToAPI}>Create</button>
                <Link to="/System/WardsTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default WardsCreate;