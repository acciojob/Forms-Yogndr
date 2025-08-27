import React, { useRef } from 'react'
import Card from './Card';

const FormRef = () => {
    const nameref=useRef();
    const mailref=useRef();
    const passwordref=useRef();
    const confirmref=useRef();

  return (
    //label
    <Card>
    <form id="info-form" onSubmit={(e)=>{
        e.preventDefault();
        console.log(nameref.current.value);
        console.log(mailref.current.value);
        console.log(passwordref.current.value);
        console.log(confirmref.current.value);
        alert("Running");
    }}>
        <div>
    <label htmlFor='full_name'>Full Name</label>
    <input type="text" id="full_name" ref={nameref}/>
    </div>
    <div>
    <label htmlFor='email'>Email</label>
    <input type="email" id="email" ref={mailref}/>
    </div>
    <div>
    <label htmlFor='password'>Password</label>
    <input type="password" id="password" ref={passwordref}/>
    </div>
    <div>
    <label htmlFor='password_confirmation'>Confirm Password</label>
    <input type="password" id="password_confirmation" ref={confirmref}/>
    </div>
    <button type="submit" >Submit</button>

   </form>
    </Card> 
   
  )
}

export default FormRef