import React, { useState } from 'react'
import Card from './Card';

const FormState = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("");
  return (
   
   //Card => {childern} => div {childer} /div
//    <Card>
    <form id="info-form">
        <div>
        <label htmlFor='full_name'>Full Name</label>
    <input type="text" id="full_name" value={name} onChange={(e)=>{
        setName(e.target.value);
    }}/>
    </div>
    <div>
    <label htmlFor='email'>Email</label>
    <input type="email" id="email" value={email} onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
    </div>
    <div>
    <label htmlFor='password'>Password</label>
    <input type="password" id="password" value={password} onChange={(e)=>{
        setPassword(e.target.value)
    }}/>
    </div>
    <div>
    <label htmlFor='password_confirmation'>Confirm Password</label>
    <input type="password" id="password_confirmation" value={confirm} onChange={(e)=>{
        setConfirm(e.target.value);
    }}/>
    </div>
    <button type="submit" onClick={(e)=>{
        e.preventDefault();
        console.log({name})
    }}>Submit</button>

   </form>
//    </Card>
   
  )
}

export default FormState