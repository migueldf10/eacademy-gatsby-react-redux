import { START_USER_SESSION, END_USER_SESSION } from "./actions"

const initialState = {
  user: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_USER_SESSION:
      return { ...state, user: { ...payload } }
    case END_USER_SESSION:
      return { ...state, user: {} }

    default:
      return state
  }
}
