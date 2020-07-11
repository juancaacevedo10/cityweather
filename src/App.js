import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Principal from './pages/principal'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Principal} />
      </Switch>
    </div>
  )
}

export default App
