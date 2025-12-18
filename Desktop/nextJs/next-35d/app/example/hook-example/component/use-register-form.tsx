"use client";
import { ChangeEvent, useState } from "react";
import { useRegisterForm } from "../hooks/use-register-form";
// import { useLoginForm } from "./hooks/use-login-form";

export default function RegistrationComponent() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
  //   setUsername(e.target.value);
  // };

  //1.entire object, form.password
  // const form  = useLoginForm();

  // 2.destructure, only needed states and functions
  const {
    username,
    password,
    firstname,
    lastname,
    confirmpassword,
    email,
    handleUsername,
    handeFirstname,
    handleLastname,
    handleConfirmPassword,
    handlePassword,
    handleEmail,
    handleSUbmit,
  } = useRegisterForm();
  //Destructure: converts object properties into variables
  return (
    <div>
      <div>
        <label>firstname</label>
        <input
          className="p-2 border rounded-2x1"
          onChange={handeFirstname}
          value={firstname}
        ></input>
      </div>
      <div>
        <label>lastname</label>
        <input
          className="p-2 border rounded-2x1"
          onChange={handleLastname}
          value={lastname}
        ></input>
      </div>
      <div>
        <label>username</label>
        <input
          className="p-2 border rounded-2x1"
          onChange={handleUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>password</label>
        <input
          className="p-2 border rounded-2x1"
          onChange={handlePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>email</label>
        <input
          className="p-2 border rounded-2x1"
          onChange={handleEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>confirm password</label>
        <input
          className="p-2 border rounded-2x1"
          onChange={handleConfirmPassword}
          value={confirmpassword}
        ></input>
      </div>

      {/* <button
        onClick={() => alert(username)}
        className="p-2 bg-red-400 text-white"
      >
        Test
      </button> */}
    </div>
  );
}
