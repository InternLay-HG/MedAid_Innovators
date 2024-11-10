import styles from "./Header.module.css";
import { GiHospital } from "react-icons/gi";
import About from "../About";
import { Link, useNavigate } from "react-router-dom";
const localhosts = "https://medaid-backend.onrender.com";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Header = () => {
  const [profilePics, setProfilePics] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  let navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/loginPage");
  };

  const handleProfileClick=()=>{
    navigate("/profilePage")
  }

  const fetchProfilePics = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Auth Token:", token);
      if (token) {
        // Check if token exists before making the request
        const response = await axios.get(`${localhosts}/api/user/my-profile`, {
          headers: { "auth-token": token },
        });
        setProfilePics(response.data.data.image); // Assume response.data.image is the URL for the profile picture
      } else {
        console.log("No token found. User may not be logged in.");
      }
    } catch (error) {
      console.error("Error fetching profile pictures:", error);
    }
  };

  useEffect(() => {
    fetchProfilePics();

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`${styles.header} container`}>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4  border-bottom">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className={`${styles.myClass} navbar-brand`} href="#">
                {/* <img src="" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
                {/* <GiHospital /> */}
                <i className="bi bi-flower1"></i>
                MedAid Innovators
              </a>
            </div>
          </nav>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className={`${styles.myClass1} nav-link px-2`}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/allDoctor"
                className={`${styles.myClass1} nav-link px-2`}
              >
                ALL DOCTORS
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${styles.myClass1} nav-link px-2`}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${styles.myClass1} nav-link px-2`}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`${styles.myClass3} nav-link px-2`}
                title="Admin/Doctor/Nurse Login"
                role="button"
              >
                Admin Panel
              </Link>
            </li>
          </ul>

          <div>
            {!localStorage.getItem("token") ? (
              <Link
                className={`${styles.myClass2} nav-link px-2`}
                to="/createAccount"
                title="Patient account creation"
                role="button"
              >
                Create account
              </Link>
            ) : (
              <div className={styles.profileContainer} ref={dropdownRef}>
                {profilePics ? (
                  <img
                    src={profilePics}
                    alt="Profile"
                    className={styles.profilePic}
                    onClick={toggleDropdown}
                  />
                  
                ) : (
                  <span>Loading...</span>
                )}
                {isOpen && (
                  <div className={styles.dropdownMenu}>
                    <ul>
                      <li onClick={handleProfileClick}>Profile</li>
                      <li>My Appointments</li>
                      <li onClick={handleLogout}>Logout</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
