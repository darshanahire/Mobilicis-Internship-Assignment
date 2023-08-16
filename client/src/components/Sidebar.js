import React,{useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'


function Sidebar() {
    const btnRef1 = useRef();
    const btnRef2 = useRef();
    function fun1(){
        btnRef1.current.style.border = '2px solid rgba(65, 59, 137, 1)';
        btnRef2.current.style.border = '2px solid white';
    }
    function fun2(){
        btnRef2.current.style.border = '2px solid rgba(65, 59, 137, 1)';
        btnRef1.current.style.border = '2px solid white';
    }
    useEffect(()=>{
        fun1();        
    },[])
  return (
    <div className='sidebar d-none d-lg-block'>
        <div className='dashboard-div'>Dashboard</div>
        <div   className='flex mt-3'>
            <img className="arrow" src="./img/arrow.png" alt="" />
            <Link className="sidebar-btn" to="/" ref={btnRef1} onClick={fun1}> My Profile </Link>
        </div>
        <div className='flex'>
            <img className="arrow" src="./img/arrow.png" alt="" />
            <Link className="sidebar-btn" to="/connections" ref={btnRef2} onClick={fun2}> My Connections </Link>
        </div>
        <div className='logout-parent'>
        <Link className='nav-link my-2' to="/register"> Register</Link>
        <Link className='nav-link my-2' to="/login"> Login</Link>
        </div>
    </div>
  )
}

export default Sidebar