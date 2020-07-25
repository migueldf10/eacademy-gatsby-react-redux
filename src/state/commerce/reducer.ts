import {
  ADD_TO_CART,
  INIT_CHECKOUT,
  FINISH_CHECKOUT,
  STOP_CHECKOUT,
} from "./actions"

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
    case FINISH_CHECKOUT:
      return {
        ...state,
        activeCheckout: initialState.activeCheckout,
        cart: initialState.cart,
      }
    case STOP_CHECKOUT:
      return {
        ...state,
        activeCheckout: initialState.activeCheckout,
        cart: initialState.cart,
      }

    default:
      return state
  }
}
