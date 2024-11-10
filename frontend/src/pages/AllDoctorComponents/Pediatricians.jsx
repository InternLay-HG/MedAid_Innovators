import styles from "./AllDoctorBody.module.css"

const Pediatricians = () => {
   
    return (
      <>
        <div>
          <div className={styles.centrePara}>
          Pediatricians
          </div>
            <div className={styles.container1}>
                <div className={styles.innerContainer1}>
                    <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc4.png" className={styles.img} ></img>
                    <div className={styles.paraList}>
                      <p className={styles.list1}>Available</p>
                      <p className={styles.list2}>Dr. Christopher Lee </p>
                      <p className={styles.list3}>Pediatricians</p>
                     </div>
                 </div>
                 <div className={styles.innerContainer1}>
                     <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc10.png" className={styles.img} ></img>
                     <div className={styles.paraList}>
                        <p className={styles.list1}>Available</p>
                        <p className={styles.list2}>Dr. Jeffrey King </p>
                        <p className={styles.list3}>Pediatricians</p>
                     </div>
                </div>
           </div>

           </div> 
      </>
    )
}

export default Pediatricians;