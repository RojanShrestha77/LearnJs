import { ChangeEvent, useState } from "react";

export  const useLoginForm = ()=>{

    // states and 
    const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
    
    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value); }

    const handlePassword = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSUbmit = () => {
        const data = {
            "username": username,
            "password": password,


        }
        //api call with data
        alert("Username" + username);

    }
    return{
        username, password,
        setUsername, setPassword,
        handleUsername, handlePassword, handleSUbmit
    }

}

// under hook example, create a new page "register"