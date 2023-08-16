import React, { useEffect, useState } from 'react'
import Https from "../servises/Https"

function UserCard(props) {
  
  const [userData,setUserData] = useState([])
  useEffect(()=>{
    const _id = props.data;
    Https.GetUser(_id).then((res) => {
      setUserData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  },[props.data])
  
  return (
    <>
  {props.myID === userData._id ?  <></> :
    <div className='col-12 col-lg-4 my-3 '>
    <div className='d-flex justify-content-between user-card-parent'>
        <div className='flex flex-column justify-content-center ml-5'>
            <h5 className='my-3'>{userData.name}</h5>
            <h6 className='mb-3'>{userData?.experience?.length > 0 ? userData.experience[0].role :"Freshers Looking For"} <br/> { userData?.experience?.length > 0 ?  "@ " +  userData.experience[0].company : "Job as Developer"} </h6>
            { props.f ? <button className='connection-btn' onClick={()=>{props.remove(userData?._id)}}> Remove Connection</button> :
            <button className='connection-btn' onClick={()=>{props.add(userData?._id)}}> Connect </button>}
        </div>
        <img src={userData?.img} alt="" className='profile-photo m-auto' />
    </div>
    </div>
  }
  </>
  )
}

export default UserCard