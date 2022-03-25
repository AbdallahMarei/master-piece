import React,{useState} from 'react'
import "./login.css"
import axios from 'axios'
import {Link,useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'


const Login = (props) => {
   
    const navigate = useNavigate()
    const [loginInfo,setLoginInfo] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo({...loginInfo,[name]:value})
    }

    const handleSubmit = (e) => {
       e.preventDefault();
        if (!loginInfo.email || !loginInfo.password){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the fields",
          });
          return
        };
        axios.post("http://localhost:8000/api/login",loginInfo).then(res=>{
          console.log(res)
          if(res.data.message === "Thank you for logging in"){
            Swal.fire({
              title: `${res.data.message}`,
              text: "Welcome back",
              icon: "success",
              confirmButtonText: "OK",
            });
            sessionStorage.setItem("loggedUser", JSON.stringify({
              ...res.data.user,
              cartItems: []
            }))
            if(res.data.user.role_as === 1){
              window.location.href = "http://127.0.0.1:8000/dashboard"
            } else{
              navigate("/");
            }
            props.setLoggedUser(JSON.parse(sessionStorage.getItem("loggedUser")))
          } else {
            Swal.fire({
                title: "Email or password are incorrect",
                text: "Please make sure of your credentials",
                icon: "error",
                confirmButtonText: "OK",
              });
        }
        })
    }
        return(
                <div className="login-form-container">
                <form onSubmit={handleSubmit} className='login-form'>
                    <h1 className="sign-heading">Sign In</h1>
                    <input onChange={handleChange} value={loginInfo.email} placeholder="Email" type="email" name="email" />
                    <input onChange={handleChange} value={loginInfo.password} placeholder="Password" type="password" name="password" />
                    <button className='login-btn' type="submit">Login</button>
                    <p className='dont-have-account'>Don't Have an account? <Link to="/register">Register Here</Link></p>
                </form>
            </div>
        )
    
}

export default Login
