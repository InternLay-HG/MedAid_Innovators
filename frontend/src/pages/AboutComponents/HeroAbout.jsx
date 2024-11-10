 import styles from "./HeroAbout.module.css"

const HeroAbout = () => {
  
   return (
    <>
        <div className={styles.top}>
              <h>ABOUT US</h>
        </div>
        <div className={styles.heading}>
             <div class="col-md-7 order-md-2">
               <p className={styles.para} >Welcome to MedAid_Innovators, your trusted partner in managing  your healthcare <br/>needs  conveniently and efficiently. At MedAid_Innovators, we understand the challenges <br/> individuals  face when it comes to scheduling doctor appointments and <br/> managing their health records</p>
               <p className={styles.para}>
               MedAid_Innovators is committed to excellence in healthcare technology. We continuously <br/> strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first <br/> appointment or managing ongoing care, MedAid_Innovators is here to support you every <br/> step of the way
               </p>
               <h5>Our Vision</h5>
               <p className={styles.para}>
               Our vision at MedAid_Innovators is to create a seamless healthcare experience for every user. <br/> We aim to bridge the gap between patients and healthcare providers, making it easier <br/> for you to access the care you need, when you need it.
               </p>
             </div>
             <div class="col-md-5 order-md-1">
                 <img src="https://prescripto.vercel.app/assets/about_image-MG9zrc7b.png" className={styles.image}></img>
            </div>
        </div>


        <div className={styles.bottom}>
          <h>WHY CHOOSE US</h>
        </div>

        <div class="container text-center">
              <div class={`${styles.row} row`}>
                <div class={`${styles.column} col`}>
                    <h5 className={styles.topic}>EFFICIENCY:</h5>
                    <p className={styles.topic1}>Streamlined appointment <br/> scheduling that fits into your <br/> busy lifestyle</p>
                </div>
                <div class={`${styles.column} col`}>
                    <h5 className={styles.topic}>CONVENIENCE:</h5>
                    <p className={styles.topic1}>Access to a network of trusted <br/> healthcare professionals in your <br/> area.</p>
                </div>
                <div class={`${styles.column} col`}>
                    <h5 className={styles.topic3}>PERSONALIZATION:</h5>
                    <p className={styles.topic1}>Tailored recommendations and <br/> reminders to help you stay on top <br/> of your health.</p>
                </div>
              </div>
        </div>

    </>
   )

}

export default HeroAbout;