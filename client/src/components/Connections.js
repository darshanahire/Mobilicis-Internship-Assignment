import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserCard from './UserCard'
import Https from '../servises/Https'
import Loader from './Loader';

function Connections() {
  const [users,setUsers] = useState([]);
  const [conns,setConns] = useState([]);
  const [myID,setMyId] = useState("");
  const [loder,setLoder] = useState(true);
  const navigate = useNavigate();

  const addConnection = (friendsId) =>{
    Https.Connect({myID,friendsId});
    setConns([friendsId,...conns])
    const newUsers = users.filter((elem) => elem !== friendsId)
    setUsers(newUsers)
    console.log();
    
  }
  const removeConnection = (friendsId) =>{
    Https.DisConnect({myID,friendsId});
    setUsers([friendsId,...users])
    const newConns = conns.filter((elem) => elem !== friendsId)
    setConns(newConns)
  }
  useEffect(()=>{
    const _id = localStorage.getItem("userid");
    if(_id != null){
      Https.GetAllUsers().then((res)=>{
        let allUsers = res.data;
        setMyId(_id);
        Https.GetConnection(_id).then((res)=>{
          const connections = res.data;
          const fillteredUsers = allUsers.filter((elem) => !connections.includes(elem));
          setUsers(fillteredUsers);
          setConns(connections);
          setLoder(false);
        });
    })
  }else{
    navigate('/login')
  }
  
  },[])

  return (
    <>
    <div className='connection-page w-80'>
    <div className='blue-connection-bg p-3'>
      <h2 className='text-white'>My Connections</h2>
    </div>
    { !loder ? <>
    <div className="row m-0">
      {
        conns?.map((elem,key)=>{
          return <UserCard data={elem} key={elem} f={true}  myID={myID}  add={addConnection} remove={removeConnection}/>
        })
      }
    </div>
    <div className=''>
      <h2 className='pl-3'>People you can also connect</h2>
      <div className="row m-0">
      {
        users?.map((elem,key)=>{
          return <UserCard data={elem} key={elem} f={false}  myID={myID}  add={addConnection} remove={removeConnection} /> 
        })
      }
    </div>
    </div>
    </> :  <> <div className='flex justify-content-center my-5' ><Loader/> </div> </>}
    </div>
    </>
  )
}

export default Connections