import { Link } from "react-router-dom";
import styles from "./CreateAccountBody.module.css";
const localhosts = "https://medaid-backend.onrender.com";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccuntBody = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    };
    const response = await fetch(`${localhosts}/api/user/register`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.token);
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {" "}
      <div className={styles.topform}>
        <form
          className={`${styles.formClass} flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg`} onSubmit={handleSubmit}
        >
          <div className={`${styles.form} `}>
            <p className={styles.para1}>Create Account</p>
            <p className={styles.para2}>Please sign up to book appointment</p>
            <div>
              <p className={styles.para3}>Full Name</p>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                onChange={onChange}
                required
                value={credentials.name}
              />
            </div>
            <div class="w-full ">
              <p className={styles.para3}>Email</p>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                onChange={onChange}
                required
                value={credentials.email}
              />
            </div>
            <div class="w-full">
              <p className={styles.para3}>Password</p>
              <input
                className={styles.input}
                type="password"
                id="password"
                name="password"
                onChange={onChange}
                required
                value={credentials.password}
              />
            </div>
            <div className={styles.createTop}>
              <button
                className={`${styles.create} bg-primary text-white w-full py-2 my-2 rounded-md text-base`} type="submit"
              >
                Create account
              </button>
            </div>
            <p className={styles.para2}>
              Already have an account?{" "}
              <span class="text-primary underline cursor-pointer">
                <Link to="/loginPage">login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAccuntBody;
