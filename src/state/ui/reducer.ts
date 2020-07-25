import { INIT_CHECKOUT } from "../commerce/actions"

const initialState = {
  activeCheckout: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_CHECKOUT:
      return { ...state, activeCheckout: true }

    default:
      return state
  }
}
