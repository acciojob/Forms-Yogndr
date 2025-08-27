import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import FormRef from './FormRef'
import FormState from './FormState'
import Form from './Form'

const App = () => {
  return (
    <BrowserRouter>
    <nav>
        <ul>
      <li> <Link id="form-link" to="/form">Form</Link></li>
       <li> <Link id="form-ref-link" to="/form-ref">FormRef</Link></li>
       <li> <Link id="form-state-link" to="/form-state">FormState</Link></li>
    </ul>
    </nav>
       <Switch>
       <Route path="/form" component={Form}/> 
        <Route path="/form-ref" component={FormRef}/>
        <Route path="/form-state" component={FormState}/>
       </Switch>

    
    </BrowserRouter>
  )
}

export default App
