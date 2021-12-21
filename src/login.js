import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";
import person2 from './localStorage';
import './login.css';
export function Login() {
  const [userName, setUser] = useState('');
  const [userPassword, setPassword] = useState('');
  const navigate = useNavigate();

  const onSuccess = () => {
    Swal.fire({
      title: "Login Successfully",
      text: "You have logged in succesfully!",
      icon: "success",
      button: "OK",
  });
  }
  const onFailure = () => {
    Swal.fire({
      title: "Invalid ",
      text: "Invalid username and password!",
      icon: "error",
      button: "OK",
  })
}

  function handleCurrentData(e) {
    setUser(e.target.value);
  }
  function handleCurrentPassword(e) {
    setPassword(e.target.value);
  }

  function submit1(e) {
    console.log("elknfklenflkefnlkflkekllllll");
    e.preventDefault()
    if(person2(userName,userPassword)){
      onSuccess();
      navigate('/list');
    }
    else{
      onFailure();
    }
    
  }



  return (
    
    <div className="form1">
      <h1 id="heading">Log in</h1>
        <form >
          <label className="email1" htmlFor="email">Username</label><br /><br />
          <input type="text" id="email" value={userName} onChange={handleCurrentData} name="email" placeholder="Enter username" required /><br /><br />

          <label className="email1" htmlFor="password">Password</label><br /><br />
          <input type="password" id="email" value={userPassword} onChange={handleCurrentPassword} name="password" placeholder="Enter password" required /><br /><br />
          <input className="signin" onClick={submit1} type="submit" defaultValue="Sign in" />
          
        </form>
      </div>
  )
}