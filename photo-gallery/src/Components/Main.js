import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Gallery from './Gallery'
import Social from './Social'
import './main.css';

const Main = () => (
  <main>
    <Switch>
      <Route path='/Feed' component={Gallery}/>
      <Route path='/Journals' component={Gallery}/>
      <Route path='/Social' component={Social}/>
      <Route path='/Portraits' component={Gallery}/>
    </Switch>
  </main>
)

export default Main
