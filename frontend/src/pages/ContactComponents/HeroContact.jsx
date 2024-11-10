import styles from "./HeroContact.module.css"

const HeroContact = () => {

  return (
    <>
          <div className={styles.top}>
              <h>CONTACT US</h>
          </div>

          <div className={styles.heading}>
             <div class="col-md-7 order-md-2">
                <h5>OUR OFFICE</h5>
                <br/>
                <p className={styles.para}>IIIT Ranchi 
                ARTTC BSNL Campus , Getlatu, <br/> Near Jumar River Bridge,P.O: Neori Vikas  Vidyalaya <br/> SO , Hazaribagh Road, Ranchi -835217(Jharkhand), <br/> Khelgaon,Getlatu</p>
                <br/>
                <p className={styles.para}>Tel : +91 9117400624</p>
                <p className={styles.para}>Email : vikash.2023ug20235@iiitranchi.ac.in</p>
             </div>
             <div class="col-md-5 order-md-1">
                 <img src="https://prescripto.vercel.app/assets/contact_image-IJu_19v_.png" className={styles.image}></img>
            </div>
        </div>
    </>
  )

}

export default HeroContact;