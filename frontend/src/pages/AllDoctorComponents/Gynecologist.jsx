import styles from "./AllDoctorBody.module.css"

const Gynecologist = () => {

    return (
      <>
       <div>
           <div className={styles.centrePara}>
           Gynecologist
          </div>
            <div className={styles.container1}>
                <div className={styles.innerContainer1}>
                    <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc2.png" className={styles.img} ></img>
                    <div className={styles.paraList}>
                      <p className={styles.list1}>Available</p>
                      <p className={styles.list2}>Dr. Emily Larson </p>
                      <p className={styles.list3}>Gynecologist</p>
                     </div>
                 </div>
                 <div className={styles.innerContainer1}>
                     <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc8.png" className={styles.img} ></img>
                     <div className={styles.paraList}>
                        <p className={styles.list1}>Available</p>
                        <p className={styles.list2}>Dr. Timothy White </p>
                        <p className={styles.list3}>Gynecologist</p>
                     </div>
                </div>
           </div>
           </div>
      </>
    )
}

export default Gynecologist;