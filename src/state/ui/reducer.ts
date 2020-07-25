import {
  INIT_CHECKOUT,
  FINISH_CHECKOUT,
  STOP_CHECKOUT,
} from "../commerce/actions"

const initialState = {
  activeCheckout: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_CHECKOUT:
      return { ...state, activeCheckout: true }
    case FINISH_CHECKOUT:
      return { ...state, activeCheckout: false }
    case STOP_CHECKOUT:
      return { ...state, activeCheckout: false }

    default:
      return state
  }
}
