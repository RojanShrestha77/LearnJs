"use client"; // CSR
// when user interaction/events and states are used
import { useState, useEffect, ChangeEvent } from "react";

export default function Page() {
  const [count, setCount] = useState(1); //dafault value
  // count - actual data
  // setCount - function to update the data
  // States - variables that hold data in a componenet which can change
  // Change in state will re-render the component

  const increment = () => {
    setCount(count + 1); //update the state
  };

  //useEffect - dependency watch.side effects
  useEffect(
    () => {
      alert("Component Mounted");
    },
    [] //dependency/ emmpty = runs once at load
  );

  useEffect(() => {
    if (count == 0) {
      alert("count is zero");
    }
  }, [count]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    //e.target.value = value inputed by the user
  };

  return (
    // re-render the component when setCount is called
    <div>
      <div>Count : {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(1)}>Reset</button>
      <div>
        <label>Email</label>
        <input onChange={handleEmail} value={email}></input>
      </div>
      <div>
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
      </div>
      <button onClick={() => alert("Email:" + email)}>Test</button>
    </div>
  );
}
