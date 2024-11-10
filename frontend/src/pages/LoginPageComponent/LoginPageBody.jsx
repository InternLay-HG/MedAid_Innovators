import { Link } from "react-router-dom";
import styles from "./LoginPageBody.module.css"
const localhosts="https://medaid-backend.onrender.com"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPageBody = () => {
   const [credentials, setCredentials] = useState({ email: "", password: "" });
   let navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const loginData = {
        email: credentials.email,
        password: credentials.password,
      };
      const response = await fetch(`${localhosts}/api/user/login`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData), // body data type must match "Content-Type" header
      });
  
      const json = await response.json();
      // console.log("Login response:", json);
      // console.log("Login response2:",json.token);
  
      if (json.success) {
        localStorage.setItem("token", json.token);
        navigate("/");
      }
    };

   const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

   return(
    <>
       <div className={styles.topform}>
        <form className={`${styles.formClass} flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg`} onSubmit={handleSubmit}>
           <div className={styles.form}>
             <div>
              <p className={styles.para1}>Login</p>
              <p className={styles.para2}>Please log in to book appointment</p>
              <div className={styles.para3}><p>Email</p>
              <input className={styles.input} type="email" id="email" name="email" onChange={onChange} required={true} value={credentials.email}/>
              </div>
             <div>
                <p className={styles.para3}>Password</p>
                <input className={styles.input} type="password" id="password" name="password" onChange={onChange} required={true} value={credentials.password}/>
              </div>
              <div className={styles.loginTop}>
              <button className={`${styles.login} bg-primary text-white w-full py-2 my-2 rounded-md text-base`} type="submit" >Login</button>
              </div>
             <p className={styles.para2}>Create an new account? 
              <span className="text-primary underline cursor-pointer">
                <Link to="/createAccount" >Click here</Link>
                </span>
             </p>
          </div>
          </div>
        </form>
       </div> 
    </>
   )
}

export default LoginPageBody;
