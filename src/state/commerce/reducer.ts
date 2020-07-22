import { ADD_TO_CART } from "./actions"
const initialState = {
  cart: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] }

    default:
      return state
  }
}
