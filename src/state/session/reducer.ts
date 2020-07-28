import { START_SESSION, END_SESSION, FILL_PROFILE } from "./actions"

const initialState = {
  user: {},
  tokens: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_SESSION:
      return { ...payload }
    case FILL_PROFILE:
      console.log(payload)
      return { ...state }
    case END_SESSION:
      return {}

    default:
      return state
  }
}
