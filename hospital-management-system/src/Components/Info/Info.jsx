import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/css/Info.css";

function Info() {
    const [apiPatientsData , setApiPatientsData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:56709/api/Patients')
      .then((getData) => {
        setApiPatientsData(getData.data);
      })
    } , [])

    const getPatientsData = () => {
        axios.get('http://localhost:56709/api/Patients')
        .then((getData) => {
            setApiPatientsData(getData.data);
        })
      }


      const [apiDoctorsData , setApiDoctorsData] = useState([]);
      useEffect(() => {
        axios.get('http://localhost:56709/api/Doctors')
        .then((getData) => {
          setApiDoctorsData(getData.data);
        })
      } , [])
  
      const getDoctorsData = () => {
          axios.get('http://localhost:56709/api/Doctors')
          .then((getData) => {
              setApiPatientsData(getData.data);
          })
        }

        const [apiReservationsData , setApiReservationsData] = useState([]);
      useEffect(() => {
        axios.get('http://localhost:56709/api/Reservations')
        .then((getData) => {
            setApiReservationsData(getData.data);
        })
      } , [])
  
      const getReservationsData = () => {
          axios.get('http://localhost:56709/api/Reservations')
          .then((getData) => {
              setApiPatientsData(getData.data);
          })
        }

        const [apiWardsData , setApiWardsData] = useState([]);
      useEffect(() => {
        axios.get('http://localhost:56709/api/Wards')
        .then((getData) => {
            setApiWardsData(getData.data);
        })
      } , [])
  
      const getWardsData = () => {
          axios.get('http://localhost:56709/api/Wards')
          .then((getData) => {
            setApiWardsData(getData.data);
          })
        }
  
        

    return(
        <div className="info_content">
                <div >
                <table id="myTable" className="patients_info">
                    <tr class="header">
                        <th>#</th>
                        <th>Patient's Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                    </tr>
                    <tbody>
                        {
                        apiPatientsData.map((data) => {
                            return (
                            <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.surname}</td>
                                        <td>{data.age}</td>
                                        </tr>
                            )
                        })
                        }
                    </tbody>
        </table>
                </div>
            <div>
            <table id="myTable" className="doctors_info">
                <tr class="header">
                    <th>#</th>
                    <th>Doctor's Name</th>
                    <th>Surname</th>
                    <th>Specialization</th>
                </tr>
                <tbody>
                    {
                    apiDoctorsData.map((data) => {
                        return (
                        <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.surname}</td>
                                    <td>{data.specialization}</td>
                                    </tr>
                        )
                    })
                    }
                </tbody>
    </table>
            </div>
            <div>
            <table id="myTable" className="reservations_info">
                <tr class="header">
                    <th>#</th>
                    <th>Patient's Name</th>
                    <th>Doctor's Name</th>
                    <th>Date</th>
                    <th>Hour</th>
                </tr>
                <tbody>
                    {
                    apiReservationsData.map((data) => {
                        return (
                        <tr>
                                    <td>{data.id}</td>
                                    <td>{data.patientName}</td>
                                    <td>{data.doctorName}</td>
                                    <td>{data.time}</td>
                                    <td>{data.hour + ":00"}</td>
                                    </tr>
                        )
                    })
                    }
                </tbody>
    </table>
            </div>
            <div>
            <table id="myTable" className="wards_info">
                <tr class="header">
                <th>#</th>
                    <th>Number</th>
                    <th className="responsive_cell">Type</th>
                    <th>Empty</th>
                </tr>
                <tbody>
                    {
                    apiWardsData.map((data) => {
                        return (
                        <tr>
                                    <td>{data.id}</td>
                                    <td>{data.number}</td>
                                    <td className="responsive_cell">{data.type}</td>
                                    <td>{data.isEmpty.toString()}</td>
                                    </tr>
                        )
                    })
                    }
                </tbody>
    </table>
            </div>
        </div>
    );
}

export default Info;