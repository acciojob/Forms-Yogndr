import React, { useRef } from 'react'

const FormRef = () => {
    const nameref=useRef();
    const mailref=useRef();
    const passwordref=useRef();
    const confirmref=useRef();

  return (
    <div>
        <form id="info-form">
    <input type="text" id="full_name" ref={nameref}/>
    <input type="email" id="email" ref={mailref}/>
    <input type="password" id="password" ref={passwordref}/>
    <input type="password" id="password_confirmation" ref={confirmref}/>
    <button type="submit" onClick={(e)=>{
        e.preventDefault();
        // console.log(nameref.current.value);
    }}>Submit</button>

   </form>
    </div>
  )
}

export default FormRef