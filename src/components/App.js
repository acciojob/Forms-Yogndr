import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import FormRef from './FormRef'
import FormState from './FormState'
import Form from './Form'

const App = () => {
  return (
    <BrowserRouter>
    <div>
        <ul>
      <li> <Link id="form-link" to="/form">Form</Link></li>
       <li> <Link id="form-ref-link" to="/form-ref">FormRef</Link></li>
       <li> <Link id="form-state-link" to="/form-state">FormState</Link></li>
    </ul>
       <Routes>
        <Route path="/form" element={<Form/>}/> 
        <Route path="/form-ref" element={<FormRef/>}/>
        <Route path="/form-state" element={<FormState/>}/>
       </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
