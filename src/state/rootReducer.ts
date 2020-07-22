import { combineReducers } from "redux"
import userReducer from "./user/reducer"
import commerceReducer from "./commerce/reducer"

const rootReducer = combineReducers({
  user: userReducer,
  commerce: commerceReducer,
})

export default rootReducer
