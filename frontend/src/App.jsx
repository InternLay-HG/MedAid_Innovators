import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import All_Doctor from "./pages/ALL_Doctor";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from "./pages/CreateAccount";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import GeneralPhysician from "./pages/AllDoctorComponents/GeneralPhysician";
import Gynecologist from "./pages/AllDoctorComponents/Gynecologist";
import Dermatologist from "./pages/AllDoctorComponents/Dermatologist";
import Pediatricians from "./pages/AllDoctorComponents/Pediatricians";
import Neurologist from "./pages/AllDoctorComponents/Neurologist";
import Gastroenterologist from "./pages/AllDoctorComponents/Gastroenterologist";

function App() {

  return (
    <>
        {/* <Home></Home> */}
        {/* <About></About> */}
        {/* <Contact></Contact> */}
        {/* <AllDoctor></AllDoctor> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/allDoctor" exact element={<All_Doctor/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/contact" exact element={<Contact/>} />
            <Route path="/createAccount" exact element={<CreateAccount/>} />
            <Route path="/loginPage" exact element={<LoginPage/>} />
            <Route path="/profilePage" exact element={<Profile/>} />
            <Route path="/GeneralPhysician" exact element={<GeneralPhysician/>} />
            <Route path="/Gynecologist" exact element={<Gynecologist/>} />
            <Route path="/Dermatologist" exact element={<Dermatologist/>} />
            <Route path="/Pediatricians" exact element={<Pediatricians/>} />
            <Route path="/Neurologist" exact element={<Neurologist/>} />
            <Route path="/Gastroenterologist" exact element={<Gastroenterologist/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
