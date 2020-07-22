import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./rootReducer"
import ReduxThunk from "redux-thunk"

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
export default createStore
