import styles from "./Footer.module.css"

const Footer = () => {
    return (
      <>
       <div className="container">
         <footer className="py-5">
          <div className={styles.footer}>


                <div className="col-6 col-md-2 mb-3">
                  <h5>COMPANY</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Abut us</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Delivery</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy policy</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                  <h5>GET IN TOUCH</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">+91 9117400624</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">vikash.2023ug2025@iiitranchi.ac.in</a></li>
                  </ul>
                </div>

                
                <div className="col-6 col-md-2 mb-3">
                   <div>
                      <img className="mb-5 w-40" src="/assets/logo-BNCDj_dh.svg" alt=""/>
                        <p className="w-full md:w-2/3 text-gray-600 leading-6">The only way to do great work is to love what you do.-  Steve Jobs
                        </p>
                   </div>
                  </div>
                

           </div>

            <div className={styles.base}>
              <p>© 2024 Company, Inc. All rights reserved.</p>
            </div>
         </footer>
       </div>
      </>
    )
}

export default Footer;