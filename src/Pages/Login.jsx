import React,{useState} from "react";
import "./Login.css";


export const Login = () => {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email); 
  }


  return (
    <div class="login-box">
    <p>Log in</p>
    <form>
      <div class="user-box">
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Shtypni e-mail" id="email" name="email"></input>
        <label for='email'>Email</label>
      </div>
      <div class="user-box">
      <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Shtypni password-in" id="password" name="password"></input>
        <label for="password">Password</label>
      </div>
      <button class="btn" type="submit">Log in </button>
    </form>
    <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
  </div>
  );
};
