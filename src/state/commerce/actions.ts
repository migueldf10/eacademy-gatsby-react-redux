export const ADD_TO_CART = "ADD_TO_CART"

export const testThunk = () => {
  return async (dispatch, getState) => {
    console.log(getState())
  }
}

export const addToCart = product => {
  console.log("HEEEY YOU WANT TO BUY!")

  window.dataLayer.push({
    event: "add_to_cart",
    formLocation: "course_template",
    productId: product.id,
    productTitle: product.title,
    price: product.price,
  })

  return {
    type: ADD_TO_CART,
    payload: { product },
  }
}
