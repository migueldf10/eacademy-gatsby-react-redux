import buildAxios from "../../utils/api"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const INIT_CHECKOUT = "INIT_CHECKOUT"
export const FINISH_CHECKOUT = "FINISH_CHECKOUT"
export const STOP_CHECKOUT = "STOP_CHECKOUT"

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
    payload: { ...product },
  }
}
export const removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  }
}

export const initiateCheckout = () => async (dispatch, getState) => {
  console.log("inside action initiating checkout")
  try {
    const orderDraft = await buildAxios(
      getState().session.tokens.idToken
    ).post(`/orders`, { cart: getState().commerce.cart })

    return dispatch({
      type: INIT_CHECKOUT,
      payload: orderDraft.data,
    })
  } catch (e) {
    console.log("error", e)
  }
}

export const finishCheckout = id => async (dispatch, getState) => {
  console.log("inside finishing the checkout")
  try {
    const orderFinished = await buildAxios(
      getState().session.tokens.idToken
    ).put(`/orders/success`, { id })

    dispatch({ type: FINISH_CHECKOUT, payload: {} })

    console.log(orderFinished)
  } catch (e) {
    console.log("error", e)
  }
}

export const stopCheckout = () => async (dispatch, getState) => {
  console.log("inside finishing the checkout")
  try {
    dispatch({ type: STOP_CHECKOUT, payload: {} })
  } catch (e) {
    console.log("error", e)
  }
}

// export const fillInData = () => async (dispatch, getState) => {
//   console.log("inside action initiating checkout")
//   try {
//     const orderDraft = await axios.post(
//       `http://localhost:4000/orders`,
//       { cart: getState().commerce.cart },
//       {
//         headers: {
//           Authorization: "Bearer " + getState().session.tokens.idToken,
//         },
//       }
//     )
//     console.log(orderDraft)
//   } catch (e) {
//     console.log("error", e)
//   }
// }
