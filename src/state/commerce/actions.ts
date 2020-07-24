import axios from "axios"
import URL from "../../utils/api"
export const ADD_TO_CART = "ADD_TO_CART"
export const INIT_CHECKOUT = "INIT_CHECKOUT"

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
    payload: { ...product },
  }
}

export const initiateCheckout = () => async (dispatch, getState) => {
  console.log("inside action initiating checkout")
  try {
    const orderDraft = await axios.post(
      `http://localhost:4000/orders`,
      { cart: getState().commerce.cart },
      {
        headers: {
          Authorization: "Bearer " + getState().session.tokens.idToken,
        },
      }
    )
    // console.log(orderDraft)
    return dispatch({
      type: INIT_CHECKOUT,
      payload: orderDraft.data,
    })
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
