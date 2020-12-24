import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './user'
import message from './message'
import students from './students'
//{{expand}}
 
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  message,
  students,
  //{{expand}}
})
export default rootReducer