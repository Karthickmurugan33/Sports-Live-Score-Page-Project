import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../InputLoginForm/input.module.css";

export const Input = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [namevalid, setNameValid] = useState(false);
  const [passwordvalid, setPasswordValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || password.trim().length === 0) {
      return alert("enter valid name");
    }
  };
  const userNameHandler = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
    if (name.length > 5) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };
  const userPasswordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
    if (password.length > 5) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label>Username</label>
        </div>
        <div>
          <input type="text" onChange={userNameHandler}></input>
        </div>
        <div><label>Password</label></div>
        <div>
          <input type="password" onChange={userPasswordHandler}></input></div>
        <div>
          <Link to={namevalid && passwordvalid ? "/home" : ""}>
            <button className={namevalid && passwordvalid ? `${styles.btn}` : ""}>
              Button
            </button>
          </Link>
        </div>

      </form>
    </div>
  );
};
