import React, { useContext } from 'react'
import Login from './Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './Context/AdminContext';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const App = () => {
  const {aToken} = useContext(AdminContext)
  return  aToken ?(
    <div className='bg-[#F8F9FD]'> 
     <ToastContainer/>
     <Navbar/>
     <div className='flex-items-start'>
      <Sidebar/>
     </div>
    </div>
  ):(
    <div>
     <Login/> 
     <ToastContainer/>      
    </div>
  )
}

export default App