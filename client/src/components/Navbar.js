import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom"
import Https from "../servises/Https"

function BasicExample(props) {
  const [myid,setMyid] = useState(null);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const _id = props.id;
    setMyid(_id);
    if (_id !== null) {
      Https.GetUser(_id).then((res) => {
        setUserData(res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [props.id]);
  return (
    <>
    <div className='mynavbar float-right'>
      { myid != null ? <> 
        <Link className='nav-link my-auto mx-3 mx-lg-4 mobile' to="/"> Profile</Link>
      <Link className='nav-link my-auto mx-2 mx-lg-4 mobile' to="/connections"> Connections</Link>
      <Link className='nav-link my-auto mx-2 mx-lg-4 mobile' to="/login" onClick={()=>{localStorage.removeItem("userid"); props?.userChanged(null); setUserData([])}}>Logout</Link>
      </> : <>
      <Link className='nav-link my-auto mx-2 mx-lg-4' to="/login"> Login</Link>
      <Link className='nav-link my-auto mx-2 mx-lg-4' to="/register"> Register</Link>
      </>
}

{ myid != null ? <> 
      <Link className='nav-link my-auto mx-2 mx-lg-4 desktop' to="/login" onClick={()=> {localStorage.removeItem("userid"); props?.userChanged(null); setUserData([])}}>Logout</Link>
      </> : <></>
    }
{ myid != null ? <> 
      <img className="notification-logo" src="./img/notification.png" alt="" />
      <div className="navbar-user-info ">
        <img className="dp-top my-auto mx-2 cursor-pointer" src={userData?.img} alt=""  title={userData?.name}/>
        <div>
        <p className='m-0 mt-2 d-none d-lg-block'>Welcome back,</p>
        <h6 className="d-none d-lg-block navbar-name">{userData?.name}</h6>
        </div>
        <img className="arrow-down d-none my-auto mx-3 d-lg-block" src="./img/arrowddown.png" alt="" />
      </div>
      </> :<></>}
    </div>
    </>
  );
}

export default BasicExample;