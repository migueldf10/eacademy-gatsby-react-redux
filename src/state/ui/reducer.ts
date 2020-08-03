import {
  INIT_CHECKOUT,
  FINISH_CHECKOUT,
  STOP_CHECKOUT,
  ADD_TO_CART,
} from "../commerce/actions"
import { DISPLAY_CART, HIDE_CART } from "./actions"
const initialState = {
  activeCheckout: false,
  displayCart: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, displayCart: true }
    case DISPLAY_CART:
      return { ...state, displayCart: true }
    case HIDE_CART:
      return { ...state, displayCart: false }
    case INIT_CHECKOUT:
      return { ...state, activeCheckout: true, displayCart: false }
    case FINISH_CHECKOUT:
      return { ...state, activeCheckout: false }
    case STOP_CHECKOUT:
      return { ...state, activeCheckout: false }

    default:
      return state
  }
}
