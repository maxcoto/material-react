import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers/index'
import defaultState from './state'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export { history }
export default store
