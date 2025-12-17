import { ChangeEvent, useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
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
      {/*...password*/}
      <button
        onClick={() => alert(username)}
        className="p-2 bg-red-400 text-white"
      >
        Test
      </button>
    </div>
  );
}
