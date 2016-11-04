import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import 'font-awesome/scss/font-awesome.scss'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import fooReducer from './reducers/index'
import './scss/entry.scss'

const store = createStore(
  fooReducer,
  applyMiddleware(thunk)
)

const App = () => {
  return (
    <h1>react-kit is working! <i className='fa fa-calendar'></i></h1>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
