import { combineReducers } from "redux"
import sessionReducer from "./session/reducer"
import commerceReducer from "./commerce/reducer"
import uiReducer from "./ui/reducer"

const rootReducer = combineReducers({
  session: sessionReducer,
  commerce: commerceReducer,
  ui: uiReducer,
})

export default rootReducer
