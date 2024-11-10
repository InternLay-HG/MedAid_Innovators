import styles from "./AllDoctorBody.module.css"
import Dermatologist from "./Dermatologist";
import Gastroenterologist from "./Gastroenterologist";
import GeneralPhysician from "./GeneralPhysician";
import Gynecologist from "./Gynecologist";
import Neurologist from "./Neurologist";
import Pediatricians from "./Pediatricians";

const AllDoctorBody = () => {
    return (
      <>
          <p className={styles.para1}>Meet Our Medical Expert Specialists,</p>
         
          <div className={styles.upper}>
              <Neurologist></Neurologist>
              <Gastroenterologist></Gastroenterologist>
          </div> 
          <div className={styles.upper}>
              <Gynecologist></Gynecologist>
              <Pediatricians></Pediatricians>
          </div>
          <Dermatologist></Dermatologist>
          <GeneralPhysician></GeneralPhysician>
          
      </>
    )
}

export default AllDoctorBody;