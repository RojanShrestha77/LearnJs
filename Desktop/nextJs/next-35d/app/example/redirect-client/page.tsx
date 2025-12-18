"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const handlesubmit = () => {
    if (username == "admin") {
      router.push("/example/hook-example");
    } else {
      router.push("/example/state");
    }
  };

  return (
    <div className="no-auto max-w-md p-4 m-2">
      <div className="mb-2">
        <label>Username</label>
        <input
          className="border p-2 rounded w-full"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
      </div>
      <button
        className="bg-blue-600 text-white broder border-amber-50"
        onClick={handlesubmit}
      >
        Submit
      </button>
    </div>
  );
}
