import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { TEST_ACTION_CREATOR } from '../actions'

const initialState = {
  testState: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION_CREATOR:
      return Object.assign({}, state, { testState: !state.testState })

    default:
      return state
  }
}

export default combineReducers({
  rootReducer,
  routing: routerReducer
})
