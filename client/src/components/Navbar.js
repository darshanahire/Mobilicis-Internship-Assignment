import React from "react";

function BasicExample() {
  return (
    <>
    <div className='mynavbar float-right'>
      <img className="notification-logo" src="./img/notification.png" alt="" />
      <div className="navbar-user-info">
        <img className="dp-top my-auto mx-2" src="./img/dptop.png" alt="" />
        <div>
        <p className='m-0 mt-2'>Welcome back,</p>
        <h6>John Doe</h6>
        </div>
        <img className="arrow-down my-auto mx-3" src="./img/arrowddown.png" alt="" />
      </div>
    </div>
    </>
  );
}

export default BasicExample;