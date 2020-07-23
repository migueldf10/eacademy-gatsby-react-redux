import { combineReducers } from "redux"
import sessionReducer from "./session/reducer"
import commerceReducer from "./commerce/reducer"

const rootReducer = combineReducers({
  session: sessionReducer,
  commerce: commerceReducer,
})

export default rootReducer
