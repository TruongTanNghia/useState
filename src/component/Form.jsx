import React, { useState } from 'react'
import '../App.css'
// import { useState } from 'react'
const Form = () => {
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    console.log(name, username)
    const handleChangeName = (prev) => {
        setName(prev.target.value);
    };
    const handleChangeUserName = (prev) => {
        setUserName(prev.target.value);
    };
    const handleChangeEmail = (prev) => {
        setEmail(prev.target.value);
    };
    const handleChangePassword = (prev) => {
        setPassword(prev.target.value);
    };
    const handleChangePhone = (prev) => {
        setPhone(prev.target.value);
    };
    const handleChangeConfirmPassword = (prev) => {
        setConfirmPassword(prev.target.value);
    };
    const resetData = () =>{
        setName("");
        setUserName("");
        setEmail("") ;
        setPassword("");
        setPhone("");
        setConfirmPassword("");
    };
    const submit = (prev) => {
        prev.preventDefault();
        alert(`Tài Khoản của ${name} username: ${username}`);
    };   
  return (
    <>
        <form onSubmit={submit}>
            <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
            <input onChange={handleChangeName} type="text" placeholder="Enter your name" required/>
            <input onChange={handleChangeUserName} type="text" placeholder="Enter your username" required />
            <input onChange={handleChangeEmail} type="email" placeholder="enter your email" required/>
            <input onChange={handleChangePhone} type="tel" id="phone" name="phone" pattern="[0]{1}[0-9]{4}[0-9]{5}" placeholder="Enter your phone number" required /> 
            <input onChange={handleChangePassword} type="password" placeholder="Enter your password" required />
            <input onChange={handleChangeConfirmPassword} type="password" placeholder="Confirm your password" required />
            <br/>              
            <button>Submit</button>
        </form>
        
        <form>
            <button onClick={resetData}>Reset</button>
        </form>
            
    </>
   
  )
}

export default Form