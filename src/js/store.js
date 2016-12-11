import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerReducer } from 'react-router-redux'

import reducer from './reducers'

const reducerWithRouterReducer = combineReducers({
  reducer,
  routing: routerReducer
})

const store = createStore(
  reducerWithRouterReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
