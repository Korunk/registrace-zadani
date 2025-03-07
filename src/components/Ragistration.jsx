
import React, {useState} from 'react';
import './style.css';

export const Registration = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
 })
const handleInputChange = (id, value) => {
  if(id === "email"){
     setUser({...user, email: value, username: value.slice(0,  value.search("@")) 
    })
      console.log(value)
 } 
  if(id === "userName") {
  setUser({...user, username: value})
   console.log(value)
  }
 
   if(id === "password"){
    setUser({...user, password: value});
    console.log(value)
  }
  if(id === "confirmPassword"){
    setUser({...user, passwordConfirm: value});
    console.log(value)
}}
const validPassword = () => {
  if (user.password === user.passwordConfirm) {
    console.log("Správné heslo.")
  }
  else {
    alert("Hesla se neshodují!")
  }
}
 const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    validPassword()
  }
  return (
  <div className='box'>
  <h1>REGISTRATION</h1>
  
  <div className='form-box'>
  <form className='form' onSubmit={handleSubmit}>
    <input 
    type= "email" 
    name= "email" 
    id= "email" 
    placeholder="Email Address" 
    value={user.email} 
    onChange= {(e) => handleInputChange("email", e.target.value)}></input>

    <input 
    type= "text" 
    name="userName" 
    id="userName" 
    placeholder="User Name" 
    value={user.username} 
    onChange={(e) => handleInputChange("userName", e.target.value
    )}></input>

    <input 
    type= "password" 
    name="password" 
    id="password" 
    placeholder="Password" 
    value={user.password} 
    onChange={(e) => handleInputChange("password", e.target.value)}></input>

    <input 
    type= "password" 
    name="confirmPassword" 
    id="confirmPassword"
    placeholder="Confirm Password"
    value={user.passwordConfirm}
    onChange={(e) => handleInputChange("confirmPassword", e.target.value)
    }></input>

    <button type="submit" className='press-btn'>REGISTER</button>
  </form>
  </div>
  </div>
  )
}