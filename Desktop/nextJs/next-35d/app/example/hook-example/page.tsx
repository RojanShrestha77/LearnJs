import { ChangeEvent, useState } from "react";
import { useLoginForm } from "./hooks/use-login-form";

export default function Page() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
  //   setUsername(e.target.value);
  // };

  //1.entire object, form.password
  // const form  = useLoginForm();

  // 2.destructure, only needed states and functions
  const { username, handleUsername, handleSUbmit } = useLoginForm();
  //Destructure: converts object properties into variables
  return (
    <div>
      <div>
        <label>UserName</label>
        <input
          className="p-2 border rounded-2x1"
          onChange={handleUsername}
          value={username}
        ></input>
      </div>
      <button onClick={handleSUbmit} className="p-2 bg-red-400 text-white">
        test2
      </button>

      {/* <button
        onClick={() => alert(username)}
        className="p-2 bg-red-400 text-white"
      >
        Test
      </button> */}
    </div>
  );
}
