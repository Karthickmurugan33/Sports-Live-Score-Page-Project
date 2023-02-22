import React, { useState } from "react";
import styles from "../../src/input.module.css";

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
    if (name.length >= 5) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };
  const userPasswordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
    if (password.length >= 5) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>username</label>
        <input type="text" onChange={userNameHandler}></input>
        <label>password</label>
        <input type="password" onChange={userPasswordHandler}></input>
        <button className={namevalid && passwordvalid ? `${styles.btn}` : ""}>
          Button
        </button>
      </form>
    </div>
  );
};
