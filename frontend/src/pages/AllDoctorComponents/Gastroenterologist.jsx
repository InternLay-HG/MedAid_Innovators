import styles from "./AllDoctorBody.module.css"

const Gastroenterologist = () => {
  
    return (
      <> 
         <div>
           <div className={styles.centrePara}>
           Gastroenterologist
          </div>
            <div className={styles.container1}>
                <div className={styles.innerContainer1}>
                    <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc6.png" className={styles.img} ></img>
                    <div className={styles.paraList}>
                      <p className={styles.list1}>Available</p>
                      <p className={styles.list2}>Dr. Andrew Williams </p>
                      <p className={styles.list3}>Gastroenterologist</p>
                     </div>
                 </div>
                 <div className={styles.innerContainer1}>
                     <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc12.png" className={styles.img} ></img>
                     <div className={styles.paraList}>
                        <p className={styles.list1}>Available</p>
                        <p className={styles.list2}>Dr. Patrick Harris </p>
                        <p className={styles.list3}>Gastroenterologist</p>
                     </div>
                </div>
           </div>
           </div>
      </>
    )
}

export default Gastroenterologist;