import React, { useEffect, useState } from 'react';
import axios from 'axios';
const localhosts="http://localhost:4000"
import styles from "./allDoctor.module.css"

const AllDoctors = () => {
  const [doctorsBySpecialty, setDoctorsBySpecialty] = useState({});

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${localhosts}/api/doctor/allDoctors`);
        if (response.data.success) {
          setDoctorsBySpecialty(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className={styles.container}>
      {Object.entries(doctorsBySpecialty).map(([specialty, doctors]) => (
        <div key={specialty} className={styles.specialty_section}>
          <h2 className={styles.specialty_title}>{specialty}</h2>
          <div className={styles.doctor_list}>
            {doctors.map(doctor => (
              <div key={doctor._id} className={styles.doctor_card}>
                <img src={doctor.image} alt={doctor.name} className={styles.doctor_image} />
                <h3 className={styles.doctor_name}>{doctor.name}</h3>
                <p className={styles.doctor_specialty}>{doctor.speciality}</p>
                <p className={styles.availability_status}>Available</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDoctors;
