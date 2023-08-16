import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Https from '../servises/Https'
import Swal from 'sweetalert2'

function Login() {
  const navigate = useNavigate();
  const initData = {
    email : "johndoe@example.com",
    password : "12345678"
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
      navigate("/")
    }).catch((err)=>{
      Swal.fire(
        'Error',
        'Plese Enter Sufficient Data',
        'warning'
      )
    })
  }
  useEffect(()=>{
    if(localStorage.getItem('userid') != null){
      navigate("/")
    }
  },[])

  return (
    <div className='login-page'>
      <h2 className='my-4 text-center'>Login</h2>
      <div className='big-card p-5'>
        <label className="block my-2" htmlFor="email"> Email</label>
        <input className="block email-input" type="email" name="email" onChange={handdleChange} placeholder='Enter Your Email' defaultValue={initData.email}/>
        <label className="block my-2" htmlFor="password">Password</label>
        <input className="block password-input" type="password" name="password" onChange={handdleChange}  placeholder='Enter Your Password' defaultValue={initData.password}/>
        <button className='btn btn-success my-5' onClick={()=>{handdleSubmit()}}>Login</button>
      </div>
    </div>
  )
}

export default Login