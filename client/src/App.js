import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Profile from './components/Profile';
import Connections from './components/Connections';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
          <Route path="/" element={<Profile/>}></Route>
          <Route path="/connections" element={<Connections/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
