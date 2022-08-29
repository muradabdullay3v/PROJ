import { useEffect , useRef , useContext } from 'react';
import { useState } from 'react';
import './../../assets/css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router';



function Login(props) {
        let navigate = useNavigate();
        const [email , setEmail] = useState('');
        const [password , setPassword] = useState('');

        const[error, setError] = useState(false);
        
        const handleSubmit = (e) => {
            e.preventDefault();
        }

       


        const handleApi = () => {
            if (email.trim() != ""  && password.trim() != "") {
            axios.post('http://localhost:56709/api/Accounts/login',{
                email,
                password
            }).then(result =>{
                localStorage.setItem('username' , result.data.userName);
                navigate("/system/patientstable");
                localStorage.setItem("auth" , true);
            }).catch(error => {
                alert("Duzgun dogul")
            })
        }
        else{
            setError(true);
        }
        }
    return(
             
        <div className="custom_container">
            <form className='login_form' onSubmit={handleSubmit}>
                <h2 className='login_text'>Login</h2>
                <input type="text" onChange={e => setEmail(e.target.value)} placeholder='Email' className='identity_input' value={email} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"/>
                {error && email.length<=0 ? <label>Email can't be empty</label> :"" }
                <input type="password" onChange={e => setPassword(e.target.value)} placeholder='Password' className='identity_input' value={password}/>
                {error && password.length<=5 ? <label>Password can't be empty</label> :"" }
                <button className='login_button' onClick={handleApi}>Login</button>
            </form>
        </div>
        
    );
}

export default Login;