import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./rootReducer"
import thunkMiddleware from "redux-thunk"

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

const createStore = () => reduxCreateStore(rootReducer, composedEnhancers)
export default createStore
