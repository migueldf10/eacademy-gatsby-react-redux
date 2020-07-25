import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
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

    case REMOVE_FROM_CART:
      const newCart = state.cart.filter(product => product.id !== payload)
      return { ...state, cart: newCart }

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
      }

    default:
      return state
  }
}
