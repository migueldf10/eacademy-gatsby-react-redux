import { createStore as reduxCreateStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

const initialState = { count: 0 }
const reducer = (state = initialState, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const createStore = () => reduxCreateStore(reducer, composeWithDevTools())
export default createStore
