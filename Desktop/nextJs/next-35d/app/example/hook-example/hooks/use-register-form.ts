import { ChangeEvent, useState } from "react";

export  const useRegisterForm = ()=>{

    // states and 
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    
    const handeFirstname = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value); }

    const handleLastname = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value); }
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value); }

    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value); }

    const handlePassword = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e:ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    // validates if fields empty
    // pass and confirm same: Alert pass no match
    // all validations pass: Alert Registration succesful for <username>

    const handleSUbmit = () => {
        if(!firstname || !lastname || !email || !username ||password || !confirmpassword) {
            alert("All fields are required")
            return;
        }

        if(password === confirmpassword){
            alert("Passwords do not match")
            return;
        }
        
        alert(`Registration succesfull for ${username}`);
        // const data = {
        //     "username": username,
        //     "password": password,


        }
        //api call with data
        alert("Username" + username);

        return{
            username, password,firstname, lastname, email, confirmpassword,
            setUsername, setPassword, setFirstName, setLastName,setEmail, setConfirmPassword,
            handleUsername, handlePassword, handleSUbmit, handeFirstname, handleLastname, handleEmail, handleConfirmPassword,
        }
    }



// under hook example, create a new page "register"