import axios from "axios"
import { getProfile, getToken } from "../../utils/auth"
export const START_SESSION = "START_SESSION"
export const END_SESSION = "END_SESSION"

export const setSession = () => {
  const user = getProfile()
  const tokens = getToken()
  return {
    type: START_SESSION,
    payload: { user, tokens },
  }
}

export const endSession = user => {
  return {
    type: END_SESSION,
    payload: user,
  }
}

export const testAuth = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("http://localhost:4000/authorized", {
        headers: {
          Authorization: "Bearer " + getState().session.tokens.idToken,
        },
      })
      console.log(response.data)
    } catch (e) {
      console.log("error", e)
    }
  }
}
