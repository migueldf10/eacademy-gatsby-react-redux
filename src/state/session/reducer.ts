import { START_SESSION, END_SESSION } from "./actions"

const initialState = {
  user: {},
  tokens: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_SESSION:
      return { ...payload }
    case END_SESSION:
      return {}

    default:
      return state
  }
}
