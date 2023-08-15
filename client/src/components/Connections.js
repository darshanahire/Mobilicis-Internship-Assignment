import React from 'react'
import UserCard from './UserCard'

function Connections() {
  return (
    <>
    <div className='connection-page w-80'>
    <div className='blue-connection-bg p-3'>
      <h2 className='text-white'>My Connections</h2>
    </div>
    <div className="row m-0">
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </div>
    <div className=''>
      <h2 className='pl-3'>People you can also connect</h2>
      <div className="row m-0">
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Connections