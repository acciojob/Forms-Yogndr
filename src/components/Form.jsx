import React from 'react'

const Form = () => {
  return (
    <div>
   <form id="info-form">
    <input type="text" id="full_name"/>
    <input type="email" id="email"/>
    <input type="password" id="password"/>
    <input type="password" id="password_confirmation"/>
    <button type="submit">Submit</button>

   </form>
        
    </div>
  )
}

export default Form