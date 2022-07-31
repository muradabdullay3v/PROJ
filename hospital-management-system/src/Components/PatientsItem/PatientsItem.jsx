import "../../assets/css/PatientsItem.css";
import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import  * as actions from "../../actions/Patient";


function PatientsItem(props) {

    useEffect(()=>{
        props.fetchAllPatients()
    },[])

    return(
                <tr>
                    <td>{props.patient_id}</td>
                    <td>{props.name}</td>
                    <td>{props.surname}</td>
                    <td>{props.birthday}</td>
                    <td>{props.problems}</td>
                    <td>{props.payment}</td>
                    
                </tr>
    );
}

const mapStateToProps = state => ({
        PatientList : state.Patient.list
    })

const mapActionToProps = {
    fetchAllPatients : actions.fetchAll
}

export default connect(mapStateToProps)(PatientsItem);
