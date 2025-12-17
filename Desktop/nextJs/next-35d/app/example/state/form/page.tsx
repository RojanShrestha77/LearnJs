"use client";
import { useState, useEffect, ChangeEvent } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(18);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    if (age < 18) {
      alert("You are lil kid");
    }
  }, [age]);

  const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.valueAsNumber);
  };
  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  //   const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
  //     setAge(e.target.valueAsNumber);
  //   };

  return (
    <div>
      <div>
        <label>Age</label>
        <input type="number" onChange={handleAge} value={age}></input>
      </div>
      <div>
        <label>Username</label>
        <input type="string" onChange={handleUsername} value={username}></input>
      </div>
      <div>
        <label>Password</label>
        <input type="string" onChange={handlePassword} value={password}></input>
      </div>
      <button onClick={() => alert("Username: " + username)}>enter</button>
      <button onClick={() => alert("Password: " + password)}>enter pass</button>
    </div>
  );
}
