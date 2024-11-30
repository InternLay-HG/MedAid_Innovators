import React,{useState,useEffect,useContext} from 'react'
import styles from "./PatientPageForAppointment.module.css"
import { useParams,useNavigate } from 'react-router-dom'
import axios from "axios"
import {UserContext} from "../../Context/ContextProvider"

const PatientPageForAppointment = () => {
    const {doctorId} =useParams()
    const [doctorData,setDoctorData]=useState(null)
    const [selectedDate, setSelectedDate] = useState('SUN 10');
    const [selectedTime, setSelectedTime] = useState('');
    const {backendUrl}=useContext(UserContext);
    const navigate=useNavigate();

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setSelectedTime(''); // Reset time when a new date is selected
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    
    const handleAppointmentBooking = async () => {
      try {
          const token = localStorage.getItem("token");
          if(!token){
            navigate('/loginPage');
            return;
          }
          if (!selectedDate || !selectedTime) {
              alert("Please select both a date and time.");
              return;
          }

          const day = selectedDate; // Example format: "Wednesday 13"
          const time = selectedTime; // Example format: "5:00 pm"

          const response = await axios.post(
            `${backendUrl}/api/user/appointments/book/${doctorId}`,
            { day, time },
            { headers: { "auth-token": token } } // headers go here as the third argument
        );

          alert(response.data.message); // e.g., "Appointment request sent."
      } catch (error) {
          console.error("Error booking appointment:", error);
          alert("Failed to book appointment. Please try again.");
      }
  };

    useEffect(() => {
        const fetchDoctorData = async () => {
          try {
            const response = await axios.get(`${backendUrl}/api/user/doctorData/${doctorId}`);
              setDoctorData(response.data);
            
          } catch (error) {
            console.error("Error fetching doctors:", error);
          }
        };
    
        fetchDoctorData();
      }, [doctorId]);

    return (
      <div className={styles.doctor_profile}>
      <div className={styles.profile_header}>
          {doctorData ? (
              <>
                  <img src={doctorData.image} alt="Doctor" className={styles.doctor_image} />
                  <div className={styles.doctor_info}>
                      <h2>{doctorData.name} <span className={styles.verified_badge}>✔️</span></h2>
                      <p className={styles.degree}>{doctorData.degree} - {doctorData.speciality} <span className={styles.experience}>{doctorData.experience || '4 Years'}</span></p>
                      <p className={styles.about}><strong >About:</strong> <span className={styles.whole}>{doctorData.about} </span> </p>
                      <p className={styles.about}><strong>Contact:</strong> <span className={styles.whole}> {doctorData.contact_info}</span></p>
                      <p className={styles.about}><strong>Address:</strong> <span className={styles.whole}> {doctorData.address} </span></p>
                      <p className={styles.about}><strong>Appointment fee:</strong> <span className={styles.whole}> Rs {doctorData.fees} </span></p>
                      <p className={styles.about}><strong> License Number:</strong> <span className={styles.whole}>{doctorData.license_number} </span></p>
                  </div>
              </>
          ) : (
              <p>Loading...</p>
          )}
      </div>



      <div className={styles.booking_section}>
    <h3>Booking slots</h3>
    
    {doctorData && doctorData.available_slots.length > 0 ? (
        <>
            <div className={styles.date_selector}>
                {doctorData.available_slots.map((slot, index) => (
                    <button
                        key={index}
                        className={`${styles.date_button} ${selectedDate === slot.day ? styles.selected : ''}`}
                        onClick={() => handleDateClick(slot.day)}
                    >
                        {slot.day}
                    </button>
                ))}
            </div>
            
            <div className={styles.time_selector}>
                {selectedDate &&
                    doctorData.available_slots
                        .find((slot) => slot.day === selectedDate)
                        ?.time?.split(',').map((time, index) => (
                            <button
                                key={index}
                                className={`${styles.time_button} ${selectedTime === time ? styles.selected : ''}`}
                                onClick={() => handleTimeClick(time)}
                            >
                                {time}
                            </button>
                        ))}
            </div>
        </>
    ) : (
        <p>No available slots</p>
    )}


          <button className={styles.book_appointment} onClick={handleAppointmentBooking}>
              Book an appointment
          </button>
      </div>
  </div>
  );
}

export default PatientPageForAppointment
