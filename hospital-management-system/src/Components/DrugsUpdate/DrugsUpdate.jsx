
import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientUpdateForm.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router";


function DrugsUpdate(props) {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [productionDate, setProductionDate] = useState();
    const [expirationDate, setExpirationDate] = useState();
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    const [ID , setID] = useState(null);

    const[error, setError] = useState(false);

    const sendDataToAPI = () => {
        if (name.trim() != "" && type.trim() != ""  && price > 0 &&  count >= 0) {
        axios.put(`http://localhost:56709/api/Drugs/${ID}`, {
            name,
            type,
            productionDate,
            expirationDate,
            price,
            count
        });
        navigate("/system/drugstable");
    }
    else{
        setError(true);
    }
    }

    useEffect(() => {
        setName(localStorage.getItem('DrugName'));
        setType(localStorage.getItem('DrugType'));
        setPrice(parseFloat(localStorage.getItem('DrugPrice')));
        setCount(parseInt(localStorage.getItem('DrugCount')));
        setProductionDate(localStorage.getItem('ProductionDate'));
        setExpirationDate(localStorage.getItem('ExpirationDate'));
        setID(localStorage.getItem('DrugID'));
    } , [])

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form autoComplete="off" className="patient_create_form" noValidate onSubmit={handleSubmit}>
            <h2 className="update_patient_title">Edit Drug</h2>
            <input type="text" placeholder="Name" className="create_patient_input" onChange={(e) => setName(e.target.value)} value ={name}/>
            {error && name.length<=0 ? <label>Name can't be empty</label> :"" }
        
            <input type="text" placeholder="Type" className="create_patient_input" onChange={(e) => setType(e.target.value)} value ={type}/>
            {error && type.length<=0 ? <label>Name can't be empty</label> :"" }
            
            <input type="date" placeholder="Production Date" className="create_patient_input" onChange={(e) => setProductionDate(e.target.value)} value={productionDate}/>

            <input type="date" placeholder="Expiration Date" className="create_patient_input" onChange={(e) => setExpirationDate(e.target.value)} value={expirationDate}/>

            <input type="number" placeholder="Price" className="create_patient_input" onChange={(e) => setPrice(parseFloat(e.target.value))} value={price}/>
            {error && price<=0 ? <label>Price can't be 0 or less than 0</label> :"" }

            <input type="number" placeholder="Count" className="create_patient_input" onChange={(e) => setCount(parseInt(e.target.value))} value={count}/>
            {error && count < 0 ? <label>Count can't be less than 0</label> :"" }

            <div className="patient_create_button">
                <button className="update_patient_button" type="submit" onClick={sendDataToAPI}>Update</button>
                <Link to="/System/DrugsTable" className="cancel_patient_button">Cancel</Link>
            </div>
        </form>
    )
}


export default DrugsUpdate;