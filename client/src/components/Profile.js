import React, { useEffect, useState } from 'react'
import Modals from './Modals';
import Https from '../servises/Https'

export default function Profile() {
  const [userData, setUserData] = useState();
  const [openModal, setopenModal] = useState(null);

  function handdleChange(e) {
    setopenModal(null);
    if (e !== false) {
      const { key, value } = e;
      setUserData({
        ...userData,
        [key]: value
      })
    }
  }

  function openn(d) {
    let val = d.name.toLowerCase();
    const data = { ...d, "value": userData[val] }
    return <Modals data={data} show={true} fun={handdleChange} />;
  }


  useEffect(() => {
    const _id = localStorage.getItem("userid");
    if (_id !== null) {
      Https.GetUser(_id).then((res) => {
        setUserData(res.data);
        console.log(res.data);

      }).catch((err) => {
        console.log(err);
      })
    }
  }, []);

  return (
    <>
      {openModal !== null ? openn(openModal) : <></>}
      <div className='profile-page w-80'>
        <div className='blue-profile-bg'>
        </div>
        <div className='profile-parent-card row mx-auto mb-5'>
          <div className='profile-first-col col-12 col-md-6'>
            <div className='d-flex justify-content-between'>
              <img src="./img/dp2.png" alt="" className='profile-photo' />

              <button className='profile-photo-update-btn'>Update Photo</button>
            </div>
            <div className='user-details-parent'>
              <h6>Your Name</h6>
              <div className='flex justify-content-between'>
                <span>{userData?.name}</span>
                <button className='edit-btn' onClick={() => { setopenModal({ name: 'Name', type: 'text', mno: 1 }); }} >Edit</button>
              </div>
              <h6>Email</h6>
              <div className='flex justify-content-between'>
                <span>{userData?.email}</span>
                <button className='edit-btn' onClick={() => { setopenModal({ name: 'Email', type: 'email', mno: 1 }) }} >Edit</button>
              </div>
              <h6>Phone Number</h6>
              <div className='flex justify-content-between'>
                <span>{userData?.phone}</span>
                <button className='edit-btn' onClick={() => { setopenModal({ name: 'Phone', type: 'number', mno: 1 }) }} >Edit</button>
              </div>
            </div>
            <div className="about-parent my-5">
              <div className='flex justify-content-between'>
                <h4> About <span className='blue-color'>{userData?.name.split(" ")[0]}</span></h4>
                <button className='edit-btn' onClick={() => { setopenModal({ name: 'About', type: 'text', mno: 2 }) }} >Edit</button>
              </div>
              <p className='pt-3 text-justify'>{userData?.about}</p>
            </div>
            <div className="about-parent my-5">
              <div className='flex justify-content-between'>
                <h4> Skills </h4>
                <button className='edit-btn' onClick={() => { setopenModal({ name: 'Skills', type: 'text', mno: 3 }); }} >Edit</button>
              </div>
              <ul className='m-0 p-0'>
                {userData?.skills.map((elem,key)=>{
                  return <li key={key} className='my-2'>{elem}</li>
                })
              }
              </ul>
            </div>
          </div>
          <div className='profile-second-col col-12 col-md-6'>
            <div className="about-parent mt-5 mb-2">
              <div className='flex justify-content-between'>
                <div>
                  <h5>Profetional Details</h5>
                  <p className='pt-3 text-justify text-xl'>This are the professional details shown to users in the app.</p>
                </div>
                <img className='star-img' src="img/Stars.png" alt="" />
              </div>
            </div>
            <div className='d-flex justify-content-between items-center mx-5  mt-4 mb-3'>
              <h5>Certification</h5>
              <button className='edit-btn' onClick={() => { setopenModal({ name: 'certifications', type: 'text', mno: 4 }) }} >Edit</button>
            </div>
            {
              userData?.certifications.map((elem, key) => {
                return <div key={key}>
                  <div className="certification-parent flex my-3">
                    <div className='flex justify-content-between align-items-center w-100'>
                      <img className='medal-img' src="img/medal.png" alt="" />
                      <div className='text-center d-flex mx-auto flex-column'>
                        <h5>{elem.certName}</h5>
                        <p className='text-justify text-xl m-0'>{elem.provider}</p>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            <div className='d-flex justify-content-between items-center mx-5 mt-4 mb-3'>
              <h5>Experience</h5>
              <button className='edit-btn' onClick={() => { setopenModal({ name: 'experience', type: 'text', mno: 5 }) }} >Edit</button>
            </div>
            {userData?.experience.map((elem, key) => {
                return <div key={key}>
            <div className='about-parent mb-3'>
              <div className='d flex justify-content-between align-items-center'>
                <div className='d flex flex-column w-100 mr-5'>
                  <div className='d-flex justify-content-between mb-2'>
                    <h6>{elem.exp}</h6>
                    <h6>{elem.type}</h6>
                  </div>
                  <div className='d-flex justify-content-between gray-color'>
                    <h6>{elem.company}</h6>
                    <h6>{elem.role}</h6>
                  </div>
                </div>
                <img className='company-logo-img' src="img/oru.png" alt="" />
              </div>
            </div>
            </div>})}
            {/* <div className='about-parent my-3'>
              <div className='d flex justify-content-between align-items-center'>
                <div className='d flex flex-column w-100 mr-5'>
                  <div className='d-flex justify-content-between mb-2'>
                    <h6>6 Months (2014)</h6>
                    <h6>Intern</h6>
                  </div>
                  <div className='d-flex justify-content-between gray-color'>
                    <h6>Oruphones</h6>
                    <h6>--Full Stack Developer</h6>
                  </div>
                </div>
                <img className='company-logo-img' src="img/oru.png" alt="" />
              </div>
            </div> */}
            <div className='d-flex justify-content-between items-center mx-5 mt-4 mb-3'>
              <h5>Education</h5>
              <button className='edit-btn' onClick={() => { setopenModal(!openModal) }} >Edit</button>
            </div>
            <div className="about-parent my-3">
              <h5 className='blue-color'>IIT HYDERABAD</h5>
              <div className='d-flex justify-content-between mt-4'>
                <h5>(2010-2014)</h5>
                <h5>Btech</h5>
              </div>
              <p className='pt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus nulla repellendus quos consequatur fugiat, harum ipsam impedit debitis sed, fugit soluta cupiditate provident expedita!</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
