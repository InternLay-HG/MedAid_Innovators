import { Link } from "react-router-dom";
import styles from "./ProfilePage.module.css"
const localhosts="https://medaid-backend.onrender.com"
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
      const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log("Auth Token:", token);
            if (token) {
              // Check if token exists before making the request
              const response = await axios.get(`${localhosts}/api/user/my-profile`, {
                headers: { "auth-token": token },
              });
              console.log(response.data.data)
              setProfile(response.data.data);
            } else {
              console.log("No token found. User may not be logged in.");
            }
          } catch (error) {
            console.error("Error fetching profile data:", error);
          }
      };
  
      fetchProfile();
    }, []);
  
    if (!profile) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className={styles.profile_container}>
        <div className={styles.profile_header}>
          <img
            src={profile.image || 'default-profile.png'}
            alt="Profile"
            className={styles.profile_image}
          />
          <h2><strong>{profile.name}</strong></h2>
        </div>
  
        <div className={styles.profile_section}>
          <h3>Contact Information</h3>
          <p><strong>Email id:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.contact_info || 'Not Provided'}</p>
          <p><strong>Address:</strong> {profile.address || 'Not Provided'}</p>
        </div>
  
        <div className={styles.profile_section}>
          <h3>Basic Information</h3>
          <p><strong>Gender:</strong> {profile.gender || 'Not Selected'}</p>
          <p><strong>Birthday:</strong> {profile.dob || 'Not Selected'}</p>
        </div>

        <div className={styles.profile_section}>
          <h3>Medical Information</h3>
          <p><strong>Weight:</strong> {profile.weight || 'Not Selected'}</p>
          <p><strong>Health problem:</strong> {profile.health_problem || 'Not Selected'}</p>
          <p><strong>Prescribed medicine:</strong> {profile.prescribed_medicine || 'Not Selected'}</p>
          <p><strong>Health update:</strong> {profile.health_update || 'Not Selected'}</p>
        </div>
  
        
      </div>
    );
}

export default ProfilePage
