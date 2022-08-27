
import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientUpdateForm.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router";


function WardsUpdate(props) {
    let navigate = useNavigate();
    const [isEmpty, setIsEmpty] = useState();
    const [type, setType] = useState('');
    const [number, setNumber] = useState(0);
    const [ID , setID] = useState(null);

    

    const sendDataToAPI = () => {
        axios.put(`http://localhost:56709/api/Wards/${ID}`, {
            number,
            type,
            isEmpty
        });
        navigate("/system/wardstable");
    }

    useEffect(() => {
        setIsEmpty(localStorage.getItem('WardEmpty'));
        setType(localStorage.getItem('WardType'));
        setNumber(parseInt(localStorage.getItem('WardNumber')));
        setID(localStorage.getItem('WardID'));
    } , [])

    return(
        <form autoComplete="off" className="patient_create_form" noValidate>
            <h2 className="update_patient_title">Edit Ward</h2>
            <input type="number" placeholder="Number" className="create_patient_input" onChange={(e) => setNumber(parseInt(e.target.value))} value={number}/>
            
            <input type="text" placeholder="Type" className="create_patient_input" onChange={(e) => setType(e.target.value)} value={type}/>

            <input type="radio" id="true" name="isEmpty" value="true" onChange={(e) => setIsEmpty(e.target.value === 'true')} className="wards_ratio"/>
            <label for="true" className="wards_ratio_label true">True</label>

            <input type="radio" id="false" name="isEmpty" value="false" onChange={(e) => setIsEmpty(e.target.value === 'true')} className="wards_ratio"/>
            <label for="false" className="wards_ratio_label false">False</label>

            <div className="patient_create_button">
                <button className="update_patient_button" type="submit" onClick={sendDataToAPI}>Update</button>
                <Link to="/System/WardsTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default WardsUpdate;