import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Https from '../servises/Https'

function Login() {
  const navigate = useNavigate();
  const initData = {
    email : "",
    password : ""
  };
  const [inputData,setInputData] = useState(initData);

  function handdleChange(e){
    const {name,value} = e.target;
    setInputData({
      ...inputData,
      [name] : value
    })
  }

  function handdleSubmit(){
    Https.Login(inputData).then((res)=>{
      localStorage.setItem('userid',res.data);
      navigate("/profile")
      alert("Login Success")
    }).catch((err)=>{
      alert(err)
    })
  }

  return (
    <div className='login-page'>
      <h2 className='my-4 text-center'>Login</h2>
      <div className='big-card p-5'>
        <label className="block my-2" htmlFor="email"> Email</label>
        <input className="block email-input" type="email" name="email" onChange={handdleChange} placeholder='Enter Your Email' />
        <label className="block my-2" htmlFor="password">Password</label>
        <input className="block password-input" type="password" name="password" onChange={handdleChange}  placeholder='Enter Your Password'/>
        <button className='btn btn-success my-5' onClick={()=>{handdleSubmit()}}>Login</button>
      </div>
    </div>
  )
}

export default Login