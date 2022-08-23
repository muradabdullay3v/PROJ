import {Navigate, Outlet} from 'react-router-dom';


const PrivateRoutes = () => {
    return(
        localStorage.getItem("auth") ? <Outlet/> : <Navigate to ="/login/"/>
    )
}

export default PrivateRoutes;