import styles from "./AllDoctorBody.module.css"

const GeneralPhysician = () => {
    
    return (
      <>  
        <div >
           <div className={styles.centrePara}>
           General physician
          </div>
            <div className={styles.container1}>
                <div className={styles.innerContainer1}>
                    <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png" className={styles.img} ></img>
                    <div className={styles.paraList}>
                      <p className={styles.list1}>Available</p>
                      <p className={styles.list2}>Dr. Richard James </p>
                      <p className={styles.list3}>General physician</p>
                     </div>
                 </div>
                 <div className={styles.innerContainer1}>
                     <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc7.png" className={styles.img} ></img>
                     <div className={styles.paraList}>
                        <p className={styles.list1}>Available</p>
                        <p className={styles.list2}>Dr. Christopher Davis </p>
                        <p className={styles.list3}>General physician</p>
                     </div>
                </div>
                <div className={styles.innerContainer1}>
                     <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc13.png" className={styles.img} ></img>
                     <div className={styles.paraList}>
                        <p className={styles.list1}>Available</p>
                        <p className={styles.list2}>Dr. Chloe Evans </p>
                        <p className={styles.list3}>General physician</p>
                     </div>
                </div>
           </div>
        </div>
      </>
    )
}

export default GeneralPhysician;