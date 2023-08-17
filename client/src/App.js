import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Profile from './components/Profile';
import Connections from './components/Connections';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [id,setId] = useState(localStorage.getItem("userid"));

  function userChanged(_id){
    setId(_id);
  }
  return (
    <>
    <BrowserRouter>
    <Navbar id={id} userChanged={userChanged} />
    <Sidebar/>
      <Routes>
        <Route path="/login" element={<Login id={id} userChanged={userChanged}/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
          <Route path="/" element={<Profile id={id} userChanged={userChanged}/>}></Route>
          <Route path="/connections" element={<Connections id={id} userChanged={userChanged}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
