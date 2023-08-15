import React from 'react'

function UserCard() {
  return (
    <div className='col-12 col-lg-4 my-3 '>
    <div className='d-flex justify-content-between user-card-parent'>
        <div className='flex flex-column justify-content-center ml-5'>
            <h5 className='my-3'>John Doe</h5>
            <h6 className='mb-3'>Fullstack developer <br/> @ Oruphones</h6>
            <button className='connection-btn'> Remove Connection</button>
        </div>
        <img src="./img/dp2.png" alt="" className='profile-photo m-auto' />
    </div>
    </div>
  )
}

export default UserCard