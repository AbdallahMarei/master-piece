import React,{useState} from 'react'
import "./register.css"
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate,Link} from "react-router-dom"

const Register = (props) => {

    const navigate = useNavigate()
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [submitted,setSubmitted] = useState(false)

    const handleChange = (e) => {
        setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
    }
    

    const handleSubmit = async (e) => {
        const {name,email,password,confirmPassword} = registerInfo;
        e.preventDefault();
        setSubmitted(true)
        if (!name || !email || !password || !confirmPassword)
        return;
        if(name.length >= 4  && email && password.length >= 4 && password === confirmPassword){
            axios.post("http://localhost:8000/api/register",registerInfo).then(res=>{
                console.log(res.data)
                if(res.data.message === "Account registered successfully"){
                    Swal.fire({
                        title: `${res.data.message}`,
                        text: "Thank you for registering",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                      sessionStorage.setItem("loggedUser", JSON.stringify({
                          ...res.data.user,
                          cartItems: []
                    }))
                    props.setLoggedUser(JSON.parse(sessionStorage.getItem("loggedUser")))
                    navigate("/")
                } else {
                    Swal.fire({
                        title: "Account already exists",
                        text: "Please enter a different email",
                        icon: "error",
                        confirmButtonText: "OK",
                      });
                }
            }); 
        }
    }
        return(
            <div className="register-form-container">
            <form onSubmit={handleSubmit} className='register-form'>
                <h1 className="sign-heading">Register</h1>
                <input onChange={handleChange} value={registerInfo.name} placeholder="Name" name="name" type="text" />
                {submitted && (registerInfo.name.length < 4 || !registerInfo.name) ? <span className="message">Please enter a first name with length of 4 characters or more</span> : null}

                <input onChange={handleChange} value={registerInfo.email} placeholder="Email" type="email" name="email" />
                {(submitted && !registerInfo.email) ? <span className="message">Please enter an email name</span> : null}

                <input onChange={handleChange} value={registerInfo.password} placeholder="Password" type="password" name="password" />
                {(submitted && (registerInfo.password.length < 4 || !registerInfo.password)) ? <span className="message">Please enter a password with length of 4</span> : null}

                <input onChange={handleChange} value={registerInfo.confirmPassword} placeholder="Confirm Password" type="password" name="confirmPassword" />
                {(submitted && (!registerInfo.confirmPassword || registerInfo.password !== registerInfo.confirmPassword)) ? <span className="message">Please make sure the passwords match</span> : null}

                <button type="submit" className='register-btn'>Register</button>
                <p className='already-have'>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
        )
}

export default Register
