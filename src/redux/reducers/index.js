import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'
import message from './message'
import students from './students'
//{{expand}}

const rootReducer = combineReducers({
  user,
  message,
  students,
  //{{expand}}
  routing: routerReducer
})

export default rootReducer
