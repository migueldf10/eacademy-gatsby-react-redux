export const ADD_TO_CART = "ADD_TO_CART"

export const testThunk = () => {
  return async (dispatch, getState) => {
    console.log(getState())
  }
}
