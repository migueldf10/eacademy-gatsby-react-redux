import { ADD_TO_CART, INIT_CHECKOUT } from "./actions"
const initialState = {
  cart: [],
  activeCheckout: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] }
    case INIT_CHECKOUT:
      return { ...state, activeCheckout: payload }

    default:
      return state
  }
}
