import React from 'react'

export default function Profile() {
  return (
    <>
    <div className='blue-profile-bg'>
    </div>
    <div className='profile-parent-card row mx-auto'>
        <div className='profile-first-col col-12 col-md-6'>
        <div className='d-flex justify-content-between'>
          <img src="./img/temp.jpg" alt="" className='profile-photo'/>
          <button className='profile-photo-update-btn'>Update Photo</button>
        </div>
        </div>
        <div className='profile-second-col col-12 col-md-6'>
          <p>second</p>
      </div>
    </div>
    </>
  )
}
