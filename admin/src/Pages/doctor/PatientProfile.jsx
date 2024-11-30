import { Link } from "react-router-dom";
import styles from "./PatientProfile.module.css"
import React, { useState,useEffect,useContext } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';
import { DoctorContext } from '../../Context/DoctorContext';
import LabReportsDialog from "./LabReportsDialog.jsx";

const PatientProfile = () => {
    const [profile, setProfile] = useState(null);
    const { dToken, backendUrl } = useContext(DoctorContext);
    const {patientId} =useParams();
    const [showLabReports, setShowLabReports] = useState(false);
  const [patientData, setPatientData] = useState(null);

    useEffect(() => {
      const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("dToken");
            console.log("Auth Token:", dToken);
            if (token) {
              // Check if token exists before making the request
              const response = await axios.get(`${backendUrl}/api/doctor/patientdata/${patientId}`, {
                headers: { "auth-token": dToken },
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
        </div>


        <div className={styles.profile_section}>
          <h3>Lab Reports</h3>
          <button
            className={styles.labReportsButton}
            onClick={() => setShowLabReports(true)}
          >
            View Lab Reports
          </button>
          {showLabReports && (
            <LabReportsDialog
              patientId={patientId}
              onClose={() => setShowLabReports(false)}
            />
          )}
        </div>

        <div className={styles.profile_section}>
          <h3>Contact Information</h3>
          <p><strong>Email id:</strong> <span>{profile.email}</span></p>
          <p><strong>Phone:</strong> <span> {profile.contact_info || 'Not Provided'}</span></p>
          <p><strong>Address:</strong> <span> {profile.address || 'Not Provided'}</span></p>
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

export default PatientProfile
