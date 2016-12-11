import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store'
import App from './App'

const history = syncHistoryWithStore(browserHistory, store)

const Routes = () => {
  return (
    <Router history={history}>
      <Route path='/' component={App} />
    </Router>
  )
}

export default Routes
