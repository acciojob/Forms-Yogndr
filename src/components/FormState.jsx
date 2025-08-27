import React, { useState } from 'react'

const FormState = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("");
  return (
    <div>
    <form id="info-form">
    <input type="text" id="full_name" onChange={(e)=>{
        setName(e.target.value);
    }}/>
    <input type="email" id="email" onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
    <input type="password" id="password" onChange={(e)=>{
        setPassword(e.target.value)
    }}/>
    <input type="password" id="password_confirmation" onChange={(e)=>{
        setConfirm(e.target.value);
    }}/>
    <button type="button" onClick={(e)=>{
        e.preventDefault();
        console.log({name})
    }}>Submit</button>

   </form>
    </div>
  )
}

export default FormState