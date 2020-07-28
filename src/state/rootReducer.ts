import { combineReducers } from "redux"
import sessionReducer from "./session/reducer"
import commerceReducer from "./commerce/reducer"
import uiReducer from "./ui/reducer"
import courseReducer from "./course/reducer"
import lessonReducer from "./lesson/reducer"
const rootReducer = combineReducers({
  session: sessionReducer,
  commerce: commerceReducer,
  ui: uiReducer,
  course: courseReducer,
  lesson: lessonReducer,
})

export default rootReducer
