import React,{ useEffect, useState } from "react";
import "../../assets/css/PatientCreateForm.css";
import useForm from "../useForm/useForm";
import { connect } from "react-redux";
import * as actions from "../../actions/Patient";

const initialFieldValues ={
    name : '',
    surname : '',
    age : '',
    phone : '',
    bloodGroup : '',
    address : '',
    illness : '',
}



function PatientCreateForm(props) {
    
    const validate = (fieldValues = values) => {
        let temp = {}
        if('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
        if('surname' in fieldValues)
        temp.surname = fieldValues.surname ? "" : "This field is required."
        if('age' in fieldValues)
        temp.age = fieldValues.age ? "" : "This field is required."
        if('phone' in fieldValues)
        temp.phone = fieldValues.phone ? "" : "This field is required."
        if('bloodGroup' in fieldValues)
        temp.bloodGroup = fieldValues.bloodGroup ? "" : "This field is required."
        if('address' in fieldValues)
        temp.address = fieldValues.address ? "" : "This field is required."
        if('illness' in fieldValues)
        temp.illness = fieldValues.illness ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if(fieldValues == values)
            return Object.values(temp).every(x=> x=="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues,validate)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            props.createPatient(values,() => {window.alert('inserted')})
        }
    }

    useEffect(() => {
        if(props.currentId != 0)
        setValues({
            ...props.PatientList.find(x=> x.id == props.currentId)
        })
    },[props.currentId])

    return(
        <form autoComplete="off" className="patient_create_form" onSubmit={handleSubmit} noValidate>
            <h2 className="create_patient_title">Add Patient</h2>
            <input type="text" placeholder="Name" className="create_patient_input" value={values.name} onChange={handleInputChange("name")} error={true} helperText={errors.name}/>
            {
                    errors.name && <span>{errors.name}</span>
            }
            <input type="text" placeholder="Surname" className="create_patient_input" value={values.surname} onChange={handleInputChange("surname")}/>
            {
                    errors.surname && <span>{errors.surname}</span>
            }
            <input type="text" placeholder="Age" className="create_patient_input" value={values.age} onChange={handleInputChange("age")}/>
            {
                    errors.age && <span>{errors.age}</span>
            }
            <input type="text" placeholder="Phone" className="create_patient_input" value={values.phone} onChange={handleInputChange("phone")}/>
            {
                    errors.phone && <span>{errors.phone}</span>
            }
            <input type="text" placeholder="Blood Group" className="create_patient_input" value={values.bloodGroup} onChange={handleInputChange("bloodGroup")}/>
            {
                    errors.bloodGroup && <span>{errors.bloodGroup}</span>
            }
            <input type="text" placeholder="Address" className="create_patient_input" value={values.address} onChange={handleInputChange("address")}/>
            {
                    errors.address && <span>{errors.address}</span>
            }
            <input type="text" placeholder="Illness" className="create_patient_input" value={values.illness} onChange={handleInputChange("illness")}/>
            {
                    errors.illness && <span>{errors.illness}</span>
            }
            <div className="patient_create_button">
                <button className="create_patient_button" type="submit">Create</button>
                <button className="cancel_patient_button">Cancel</button>
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    PatientList : state.Patient.list
  })
  
  const mapActionToProps = {
    createPatient : actions.create,
    updatePatient : actions.update
  }

export default connect(mapStateToProps,mapActionToProps) (PatientCreateForm);