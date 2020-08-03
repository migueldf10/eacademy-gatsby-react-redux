export const DISPLAY_CART = "DISPLAY_CART"
export const HIDE_CART = "HIDE_CART"

export const hideCart = () => ({
  type: HIDE_CART,
  payload: "",
})

export const showCart = () => ({
  type: DISPLAY_CART,
  payload: "",
})
