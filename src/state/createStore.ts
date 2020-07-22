import { createStore as reduxCreateStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./rootReducer"

const createStore = () => reduxCreateStore(rootReducer, composeWithDevTools())
export default createStore
