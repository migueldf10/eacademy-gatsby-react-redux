import { SET_ACTIVE_LESSON } from "./actions"
const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_LESSON:
      return { ...payload }

    default:
      return state
  }
}
