import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import Https from "../servises/Https"
import Swal from 'sweetalert2'

function Register() {
  const navigate = useNavigate();
  const initData = {
    name:"",
    email : "",
    password : "",
    phone:""
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
    console.log(inputData.password.length);
    
    if(inputData.password.length >= 6){
      Https.Register(inputData).then((res)=>{
        console.log(res);
        Swal.fire(
          'Success',
          'Account Created Please Login',
          'Success'
        )
        navigate('/login');
      }).catch((err)=>{
        Swal.fire(
          'Error',
          'Error Occurs',
          'Error'
        )
      })
    }
    else{
      Swal.fire(
        'Warning',
        'Please Enter Long Password',
        'warning'
      )
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('userid') != null){
      navigate("/")
    }
  },[])
  return (
    <div className='sign-page'>
      <h2 className='my-4 text-center'>SignUp</h2>
      <div className='big-card p-5'>
        <label className="block my-2" htmlFor="name"> Your Name</label>
        <input className="block email-input" type="text" name="name" onChange={handdleChange} placeholder='Enter Your Name' />
        <label className="block my-2" htmlFor="email"> Email</label>
        <input className="block email-input" type="email" name="email" onChange={handdleChange} placeholder='Enter Your Email' />
        <label className="block my-2" htmlFor="phone">Phone No.</label>
        <input className="block email-input" type="number" name="phone" onChange={handdleChange} placeholder='Enter Your Phone No.' />
        <label className="block my-2" htmlFor="password">Password</label>
        <input className="block password-input" type="password" name="password" onChange={handdleChange}  placeholder='Enter Your Password'/>
        <button className='btn btn-success my-5' onClick={()=>{handdleSubmit()}}>SignUp</button>
      </div>
    </div>
  )
}

export default Register