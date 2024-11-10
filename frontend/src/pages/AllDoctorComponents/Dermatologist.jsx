import styles from "./AllDoctorBody.module.css"

const Dermatologist = () => {
    return (
      <>
        <div>
           <div className={styles.centrePara}>
           Dermatologist
          </div>
            <div className={styles.container1}>
                <div className={styles.innerContainer1}>
                    <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc3.png" className={styles.img} ></img>
                    <div className={styles.paraList}>
                      <p className={styles.list1}>Available</p>
                      <p className={styles.list2}>Dr. Sarah Patel </p>
                      <p className={styles.list3}>Dermatologist</p>
                     </div>
                 </div>
                 <div className={styles.innerContainer1}>
                     <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc9.png" className={styles.img} ></img>
                     <div className={styles.paraList}>
                        <p className={styles.list1}>Available</p>
                        <p className={styles.list2}>Dr. Ava Mitchell </p>
                        <p className={styles.list3}>Dermatologist</p>
                     </div>
                </div>
                <div className={styles.innerContainer1}>
                     <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc15.png" className={styles.img} ></img>
                     <div className={styles.paraList}>
                        <p className={styles.list1}>Available</p>
                        <p className={styles.list2}>Dr. Amelia Hill </p>
                        <p className={styles.list3}>Dermatologist</p>
                     </div>
                </div>
           </div>
           </div>
      </>
    )
}

export default Dermatologist;