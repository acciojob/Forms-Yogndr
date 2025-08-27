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
      <li> <Link id="form-link" to="/Form">Form</Link></li>
       <li> <Link id="form-ref-link" to="/FormRef">FormRef</Link></li>
       <li> <Link id="form-state-link" to="/FormState">FormState</Link></li>
    </ul>
       <Routes>
        <Route path="/Form" element={<Form/>}/> 
        <Route path="/FormRef" element={<FormRef/>}/>
        <Route path="/FormState" element={<FormState/>}/>
       </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
