import { START_USER_SESSION } from "./actions"

const initialState = {
  user: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_USER_SESSION:
      return { ...state, user: { ...payload } }

    default:
      return state
  }
}
