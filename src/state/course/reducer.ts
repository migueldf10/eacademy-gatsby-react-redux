import { SET_ACTIVE_COURSE } from "./actions"
const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_COURSE:
      return { ...payload }

    default:
      return state
  }
}
