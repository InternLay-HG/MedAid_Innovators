import styles from "./AllDoctorBody.module.css"

const Neurologist = () => {

   return (
    <>   <div>
           <div className={styles.centrePara}>
           Neurologist
          </div>
            <div className={styles.container1}>
                <div className={styles.innerContainer1}>
                    <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc5.png" className={styles.img} ></img>
                    <div className={styles.paraList}>
                      <p className={styles.list1}>Available</p>
                      <p className={styles.list2}>Dr. Jennifer Garcia </p>
                      <p className={styles.list3}>Neurologist</p>
                     </div>
                 </div>
                 <div className={styles.innerContainer1}>
                     <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc11.png" className={styles.img} ></img>
                     <div className={styles.paraList}>
                        <p className={styles.list1}>Available</p>
                        <p className={styles.list2}>Dr. Zoe Kelly </p>
                        <p className={styles.list3}>Neurologist</p>
                     </div>
                </div>
           </div>
           </div>
    </>
   )
}

export default Neurologist;