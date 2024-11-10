import { Link } from "react-router-dom";
import styles from "./Body.module.css"

const Body = () => {
    
  return (
    <>

          <div className={styles.upper}>
              <p className={styles.upper1}>Find by Speciality</p>
              <p className={styles.upper2}>Simply browse through our extensive list of trusted <br/> doctors, schedule your appointment hassle-free.</p>
          </div>

          <div className={styles.container}>
              <div className={styles.cont}>
                   <div className={styles.button5}>
                    <span>
                    <Link to="./GeneralPhysician"> <img className={styles.image234} src="https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg"></img></Link> </span>
                   </div>
                   <p ><Link to="./GeneralPhysician" className={styles.para}>General physician</Link></p>
              </div>
              <div  className={styles.cont}>
                   <div className={styles.button5}>
                    <span>
                   <Link to="./Gynecologist"><img  className={styles.image234} src="https://www.shutterstock.com/image-vector/baby-sleeping-hand-logo-care-260nw-1952053138.jpg"></img></Link></span>
                   </div>
                   <p><Link to="./Gynecologist" className={styles.para}>Gynecologist</Link></p>
              </div>
              <div  className={styles.cont}>
                    <div className={styles.button5}>
                    <span>
                    <Link to="./Dermatologist"><img className={styles.image234} src="https://img.freepik.com/premium-vector/dermatologist-logo_848918-16887.jpg?semt=ais_hybrid"></img></Link></span>
                    </div>
                   <p><Link to="./Dermatologist" className={styles.para}>Dermatologist</Link></p>
              </div>
              <div  className={styles.cont}>
                  <div className={styles.button5}>
                  <span>
                  <Link to="./Pediatricians">
                  <img className={styles.image234} src="https://www.shutterstock.com/image-vector/vector-black-line-icon-pediatric-260nw-2459128661.jpg"></img></Link></span>
                  </div>
                  <p><Link to="./Pediatricians" className={styles.para}>Pediatricians</Link></p>
              </div>
              <div  className={styles.cont}>
                  <div className={styles.button5}>
                    <span>
                  <Link to="./Neurologist"><img className={styles.image234} src="https://cdn-icons-png.freepik.com/512/9445/9445780.png"></img></Link> </span>
                  </div>
                  <p><Link to="./Neurologist" className={styles.para}>Neurologist</Link></p>
              </div>
              <div  className={styles.cont}>
                  <div className={styles.button5}>
                    <span>
                  <Link to="./Gastroenterologist"><img className={styles.image234} src="https://cdn-icons-png.flaticon.com/512/7965/7965286.png"></img></Link></span>
                  </div>
                 <p><Link to="./Gastroenterologist" className={styles.para}>Gastroenterologist</Link></p>
              </div>
          </div>

        <div className={styles.Doctor}>
              <p className={styles.Doctor1}>Top Doctors to Book</p>
              <p className={styles.Doctor2}>Simply browse through our extensive list of trusted <br/> doctors.</p>
        </div>


      <div class="album py-5 bg-body-tertiary">
        <div class="container">
         <div className={`${styles.boxx} row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3`}>

             <div className={`${styles.innerBox} col`}>
               <div className="card shadow-sm">
                 <img class="bg-[#EAEFFF]" src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png" alt=""/>
                 <div class="card-body">
                     <p className={styles.para1}>Available</p>
                     <p className={styles.para2}>Dr. Richard James </p>
                     <p className={styles.para3}>General physician</p>
                  </div>
               </div>
             </div>

             <div className={`${styles.innerBox} col`}>
               <div class="card shadow-sm">
               <img class="bg-[#EAEFFF]" src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc2.png" alt=""/>
                 <div class="card-body">
                     <p className={styles.para1}>Available</p>
                     <p className={styles.para2}>Dr. Emily Larson </p>
                     <p className={styles.para3}>Gynecologist</p>
                  </div>
  
               </div>
             </div>
        
             <div className={`${styles.innerBox} col`}>
               <div class="card shadow-sm">
               <img class="bg-[#EAEFFF]" src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc3.png" alt=""/>
                 <div class="card-body">
                     <p className={styles.para1}>Available</p>
                     <p className={styles.para2}>Dr. Sarah Patel </p>
                      <p className={styles.para3}>Dermatologist</p>
                  </div>
               </div>
             </div>

             <div className={`${styles.innerBox} col`}>
               <div class="card shadow-sm">
               <img class="bg-[#EAEFFF]" src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc4.png" alt=""/>
                 <div class="card-body">
                     <p className={styles.para1}>Available</p>
                     <p className={styles.para2}>Dr. Christopher Lee </p>
                     <p className={styles.para3}>Pediatricians</p>
                  </div>
               </div>
             </div>

             <div className={`${styles.innerBox} col`}>
               <div class="card shadow-sm">
               <img class="bg-[#EAEFFF]" src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc5.png" alt=""/>
                 <div class="card-body">
                     <p className={styles.para1}>Available</p>
                     <p className={styles.para2}>Dr. Jennifer Garcia </p>
                     <p className={styles.para3}>Neurologist</p>
                  </div>
               </div>
             </div>

             <div className={`${styles.innerBox} col`}>
               <div class="card shadow-sm">
               <img class="bg-[#EAEFFF]" src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc6.png" alt=""/>
                 <div class="card-body">
                     <p className={styles.para1}>Available</p>
                     <p className={styles.para2}>Dr. Andrew Williams </p>
                     <p className={styles.para3}>Gastroenterologist</p>
                  </div>
               </div>
             </div>

             <div className={`${styles.innerBox} col`}>
               <div class="card shadow-sm">
               <img class="bg-[#EAEFFF]" src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc7.png" alt=""/>
                 <div class="card-body">
                     <p className={styles.para1}>Available</p>
                     <p className={styles.para2}>Dr. Christopher Davis</p>
                     <p className={styles.para3}>General physician</p>
                  </div>
               </div>
             </div>


             <div className={`${styles.innerBox} col`}>
               <div class="card shadow-sm">
               <img class="bg-[#EAEFFF]" src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc8.png" alt=""/>
                 <div class="card-body">
                     <p className={styles.para1}>Available</p>
                     <p className={styles.para2}>Dr. Timothy White</p>
                     <p className={styles.para3}>Gynecologist</p>
                  </div>
               </div>
             </div>

            </div>
           </div>
         </div>


         <div className= "container my-5">
         <div class={`${styles.lower_container} `}>
              <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className={styles.lower_container1}>Book Appointment <br/> With 100+ Trusted <br/> Doctors</h1>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                 <Link to="./createAccount"> <button type="button" className={styles.lower_container2}>Create account
                  </button></Link>
                </div>
              </div>
              <div className={`${styles.lower_container3} `}>
                  <img className={styles.image} src="https://prescripto.vercel.app/assets/appointment_img-DzbZlMsi.png" alt="" />
              </div>
         </div>
         </div>
    </>
  )
}

export default Body;