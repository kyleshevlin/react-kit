import React from 'react'
import { Provider } from 'react-redux'
import Routes from './Routes'
import store from '../store'

const Root = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default Root
